/**
 * Tutorial Worksheet PDF Exporter
 * Generates clean, printable A4 engineering tutorial worksheets containing
 * problem statements, given parameters, calibration data tables, and final answers.
 * Full step-by-step worked solutions remain password-protected inside the interactive web view.
 */

import { jsPDF } from 'jspdf';
import { ChapterTutorialSheet } from '../data/tutorialContent';
import { cleanLatexForPdf, renderLatexToPng } from './pdfExport';

export async function exportTutorialToPdf(
  sheet: ChapterTutorialSheet,
  onProgress?: (current: number, total: number, status: string) => void
): Promise<void> {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth(); // 210
  const pageH = doc.internal.pageSize.getHeight(); // 297
  const margin = 16;
  const contentW = pageW - margin * 2;
  let y = 18;

  const ensureSpace = (neededMm: number) => {
    if (y + neededMm > pageH - 18) {
      doc.addPage();
      y = 18;
    }
  };

  // Header Banner
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(203, 213, 225);
  doc.roundedRect(margin, y, contentW, 28, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(79, 70, 229);
  doc.text(`${sheet.courseCode.toUpperCase()}  ·  ${sheet.unitNumber.toUpperCase()} TUTORIAL WORKSHEET`, margin + 5, y + 7);

  doc.setFontSize(14);
  doc.setTextColor(15, 23, 42);
  doc.text(`${sheet.unitNumber}: ${sheet.chapterTitle}`, margin + 5, y + 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  const subLines = doc.splitTextToSize(sheet.subtitle, contentW - 10);
  doc.text(subLines.slice(0, 2), margin + 5, y + 20);

  y += 34;

  const total = sheet.problems.length;
  for (let i = 0; i < total; i++) {
    const p = sheet.problems[i];
    if (onProgress) {
      onProgress(i + 1, total, `Formatting ${p.number}: ${p.title.slice(0, 32)}...`);
    }

    ensureSpace(46);

    // Problem Title Bar
    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(margin, y, contentW, 9.5, 1.5, 1.5, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${p.number}. ${p.title}`, margin + 3.5, y + 6.2);

    doc.setFontSize(8.5);
    doc.setTextColor(79, 70, 229);
    doc.text(`${p.topic}  ·  ${p.marks} Marks`, pageW - margin - 3.5, y + 6.2, { align: 'right' });
    y += 13;

    // Problem Statement
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(30, 41, 59);
    const stmtLines = doc.splitTextToSize(cleanLatexForPdf(p.statement), contentW);
    ensureSpace(stmtLines.length * 4.5 + 6);
    doc.text(stmtLines, margin, y);
    y += stmtLines.length * 4.5 + 3;

    // Given Data Summary
    if (p.given.length > 0) {
      const givenText = p.given.map((g) => `${g.label}: ${g.value}`).join('   |   ');
      const givenLines = doc.splitTextToSize(`Given — ${givenText}`, contentW - 6);
      ensureSpace(givenLines.length * 4.2 + 5);
      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(226, 232, 240);
      doc.roundedRect(margin, y, contentW, givenLines.length * 4.2 + 4, 1, 1, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      doc.text(givenLines, margin + 3, y + 4.3);
      y += givenLines.length * 4.2 + 6.5;
    }

    // Data Table if present
    if (p.dataTable) {
      const cols = p.dataTable.headers.length;
      const colW = contentW / cols;
      const rowH = 6.2;
      const tableH = (p.dataTable.rows.length + 1) * rowH;
      ensureSpace(tableH + 8);

      if (p.dataTable.caption) {
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        doc.text(p.dataTable.caption, margin, y);
        y += 4;
      }

      // Header row
      doc.setFillColor(226, 232, 240);
      doc.setDrawColor(203, 213, 225);
      doc.rect(margin, y, contentW, rowH, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(15, 23, 42);
      p.dataTable.headers.forEach((h, cIdx) => {
        doc.text(cleanLatexForPdf(String(h)).slice(0, 26), margin + cIdx * colW + 2, y + 4.2);
      });
      y += rowH;

      // Body rows
      doc.setFont('helvetica', 'normal');
      p.dataTable.rows.forEach((row) => {
        doc.setFillColor(255, 255, 255);
        doc.rect(margin, y, contentW, rowH, 'FD');
        row.forEach((cell, cIdx) => {
          doc.text(cleanLatexForPdf(String(cell)).slice(0, 26), margin + cIdx * colW + 2, y + 4.2);
        });
        y += rowH;
      });
      y += 4;
    }

    // Formula Hint (optional LaTeX snippet rendered cleanly)
    const mathMatch = p.formulaHint.match(/\$([^$]+)\$/);
    if (mathMatch) {
      const png = await renderLatexToPng(mathMatch[1], contentW - 14, false);
      if (png) {
        ensureSpace(png.heightMm + 6);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);
        doc.text('Key Formula:', margin, y + 3.5);
        doc.addImage(png.dataUrl, 'PNG', margin + 22, y, png.widthMm, png.heightMm);
        y += png.heightMm + 3.5;
      }
    }

    // Final Answer Box (Written Answer Visible, Full Solution Remains Locked)
    const ansLines = doc.splitTextToSize(
      `Final Answer: ${cleanLatexForPdf(p.finalAnswerSummary)}`,
      contentW - 8
    );
    ensureSpace(ansLines.length * 4.3 + 8);
    doc.setFillColor(236, 253, 245);
    doc.setDrawColor(16, 185, 129);
    doc.roundedRect(margin, y, contentW, ansLines.length * 4.3 + 5, 1.5, 1.5, 'FD');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.8);
    doc.setTextColor(6, 95, 70);
    doc.text(ansLines, margin + 4, y + 4.8);
    y += ansLines.length * 4.3 + 10;
  }

  // Page Footers
  const pageCount = doc.getNumberOfPages();
  for (let p = 1; p <= pageCount; p++) {
    doc.setPage(p);
    doc.setDrawColor(226, 232, 240);
    doc.line(margin, pageH - 12, pageW - margin, pageH - 12);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Er. Saroj Chalise  ·  MEC 232: Instrumentation & Measurement  ·  Tutorial Sheet', margin, pageH - 7);
    doc.text(`Page ${p} of ${pageCount}`, pageW - margin, pageH - 7, { align: 'right' });
  }

  doc.save(`${sheet.chapterId.toUpperCase()}_Tutorial_Worksheet.pdf`);
}
