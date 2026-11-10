/**
 * PowerPoint (.pptx) Presentation Generator for Engineering Course Decks
 * Comprehensive visual and mathematical support:
 * - High-resolution vector SVG diagrams & technical photos
 * - Formatted mathematical equations and symbol definitions
 * - Native PowerPoint speaker notes and course metadata
 *
 * Author Attribution: Er. Saroj Chalise
 * BE Mechanical (IOE Pulchowk, 2014) | ME Mechanical (IOE Pulchowk, 2019)
 * Course: MEC 232 · Instrumentation and Measurement · Pokhara University
 */

import pptxgen from 'pptxgenjs';
import { ChapterConfig } from '../data/chaptersData';
import { SlideData, FormulaSymbolItem } from '../types/chapterDeck';

export interface PptxExportOptions {
  includeNotes?: boolean;
  onProgress?: (current: number, total: number, status: string) => void;
  resolveImage?: (rawPath: string) => Promise<{ path?: string; data?: string }> | { path?: string; data?: string };
  svgToPng?: (svg: string) => Promise<string> | string;
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
 * Converts an SVG string into a genuine high-resolution PNG data URI in the browser
 * This ensures Microsoft PowerPoint, Google Slides, and Apple Keynote display the diagrams
 * instead of choking on raw SVG XML text.
 */
export async function svgToPngDataUrlBrowser(svg: string, width = 1600, height = 900): Promise<string> {
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
 * so PptxGenJS never fails with cross-origin or iframe relative path errors.
 */
async function browserImageResolver(rawPath: string): Promise<{ data?: string; path?: string }> {
  if (!rawPath) return {};
  if (rawPath.startsWith('data:')) return { data: rawPath };
  if (typeof window !== 'undefined') {
    try {
      const res = await fetch(rawPath);
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
      console.warn('Could not fetch browser image as base64', rawPath, e);
    }
  }
  return { path: rawPath };
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

/**
 * Formats raw LaTeX equations into clean, professional mathematical unicode notation
 */
export function formatMathFormula(latex: string): string {
  if (!latex) return '';
  return latex
    // Fractions: \frac{A}{B} -> (A) / (B)
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1) / ($2)')
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1) / ($2)')
    // Square roots
    .replace(/\\sqrt\{([^{}]+)\}/g, '√($1)')
    // Statistical and calculus notations
    .replace(/\\bar\{([^{}]+)\}/g, '$1̄')
    .replace(/\\partial/g, '∂')
    .replace(/\\sum_\{([^}]+)\}\^\{([^}]+)\}/g, '∑($1 to $2)')
    .replace(/\\sum_\{([^}]+)\}/g, '∑($1)')
    .replace(/\\sum/g, '∑')
    // Greek symbols
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
    // Operators and arrows
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/\\left\[/g, '[')
    .replace(/\\right\]/g, ']')
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
    // Text wrappers
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\mathbf\{([^}]+)\}/g, '$1')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    .replace(/\\quad/g, '   ')
    .replace(/\\;/g, ' ')
    .replace(/\\,/g, ' ')
    .replace(/\\!/g, '')
    .replace(/\\%/g, '%')
    .replace(/\\\\/g, '\n')
    // Subscripts and superscripts cleanup
    .replace(/_\{([^}]+)\}/g, '_$1')
    .replace(/\^\{([^}]+)\}/g, '^$1')
    .replace(/[\${}]/g, '')
    .trim();
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
 * Exports any chapter configuration into a PowerPoint (.pptx) file
 */
export async function exportChapterToPptx(
  chapter: ChapterConfig,
  options: PptxExportOptions = {}
): Promise<Blob | Buffer | void> {
  const { includeNotes = true, onProgress, resolveImage, svgToPng } = options;
  const imageResolver = resolveImage || (typeof window !== 'undefined' ? browserImageResolver : resolveImageSource);
  const svgRasterizer = svgToPng || (typeof window !== 'undefined' ? svgToPngDataUrlBrowser : null);

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
        fontSize: hasTitleImg ? 28 : 32,
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
          fontSize: hasTitleImg ? 13 : 15,
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

      // If title slide has image (e.g. Unit 3 macro foil strain gauge photo)
      if (hasTitleImg && s.imageUrl) {
        try {
          const imgSource = await imageResolver(s.imageUrl);
          slide.addImage({
            ...imgSource,
            x: 6.3,
            y: 1.2,
            w: 2.9,
            h: 3.6,
            sizing: { type: 'contain', w: 2.9, h: 3.6 }
          } as any);
          if (s.imageCaption) {
            slide.addText(cleanText(s.imageCaption), {
              x: 6.3,
              y: 4.85,
              w: 2.9,
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

      // Render the Vector SVG Diagram or Photo
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
          y: 4.55,
          w: 8.4,
          h: 0.5,
          fill: { color: 'EEF2F6' },
          line: { color: C_TEAL, width: 1 },
          rectRadius: 0.05
        });

        slide.addText(
          [
            { text: 'Governing Formula: ', options: { bold: true, color: C_TEAL, fontSize: 10 } },
            { text: formatMathFormula(figEq), options: { bold: true, color: C_NAVY, fontSize: 11, fontFace: 'Cambria Math' } }
          ],
          {
            x: 1.0,
            y: 4.58,
            w: 8.0,
            h: 0.42,
            fontFace: 'Arial'
          }
        );
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
    // 4. DEDICATED FORMULA SLIDE (Formulas, Symbols Table & Derivation)
    // -------------------------------------------------------------------------
    else if (s.type === 'formula') {
      slide.addText(s.sectionTag || 'MATHEMATICAL MODEL', {
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
        fontSize: 19,
        fontFace: 'Arial',
        color: C_NAVY,
        bold: true
      });

      if (s.subtitle) {
        slide.addText(cleanText(s.subtitle), {
          x: 0.8,
          y: 1.15,
          w: 8.4,
          h: 0.28,
          fontSize: 10.5,
          fontFace: 'Arial',
          color: C_MUTED
        });
      }

      const eqRaw = s.formulaBlock?.equation || s.equation || '';
      const formattedEq = formatMathFormula(eqRaw);
      const eqLabel = s.formulaBlock?.label || 'Governing Relationship';

      const hasFormulaImg = !!s.imageUrl;
      const fBoxW = hasFormulaImg ? 4.9 : 8.4;

      // Prominent Formula Box
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8,
        y: 1.48,
        w: fBoxW,
        h: 0.85,
        fill: { color: 'EEF2F6' },
        line: { color: C_TEAL, width: 1.5 },
        rectRadius: 0.08
      });

      slide.addText(
        [
          { text: `${eqLabel}\n`, options: { bold: true, color: C_TEAL, fontSize: 10 } },
          { text: formattedEq, options: { bold: true, color: C_NAVY, fontSize: hasFormulaImg ? 13 : 16, fontFace: 'Cambria Math' } }
        ],
        {
          x: 0.95,
          y: 1.52,
          w: fBoxW - 0.3,
          h: 0.76,
          align: 'center'
        }
      );

      let formulaNextTop = 2.45;

      // Symbol Breakdown Table
      const symbolList: FormulaSymbolItem[] = s.formulaBlock?.symbols || s.symbols || [];
      if (symbolList.length > 0) {
        const tableRows: any[] = [
          [
            { text: 'Symbol', options: { bold: true, fill: { color: '147D8B' }, color: 'FFFFFF', fontSize: 9 } },
            { text: 'Parameter & Units', options: { bold: true, fill: { color: '147D8B' }, color: 'FFFFFF', fontSize: 9 } },
            { text: 'Engineering Meaning', options: { bold: true, fill: { color: '147D8B' }, color: 'FFFFFF', fontSize: 9 } }
          ]
        ];

        symbolList.slice(0, 4).forEach((sym) => {
          tableRows.push([
            { text: formatMathFormula(sym.symbol), options: { bold: true, color: '147D8B', fontSize: 9, fontFace: 'Cambria Math' } },
            { text: `${cleanText(sym.name)} ${sym.unit ? `[${formatMathFormula(sym.unit)}]` : ''}`, options: { bold: true, color: C_NAVY, fontSize: 8.5 } },
            { text: cleanText(sym.description || ''), options: { color: C_SLATE, fontSize: 8.5 } }
          ]);
        });

        slide.addTable(tableRows, {
          x: 0.8,
          y: formulaNextTop,
          w: fBoxW,
          colW: hasFormulaImg ? [0.9, 1.8, 2.2] : [1.2, 2.6, 4.6],
          border: { type: 'solid', pt: 0.5, color: 'CBD5E1' }
        });

        formulaNextTop += 1.25;
      }

      // If formula slide has side image (e.g. UTM tensile testing photo)
      if (hasFormulaImg && s.imageUrl) {
        try {
          const imgSource = await imageResolver(s.imageUrl);
          slide.addImage({
            ...imgSource,
            x: 6.0,
            y: 1.48,
            w: 3.2,
            h: 3.0,
            sizing: { type: 'contain', w: 3.2, h: 3.0 }
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
      if (s.bullets && s.bullets.length > 0 && formulaNextTop < 4.4) {
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
          h: 0.7
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

      // Left Column
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

      // Right Column
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
    // 6. STANDARD CONTENT / CONCEPT / DEFINITION / WORKED EXAMPLE
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
          h: 0.6,
          fill: { color: 'EEF2F6' },
          line: { color: 'CBD5E1', width: 1 },
          rectRadius: 0.06
        });

        slide.addText(formatMathFormula(inlineEq), {
          x: 0.95,
          y: contentTop + 0.05,
          w: textW - 0.3,
          h: 0.5,
          fontSize: 13,
          fontFace: 'Cambria Math',
          color: C_NAVY,
          bold: true,
          align: 'center'
        });

        contentTop += 0.72;
      }

      // Definition Block
      if (s.definition) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: contentTop,
          w: textW,
          h: 1.3,
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
            h: 1.15,
            fontFace: 'Arial'
          }
        );

        contentTop += 1.4;
      }

      // Bullets
      if (s.bullets && s.bullets.length > 0) {
        const bulletRuns: any[] = [];
        const maxBullets = hasImg ? 4 : 5;

        for (let b = 0; b < Math.min(s.bullets.length, maxBullets); b++) {
          const item = s.bullets[b];
          const { lead, body } = parseBulletParts(item);

          if (lead) {
            bulletRuns.push({ text: `• ${lead}: `, options: { bold: true, color: C_NAVY, fontSize: hasImg ? 10 : 11, fontFace: 'Arial' } });
            bulletRuns.push({ text: `${body}\n\n`, options: { bold: false, color: C_SLATE, fontSize: hasImg ? 10 : 11, fontFace: 'Arial' } });
          } else {
            bulletRuns.push({ text: `• ${body}\n\n`, options: { color: C_SLATE, fontSize: hasImg ? 10 : 11, fontFace: 'Arial' } });
          }
        }

        const boxH = Math.min(2.8, 4.5 - contentTop);
        slide.addText(bulletRuns, {
          x: 0.8,
          y: contentTop,
          w: textW,
          h: boxH
        });

        contentTop += boxH;
      }

      // Worked Example
      if (s.workedExample) {
        slide.addShape(pptx.ShapeType.roundRect, {
          x: 0.8,
          y: contentTop,
          w: textW,
          h: 2.8,
          fill: { color: C_WHITE },
          line: { color: C_BORDER, width: 1 },
          rectRadius: 0.08
        });

        const exTextRuns: any[] = [
          { text: 'Problem: ', options: { bold: true, color: C_AMBER, fontSize: 10.5 } },
          { text: `${cleanText(s.workedExample.problem)}\n\n`, options: { color: C_NAVY, fontSize: 10 } }
        ];

        s.workedExample.steps.slice(0, 3).forEach((st) => {
          exTextRuns.push({ text: `Step ${st.stepNumber}: ${cleanText(st.title)}\n`, options: { bold: true, color: C_NAVY, fontSize: 9.5 } });
          if (st.math) {
            exTextRuns.push({ text: `  ${formatMathFormula(st.math)}\n`, options: { bold: true, color: C_TEAL, fontSize: 9.5, fontFace: 'Cambria Math' } });
          }
          exTextRuns.push({ text: `  ${cleanText(st.explanation)}\n\n`, options: { color: C_SLATE, fontSize: 9 } });
        });

        exTextRuns.push({ text: 'Final Answer: ', options: { bold: true, color: '16A34A', fontSize: 10.5 } });
        exTextRuns.push({ text: formatMathFormula(s.workedExample.finalAnswer), options: { bold: true, color: '16A34A', fontSize: 10.5 } });

        slide.addText(exTextRuns, {
          x: 0.95,
          y: contentTop + 0.08,
          w: textW - 0.3,
          h: 2.64,
          fontFace: 'Arial'
        });
      }

      // Accompanying Side Image (if slide has image, e.g. UTM tensile testing or bridge truss)
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
      if (s.takeaway && !s.workedExample && contentTop < 4.65) {
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
    // Node.js environment
    return pptx.write({ outputType: 'nodebuffer' }) as Promise<any>;
  }
}
