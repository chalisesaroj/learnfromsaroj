/**
 * Pure Vector Math SVG & PNG Generator using MathJax
 * Converts any LaTeX string directly into standalone, vector SVG with embedded path glyphs,
 * and high-resolution PNG data URLs for jsPDF and PptxGenJS export.
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

export interface MathSvgResult {
  svg: string;
  aspect: number;
  viewBoxWidth: number;
  viewBoxHeight: number;
}

/**
 * Converts a LaTeX equation into a pure SVG string with embedded vector paths and explicit dimensions.
 */
export function latexToSvgWithMetrics(
  rawLatex: string,
  display = true,
  colorHex = '#0f172a',
  targetPixelHeight?: number
): MathSvgResult | null {
  try {
    let clean = (rawLatex || '').trim();
    if (!clean) return null;

    // Strip trailing punctuation outside math
    clean = clean.replace(/[\.,;:!]+$/, '').trim();
    if (clean.startsWith('(') && clean.endsWith(')') && !clean.includes('\\left(')) {
      clean = clean.slice(1, -1).trim();
    }

    // Extract math if wrapped in $$ or $
    const dollarMatch = clean.match(/^\$\$([\s\S]+)\$\$$/) || clean.match(/^\$([\s\S]+)\$$/);
    if (dollarMatch) {
      clean = dollarMatch[1].trim();
    } else {
      const innerMatch = clean.match(/\$\$([^\$]+)\$\$/) || clean.match(/\$([^\$]+)\$/);
      if (innerMatch && innerMatch[1]) {
        clean = innerMatch[1].trim();
      }
    }

    // Escape unescaped % so it doesn't comment out subsequent characters in TeX
    clean = clean.replace(/(?<!\\)%/g, '\\%');

    if (!clean) return null;

    const { htmlDoc, adaptor } = getMathJax();
    const node = htmlDoc.convert(clean, { display });
    let svgString = adaptor.innerHTML(node);

    // Unwrap <mjx-container> if present
    svgString = svgString.replace(/<mjx-container[^>]*>/g, '').replace(/<\/mjx-container>/g, '');

    if (!svgString || svgString.includes('data-mjx-error') || svgString.includes('<merror>')) {
      return null;
    }

    if (!svgString.includes('xmlns=')) {
      svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }

    let aspect = 4;
    let viewBoxWidth = 4000;
    let viewBoxHeight = 1000;
    const viewBoxMatch = svgString.match(/viewBox="([^"]+)"/);
    if (viewBoxMatch) {
      const parts = viewBoxMatch[1].split(/\s+/).map(Number);
      if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
        viewBoxWidth = parts[2];
        viewBoxHeight = parts[3];
        aspect = parts[2] / parts[3];
        const heightPx = targetPixelHeight || (display ? 240 : 140);
        const widthPx = Math.max(20, Math.round(heightPx * aspect));
        svgString = svgString
          .replace(/width="[^"]+"/, `width="${widthPx}"`)
          .replace(/height="[^"]+"/, `height="${heightPx}"`);
      }
    }

    // Replace currentColor directly for universal SVG rasterizer compatibility (Canvas + Resvg)
    svgString = svgString.replace(/currentColor/g, colorHex);

    if (svgString.includes('style="')) {
      svgString = svgString.replace(/style="([^"]*)"/, `style="$1; color:${colorHex}; fill:${colorHex};"`);
    } else {
      svgString = svgString.replace('<svg', `<svg style="color:${colorHex}; fill:${colorHex};"`);
    }

    const styleTag = `<style>path, text, rect, use { fill: ${colorHex} !important; color: ${colorHex} !important; stroke: none; } rect { stroke: none !important; }</style>`;
    svgString = svgString.replace(/<svg([^>]*)>/, `<svg$1>${styleTag}`);

    return { svg: svgString, aspect, viewBoxWidth, viewBoxHeight };
  } catch (err) {
    console.warn('MathJax TeX conversion error:', err);
    return null;
  }
}

/**
 * Converts a LaTeX equation into a pure SVG string with embedded vector paths
 */
export function latexToSvg(rawLatex: string, display = true, colorHex = '#0f172a'): string {
  return latexToSvgWithMetrics(rawLatex, display, colorHex)?.svg || '';
}

// In-memory cache for fast repeated formula export
const mathPngCache = new Map<string, { dataUrl: string; widthMm: number; heightMm: number }>();
const mathTransparentPngCache = new Map<string, { data: string; aspect: number }>();

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

  const metrics = latexToSvgWithMetrics(trimmed, display, '#0f172a', display ? 200 : 120);
  if (!metrics) return null;

  return new Promise((resolve) => {
    try {
      const { svg: svgString, aspect, viewBoxHeight } = metrics;
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();

      img.onload = () => {
        try {
          let heightMm = Math.max(4.5, Math.min(7.8, (viewBoxHeight * 3.6) / 700));
          let widthMm = heightMm * aspect;

          const effectiveMaxW = Math.min(maxWidthMm, 115);
          if (widthMm > effectiveMaxW) {
            const scale = effectiveMaxW / widthMm;
            widthMm = effectiveMaxW;
            heightMm = heightMm * scale;
          }

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

/**
 * Converts any LaTeX formula into a crisp transparent-background high-DPI PNG data URI
 * in the browser for embedding into PowerPoint (.pptx) slides.
 */
export async function latexToTransparentPngBrowser(
  rawLatex: string,
  display = true,
  colorHex = '#172B45',
  targetHeightPx = 320
): Promise<{ data: string; aspect: number; viewBoxHeight: number } | null> {
  const trimmed = (rawLatex || '').trim();
  if (!trimmed || typeof window === 'undefined') return null;

  const cacheKey = `${trimmed}_${display}_${colorHex}_${targetHeightPx}`;
  if (mathTransparentPngCache.has(cacheKey)) {
    const cached = mathTransparentPngCache.get(cacheKey)!;
    const metrics = latexToSvgWithMetrics(trimmed, display, colorHex, targetHeightPx);
    return { ...cached, viewBoxHeight: metrics?.viewBoxHeight || 1200 };
  }

  const metrics = latexToSvgWithMetrics(trimmed, display, colorHex, targetHeightPx);
  if (!metrics) return null;

  return new Promise((resolve) => {
    try {
      const { svg: svgString, aspect, viewBoxHeight } = metrics;
      const canvasHeight = Math.max(80, Math.min(600, Math.round(targetHeightPx)));
      const canvasWidth = Math.max(80, Math.min(3600, Math.round(canvasHeight * aspect)));

      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();

      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
            const data = canvas.toDataURL('image/png');
            URL.revokeObjectURL(url);
            const res = { data, aspect, viewBoxHeight };
            mathTransparentPngCache.set(cacheKey, { data, aspect });
            resolve(res);
            return;
          }
        } catch (e) {
          console.warn('Browser math PNG rasterization error:', e);
        }
        URL.revokeObjectURL(url);
        resolve(null);
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(null);
      };

      img.src = url;
    } catch {
      resolve(null);
    }
  });
}
