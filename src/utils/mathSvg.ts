/**
 * Pure Vector Math SVG & PNG Generator using MathJax
 * Converts any LaTeX string directly into standalone, vector SVG with embedded path glyphs,
 * and high-resolution PNG data URLs for jsPDF export.
 * 100% self-contained: No external CSS, no web fonts, no CORS dependencies.
 */

import { mathjax } from 'mathjax-full/js/mathjax.js';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { SVG } from 'mathjax-full/js/output/svg.js';
import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html.js';

// Explicitly register foundational TeX configurations
import 'mathjax-full/js/input/tex/base/BaseConfiguration.js';
import 'mathjax-full/js/input/tex/ams/AmsConfiguration.js';
import 'mathjax-full/js/input/tex/textmacros/TextMacrosConfiguration.js';

let htmlDoc: any = null;
let adaptorInstance: any = null;

function getMathJax() {
  if (!htmlDoc) {
    adaptorInstance = liteAdaptor();
    RegisterHTMLHandler(adaptorInstance);
    const tex = new TeX({ packages: ['base', 'ams', 'textmacros'] });
    const svg = new SVG({ fontCache: 'none' });
    htmlDoc = mathjax.document('', { InputJax: tex, OutputJax: svg });
  }
  return { htmlDoc, adaptor: adaptorInstance };
}

/**
 * Converts a LaTeX equation into a pure SVG string with embedded vector paths
 */
export function latexToSvg(rawLatex: string, display = true): string {
  try {
    let clean = (rawLatex || '').trim();
    if (!clean) return '';

    // Strip trailing punctuation outside math
    clean = clean.replace(/[\.,;:!\)]+$/, '').trim();
    if (clean.startsWith('(') && clean.endsWith(')')) {
      clean = clean.slice(1, -1).trim();
    }

    // Extract math if wrapped in $$ or $
    const dollarMatch = clean.match(/^\$\$([\s\S]+)\$\$$/) || clean.match(/^\$([\s\S]+)\$$/);
    if (dollarMatch) {
      clean = dollarMatch[1].trim();
    } else {
      // If there's an embedded $...$ inside text, extract it
      const innerMatch = clean.match(/\$\$([^\$]+)\$\$/) || clean.match(/\$([^\$]+)\$/);
      if (innerMatch && innerMatch[1]) {
        clean = innerMatch[1].trim();
      }
    }

    // Escape unescaped % so it doesn't comment out subsequent characters in TeX
    clean = clean.replace(/(?<!\\)%/g, '\\%');

    if (!clean) return '';

    const { htmlDoc, adaptor } = getMathJax();
    const node = htmlDoc.convert(clean, { display });
    let svgString = adaptor.innerHTML(node);

    // If conversion resulted in an error or empty string, return empty
    if (!svgString || svgString.includes('data-mjx-error') || svgString.includes('<merror>')) {
      return '';
    }

    // Ensure standard SVG attributes
    if (!svgString.includes('xmlns=')) {
      svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }

    // Replace ex-based dimensions with explicit pixel dimensions for universal canvas compatibility
    const viewBoxMatch = svgString.match(/viewBox="([^"]+)"/);
    if (viewBoxMatch) {
      const parts = viewBoxMatch[1].split(/\s+/).map(Number);
      if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
        const aspect = parts[2] / parts[3];
        const heightPx = display ? 140 : 80;
        const widthPx = Math.round(heightPx * aspect);
        svgString = svgString
          .replace(/width="[^"]+"/, `width="${widthPx}"`)
          .replace(/height="[^"]+"/, `height="${heightPx}"`);
      }
    }

    // Merge style without creating duplicate style attributes (which invalidates XML)
    if (svgString.includes('style="')) {
      svgString = svgString.replace(/style="([^"]*)"/, 'style="$1; color:#0f172a; fill:#0f172a;"');
    } else {
      svgString = svgString.replace('<svg', '<svg style="color:#0f172a; fill:#0f172a;"');
    }

    // Inject embedded CSS to force all glyph paths, fraction rects, and text to crisp dark slate
    const styleTag = '<style>path, text, rect, use { fill: #0f172a !important; color: #0f172a !important; stroke: none; } rect { stroke: none !important; }</style>';
    svgString = svgString.replace(/<svg([^>]*)>/, `<svg$1>${styleTag}`);

    return svgString;
  } catch (err) {
    console.warn('MathJax TeX conversion error:', err);
    return '';
  }
}

// In-memory cache for fast repeated formula export
const mathPngCache = new Map<string, { dataUrl: string; widthMm: number; heightMm: number }>();

/**
 * Converts a LaTeX equation directly into a high-DPI PNG data URL using an offscreen canvas.
 * Perfectly sized for jsPDF doc.addImage(dataUrl, 'PNG', x, y, widthMm, heightMm).
 */
export async function latexToPngDataUrl(
  rawLatex: string,
  maxWidthMm = 160,
  display = true
): Promise<{ dataUrl: string; widthMm: number; heightMm: number } | null> {
  const trimmed = (rawLatex || '').trim();
  if (!trimmed) return null;

  const cacheKey = `${trimmed}_${maxWidthMm}_${display}`;
  if (mathPngCache.has(cacheKey)) {
    return mathPngCache.get(cacheKey)!;
  }

  const svgString = latexToSvg(trimmed, display);
  if (!svgString) return null;

  return new Promise((resolve) => {
    try {
      // Parse SVG viewBox
      const viewBoxMatch = svgString.match(/viewBox="([^"]+)"/);
      let aspect = 4;
      let viewBoxHeight = 1200;
      if (viewBoxMatch) {
        const parts = viewBoxMatch[1].split(/\s+/).map(Number);
        if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
          aspect = parts[2] / parts[3];
          viewBoxHeight = parts[3];
        }
      }

      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();

      img.onload = () => {
        try {
          // Calculate realistic mm height in PDF proportional to standard 9pt textbook typography (7mm - 13mm)
          let heightMm = Math.max(7, Math.min(13, (viewBoxHeight / 1150) * (display ? 7.2 : 5.2)));
          let widthMm = heightMm * aspect;

          const effectiveMaxW = Math.min(maxWidthMm, 140);
          if (widthMm > effectiveMaxW) {
            const scale = effectiveMaxW / widthMm;
            widthMm = effectiveMaxW;
            heightMm = heightMm * scale;
          }

          // Sample canvas at 300 DPI for ultra-sharp vector-like rendering in PDF
          // 1 mm = ~11.81 pixels at 300 DPI
          const canvasWidth = Math.max(100, Math.round(widthMm * 11.81));
          const canvasHeight = Math.max(40, Math.round(heightMm * 11.81));

          const canvas = document.createElement('canvas');
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;

          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
            const dataUrl = canvas.toDataURL('image/png');

            URL.revokeObjectURL(url);
            const result = { dataUrl, widthMm, heightMm };
            mathPngCache.set(cacheKey, result);
            resolve(result);
            return;
          }
        } catch (e) {
          console.warn('Canvas draw failed for math SVG:', e);
        }
        URL.revokeObjectURL(url);
        resolve(null);
      };

      img.onerror = (e) => {
        console.warn('Image load failed for math SVG:', e);
        URL.revokeObjectURL(url);
        resolve(null);
      };

      img.src = url;
    } catch {
      resolve(null);
    }
  });
}
