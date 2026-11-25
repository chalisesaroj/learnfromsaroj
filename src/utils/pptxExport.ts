/**
 * PowerPoint (.pptx) Presentation Generator for Engineering Course Decks
 * Publication-grade visual and mathematical support:
 * - True LaTeX mathematical equation rendering via MathJax -> crisp high-DPI PNG
 * - High-resolution vector SVG diagrams (up to 2880px / 2560px) & macro technical photos
 * - Structured 3-column symbol definitions and step-by-step worked numerical cards
 * - Native PowerPoint speaker notes and course metadata
 *
 * Author Attribution: Er. Saroj Chalise
 * BE Mechanical (IOE Pulchowk, 2014) | ME Mechanical (IOE Pulchowk, 2019)
 * Course: MEC 232 · Instrumentation and Measurement · Pokhara University
 */

import pptxgen from 'pptxgenjs';
import { ChapterConfig } from '../data/chaptersData';
import { SlideData, FormulaSymbolItem } from '../types/chapterDeck';
import { latexToTransparentPngBrowser } from './mathSvg';
import { resolvePublicAssetUrl } from './assetUrl';

export interface MathPngResult {
  data: string;
  aspect: number;
  viewBoxHeight?: number;
}

export interface PptxExportOptions {
  includeNotes?: boolean;
  onProgress?: (current: number, total: number, status: string) => void;
  resolveImage?: (rawPath: string) => Promise<{ path?: string; data?: string }> | { path?: string; data?: string };
  svgToPng?: (svg: string) => Promise<string> | string;
  mathToPng?: (latex: string, display?: boolean, colorHex?: string) => Promise<MathPngResult | null> | MathPngResult | null;
}

/**
 * Encodes SVG string to Base64 data URI universally across Node and Browser
 */
function svgToBase64(svg: string): string {
  if (!svg) return '';
  let cleaned = svg.trim();
  if (!cleaned.includes('xmlns=')) {
    cleaned = cleaned.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (typeof Buffer !== 'undefined') {
    return 'data:image/svg+xml;base64,' + Buffer.from(cleaned).toString('base64');
  } else if (typeof btoa !== 'undefined') {
    return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(cleaned)));
  }
  return '';
}

/**
 * Converts an SVG string into a genuine high-resolution PNG data URI in the browser (2560 x 1440 QHD)
 */
export async function svgToPngDataUrlBrowser(svg: string, width = 2560, height = 1440): Promise<string> {
  if (!svg || typeof window === 'undefined') return '';
  return new Promise((resolve) => {
    try {
      let cleaned = svg.trim();
      if (!cleaned.includes('xmlns=')) {
        cleaned = cleaned.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
      }
      if (!/width=/.test(cleaned) || !/height=/.test(cleaned)) {
        cleaned = cleaned.replace('<svg', `<svg width="${width}" height="${height}"`);
      }
      const blob = new Blob([cleaned], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const dataUrl = canvas.toDataURL('image/png');
            URL.revokeObjectURL(url);
            resolve(dataUrl);
            return;
          }
        } catch (err) {
          console.warn('Canvas rasterization error:', err);
        }
        URL.revokeObjectURL(url);
        resolve('');
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve('');
      };
      img.src = url;
    } catch {
      resolve('');
    }
  });
}

/**
 * Browser image resolver: fetches relative or local image URLs and converts them to base64
 */
async function browserImageResolver(rawPath: string): Promise<{ data?: string; path?: string }> {
  if (!rawPath) return {};
  if (rawPath.startsWith('data:')) return { data: rawPath };
  const resolved = resolvePublicAssetUrl(rawPath);
  if (typeof window !== 'undefined') {
    try {
      const res = await fetch(resolved);
      if (res.ok) {
        const blob = await res.blob();
        const base64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = () => resolve('');
          reader.readAsDataURL(blob);
        });
        if (base64) return { data: base64 };
      }
    } catch (e) {
      console.warn('Could not fetch browser image as base64', resolved, e);
    }
  }
  return { path: resolved };
}

/**
 * Resolves image paths across Node.js (converts local /assets to base64 or absolute path)
 */
function resolveImageSource(rawPath: string): { path?: string; data?: string } {
  if (!rawPath) return {};
  if (rawPath.startsWith('data:')) {
    return { data: rawPath };
  }
  if (typeof window === 'undefined') {
    try {
      const fs = (globalThis as any).process?.mainModule?.require
        ? (globalThis as any).process.mainModule.require('fs')
        : null;
      const pathModule = (globalThis as any).process?.mainModule?.require
        ? (globalThis as any).process.mainModule.require('path')
        : null;

      if (fs && pathModule) {
        let clean = rawPath.startsWith('/') ? rawPath.slice(1) : rawPath;
        let full = pathModule.resolve('public', clean);
        if (!fs.existsSync(full)) {
          full = pathModule.resolve(clean);
        }
        if (fs.existsSync(full)) {
          const ext = pathModule.extname(full).toLowerCase().replace('.', '');
          const mime = ext === 'png' ? 'image/png' : ext === 'svg' ? 'image/svg+xml' : 'image/jpeg';
          const b64 = fs.readFileSync(full).toString('base64');
          return { data: `data:${mime};base64,${b64}` };
        }
      }
    } catch {
      // Fallback
    }
  }
  return { path: rawPath };
}

const SUBSCRIPT_MAP: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
  'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
  'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ',
  'v': 'ᵥ', 'x': 'ₓ'
};

const SUPERSCRIPT_MAP: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  'n': 'ⁿ', 'i': 'ⁱ'
};

function toUnicodeSub(str: string): string {
  const chars = str.split('');
  if (chars.every((c) => SUBSCRIPT_MAP[c])) {
    return chars.map((c) => SUBSCRIPT_MAP[c]).join('');
  }
  return '_' + str;
}

function toUnicodeSup(str: string): string {
  const chars = str.split('');
  if (chars.every((c) => SUPERSCRIPT_MAP[c])) {
    return chars.map((c) => SUPERSCRIPT_MAP[c]).join('');
  }
  return '^' + str;
}

/**
 * Formats raw LaTeX equations into clean, professional mathematical unicode notation (used for inline bullet prose & fallback)
 */
export function formatMathFormula(latex: string): string {
  if (!latex) return '';
  let out = latex
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/($2)')
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/($2)')
    .replace(/\\sqrt\{([^{}]+)\}/g, '√($1)')
    .replace(/\\bar\{([^{}]+)\}/g, '$1̄')
    .replace(/\\hat\{([^{}]+)\}/g, '$1̂')
    .replace(/\\partial/g, '∂')
    .replace(/\\sum_\{([^}]+)\}\^\{([^}]+)\}/g, '∑($1 to $2)')
    .replace(/\\sum_\{([^}]+)\}/g, '∑($1)')
    .replace(/\\sum/g, '∑')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\mu\\epsilon/g, 'με')
    .replace(/\\epsilon/g, 'ε')
    .replace(/\\mu/g, 'μ')
    .replace(/\\sigma/g, 'σ')
    .replace(/\\rho/g, 'ρ')
    .replace(/\\tau/g, 'τ')
    .replace(/\\nu/g, 'ν')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\theta/g, 'θ')
    .replace(/\\omega/g, 'ω')
    .replace(/\\pi/g, 'π')
    .replace(/\\phi/g, 'ϕ')
    .replace(/\^\\circ/g, '°')
    .replace(/\\circ/g, '°')
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/\\left\[/g, '[')
    .replace(/\\right\]/g, ']')
    .replace(/\\left\|/g, '|')
    .replace(/\\right\|/g, '|')
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\\pm/g, '±')
    .replace(/\\approx/g, '≈')
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\ne/g, '≠')
    .replace(/\\infty/g, '∞')
    .replace(/\\implies/g, '  ⇒  ')
    .replace(/\\Longleftrightarrow/g, '  ⟺  ')
    .replace(/\\xrightarrow\{([^}]+)\}/g, '  ──[$1]──>  ')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\mathbf\{([^}]+)\}/g, '$1')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    .replace(/\\quad/g, '   ')
    .replace(/\\qquad/g, '    ')
    .replace(/\\;/g, ' ')
    .replace(/\\,/g, ' ')
    .replace(/\\!/g, '')
    .replace(/\\%/g, '%')
    .replace(/\\\\/g, '\n');

  out = out
    .replace(/_\{([^{}]+)\}/g, (_, g) => toUnicodeSub(g))
    .replace(/_([a-zA-Z0-9])/g, (_, g) => toUnicodeSub(g))
    .replace(/\^\{([^{}]+)\}/g, (_, g) => toUnicodeSup(g))
    .replace(/\^([0-9ni+-])/g, (_, g) => toUnicodeSup(g))
    .replace(/[\${}]/g, '')
    .trim();

  return out;
}

/**
 * Clean markdown formatting for general text strings
 */
function cleanText(raw: string): string {
  if (!raw) return '';
  return formatMathFormula(
    raw
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
  );
}

/**
 * Breaks a bullet with **Lead-in:** into lead-in and body for bold formatting
 */
function parseBulletParts(bullet: string): { lead: string; body: string } {
  const match = bullet.match(/^\*\*(.*?)\*\*\s*(.*)$/);
  if (match) {
    return { lead: cleanText(match[1]), body: cleanText(match[2]) };
  }
  return { lead: '', body: cleanText(bullet) };
}

/**
 * Helper to place a MathJax-rendered PNG equation neatly centered or left-aligned inside a target bounding box.
 * Returns true if placed as crisp image, false if fallback text is needed.
 */
async function addMathImageToSlide(
  slide: any,
  latex: string,
  box: { x: number; y: number; w: number; h: number; align?: 'center' | 'left'; colorHex?: string; display?: boolean; maxHeightInches?: number },
  mathRenderer: ((latex: string, display?: boolean, colorHex?: string) => Promise<MathPngResult | null> | MathPngResult | null) | null
): Promise<boolean> {
  if (!latex || !mathRenderer) return false;
  try {
    const rendered = await mathRenderer(latex, box.display ?? true, box.colorHex ?? '#172B45');
    if (!rendered || !rendered.data || !rendered.aspect) return false;

    // Base natural height calibrated to viewBoxHeight so small formulas don't blow up huge while tall fractions remain crisp
    const vbH = rendered.viewBoxHeight || 1200;
    const baseNaturalH = Math.max(0.24, Math.min(box.h, (vbH / 1600) * 0.44));
    let targetH = box.maxHeightInches ? Math.min(baseNaturalH, box.maxHeightInches) : baseNaturalH;
    // For primary equations inside generous boxes, boost scale slightly for classroom readability
    if (box.h >= 0.6) {
      targetH = Math.min(box.h * 0.88, Math.max(0.32, (vbH / 1600) * 0.56));
    }

    let targetW = targetH * rendered.aspect;
    if (targetW > box.w) {
      const ratio = box.w / targetW;
      targetW = box.w;
      targetH = targetH * ratio;
    }

    const posX = box.align === 'left' ? box.x : box.x + (box.w - targetW) / 2;
    const posY = box.y + (box.h - targetH) / 2;

    slide.addImage({
      data: rendered.data,
      x: posX,
      y: posY,
      w: targetW,
      h: targetH
    });
    return true;
  } catch (err) {
    console.warn('Math image render fallback triggered:', err);
    return false;
  }
}

/**
 * Exports any chapter configuration into a PowerPoint (.pptx) file
 */
export async function exportChapterToPptx(
  chapter: ChapterConfig,
  options: PptxExportOptions = {}
): Promise<Blob | Buffer | void> {
  const { includeNotes = true, onProgress, resolveImage, svgToPng, mathToPng } = options;
  const imageResolver = resolveImage || (typeof window !== 'undefined' ? browserImageResolver : resolveImageSource);
  const svgRasterizer = svgToPng || (typeof window !== 'undefined' ? svgToPngDataUrlBrowser : null);
  const mathRasterizer =
    mathToPng ||
    (typeof window !== 'undefined'
      ? (latex: string, display = true, colorHex = '#172B45') =>
          latexToTransparentPngBrowser(latex, display, colorHex, 340)
      : null);

  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9'; // 16:9 Widescreen (10 x 5.625 inches)
  pptx.author = 'Er. Saroj Chalise';
  pptx.company = 'Pokhara University / IOE Pulchowk';
  pptx.subject = 'MEC 232: Instrumentation and Measurement';
  pptx.title = `${chapter.unitNumber}: ${chapter.title}`;

  const slides = chapter.slides || [];
  const figures = chapter.figures || {};
  const total = slides.length;

  // Global Design System Palette
  const C_DARK_BG = '101B2A';
  const C_LIGHT_BG = 'F8FAFC';
  const C_WHITE = 'FFFFFF';
  const C_NAVY = '172B45';
  const C_SLATE = '334155';
  const C_MUTED = '64748B';
  const C_TEAL = '147D8B';
  const C_AMBER = 'D97706';
  const C_BORDER = 'E2E8F0';

  for (let i = 0; i < slides.length; i++) {
    const s: SlideData = slides[i];
    if (onProgress) {
      onProgress(i + 1, total, `Generating slide ${i + 1} of ${total}: ${s.title.slice(0, 30)}...`);
    }

    const isDark = s.type === 'title' || s.type === 'section-divider';
    const slide = pptx.addSlide();
    slide.background = { color: isDark ? C_DARK_BG : C_LIGHT_BG };

    // Native PowerPoint Speaker Notes
    if (includeNotes && s.speakerNotes) {
      let notesText = cleanText(s.speakerNotes);
      if (s.takeaway) {
        notesText += `\n\n[CORE TAKEAWAY]: ${cleanText(s.takeaway)}`;
      }
      slide.addNotes(notesText);
    }

    // Common Footer (Every slide except Title)
    if (s.type !== 'title') {
      slide.addText(
        [
          { text: `${chapter.unitNumber} · MEC 232 · Er. Saroj Chalise`, options: { bold: true, color: isDark ? '64748B' : '94A3B8' } },
          { text: `   |   Slide ${i + 1} of ${total}`, options: { color: isDark ? '475569' : '94A3B8' } }
        ],
        {
          x: 0.8,
          y: 5.2,
          w: 8.4,
          h: 0.35,
          fontSize: 9,
          fontFace: 'Arial',
          align: 'left'
        }
      );
    }

    // -------------------------------------------------------------------------
    // 1. TITLE SLIDE
    // -------------------------------------------------------------------------
    if (s.type === 'title') {
      slide.addText(
        `POKHARA UNIVERSITY  ·  BE MECHANICAL  ·  COURSE CODE: MEC 232`,
        {
          x: 0.8,
          y: 0.7,
          w: 8.4,
          h: 0.4,
          fontSize: 11,
          fontFace: 'Arial',
          color: '38BDF8',
          bold: true
        }
      );

      const hasTitleImg = !!s.imageUrl;
      const titleW = hasTitleImg ? 5.2 : 8.4;

      slide.addText(cleanText(s.title), {
        x: 0.8,
        y: 1.15,
        w: titleW,
        h: 1.1,
        fontSize: hasTitleImg ? 26 : 32,
        fontFace: 'Arial',
        color: C_WHITE,
        bold: true
      });

      if (s.subtitle) {
        slide.addText(cleanText(s.subtitle), {
          x: 0.8,
          y: 2.25,
          w: titleW,
          h: 0.6,
          fontSize: hasTitleImg ? 12.5 : 15,
          fontFace: 'Arial',
          color: 'FCD34D'
        });
      }

      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: 2.95,
        w: titleW,
        h: 2.05,
        fill: { color: '172436' },
        line: { color: '2D4363', width: 1 },
        rectRadius: 0.08
      });

      slide.addText(
        [
          { text: 'Instructor:\n', options: { fontSize: 9.5, color: '94A3B8', bold: true } },
          { text: 'Er. Saroj Chalise\n', options: { fontSize: 15, color: C_WHITE, bold: true } },
          { text: 'BE Mechanical (IOE Pulchowk, 2014)  ·  ME Mechanical (IOE Pulchowk, 2019)\n', options: { fontSize: 10.5, color: 'E2E8F0' } },
          { text: '10+ Years in Hydropower Machinery, Automotive Testing & Engineering Pedagogy\n\n', options: { fontSize: 9.5, color: 'CBD5E1' } },
          { text: 'Course Specification:\n', options: { fontSize: 9.5, color: '38BDF8', bold: true } },
          { text: 'MEC 232 (3-1-1) · 3 Credits · 45 Hours · Full Marks: 100 · Pass Marks: 45\nNature: Theory & Practical · Level: Bachelor · Program: BE Mechanical', options: { fontSize: 9, color: 'E2E8F0' } }
        ],
        {
          x: 1.05,
          y: 3.05,
          w: titleW - 0.5,
          h: 1.85,
          fontFace: 'Arial'
        }
      );

      if (hasTitleImg && s.imageUrl) {
        try {
          const imgSource = await imageResolver(s.imageUrl);
          slide.addImage({
            ...imgSource,
            x: 6.25,
            y: 1.2,
            w: 3.0,
            h: 3.6,
            sizing: { type: 'contain', w: 3.0, h: 3.6 }
          } as any);
          if (s.imageCaption) {
            slide.addText(cleanText(s.imageCaption), {
              x: 6.25,
              y: 4.85,
              w: 3.0,
              h: 0.35,
              fontSize: 8.5,
              fontFace: 'Arial',
              color: '94A3B8',
              align: 'center'
            });
          }
        } catch (e) {
          console.warn('Could not embed title image in pptx', e);
        }
      }
    }

    // -------------------------------------------------------------------------
    // 2. SECTION DIVIDER
    // -------------------------------------------------------------------------
    else if (s.type === 'section-divider') {
      slide.addText(s.sectionTag || 'SECTION', {
        x: 1.0,
        y: 1.2,
        w: 8.0,
        h: 0.4,
        fontSize: 12,
        fontFace: 'Arial',
        color: '38BDF8',
        bold: true
      });

      slide.addText(cleanText(s.title), {
        x: 1.0,
        y: 1.7,
        w: 8.0,
        h: 1.2,
        fontSize: 26,
        fontFace: 'Arial',
        color: C_WHITE,
        bold: true
      });

      if (s.subtitle) {
        slide.addText(cleanText(s.subtitle), {
          x: 1.0,
          y: 2.9,
          w: 8.0,
          h: 0.6,
          fontSize: 14,
          fontFace: 'Arial',
          color: 'FCD34D'
        });
      }

      if (s.takeaway) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 1.0,
          y: 3.7,
          w: 8.0,
          h: 1.1,
          fill: { color: '172436' },
          line: { color: C_TEAL, width: 1.5 },
          rectRadius: 0.08
        });

        slide.addText(
          [
            { text: 'Core Pedagogical Objective:\n', options: { bold: true, color: '38BDF8', fontSize: 11 } },
            { text: cleanText(s.takeaway), options: { color: 'E2E8F0', fontSize: 11.5 } }
          ],
          {
            x: 1.2,
            y: 3.8,
            w: 7.6,
            h: 0.9,
            fontFace: 'Arial'
          }
        );
      }
    }

    // -------------------------------------------------------------------------
    // 3. FIGURE SLIDE (Vector SVG diagrams or Physical Photos)
    // -------------------------------------------------------------------------
    else if (s.type === 'figure' || s.figureKey || s.figureSvg) {
      slide.addText(s.sectionTag || 'TECHNICAL DIAGRAM', {
        x: 0.8,
        y: 0.42,
        w: 8.4,
        h: 0.25,
        fontSize: 10,
        fontFace: 'Arial',
        color: C_TEAL,
        bold: true
      });

      slide.addText(cleanText(s.title), {
        x: 0.8,
        y: 0.67,
        w: 8.4,
        h: 0.45,
        fontSize: 18,
        fontFace: 'Arial',
        color: C_NAVY,
        bold: true
      });

      const svgContent =
        (s.figureKey && figures[s.figureKey]?.svgContent) ||
        s.figureSvg ||
        '';

      let figTop = 1.15;
      let figH = 3.35;

      if (svgContent) {
        try {
          let imgData = '';
          if (svgRasterizer) {
            imgData = await svgRasterizer(svgContent);
          }
          if (!imgData) {
            imgData = svgToBase64(svgContent);
          }
          slide.addImage({
            data: imgData,
            x: 0.8,
            y: figTop,
            w: 8.4,
            h: figH,
            sizing: { type: 'contain', w: 8.4, h: figH }
          });
        } catch (e) {
          console.warn('Failed to embed SVG figure into PPTX', e);
        }
      } else if (s.imageUrl) {
        try {
          const imgSource = await imageResolver(s.imageUrl);
          slide.addImage({
            ...imgSource,
            x: 0.8,
            y: figTop,
            w: 8.4,
            h: figH,
            sizing: { type: 'contain', w: 8.4, h: figH }
          } as any);
        } catch (e) {
          console.warn('Failed to embed image into PPTX', e);
        }
      }

      // Equation Plaque on figure slide if present
      const figEq = s.formulaBlock?.equation || s.equation;
      if (figEq) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: 4.53,
          w: 8.4,
          h: 0.56,
          fill: { color: 'FFFFFF' },
          line: { color: C_TEAL, width: 1.2 },
          rectRadius: 0.06
        });

        slide.addText('Governing Formula:', {
          x: 1.0,
          y: 4.58,
          w: 1.8,
          h: 0.45,
          fontSize: 9.5,
          fontFace: 'Arial',
          bold: true,
          color: C_TEAL
        });

        const placed = await addMathImageToSlide(
          slide,
          figEq,
          { x: 2.8, y: 4.56, w: 6.2, h: 0.5, align: 'center', colorHex: '#172B45' },
          mathRasterizer
        );
        if (!placed) {
          slide.addText(formatMathFormula(figEq), {
            x: 2.8,
            y: 4.58,
            w: 6.2,
            h: 0.45,
            bold: true,
            color: C_NAVY,
            fontSize: 11,
            fontFace: 'Cambria Math'
          });
        }
      } else if (s.takeaway) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: 4.55,
          w: 8.4,
          h: 0.5,
          fill: { color: 'F1F5F9' },
          line: { color: C_TEAL, width: 1 },
          rectRadius: 0.05
        });

        slide.addText(
          [
            { text: 'Key Insight: ', options: { bold: true, color: C_TEAL, fontSize: 9.5 } },
            { text: cleanText(s.takeaway), options: { color: C_NAVY, fontSize: 9.5 } }
          ],
          {
            x: 1.0,
            y: 4.58,
            w: 8.0,
            h: 0.42,
            fontFace: 'Arial'
          }
        );
      }
    }

    // -------------------------------------------------------------------------
    // 4. DEDICATED FORMULA SLIDE (Publication-Grade MathJax Equation + Symbol Table)
    // -------------------------------------------------------------------------
    else if (s.type === 'formula') {
      slide.addText(s.sectionTag || 'MATHEMATICAL MODEL', {
        x: 0.8,
        y: 0.4,
        w: 8.4,
        h: 0.25,
        fontSize: 10,
        fontFace: 'Arial',
        color: C_TEAL,
        bold: true
      });

      slide.addText(cleanText(s.title), {
        x: 0.8,
        y: 0.65,
        w: 8.4,
        h: 0.45,
        fontSize: 19,
        fontFace: 'Arial',
        color: C_NAVY,
        bold: true
      });

      if (s.subtitle) {
        slide.addText(cleanText(s.subtitle), {
          x: 0.8,
          y: 1.1,
          w: 8.4,
          h: 0.26,
          fontSize: 10.5,
          fontFace: 'Arial',
          color: C_MUTED
        });
      }

      const eqRaw = s.formulaBlock?.equation || s.equation || '';
      const formattedEq = formatMathFormula(eqRaw);
      const eqLabel = s.formulaBlock?.label || 'Governing Relationship';

      const hasFormulaImg = !!s.imageUrl;
      const fBoxW = hasFormulaImg ? 4.95 : 8.4;

      // Prominent Clean White Formula Plaque with Teal Border
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: 1.42,
        w: fBoxW,
        h: 1.02,
        fill: { color: C_WHITE },
        line: { color: C_TEAL, width: 1.75 },
        rectRadius: 0.08
      });

      slide.addText(eqLabel, {
        x: 0.95,
        y: 1.47,
        w: fBoxW - 0.3,
        h: 0.24,
        bold: true,
        color: C_TEAL,
        fontSize: 9.5,
        fontFace: 'Arial',
        align: 'center'
      });

      const placedEq = await addMathImageToSlide(
        slide,
        eqRaw,
        {
          x: 0.95,
          y: 1.71,
          w: fBoxW - 0.3,
          h: 0.68,
          align: 'center',
          colorHex: '#172B45',
          display: true
        },
        mathRasterizer
      );

      if (!placedEq) {
        slide.addText(formattedEq, {
          x: 0.95,
          y: 1.74,
          w: fBoxW - 0.3,
          h: 0.62,
          bold: true,
          color: C_NAVY,
          fontSize: hasFormulaImg ? 13 : 16,
          fontFace: 'Cambria Math',
          align: 'center'
        });
      }

      let formulaNextTop = 2.55;

      // Symbol Breakdown Table
      const symbolList: FormulaSymbolItem[] = s.formulaBlock?.symbols || s.symbols || [];
      if (symbolList.length > 0) {
        const tableRows: any[] = [
          [
            { text: 'Symbol', options: { bold: true, fill: { color: '147D8B' }, color: 'FFFFFF', fontSize: 9 } },
            { text: 'Parameter & Units', options: { bold: true, fill: { color: '147D8B' }, color: 'FFFFFF', fontSize: 9 } },
            { text: 'Physical Meaning', options: { bold: true, fill: { color: '147D8B' }, color: 'FFFFFF', fontSize: 9 } }
          ]
        ];

        symbolList.slice(0, 4).forEach((sym) => {
          tableRows.push([
            { text: formatMathFormula(sym.symbol), options: { bold: true, color: '147D8B', fontSize: 9.5, fontFace: 'Cambria Math' } },
            { text: `${cleanText(sym.name)} ${sym.unit ? `[${formatMathFormula(sym.unit)}]` : ''}`, options: { bold: true, color: C_NAVY, fontSize: 8.5 } },
            { text: cleanText(sym.description || ''), options: { color: C_SLATE, fontSize: 8.5 } }
          ]);
        });

        slide.addTable(tableRows, {
          x: 0.8,
          y: formulaNextTop,
          w: fBoxW,
          colW: hasFormulaImg ? [0.9, 1.85, 2.2] : [1.2, 2.6, 4.6],
          border: { type: 'solid', pt: 0.5, color: 'CBD5E1' }
        });

        formulaNextTop += 1.25;
      }

      // Accompanying Side Image
      if (hasFormulaImg && s.imageUrl) {
        try {
          const imgSource = await imageResolver(s.imageUrl);
          slide.addImage({
            ...imgSource,
            x: 6.0,
            y: 1.42,
            w: 3.2,
            h: 3.05,
            sizing: { type: 'contain', w: 3.2, h: 3.05 }
          } as any);
          if (s.imageCaption) {
            slide.addText(cleanText(s.imageCaption), {
              x: 6.0,
              y: 4.55,
              w: 3.2,
              h: 0.45,
              fontSize: 8.5,
              fontFace: 'Arial',
              color: C_MUTED,
              align: 'center'
            });
          }
        } catch (e) {
          console.warn('Failed to embed formula side image', e);
        }
      }

      // Bullets (if space permits)
      if (s.bullets && s.bullets.length > 0 && formulaNextTop < 4.35) {
        const bulletRuns: any[] = [];
        s.bullets.slice(0, 2).forEach((item) => {
          const { lead, body } = parseBulletParts(item);
          if (lead) {
            bulletRuns.push({ text: `• ${lead}: `, options: { bold: true, color: C_NAVY, fontSize: 9.5 } });
            bulletRuns.push({ text: `${body}\n`, options: { color: C_SLATE, fontSize: 9.5 } });
          } else {
            bulletRuns.push({ text: `• ${body}\n`, options: { color: C_SLATE, fontSize: 9.5 } });
          }
        });

        slide.addText(bulletRuns, {
          x: 0.8,
          y: formulaNextTop,
          w: fBoxW,
          h: 0.65
        });
      }

      // Takeaway
      if (s.takeaway) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: 4.55,
          w: fBoxW,
          h: 0.5,
          fill: { color: 'F1F5F9' },
          line: { color: C_TEAL, width: 1 },
          rectRadius: 0.05
        });

        slide.addText(
          [
            { text: 'Key Takeaway: ', options: { bold: true, color: C_TEAL, fontSize: 9 } },
            { text: cleanText(s.takeaway), options: { color: C_NAVY, fontSize: 9 } }
          ],
          {
            x: 0.95,
            y: 4.58,
            w: fBoxW - 0.3,
            h: 0.42,
            fontFace: 'Arial'
          }
        );
      }
    }

    // -------------------------------------------------------------------------
    // 5. ROADMAP SLIDE
    // -------------------------------------------------------------------------
    else if (s.type === 'roadmap' && s.columns) {
      slide.addText(s.sectionTag || 'CURRICULUM ROADMAP', {
        x: 0.8,
        y: 0.45,
        w: 8.4,
        h: 0.28,
        fontSize: 10,
        fontFace: 'Arial',
        color: C_TEAL,
        bold: true
      });

      slide.addText(cleanText(s.title), {
        x: 0.8,
        y: 0.72,
        w: 8.4,
        h: 0.52,
        fontSize: 22,
        fontFace: 'Arial',
        color: C_NAVY,
        bold: true
      });

      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: 1.45,
        w: 4.0,
        h: 3.5,
        fill: { color: C_WHITE },
        line: { color: C_BORDER, width: 1 },
        rectRadius: 0.08
      });

      const leftItems = s.columns.left.map((item) => ({
        text: `• ${cleanText(item)}\n\n`,
        options: { fontSize: 11, color: C_NAVY, fontFace: 'Arial' }
      }));
      slide.addText(leftItems, {
        x: 1.0,
        y: 1.6,
        w: 3.6,
        h: 3.2
      });

      slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.2,
        y: 1.45,
        w: 4.0,
        h: 3.5,
        fill: { color: C_WHITE },
        line: { color: C_BORDER, width: 1 },
        rectRadius: 0.08
      });

      const rightItems = s.columns.right.map((item) => ({
        text: `• ${cleanText(item)}\n\n`,
        options: { fontSize: 11, color: C_NAVY, fontFace: 'Arial' }
      }));
      slide.addText(rightItems, {
        x: 5.4,
        y: 1.6,
        w: 3.6,
        h: 3.2
      });
    }

    // -------------------------------------------------------------------------
    // 6. MASTER FORMULA SHEET SLIDE (Review slides containing $$...$$ bullets)
    // -------------------------------------------------------------------------
    else if (
      s.type === 'review' &&
      s.bullets &&
      s.bullets.some((b) => b.includes('$$') || b.includes('\\frac') || b.includes('\\sqrt'))
    ) {
      slide.addText(s.sectionTag || 'FORMULA REFERENCE', {
        x: 0.8,
        y: 0.4,
        w: 8.4,
        h: 0.25,
        fontSize: 10,
        fontFace: 'Arial',
        color: C_TEAL,
        bold: true
      });

      slide.addText(cleanText(s.title), {
        x: 0.8,
        y: 0.65,
        w: 8.4,
        h: 0.45,
        fontSize: 19,
        fontFace: 'Arial',
        color: C_NAVY,
        bold: true
      });

      const formulaRows = s.bullets.slice(0, 10);
      const startY = 1.18;
      const availH = 3.92;
      const rowH = Math.min(0.52, availH / formulaRows.length);

      for (let r = 0; r < formulaRows.length; r++) {
        const rawLine = formulaRows[r];
        const yPos = startY + r * rowH;

        let label = '';
        let latex = '';
        const colonIdx = rawLine.indexOf(':');
        if (colonIdx !== -1) {
          label = cleanText(rawLine.slice(0, colonIdx));
          latex = rawLine.slice(colonIdx + 1).trim();
        } else {
          label = `Equation ${r + 1}`;
          latex = rawLine.trim();
        }

        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: yPos + 0.02,
          w: 8.4,
          h: rowH - 0.05,
          fill: { color: C_WHITE },
          line: { color: C_BORDER, width: 0.75 },
          rectRadius: 0.05
        });

        slide.addText(label, {
          x: 0.95,
          y: yPos + 0.05,
          w: 3.1,
          h: rowH - 0.1,
          fontSize: 9.5,
          fontFace: 'Arial',
          bold: true,
          color: C_NAVY,
          valign: 'middle'
        });

        const placed = await addMathImageToSlide(
          slide,
          latex,
          {
            x: 4.1,
            y: yPos + 0.04,
            w: 4.95,
            h: rowH - 0.08,
            align: 'left',
            colorHex: '#147D8B',
            display: true,
            maxHeightInches: rowH - 0.1
          },
          mathRasterizer
        );

        if (!placed) {
          slide.addText(formatMathFormula(latex), {
            x: 4.1,
            y: yPos + 0.05,
            w: 4.95,
            h: rowH - 0.1,
            fontSize: 10,
            fontFace: 'Cambria Math',
            bold: true,
            color: C_TEAL,
            valign: 'middle'
          });
        }
      }
    }

    // -------------------------------------------------------------------------
    // 7. WORKED NUMERICAL EXAMPLE SLIDE (Crisp Step Cards with LaTeX Equations)
    // -------------------------------------------------------------------------
    else if (s.workedExample) {
      slide.addText(s.sectionTag || 'WORKED NUMERICAL', {
        x: 0.8,
        y: 0.36,
        w: 8.4,
        h: 0.22,
        fontSize: 9.5,
        fontFace: 'Arial',
        color: C_AMBER,
        bold: true
      });

      slide.addText(cleanText(s.title), {
        x: 0.8,
        y: 0.58,
        w: 8.4,
        h: 0.42,
        fontSize: 17.5,
        fontFace: 'Arial',
        color: C_NAVY,
        bold: true
      });

      const hasImg = !!s.imageUrl;
      const contentW = hasImg ? 5.6 : 8.4;

      // Problem Statement Strip
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: 1.05,
        w: contentW,
        h: 0.72,
        fill: { color: 'FFFBEB' },
        line: { color: 'FCD34D', width: 1 },
        rectRadius: 0.06
      });

      slide.addText(
        [
          { text: 'Problem: ', options: { bold: true, color: C_AMBER, fontSize: 9 } },
          { text: cleanText(s.workedExample.problem), options: { color: C_NAVY, fontSize: 8.8 } }
        ],
        {
          x: 0.92,
          y: 1.08,
          w: contentW - 0.24,
          h: 0.66,
          fontFace: 'Arial',
          valign: 'middle'
        }
      );

      const steps = s.workedExample.steps.slice(0, 4);
      const stepsStartY = 1.84;
      const stepsAvailH = 2.68;
      const stepH = stepsAvailH / steps.length;

      for (let idx = 0; idx < steps.length; idx++) {
        const st = steps[idx];
        const sy = stepsStartY + idx * stepH;

        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: sy,
          w: contentW,
          h: stepH - 0.05,
          fill: { color: C_WHITE },
          line: { color: C_BORDER, width: 0.8 },
          rectRadius: 0.05
        });

        slide.addText(
          [
            { text: `Step ${st.stepNumber}: ${cleanText(st.title)}`, options: { bold: true, color: C_NAVY, fontSize: 8.8 } },
            { text: ` — ${cleanText(st.explanation)}`, options: { color: C_SLATE, fontSize: 8.2 } }
          ],
          {
            x: 0.92,
            y: sy + 0.02,
            w: contentW - 0.24,
            h: 0.24,
            fontFace: 'Arial'
          }
        );

        if (st.math) {
          const mathY = sy + 0.25;
          const mathH = Math.max(0.24, stepH - 0.32);
          const placed = await addMathImageToSlide(
            slide,
            st.math,
            {
              x: 0.98,
              y: mathY,
              w: contentW - 0.36,
              h: mathH,
              align: 'left',
              colorHex: '#147D8B',
              display: true,
              maxHeightInches: Math.min(0.36, mathH)
            },
            mathRasterizer
          );
          if (!placed) {
            slide.addText(formatMathFormula(st.math), {
              x: 0.98,
              y: mathY,
              w: contentW - 0.36,
              h: mathH,
              bold: true,
              color: C_TEAL,
              fontSize: 9.5,
              fontFace: 'Cambria Math'
            });
          }
        }
      }

      // Final Answer Banner
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: 4.58,
        w: contentW,
        h: 0.48,
        fill: { color: 'ECFDF5' },
        line: { color: '16A34A', width: 1.2 },
        rectRadius: 0.06
      });

      slide.addText(
        [
          { text: 'Final Answer: ', options: { bold: true, color: '15803D', fontSize: 9.5 } },
          { text: formatMathFormula(s.workedExample.finalAnswer), options: { bold: true, color: '14532D', fontSize: 9.5, fontFace: 'Cambria Math' } }
        ],
        {
          x: 0.95,
          y: 4.62,
          w: contentW - 0.3,
          h: 0.4,
          fontFace: 'Arial',
          valign: 'middle'
        }
      );

      if (hasImg && s.imageUrl) {
        try {
          const imgSource = await imageResolver(s.imageUrl);
          slide.addImage({
            ...imgSource,
            x: 6.55,
            y: 1.15,
            w: 2.65,
            h: 3.25,
            sizing: { type: 'contain', w: 2.65, h: 3.25 }
          } as any);
          if (s.imageCaption) {
            slide.addText(cleanText(s.imageCaption), {
              x: 6.55,
              y: 4.5,
              w: 2.65,
              h: 0.5,
              fontSize: 8,
              fontFace: 'Arial',
              color: C_MUTED,
              align: 'center'
            });
          }
        } catch (e) {
          console.warn('Could not embed worked-example side image', e);
        }
      }
    }

    // -------------------------------------------------------------------------
    // 8. STANDARD CONTENT / CONCEPT / DEFINITION / QUIZ / TYPES / PROS-CONS
    // -------------------------------------------------------------------------
    else {
      slide.addText(s.sectionTag || 'LECTURE SLIDE', {
        x: 0.8,
        y: 0.42,
        w: 8.4,
        h: 0.25,
        fontSize: 10,
        fontFace: 'Arial',
        color: C_TEAL,
        bold: true
      });

      slide.addText(cleanText(s.title), {
        x: 0.8,
        y: 0.67,
        w: 8.4,
        h: 0.5,
        fontSize: 19,
        fontFace: 'Arial',
        color: C_NAVY,
        bold: true
      });

      if (s.subtitle) {
        slide.addText(cleanText(s.subtitle), {
          x: 0.8,
          y: 1.18,
          w: 8.4,
          h: 0.3,
          fontSize: 10.5,
          fontFace: 'Arial',
          color: C_MUTED
        });
      }

      let contentTop = s.subtitle ? 1.55 : 1.35;
      const hasImg = !!s.imageUrl;
      const textW = hasImg ? 4.9 : 8.4;

      // Inline Formula Box if present on concept slide
      const inlineEq = s.formulaBlock?.equation || s.equation;
      if (inlineEq) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: contentTop,
          w: textW,
          h: 0.72,
          fill: { color: C_WHITE },
          line: { color: 'CBD5E1', width: 1.2 },
          rectRadius: 0.06
        });

        const placedInline = await addMathImageToSlide(
          slide,
          inlineEq,
          {
            x: 0.95,
            y: contentTop + 0.05,
            w: textW - 0.3,
            h: 0.62,
            align: 'center',
            colorHex: '#172B45',
            display: true
          },
          mathRasterizer
        );

        if (!placedInline) {
          slide.addText(formatMathFormula(inlineEq), {
            x: 0.95,
            y: contentTop + 0.08,
            w: textW - 0.3,
            h: 0.56,
            fontSize: 13,
            fontFace: 'Cambria Math',
            color: C_NAVY,
            bold: true,
            align: 'center'
          });
        }

        contentTop += 0.84;
      }

      // Definition Block
      if (s.definition) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: contentTop,
          w: textW,
          h: 1.35,
          fill: { color: C_WHITE },
          line: { color: C_TEAL, width: 2 },
          rectRadius: 0.08
        });

        slide.addText(
          [
            { text: `Term: ${s.definition.term}\n`, options: { bold: true, fontSize: 13, color: C_TEAL } },
            { text: `"${cleanText(s.definition.formalDefinition || s.definition.formalText || '')}"\n\n`, options: { italic: true, fontSize: 10.5, color: C_NAVY } },
            { text: s.definition.standardReference ? `Standard: ${s.definition.standardReference}` : '', options: { fontSize: 8.5, color: C_MUTED } }
          ],
          {
            x: 0.95,
            y: contentTop + 0.08,
            w: textW - 0.3,
            h: 1.2,
            fontFace: 'Arial'
          }
        );

        contentTop += 1.45;
      }

      // Types Grid (supports 2, 3 side-by-side, or 2x2 grid)
      if (s.typesGrid && s.typesGrid.length > 0) {
        const items = s.typesGrid.slice(0, 4);
        const cols = items.length <= 3 ? items.length : 2;
        const gapX = 0.18;
        const cardW = (textW - (cols - 1) * gapX) / cols;
        const rows = Math.ceil(items.length / cols);
        const cardH = Math.min(2.75, (4.45 - contentTop) / rows - 0.1);

        items.forEach((t, idx) => {
          const r = Math.floor(idx / cols);
          const c = idx % cols;
          const cx = 0.8 + c * (cardW + gapX);
          const cy = contentTop + r * (cardH + 0.12);

          slide.addShape(pptx.ShapeType.roundRect, {
            x: cx,
            y: cy,
            w: cardW,
            h: cardH,
            fill: { color: C_WHITE },
            line: { color: C_TEAL, width: 1.2 },
            rectRadius: 0.06
          });

          slide.addText(
            [
              ...(t.badge ? [{ text: `[${cleanText(t.badge)}]\n`, options: { bold: true, color: C_AMBER, fontSize: 8 } }] : []),
              { text: `${cleanText(t.typeName)}\n\n`, options: { bold: true, color: C_TEAL, fontSize: cols === 3 ? 10.5 : 11 } },
              { text: `${cleanText(t.description)}\n\n`, options: { color: C_SLATE, fontSize: cols === 3 ? 8.5 : 9 } },
              ...(t.keyFeature ? [{ text: `Mechanism: ${cleanText(t.keyFeature)}\n`, options: { bold: true, color: C_NAVY, fontSize: 8 } }] : []),
              { text: `Ex: ${cleanText(t.example)}`, options: { italic: true, color: C_MUTED, fontSize: 8 } }
            ],
            {
              x: cx + 0.1,
              y: cy + 0.08,
              w: cardW - 0.2,
              h: cardH - 0.16,
              fontFace: 'Arial',
              valign: 'top'
            }
          );
        });
        contentTop += rows * (cardH + 0.12);
      }

      // Physical Analogy Block
      if (s.analogy) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: contentTop,
          w: textW,
          h: 2.85,
          fill: { color: 'FFFBEB' },
          line: { color: C_AMBER, width: 1.5 },
          rectRadius: 0.08
        });

        slide.addText(
          [
            { text: `Mental Model: ${cleanText(s.analogy.everydayConcept)}\n\n`, options: { bold: true, color: C_AMBER, fontSize: 11.5 } },
            { text: 'Engineering Mapping: ', options: { bold: true, color: C_NAVY, fontSize: 9.8 } },
            { text: `${cleanText(s.analogy.technicalMapping)}\n\n`, options: { color: C_SLATE, fontSize: 9.8 } },
            { text: 'Why It Works: ', options: { bold: true, color: '15803D', fontSize: 9.8 } },
            { text: `${cleanText(s.analogy.whyItWorks)}\n\n`, options: { color: C_SLATE, fontSize: 9.8 } },
            { text: 'Limit of Analogy: ', options: { bold: true, color: 'B91C1C', fontSize: 9.2 } },
            { text: cleanText(s.analogy.limitsOfAnalogy), options: { color: C_MUTED, fontSize: 9.2 } }
          ],
          {
            x: 0.98,
            y: contentTop + 0.12,
            w: textW - 0.36,
            h: 2.6,
            fontFace: 'Arial'
          }
        );
        contentTop += 2.95;
      }

      // Pros-Cons Trade-off Columns
      if (s.prosCons) {
        const colW = (textW - 0.25) / 2;
        const colH = 2.85;

        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: contentTop,
          w: colW,
          h: colH,
          fill: { color: 'F0FDF4' },
          line: { color: '16A34A', width: 1.2 },
          rectRadius: 0.08
        });
        slide.addText(
          [
            { text: 'Advantages / Strengths\n\n', options: { bold: true, color: '15803D', fontSize: 11 } },
            ...s.prosCons.advantages.slice(0, 4).map((a) => ({
              text: `✓ ${cleanText(a)}\n\n`,
              options: { color: C_SLATE, fontSize: 9.2 }
            }))
          ],
          { x: 0.95, y: contentTop + 0.1, w: colW - 0.3, h: colH - 0.2, fontFace: 'Arial' }
        );

        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8 + colW + 0.25,
          y: contentTop,
          w: colW,
          h: colH,
          fill: { color: 'FEF2F2' },
          line: { color: 'DC2626', width: 1.2 },
          rectRadius: 0.08
        });
        slide.addText(
          [
            { text: 'Limitations / Trade-offs\n\n', options: { bold: true, color: 'B91C1C', fontSize: 11 } },
            ...s.prosCons.disadvantages.slice(0, 4).map((d) => ({
              text: `✕ ${cleanText(d)}\n\n`,
              options: { color: C_SLATE, fontSize: 9.2 }
            }))
          ],
          { x: 0.95 + colW + 0.25, y: contentTop + 0.1, w: colW - 0.3, h: colH - 0.2, fontFace: 'Arial' }
        );
        contentTop += colH + 0.1;
      }

      // Quiz Slide
      if (s.quiz) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: contentTop,
          w: textW,
          h: 2.95,
          fill: { color: C_WHITE },
          line: { color: C_TEAL, width: 1.5 },
          rectRadius: 0.08
        });

        const quizRuns: any[] = [
          { text: `Question: ${cleanText(s.quiz.question)}\n\n`, options: { bold: true, color: C_NAVY, fontSize: 10.5 } }
        ];
        s.quiz.options.forEach((opt, idx) => {
          const letter = String.fromCharCode(65 + idx);
          const isCorrect = idx === s.quiz!.correctIndex;
          quizRuns.push({
            text: `${letter}. ${cleanText(opt)}${isCorrect ? '   ✓ [Correct]' : ''}\n`,
            options: {
              bold: isCorrect,
              color: isCorrect ? '15803D' : C_SLATE,
              fontSize: 9.8
            }
          });
        });
        quizRuns.push({
          text: `\nExplanation: ${cleanText(s.quiz.explanation)}`,
          options: { italic: true, color: C_TEAL, fontSize: 9 }
        });

        slide.addText(quizRuns, {
          x: 0.98,
          y: contentTop + 0.1,
          w: textW - 0.36,
          h: 2.75,
          fontFace: 'Arial'
        });
        contentTop += 3.0;
      }

      // Bullets
      if (s.bullets && s.bullets.length > 0) {
        const bulletRuns: any[] = [];
        const maxBullets = hasImg ? 4 : 6;

        for (let b = 0; b < Math.min(s.bullets.length, maxBullets); b++) {
          const item = s.bullets[b];
          const { lead, body } = parseBulletParts(item);

          if (lead) {
            bulletRuns.push({ text: `• ${lead}: `, options: { bold: true, color: C_NAVY, fontSize: hasImg ? 9.8 : 10.5, fontFace: 'Arial' } });
            bulletRuns.push({ text: `${body}\n\n`, options: { bold: false, color: C_SLATE, fontSize: hasImg ? 9.8 : 10.5, fontFace: 'Arial' } });
          } else {
            bulletRuns.push({ text: `• ${body}\n\n`, options: { color: C_SLATE, fontSize: hasImg ? 9.8 : 10.5, fontFace: 'Arial' } });
          }
        }

        const boxH = Math.min(2.85, 4.5 - contentTop);
        if (boxH > 0.3) {
          slide.addText(bulletRuns, {
            x: 0.8,
            y: contentTop,
            w: textW,
            h: boxH
          });
          contentTop += boxH;
        }
      }

      // Accompanying Side Image
      if (hasImg && s.imageUrl) {
        try {
          const imgSource = await imageResolver(s.imageUrl);
          slide.addImage({
            ...imgSource,
            x: 6.0,
            y: 1.35,
            w: 3.2,
            h: 3.1,
            sizing: { type: 'contain', w: 3.2, h: 3.1 }
          } as any);
          if (s.imageCaption) {
            slide.addText(cleanText(s.imageCaption), {
              x: 6.0,
              y: 4.55,
              w: 3.2,
              h: 0.45,
              fontSize: 8.5,
              fontFace: 'Arial',
              color: C_MUTED,
              align: 'center'
            });
          }
        } catch (e) {
          console.warn('Could not embed side image into PPTX', e);
        }
      }

      // Takeaway Callout (if space permits)
      if (s.takeaway && contentTop < 4.65) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: 4.55,
          w: textW,
          h: 0.5,
          fill: { color: 'F1F5F9' },
          line: { color: C_TEAL, width: 1 },
          rectRadius: 0.06
        });

        slide.addText(
          [
            { text: 'Key Takeaway: ', options: { bold: true, color: C_TEAL, fontSize: 9 } },
            { text: cleanText(s.takeaway), options: { color: C_NAVY, fontSize: 9 } }
          ],
          {
            x: 0.95,
            y: 4.58,
            w: textW - 0.3,
            h: 0.42,
            fontFace: 'Arial'
          }
        );
      }
    }
  }

  // Save/Download presentation file
  const filename = `${chapter.id.toUpperCase()}_${chapter.title.replace(/[^a-zA-Z0-9]/g, '_')}.pptx`;
  if (typeof window !== 'undefined') {
    await pptx.writeFile({ fileName: filename });
  } else {
    return pptx.write({ outputType: 'nodebuffer' }) as Promise<any>;
  }
}
