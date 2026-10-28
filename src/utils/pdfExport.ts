/**
 * Client-Side PDF Generation Utility for QuartoDeck Presentations & Book Chapters
 * Exports any chapter deck (Unit 1 to Unit 5, or custom uploaded chapters)
 * to high-resolution, classroom-ready PDF documents using jsPDF.
 *
 * Footers credit: Er. Saroj Chalise
 */

import { jsPDF } from 'jspdf';
import { ChapterConfig } from '../data/chaptersData';
import { SlideData, FormulaSymbolItem } from '../types/chapterDeck';
import { latexToPngDataUrl } from './mathSvg';
import { TEXTBOOK_UNIT1_CHAPTER } from '../data/textbookUnit1';

export interface PdfExportOptions {
  layout: 'landscape' | 'handout' | 'book';
  includeNotes?: boolean;
  includeFigures?: boolean;
  onProgress?: (current: number, total: number, status: string) => void;
}

/**
 * Converts an SVG string to a PNG data URL using an offscreen canvas
 */
export async function svgToPngDataUrl(svgString: string, width = 1600, height = 900): Promise<string> {
  return new Promise((resolve) => {
    try {
      let cleaned = svgString.trim();
      if (!cleaned.includes('xmlns=')) {
        cleaned = cleaned.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
      }

      const blob = new Blob([cleaned], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new window.Image();

      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            const png = canvas.toDataURL('image/png');
            URL.revokeObjectURL(url);
            resolve(png);
            return;
          }
        } catch (e) {
          console.warn('Canvas conversion failed', e);
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
 * Renders any LaTeX mathematical equation to a crisp, high-resolution PNG data URL
 * using MathJax vector SVG with 300 DPI canvas rasterization for true professional mathematical typesetting in PDF.
 */
export async function renderLatexToPng(
  rawMath: string,
  maxWidthMm = 150,
  displayMode = true
): Promise<{ dataUrl: string; widthMm: number; heightMm: number } | null> {
  return latexToPngDataUrl(rawMath, maxWidthMm, displayMode);
}

/**
 * Strips raw LaTeX math wrappers and converts common symbols to readable unicode for plain text fallback
 */
export function cleanLatexForPdf(text: string): string {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Strip markdown bold
    .replace(/\*([^*]+)\*/g, '$1')   // Strip markdown italic
    .replace(/\$\$(.*?)\$\$/g, '$1')
    .replace(/\$(.*?)\$/g, '$1')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\theta/g, 'θ')
    .replace(/\\tau/g, 'τ')
    .replace(/\\omega/g, 'ω')
    .replace(/\\zeta/g, 'ζ')
    .replace(/\\sigma/g, 'σ')
    .replace(/\\mu/g, 'μ')
    .replace(/\\pi/g, 'π')
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\\approx/g, '≈')
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\pm/g, '±')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\sqrt/g, '√')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    .replace(/\\implies/g, '➔')
    .replace(/\\quad/g, '  ')
    .replace(/\\qquad/g, '    ')
    .replace(/\\,/g, ' ')
    .replace(/\^2/g, '²')
    .replace(/\^3/g, '³')
    .replace(/\^n/g, 'ⁿ')
    .replace(/\^\{([^}]+)\}/g, '^($1)')
    .replace(/_\{([^}]+)\}/g, '_$1')
    .replace(/[{}]/g, '');
}

/**
 * Generates and downloads a complete PDF presentation or textbook book chapter for any chapter
 */
export async function exportChapterToPdf(
  chapter: ChapterConfig,
  options: PdfExportOptions = { layout: 'landscape', includeNotes: true, includeFigures: true }
): Promise<void> {
  const { layout, includeFigures = true, onProgress } = options;
  const slides = chapter.slides || [];
  const figures = chapter.figures || {};
  const totalSlides = slides.length;

  // Preload figures as PNG data URLs
  const figurePngMap = new Map<string, string>();
  if (includeFigures && figures) {
    const figEntries = Object.entries(figures);
    for (let i = 0; i < figEntries.length; i++) {
      const [key, fig] = figEntries[i];
      if (fig.svgContent) {
        if (onProgress) {
          onProgress(0, totalSlides, `Rendering vector graphic ${i + 1}/${figEntries.length}...`);
        }
        const png = await svgToPngDataUrl(fig.svgContent, 1600, 900);
        if (png) figurePngMap.set(key, png);
      }
    }
  }

  // =========================================================================
  // 1. TEXTBOOK BOOK CHAPTER FORMAT (A4 PORTRAIT)
  // =========================================================================
  if (layout === 'book') {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 18;
    const contentWidth = pageWidth - margin * 2;
    let currentY = 22;

    const drawBookHeader = (sectionTitle = '') => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184); // Slate-400
      doc.text('INSTRUMENTATION & MEASUREMENT SYSTEMS', margin, 12);
      if (sectionTitle) {
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(99, 102, 241); // Indigo-500
        doc.text(sectionTitle.toUpperCase(), pageWidth - margin, 12, { align: 'right' });
      }
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(margin, 14, pageWidth - margin, 14);
    };

    const drawBookFooter = () => {
      const pageNum = doc.getNumberOfPages();
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(margin, pageHeight - 14, pageWidth - margin, pageHeight - 14);

      // Left: Chapter Info
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(79, 70, 229);
      doc.text(`${chapter.unitNumber}: ${chapter.shortTitle}`, margin, pageHeight - 9);

      // Center: Explicit Author Credit as Requested: Er. Saroj Chalise
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text('Er. Saroj Chalise', pageWidth / 2, pageHeight - 9, { align: 'center' });

      // Right: Page number
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      doc.text(`Page ${pageNum}`, pageWidth - margin, pageHeight - 9, { align: 'right' });
    };

    const ensureSpace = (neededHeight: number, currentSection = '') => {
      if (currentY + neededHeight > pageHeight - 20) {
        drawBookFooter();
        doc.addPage('a4', 'portrait');
        drawBookHeader(currentSection);
        currentY = 22;
      }
    };

    const renderPdfSymbolDefinitions = (
      symbols: FormulaSymbolItem[] | undefined,
      sectionTag: string
    ) => {
      if (!symbols || symbols.length === 0) return;

      ensureSpace(10, sectionTag);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(79, 70, 229);
      doc.text('WHERE THE SYMBOLS REPRESENT:', margin + 3, currentY);
      currentY += 4.2;

      const symColW = 50;
      const descColW = contentWidth - symColW - 8;

      for (const sym of symbols) {
        const symStr = cleanLatexForPdf(sym.symbol);
        const unitPart = sym.unit ? ` [${sym.unit}]` : '';
        const leftText = `${symStr} = ${sym.name}${unitPart}:`;
        const rightText = cleanLatexForPdf(sym.description || '');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        const leftLines = doc.splitTextToSize(leftText, symColW);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        const rightLines = rightText ? doc.splitTextToSize(rightText, descColW) : [];

        const lineCount = Math.max(leftLines.length, rightLines.length, 1);
        const rowH = lineCount * 3.6 + 1.2;

        ensureSpace(rowH + 1, sectionTag);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(67, 56, 202);
        doc.text(leftLines, margin + 4, currentY);

        if (rightLines.length > 0) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.5);
          doc.setTextColor(71, 85, 105);
          doc.text(rightLines, margin + symColW + 6, currentY);
        }

        currentY += rowH;
      }
      currentY += 2;
    };

    // --- CASE A: SPECIALIZED COMPLETE TEXTBOOK FOR UNIT 1 ---
    if (chapter.id === 'unit1') {
      const tb = TEXTBOOK_UNIT1_CHAPTER;

      // Top colored banner
      doc.setFillColor(79, 70, 229);
      doc.rect(0, 0, pageWidth, 5, 'F');

      currentY = 24;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(99, 102, 241);
      doc.text(`COURSE MODULE · ${tb.unitNumber.toUpperCase()} (${tb.hours})`, margin, currentY);

      currentY += 8;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(15, 23, 42);
      const titleLines = doc.splitTextToSize(tb.title, contentWidth);
      doc.text(titleLines, margin, currentY);
      currentY += titleLines.length * 8 + 4;

      // Author Byline
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(79, 70, 229);
      doc.text(`Author: ${tb.author}`, margin, currentY);
      currentY += 5;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(100, 116, 139);
      doc.text(tb.department, margin, currentY);
      currentY += 8;

      // Chapter Abstract / Overview Box
      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(203, 213, 225);
      const overviewLines = doc.splitTextToSize(tb.overview, contentWidth - 8);
      const ovBoxHeight = Math.max(26, overviewLines.length * 4.2 + 10);
      doc.roundedRect(margin, currentY, contentWidth, ovBoxHeight, 2, 2, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(79, 70, 229);
      doc.text('CHAPTER OVERVIEW & SYLLABUS SCOPE:', margin + 4, currentY + 6);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(51, 65, 85);
      doc.text(overviewLines, margin + 4, currentY + 11);
      currentY += ovBoxHeight + 6;

      // Syllabus Table of Contents
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('Chapter Table of Contents:', margin, currentY);
      currentY += 6;

      tb.sections.forEach((sec) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(79, 70, 229);
        doc.text(`${sec.number}  ${sec.title}`, margin + 2, currentY);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        doc.text(sec.hours, pageWidth - margin, currentY, { align: 'right' });
        currentY += 5;
      });
      currentY += 6;

      // Render each section of Unit 1
      for (let secIdx = 0; secIdx < tb.sections.length; secIdx++) {
        const sec = tb.sections[secIdx];
        if (onProgress) {
          onProgress(secIdx + 1, tb.sections.length, `Composing Section ${sec.number}: ${sec.title}`);
        }

        ensureSpace(34, `Section ${sec.number}`);
        currentY += 6;

        // Section Title Banner
        doc.setFillColor(238, 242, 255);
        doc.roundedRect(margin, currentY, contentWidth, 14, 2, 2, 'F');
        doc.setFillColor(79, 70, 229);
        doc.rect(margin, currentY, 3.5, 14, 'F');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12.5);
        doc.setTextColor(15, 23, 42);
        doc.text(`Section ${sec.number}: ${sec.title}`, margin + 8, currentY + 9);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        doc.text(`Prescribed Syllabus: ${sec.hours}`, pageWidth - margin - 4, currentY + 9, { align: 'right' });
        currentY += 18;

        // Section Abstract
        if (sec.abstract) {
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(8.5);
          doc.setTextColor(71, 85, 105);
          const absLines = doc.splitTextToSize(cleanLatexForPdf(sec.abstract), contentWidth);
          doc.text(absLines, margin, currentY);
          currentY += absLines.length * 4.3 + 3;
        }

        // Section Lead-in Paragraphs (Smooth, continuous textbook prose, no bullets!)
        if (sec.paragraphs) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.8);
          doc.setTextColor(30, 41, 59);
          for (const para of sec.paragraphs) {
            ensureSpace(12, `Section ${sec.number}`);
            const pLines = doc.splitTextToSize(cleanLatexForPdf(para), contentWidth);
            doc.text(pLines, margin, currentY);
            currentY += pLines.length * 4.3 + 3.5;
          }
        }

        // Subsections
        for (const sub of sec.subsections) {
          ensureSpace(22, `Section ${sec.number}`);
          currentY += 3;

          // Subsection Heading
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(10.5);
          doc.setTextColor(15, 23, 42);
          const subTitleLines = doc.splitTextToSize(`${sub.number} ${sub.title}`, contentWidth);
          doc.text(subTitleLines, margin, currentY);
          currentY += subTitleLines.length * 5 + 2.5;

          // Subsection Paragraphs (Smooth continuous prose, no bullets!)
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.8);
          doc.setTextColor(30, 41, 59);
          for (const para of sub.paragraphs) {
            ensureSpace(12, `Section ${sec.number}`);
            const pLines = doc.splitTextToSize(cleanLatexForPdf(para), contentWidth);
            doc.text(pLines, margin, currentY);
            currentY += pLines.length * 4.3 + 3.5;
          }

          // Optional Formula / Equation (Open display, no bordered box, high-DPI vector rendering!)
          if (sub.equation) {
            ensureSpace(28, `Section ${sec.number}`);
            currentY += 2;

            // Equation Label
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(7.5);
            doc.setTextColor(79, 70, 229);
            doc.text(sub.equation.label.toUpperCase(), margin, currentY);
            currentY += 4;

            // Render vector equation via MathJax
            const eqImg = await latexToPngDataUrl(sub.equation.tex, contentWidth - 30, true);
            if (eqImg) {
              ensureSpace(eqImg.heightMm + 6, `Section ${sec.number}`);
              const eqX = (pageWidth - eqImg.widthMm) / 2;
              doc.addImage(eqImg.dataUrl, 'PNG', eqX, currentY, eqImg.widthMm, eqImg.heightMm, undefined, 'FAST');
              currentY += eqImg.heightMm + 3.5;
            } else {
              doc.setFont('helvetica', 'bold');
              doc.setFontSize(9.5);
              doc.setTextColor(15, 23, 42);
              doc.text(cleanLatexForPdf(sub.equation.tex), pageWidth / 2, currentY + 4, { align: 'center' });
              currentY += 8;
            }

            // Description
            if (sub.equation.description) {
              doc.setFont('helvetica', 'italic');
              doc.setFontSize(7.8);
              doc.setTextColor(71, 85, 105);
              const descLines = doc.splitTextToSize(cleanLatexForPdf(sub.equation.description), contentWidth - 10);
              doc.text(descLines, pageWidth / 2, currentY, { align: 'center' });
              currentY += descLines.length * 3.8 + 2;
            }

            // Parameter Definitions (dynamic wrapping, zero overlap)
            renderPdfSymbolDefinitions(sub.equation.symbols, `Section ${sec.number}`);
          }

          // Post-Equation Paragraphs (Smooth, continuous textbook prose)
          if (sub.postEquationParagraphs && sub.postEquationParagraphs.length > 0) {
            for (const para of sub.postEquationParagraphs) {
              ensureSpace(12, `Section ${sec.number}`);
              const pLines = doc.splitTextToSize(cleanLatexForPdf(para), contentWidth);
              doc.text(pLines, margin, currentY);
              currentY += pLines.length * 4.3 + 3.5;
            }
          }

          // Optional Second Formula / Equation (e.g. Eq. 1.4 RMS Quantization Noise)
          if (sub.secondEquation) {
            ensureSpace(28, `Section ${sec.number}`);
            currentY += 2;

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(7.5);
            doc.setTextColor(79, 70, 229);
            doc.text(sub.secondEquation.label.toUpperCase(), margin, currentY);
            currentY += 4;

            const eqImg2 = await latexToPngDataUrl(sub.secondEquation.tex, contentWidth - 30, true);
            if (eqImg2) {
              ensureSpace(eqImg2.heightMm + 6, `Section ${sec.number}`);
              const eqX = (pageWidth - eqImg2.widthMm) / 2;
              doc.addImage(eqImg2.dataUrl, 'PNG', eqX, currentY, eqImg2.widthMm, eqImg2.heightMm, undefined, 'FAST');
              currentY += eqImg2.heightMm + 3.5;
            } else {
              doc.setFont('helvetica', 'bold');
              doc.setFontSize(9.5);
              doc.setTextColor(15, 23, 42);
              doc.text(cleanLatexForPdf(sub.secondEquation.tex), pageWidth / 2, currentY + 4, { align: 'center' });
              currentY += 8;
            }

            if (sub.secondEquation.description) {
              doc.setFont('helvetica', 'italic');
              doc.setFontSize(7.8);
              doc.setTextColor(71, 85, 105);
              const descLines = doc.splitTextToSize(cleanLatexForPdf(sub.secondEquation.description), contentWidth - 10);
              doc.text(descLines, pageWidth / 2, currentY, { align: 'center' });
              currentY += descLines.length * 3.8 + 2;
            }

            renderPdfSymbolDefinitions(sub.secondEquation.symbols, `Section ${sec.number}`);
          }

          // Concluding Paragraphs
          if (sub.concludingParagraphs && sub.concludingParagraphs.length > 0) {
            for (const para of sub.concludingParagraphs) {
              ensureSpace(12, `Section ${sec.number}`);
              const pLines = doc.splitTextToSize(cleanLatexForPdf(para), contentWidth);
              doc.text(pLines, margin, currentY);
              currentY += pLines.length * 4.3 + 3.5;
            }
          }

          // Technical Vector Diagram if referenced
          if (sub.figureRef && figurePngMap.has(sub.figureRef)) {
            const pngData = figurePngMap.get(sub.figureRef);
            if (pngData) {
              const figH = 58;
              ensureSpace(figH + 16, `Section ${sec.number}`);
              currentY += 2;
              const figW = Math.min(contentWidth - 10, 145);
              const figX = (pageWidth - figW) / 2;
              doc.addImage(pngData, 'PNG', figX, currentY, figW, figH, undefined, 'FAST');
              currentY += figH + 3.5;

              doc.setFont('helvetica', 'bold');
              doc.setFontSize(7.5);
              doc.setTextColor(71, 85, 105);
              const cap = sub.figureCaption || chapter.figures?.[sub.figureRef]?.title || 'Schematic Diagram';
              doc.text(`Figure: ${cleanLatexForPdf(cap)}`, pageWidth / 2, currentY, { align: 'center' });
              currentY += 5.5;
            }
          }

          // Bullet List ONLY where strictly appropriate (e.g. equipment specifications)
          if (sub.bulletList && sub.bulletList.items.length > 0) {
            ensureSpace(12, `Section ${sec.number}`);
            if (sub.bulletList.title) {
              doc.setFont('helvetica', 'bold');
              doc.setFontSize(8.2);
              doc.setTextColor(15, 23, 42);
              doc.text(sub.bulletList.title, margin, currentY);
              currentY += 4.2;
            }
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8.5);
            doc.setTextColor(51, 65, 85);
            sub.bulletList.items.forEach((item) => {
              ensureSpace(8, `Section ${sec.number}`);
              doc.setFillColor(79, 70, 229);
              doc.circle(margin + 3, currentY - 1, 0.8, 'F');
              const itemLines = doc.splitTextToSize(cleanLatexForPdf(item), contentWidth - 8);
              doc.text(itemLines, margin + 7, currentY);
              currentY += itemLines.length * 4.2 + 2.5;
            });
            currentY += 2;
          }

          // Key Takeaway Callout Box (Clean vertical stack, zero overlap)
          if (sub.keyTakeaway) {
            const takLines = doc.splitTextToSize(cleanLatexForPdf(sub.keyTakeaway), contentWidth - 8);
            const boxH = takLines.length * 3.8 + 9;
            ensureSpace(boxH + 4, `Section ${sec.number}`);

            doc.setFillColor(238, 242, 255);
            doc.setDrawColor(199, 210, 254);
            doc.roundedRect(margin, currentY, contentWidth, boxH, 2, 2, 'FD');

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(7.5);
            doc.setTextColor(67, 56, 202);
            doc.text('CORE PRINCIPLE & PRACTICAL TAKEAWAY:', margin + 4, currentY + 4.8);

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            doc.setTextColor(30, 41, 59);
            doc.text(takLines, margin + 4, currentY + 9);
            currentY += boxH + 3.5;
          }
        }

        // Section Worked Example
        if (sec.workedExample) {
          const ex = sec.workedExample;
          ensureSpace(50, `Section ${sec.number}`);
          currentY += 4;

          doc.setFillColor(248, 250, 252);
          doc.setDrawColor(203, 213, 225);
          const probLines = doc.splitTextToSize(cleanLatexForPdf(ex.problem), contentWidth - 10);
          const pBoxH = Math.max(18, probLines.length * 4.2 + 10);
          doc.roundedRect(margin, currentY, contentWidth, pBoxH, 2, 2, 'FD');

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8.5);
          doc.setTextColor(79, 70, 229);
          doc.text(`WORKED NUMERICAL EXAMPLE: ${ex.title.toUpperCase()}`, margin + 4, currentY + 5);

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.2);
          doc.setTextColor(15, 23, 42);
          doc.text(probLines, margin + 4, currentY + 11);
          currentY += pBoxH + 4;

          // Steps
          for (let stIdx = 0; stIdx < ex.steps.length; stIdx++) {
            const st = ex.steps[stIdx];
            ensureSpace(24, `Section ${sec.number}`);

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(8.5);
            doc.setTextColor(15, 23, 42);
            doc.text(`Step ${st.stepNumber}: ${st.title}`, margin + 4, currentY);
            currentY += 4.5;

            if (st.explanation) {
              doc.setFont('helvetica', 'normal');
              doc.setFontSize(8.2);
              doc.setTextColor(51, 65, 85);
              const expLines = doc.splitTextToSize(cleanLatexForPdf(st.explanation), contentWidth - 8);
              doc.text(expLines, margin + 4, currentY);
              currentY += expLines.length * 4 + 2.5;
            }

            if (st.math) {
              const mathImg = await latexToPngDataUrl(st.math, contentWidth - 25, true);
              if (mathImg) {
                ensureSpace(mathImg.heightMm + 5, `Section ${sec.number}`);
                const mx = (pageWidth - mathImg.widthMm) / 2;
                doc.addImage(mathImg.dataUrl, 'PNG', mx, currentY, mathImg.widthMm, mathImg.heightMm, undefined, 'FAST');
                currentY += mathImg.heightMm + 4;
              } else {
                doc.setFont('helvetica', 'bold');
                doc.setFontSize(8.5);
                doc.setTextColor(79, 70, 229);
                doc.text(cleanLatexForPdf(st.math), margin + 6, currentY + 3);
                currentY += 7;
              }
            }
          }

          // Final Answer
          ensureSpace(12, `Section ${sec.number}`);
          doc.setFillColor(236, 253, 245);
          doc.setDrawColor(52, 211, 153);
          doc.roundedRect(margin, currentY, contentWidth, 8, 2, 2, 'FD');

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(6, 95, 70);
          doc.text(`Final Result: ${cleanLatexForPdf(ex.finalAnswer)}`, margin + 4, currentY + 5.5);
          currentY += 12;

          // Practical Insight
          if (ex.practicalInsight) {
            ensureSpace(10, `Section ${sec.number}`);
            doc.setFont('helvetica', 'italic');
            doc.setFontSize(8);
            doc.setTextColor(71, 85, 105);
            const insLines = doc.splitTextToSize(`Practical Workshop Insight: ${cleanLatexForPdf(ex.practicalInsight)}`, contentWidth - 8);
            doc.text(insLines, margin + 4, currentY);
            currentY += insLines.length * 4 + 4;
          }
        }

        // Exam Questions
        if (sec.examQuestions && sec.examQuestions.length > 0) {
          ensureSpace(24, `Section ${sec.number}`);
          currentY += 3;
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(9);
          doc.setTextColor(79, 70, 229);
          doc.text('BOARD EXAMINATION & REVIEW QUESTIONS:', margin, currentY);
          currentY += 4.5;

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.2);
          doc.setTextColor(51, 65, 85);
          sec.examQuestions.forEach((q, qIdx) => {
            ensureSpace(8, `Section ${sec.number}`);
            const qLines = doc.splitTextToSize(`${qIdx + 1}. ${cleanLatexForPdf(q)}`, contentWidth - 4);
            doc.text(qLines, margin + 2, currentY);
            currentY += qLines.length * 4 + 2;
          });
          currentY += 4;
        }
      }

      drawBookFooter();
      const safeFilename = `${chapter.code || chapter.id}_${chapter.shortTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Book_Chapter.pdf`;
      doc.save(safeFilename);
      if (onProgress) onProgress(totalSlides, totalSlides, 'Book Chapter PDF Complete!');
      return;
    }

    // --- CASE B: GENERAL CHAPTERS (UNITS 2-5 OR CUSTOM DECK) ---
    // Top colored banner
    doc.setFillColor(79, 70, 229);
    doc.rect(0, 0, pageWidth, 5, 'F');

    currentY = 24;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(99, 102, 241);
    doc.text(`COURSE MODULE · ${chapter.unitNumber.toUpperCase()} (${chapter.hours})`, margin, currentY);

    currentY += 8;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(15, 23, 42);
    const titleLines = doc.splitTextToSize(chapter.title, contentWidth);
    doc.text(titleLines, margin, currentY);
    currentY += titleLines.length * 8 + 4;

    // Author Byline
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(79, 70, 229);
    doc.text(`Author: Er. Saroj Chalise`, margin, currentY);
    currentY += 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text('Department of Electrical & Instrumentation Engineering', margin, currentY);
    currentY += 8;

    // Chapter Abstract / Overview Box
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(margin, currentY, contentWidth, 26, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(79, 70, 229);
    doc.text('CHAPTER OVERVIEW & SYLLABUS SCOPE:', margin + 4, currentY + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const summaryLines = doc.splitTextToSize(chapter.summary || '', contentWidth - 8);
    doc.text(summaryLines, margin + 4, currentY + 12);
    currentY += 32;

    // Syllabus Sections Index
    if (chapter.syllabusSections && chapter.syllabusSections.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('Chapter Table of Contents:', margin, currentY);
      currentY += 6;

      chapter.syllabusSections.forEach((sec) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(79, 70, 229);
        doc.text(`${sec.number}  ${sec.title}`, margin + 2, currentY);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        doc.text(sec.hours, pageWidth - margin, currentY, { align: 'right' });
        currentY += 5;
      });
      currentY += 4;
    }

    let activeSectionName = '';

    // Stream slides sequentially as textbook sections
    for (let sIdx = 0; sIdx < slides.length; sIdx++) {
      const slide = slides[sIdx];

      if (onProgress) {
        onProgress(sIdx + 1, totalSlides, `Writing Textbook Section: "${slide.title}"`);
      }

      if (slide.type === 'title') continue;

      if (slide.type === 'section-divider') {
        ensureSpace(30, activeSectionName);
        activeSectionName = slide.title;
        currentY += 6;

        doc.setFillColor(238, 242, 255);
        doc.roundedRect(margin, currentY, contentWidth, 14, 2, 2, 'F');
        doc.setFillColor(79, 70, 229);
        doc.rect(margin, currentY, 3, 14, 'F');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(15, 23, 42);
        doc.text(slide.title, margin + 8, currentY + 9);
        currentY += 18;

        if (slide.takeaway) {
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(9);
          doc.setTextColor(71, 85, 105);
          const takLines = doc.splitTextToSize(cleanLatexForPdf(slide.takeaway), contentWidth - 10);
          doc.text(takLines, margin + 4, currentY);
          currentY += takLines.length * 4.5 + 4;
        }
        continue;
      }

      // Subsection Title
      ensureSpace(18, activeSectionName);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      const subTitleLines = doc.splitTextToSize(slide.title, contentWidth);
      doc.text(subTitleLines, margin, currentY);
      currentY += subTitleLines.length * 5 + 2;

      if (slide.subtitle) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(100, 116, 139);
        const subLines = doc.splitTextToSize(cleanLatexForPdf(slide.subtitle), contentWidth);
        doc.text(subLines, margin, currentY);
        currentY += subLines.length * 4.2 + 2;
      }

      // Definition Block
      if (slide.definition) {
        const def = slide.definition;
        ensureSpace(28, activeSectionName);

        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(99, 102, 241);
        doc.setLineWidth(0.4);
        doc.roundedRect(margin, currentY, contentWidth, 24, 2, 2, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(79, 70, 229);
        doc.text(`DEFINITION: ${def.term}`, margin + 4, currentY + 5);

        if (def.standardReference) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7.5);
          doc.setTextColor(148, 163, 184);
          doc.text(`[${def.standardReference}]`, pageWidth - margin - 4, currentY + 5, { align: 'right' });
        }

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 41, 59);
        const formalLines = doc.splitTextToSize(cleanLatexForPdf(def.formalDefinition || def.formalText || ''), contentWidth - 8);
        doc.text(formalLines, margin + 4, currentY + 11);

        currentY += 28;
      }

      // Formula Block: Render with genuine MathJax LaTeX Typesetting
      if (slide.type === 'formula' || slide.formulaBlock || slide.equation) {
        const rawEq = slide.formulaBlock?.equation || slide.equation || '';
        const label = slide.formulaBlock?.label || 'Mathematical Relationship';

        ensureSpace(35, activeSectionName);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(99, 102, 241);
        doc.text(label.toUpperCase(), margin, currentY);
        currentY += 4;

        const eqImg = await latexToPngDataUrl(rawEq, contentWidth - 25, true);
        if (eqImg) {
          ensureSpace(eqImg.heightMm + 8, activeSectionName);
          const eqX = (pageWidth - eqImg.widthMm) / 2;
          doc.addImage(eqImg.dataUrl, 'PNG', eqX, currentY, eqImg.widthMm, eqImg.heightMm, undefined, 'FAST');
          currentY += eqImg.heightMm + 4;
        } else {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(10);
          doc.setTextColor(15, 23, 42);
          doc.text(cleanLatexForPdf(rawEq), pageWidth / 2, currentY + 4, { align: 'center' });
          currentY += 8;
        }

        const desc = slide.formulaBlock?.description || slide.equationDescription;
        if (desc) {
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(8);
          doc.setTextColor(71, 85, 105);
          const descLines = doc.splitTextToSize(cleanLatexForPdf(desc), contentWidth - 20);
          doc.text(descLines, pageWidth / 2, currentY, { align: 'center' });
          currentY += descLines.length * 3.8 + 2;
        }

        const symbols = slide.formulaBlock?.symbols || slide.symbols;
        if (symbols && symbols.length > 0) {
          renderPdfSymbolDefinitions(symbols, activeSectionName);
        }
      }

      // Figure Embedding
      if (slide.type === 'figure' && slide.figureKey) {
        const pngData = figurePngMap.get(slide.figureKey);
        if (pngData) {
          ensureSpace(95, activeSectionName);
          const imgWidth = contentWidth - 10;
          const imgHeight = 85;
          doc.addImage(pngData, 'PNG', margin + 5, currentY, imgWidth, imgHeight, undefined, 'FAST');
          currentY += imgHeight + 3;

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(71, 85, 105);
          doc.text(`Figure: ${slide.title}`, pageWidth / 2, currentY, { align: 'center' });
          currentY += 6;
        }
      }

      // Worked Numerical Example: Professional LaTeX Typesetting
      if (slide.workedExample) {
        const ex = slide.workedExample;
        ensureSpace(45, activeSectionName);

        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(203, 213, 225);
        doc.roundedRect(margin, currentY, contentWidth, 16, 2, 2, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(79, 70, 229);
        doc.text('WORKED NUMERICAL EXAMPLE & ANALYTICAL SOLUTION:', margin + 4, currentY + 5);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(15, 23, 42);
        const probLines = doc.splitTextToSize(cleanLatexForPdf(ex.problem), contentWidth - 8);
        doc.text(probLines, margin + 4, currentY + 10);
        currentY += 20;

        for (let sIdx = 0; sIdx < ex.steps.length; sIdx++) {
          const st = ex.steps[sIdx];
          ensureSpace(20, activeSectionName);

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(15, 23, 42);
          doc.text(`Step ${st.stepNumber || sIdx + 1}: ${st.title}`, margin + 4, currentY);
          currentY += 4.5;

          if (st.explanation) {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            doc.setTextColor(51, 65, 85);
            const expLines = doc.splitTextToSize(cleanLatexForPdf(st.explanation), contentWidth - 8);
            doc.text(expLines, margin + 4, currentY);
            currentY += expLines.length * 4 + 2;
          }

          if (st.math) {
            const mathImg = await latexToPngDataUrl(st.math, contentWidth - 20, true);
            if (mathImg) {
              ensureSpace(mathImg.heightMm + 6, activeSectionName);
              const mx = (pageWidth - mathImg.widthMm) / 2;
              doc.addImage(mathImg.dataUrl, 'PNG', mx, currentY, mathImg.widthMm, mathImg.heightMm, undefined, 'FAST');
              currentY += mathImg.heightMm + 4;
            } else {
              doc.setFont('courier', 'bold');
              doc.setFontSize(8.5);
              doc.setTextColor(79, 70, 229);
              doc.text(cleanLatexForPdf(st.math), margin + 6, currentY + 3);
              currentY += 7;
            }
          }
        }

        ensureSpace(12, activeSectionName);
        doc.setFillColor(236, 253, 245);
        doc.setDrawColor(52, 211, 153);
        doc.roundedRect(margin, currentY, contentWidth, 8, 2, 2, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(6, 95, 70);
        doc.text(`Answer: ${cleanLatexForPdf(ex.finalAnswer)}`, margin + 4, currentY + 5);
        currentY += 12;
      }

      // Smooth, Continuous Textbook Prose (NO bullet circles!)
      if (slide.bullets && slide.bullets.length > 0 && !slide.workedExample) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(51, 65, 85);

        slide.bullets.forEach((b) => {
          ensureSpace(8, activeSectionName);
          const cleanB = cleanLatexForPdf(b);
          const bLines = doc.splitTextToSize(cleanB, contentWidth);
          doc.text(bLines, margin, currentY);
          currentY += bLines.length * 4.3 + 3;
        });
        currentY += 2;
      }

      // Takeaway Callout
      if (slide.takeaway) {
        ensureSpace(12, activeSectionName);
        doc.setFillColor(238, 242, 255);
        doc.setDrawColor(199, 210, 254);
        doc.roundedRect(margin, currentY, contentWidth, 8, 2, 2, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(67, 56, 202);
        doc.text('Key Insight: ', margin + 3, currentY + 5);

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(30, 41, 59);
        const takText = doc.splitTextToSize(cleanLatexForPdf(slide.takeaway), contentWidth - 25);
        doc.text(takText, margin + 22, currentY + 5);
        currentY += 11;
      }
    }

    // Draw final page footer
    drawBookFooter();

    const safeFilename = `${chapter.code || chapter.id}_${chapter.shortTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Book_Chapter.pdf`;
    doc.save(safeFilename);
    if (onProgress) onProgress(totalSlides, totalSlides, 'Book Chapter PDF Complete!');
    return;
  }

  // =========================================================================
  // 2. SLIDE PRESENTATION DECK FORMAT (A4 LANDSCAPE 16:9)
  // =========================================================================
  if (layout === 'landscape') {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = 297;
    const pageHeight = 210;

    const drawHeader = (slide: SlideData, pageNum: number) => {
      doc.setFillColor(79, 70, 229);
      doc.rect(0, 0, pageWidth, 4, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(99, 102, 241);
      doc.text(`${chapter.unitNumber.toUpperCase()} · ${chapter.code || ''}`, 15, 10);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      const tag = slide.sectionTag || chapter.shortTitle;
      doc.text(tag.toUpperCase(), pageWidth - 15, 10, { align: 'right' });

      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(15, 12, pageWidth - 15, 12);
    };

    const drawFooter = (pageNum: number) => {
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.line(15, pageHeight - 12, pageWidth - 15, pageHeight - 12);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(`${chapter.unitNumber}: ${chapter.title}`, 15, pageHeight - 7);

      // Explicit credit to Er. Saroj Chalise on every slide footer
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text(`Er. Saroj Chalise`, pageWidth / 2, pageHeight - 7, { align: 'center' });

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(`Slide ${pageNum} of ${totalSlides}`, pageWidth - 15, pageHeight - 7, { align: 'right' });
    };

    for (let index = 0; index < totalSlides; index++) {
      const slide = slides[index];
      const pageNum = index + 1;

      if (onProgress) {
        onProgress(pageNum, totalSlides, `Generating Slide ${pageNum} of ${totalSlides}: "${slide.title}"`);
      }

      if (index > 0) doc.addPage('a4', 'landscape');

      drawHeader(slide, pageNum);
      drawFooter(pageNum);

      let currentY = 22;

      if (slide.type === 'title') {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(24);
        doc.setTextColor(15, 23, 42);
        doc.text(slide.title, pageWidth / 2, 70, { align: 'center' });

        if (slide.subtitle) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(14);
          doc.setTextColor(100, 116, 139);
          doc.text(slide.subtitle, pageWidth / 2, 85, { align: 'center' });
        }

        // Author Card on Title Slide
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(203, 213, 225);
        doc.roundedRect(pageWidth / 2 - 80, 105, 160, 48, 3, 3, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(79, 70, 229);
        doc.text('Er. Saroj Chalise', pageWidth / 2, 118, { align: 'center' });

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(51, 65, 85);
        doc.text('Department of Electrical & Instrumentation Engineering', pageWidth / 2, 126, { align: 'center' });
        doc.text('Reference Deck: chalisesaroj.github.io/slide', pageWidth / 2, 134, { align: 'center' });
        doc.text(`Module Code: ${chapter.code || 'IE-401'} · ${chapter.hours}`, pageWidth / 2, 142, { align: 'center' });
        continue;
      }

      if (slide.type === 'section-divider') {
        doc.setFillColor(238, 242, 255);
        doc.roundedRect(25, 45, pageWidth - 50, 115, 4, 4, 'F');
        doc.setFillColor(79, 70, 229);
        doc.rect(25, 45, 6, 115, 'F');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(79, 70, 229);
        doc.text(`SYLLABUS MODULE · ${slide.sectionTag || 'SECTION'}`, 40, 68);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(26);
        doc.setTextColor(15, 23, 42);
        const titleLines = doc.splitTextToSize(slide.title, pageWidth - 80);
        doc.text(titleLines, 40, 85);

        if (slide.takeaway) {
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(13);
          doc.setTextColor(71, 85, 105);
          const takeawayLines = doc.splitTextToSize(cleanLatexForPdf(slide.takeaway), pageWidth - 80);
          doc.text(takeawayLines, 40, 118);
        }
        continue;
      }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(15, 23, 42);
      const titleLines = doc.splitTextToSize(slide.title, pageWidth - 30);
      doc.text(titleLines, 15, currentY);
      currentY += titleLines.length * 7 + 2;

      if (slide.subtitle) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(100, 116, 139);
        const subLines = doc.splitTextToSize(cleanLatexForPdf(slide.subtitle), pageWidth - 30);
        doc.text(subLines, 15, currentY);
        currentY += subLines.length * 5 + 3;
      }

      if (slide.type === 'figure' && slide.figureKey) {
        const pngData = figurePngMap.get(slide.figureKey);
        if (pngData) {
          const imgWidth = pageWidth - 30;
          const imgHeight = Math.min(130, pageHeight - currentY - 25);
          doc.addImage(pngData, 'PNG', 15, currentY, imgWidth, imgHeight, undefined, 'FAST');
          currentY += imgHeight + 4;
        }

        if (slide.takeaway) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(9);
          doc.setTextColor(79, 70, 229);
          doc.text('Core Takeaway: ', 15, currentY + 3);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(51, 65, 85);
          const takLines = doc.splitTextToSize(cleanLatexForPdf(slide.takeaway), pageWidth - 60);
          doc.text(takLines, 42, currentY + 3);
        }
        continue;
      }

      if (slide.type === 'formula' || slide.formulaBlock || slide.equation) {
        const rawEq = slide.formulaBlock?.equation || slide.equation || '';
        const label = slide.formulaBlock?.label || 'Mathematical Relationship';

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(99, 102, 241);
        doc.text(label.toUpperCase(), 15, currentY + 4);
        currentY += 8;

        const eqImg = await latexToPngDataUrl(rawEq, pageWidth - 40, true);
        if (eqImg) {
          const eqX = (pageWidth - eqImg.widthMm) / 2;
          doc.addImage(eqImg.dataUrl, 'PNG', eqX, currentY, eqImg.widthMm, eqImg.heightMm, undefined, 'FAST');
          currentY += eqImg.heightMm + 6;
        } else {
          doc.setFont('courier', 'bold');
          doc.setFontSize(16);
          doc.setTextColor(15, 23, 42);
          doc.text(cleanLatexForPdf(rawEq), pageWidth / 2, currentY + 6, { align: 'center' });
          currentY += 14;
        }

        const desc = slide.formulaBlock?.description || slide.equationDescription;
        if (desc) {
          doc.setFont('helvetica', 'italic');
          doc.setFontSize(10);
          doc.setTextColor(71, 85, 105);
          const descLines = doc.splitTextToSize(cleanLatexForPdf(desc), pageWidth - 40);
          doc.text(descLines, pageWidth / 2, currentY, { align: 'center' });
          currentY += descLines.length * 5 + 4;
        }

        const symbols = slide.formulaBlock?.symbols || slide.symbols;
        if (symbols && symbols.length > 0) {
          doc.setDrawColor(226, 232, 240);
          doc.line(20, currentY, pageWidth - 20, currentY);
          currentY += 5;

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(148, 163, 184);
          doc.text('PARAMETER & SYMBOL DEFINITIONS:', 20, currentY);
          currentY += 5;

          symbols.slice(0, 4).forEach((sym) => {
            const symStr = cleanLatexForPdf(sym.symbol);
            const unitPart = sym.unit ? ` [${sym.unit}]` : '';
            const leftText = `${symStr} = ${sym.name}${unitPart}:`;

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(8.5);
            const leftLines = doc.splitTextToSize(leftText, 80);

            const descText = sym.description ? cleanLatexForPdf(sym.description) : '';
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8.5);
            const descLines = descText ? doc.splitTextToSize(descText, pageWidth - 130) : [];

            const numLines = Math.max(leftLines.length, descLines.length, 1);
            const rowH = numLines * 4.2 + 1.5;

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(8.5);
            doc.setTextColor(79, 70, 229);
            doc.text(leftLines, 20, currentY);

            if (descLines.length > 0) {
              doc.setFont('helvetica', 'normal');
              doc.setFontSize(8.5);
              doc.setTextColor(71, 85, 105);
              doc.text(descLines, 105, currentY);
            }

            currentY += rowH;
          });
        }
      }

      if (slide.workedExample) {
        const ex = slide.workedExample;
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(203, 213, 225);
        doc.roundedRect(15, currentY, pageWidth - 30, 24, 2, 2, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(79, 70, 229);
        doc.text('PROBLEM STATEMENT:', 20, currentY + 6);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(15, 23, 42);
        const probLines = doc.splitTextToSize(cleanLatexForPdf(ex.problem), pageWidth - 45);
        doc.text(probLines, 20, currentY + 12);
        currentY += 28;

        for (let sIdx = 0; sIdx < Math.min(ex.steps.length, 3); sIdx++) {
          const st = ex.steps[sIdx];
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(9);
          doc.setTextColor(15, 23, 42);
          doc.text(`Step ${st.stepNumber || sIdx + 1}: ${st.title}`, 20, currentY);
          currentY += 4.5;

          if (st.math) {
            const mathImg = await latexToPngDataUrl(st.math, pageWidth - 60, true);
            if (mathImg) {
              const mx = (pageWidth - mathImg.widthMm) / 2;
              doc.addImage(mathImg.dataUrl, 'PNG', mx, currentY, mathImg.widthMm, mathImg.heightMm, undefined, 'FAST');
              currentY += mathImg.heightMm + 4;
            } else {
              doc.setFont('courier', 'bold');
              doc.setFontSize(10);
              doc.setTextColor(79, 70, 229);
              doc.text(cleanLatexForPdf(st.math), 25, currentY + 3);
              currentY += 7;
            }
          }

          if (st.explanation) {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8.5);
            doc.setTextColor(71, 85, 105);
            const expLines = doc.splitTextToSize(cleanLatexForPdf(st.explanation), pageWidth - 55);
            doc.text(expLines, 20, currentY);
            currentY += expLines.length * 4.5 + 3;
          }
        }

        doc.setFillColor(236, 253, 245);
        doc.setDrawColor(52, 211, 153);
        doc.roundedRect(15, currentY, pageWidth - 30, 9, 2, 2, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(6, 95, 70);
        doc.text(`Final Result: ${cleanLatexForPdf(ex.finalAnswer)}`, 20, currentY + 6);
        currentY += 13;
      }

      if (slide.bullets && slide.bullets.length > 0 && !slide.workedExample) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10.5);
        doc.setTextColor(30, 41, 59);

        slide.bullets.forEach((bullet) => {
          if (currentY > pageHeight - 35) return;
          const cleanBullet = cleanLatexForPdf(bullet);
          const bulletLines = doc.splitTextToSize(cleanBullet, pageWidth - 36);
          doc.text(bulletLines, 18, currentY);
          currentY += bulletLines.length * 5.5 + 4;
        });
      }

      if (slide.takeaway && currentY < pageHeight - 25) {
        const takY = Math.max(currentY + 4, pageHeight - 28);
        doc.setFillColor(238, 242, 255);
        doc.setDrawColor(199, 210, 254);
        doc.roundedRect(15, takY - 3, pageWidth - 30, 9, 2, 2, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(67, 56, 202);
        doc.text('Key Takeaway: ', 20, takY + 3);

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(30, 41, 59);
        const takText = doc.splitTextToSize(cleanLatexForPdf(slide.takeaway), pageWidth - 65);
        doc.text(takText, 45, takY + 3);
      }
    }

    const safeFilename = `${chapter.code || chapter.id}_${chapter.shortTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Presentation.pdf`;
    doc.save(safeFilename);
    if (onProgress) onProgress(totalSlides, totalSlides, 'PDF Download Complete!');
    return;
  }

  // =========================================================================
  // 3. STUDENT STUDY HANDOUT FORMAT (A4 PORTRAIT)
  // =========================================================================
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const totalPages = Math.ceil(totalSlides / 2);

  for (let p = 0; p < totalPages; p++) {
    if (p > 0) doc.addPage('a4', 'portrait');

    doc.setFillColor(79, 70, 229);
    doc.rect(0, 0, pageWidth, 4, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(99, 102, 241);
    doc.text(`${chapter.unitNumber.toUpperCase()} · STUDENT STUDY HANDOUT`, 15, 10);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(148, 163, 184);
    doc.text(`Page ${p + 1} of ${totalPages}`, pageWidth - 15, 10, { align: 'right' });

    doc.setDrawColor(226, 232, 240);
    doc.line(15, 12, pageWidth - 15, 12);

    const firstIdx = p * 2;
    const secondIdx = p * 2 + 1;

    const renderHandoutSlide = async (slide: SlideData, startY: number, slideNum: number) => {
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(203, 213, 225);
      doc.roundedRect(15, startY, pageWidth - 30, 125, 3, 3, 'FD');

      doc.setFillColor(248, 250, 252);
      doc.roundedRect(15, startY, pageWidth - 30, 12, 3, 3, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(79, 70, 229);
      doc.text(`SLIDE ${slideNum}: ${slide.sectionTag || ''}`, 20, startY + 8);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor(15, 23, 42);
      const titleLines = doc.splitTextToSize(slide.title, pageWidth - 45);
      doc.text(titleLines, 20, startY + 20);

      let y = startY + 20 + titleLines.length * 5 + 3;

      if (slide.equation || slide.formulaBlock?.equation) {
        const rawEq = slide.formulaBlock?.equation || slide.equation || '';
        const eqImg = await latexToPngDataUrl(rawEq, pageWidth - 60, true);
        if (eqImg) {
          doc.addImage(eqImg.dataUrl, 'PNG', 20, y, eqImg.widthMm, eqImg.heightMm, undefined, 'FAST');
          y += eqImg.heightMm + 4;
        } else {
          const eq = cleanLatexForPdf(rawEq);
          doc.setFont('courier', 'bold');
          doc.setFontSize(11);
          doc.setTextColor(79, 70, 229);
          doc.text(eq, 25, y + 4);
          y += 9;
        }
      }

      if (slide.bullets && slide.bullets.length > 0) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(51, 65, 85);
        slide.bullets.slice(0, 4).forEach((b) => {
          const bLines = doc.splitTextToSize(cleanLatexForPdf(b), pageWidth - 45);
          doc.text(bLines, 20, y + 2);
          y += bLines.length * 4.2 + 2.5;
        });
      }

      const notesBoxY = startY + 88;
      doc.setFillColor(250, 250, 252);
      doc.setDrawColor(226, 232, 240);
      doc.rect(20, notesBoxY, pageWidth - 40, 30, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184);
      doc.text('STUDENT NOTES & ANNOTATIONS:', 22, notesBoxY + 5);

      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.2);
      doc.line(22, notesBoxY + 11, pageWidth - 22, notesBoxY + 11);
      doc.line(22, notesBoxY + 17, pageWidth - 22, notesBoxY + 17);
      doc.line(22, notesBoxY + 23, pageWidth - 22, notesBoxY + 23);
    };

    if (slides[firstIdx]) await renderHandoutSlide(slides[firstIdx], 18, firstIdx + 1);
    if (slides[secondIdx]) await renderHandoutSlide(slides[secondIdx], 152, secondIdx + 1);

    // Handout Footer with Er. Saroj Chalise credit
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(15, pageHeight - 12, pageWidth - 15, pageHeight - 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(`${chapter.unitNumber}: ${chapter.title}`, 15, pageHeight - 7);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text('Er. Saroj Chalise', pageWidth / 2, pageHeight - 7, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(`Page ${p + 1} of ${totalPages}`, pageWidth - 15, pageHeight - 7, { align: 'right' });
  }

  const safeFilename = `${chapter.code || chapter.id}_${chapter.shortTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Study_Handout.pdf`;
  doc.save(safeFilename);

  if (onProgress) {
    onProgress(totalSlides, totalSlides, 'PDF Download Complete!');
  }
}
