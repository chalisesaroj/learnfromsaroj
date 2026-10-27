import React, { useState } from 'react';
import { ChapterConfig, CHAPTERS } from '../data/chaptersData';
import { exportChapterToPdf } from '../utils/pdfExport';
import {
  FileDown,
  X,
  FileText,
  Layers,
  Sparkles,
  CheckCircle2,
  Printer,
  Sliders,
  Archive,
  Download,
  AlertCircle
} from 'lucide-react';
import JSZip from 'jszip';

export interface PdfDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentChapter: ChapterConfig;
  availableChapters: ChapterConfig[];
  onSelectChapter?: (id: string) => void;
  initialLayout?: 'book' | 'landscape' | 'handout';
}

export const PdfDownloadModal: React.FC<PdfDownloadModalProps> = ({
  isOpen,
  onClose,
  currentChapter,
  availableChapters = Object.values(CHAPTERS),
  onSelectChapter,
  initialLayout = 'book'
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(currentChapter.id);
  const [layout, setLayout] = useState<'book' | 'landscape' | 'handout'>(initialLayout);
  const [includeNotes, setIncludeNotes] = useState(true);
  const [includeFigures, setIncludeFigures] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [isExportingAll, setIsExportingAll] = useState(false);
  const [progressStatus, setProgressStatus] = useState<string>('');
  const [progressPercent, setProgressPercent] = useState<number>(0);

  if (!isOpen) return null;

  const targetChapter =
    availableChapters.find((c) => c.id === selectedChapterId) || currentChapter;

  const handleDownloadSinglePdf = async () => {
    try {
      setIsExporting(true);
      setProgressPercent(0);
      setProgressStatus('Initializing PDF document...');

      await exportChapterToPdf(targetChapter, {
        layout,
        includeNotes,
        includeFigures,
        onProgress: (current, total, status) => {
          setProgressStatus(status);
          if (total > 0) {
            setProgressPercent(Math.round((current / total) * 100));
          }
        }
      });

      setTimeout(() => {
        setIsExporting(false);
        setProgressStatus('');
        setProgressPercent(0);
        onClose();
      }, 800);
    } catch (err) {
      console.error('PDF export error:', err);
      setIsExporting(false);
      setProgressStatus('Export failed. Please try again.');
    }
  };

  const handleDownloadAllUnitsZip = async () => {
    try {
      setIsExportingAll(true);
      setProgressPercent(0);
      setProgressStatus('Building Master PDF Archive...');

      const zip = new JSZip();

      for (let i = 0; i < availableChapters.length; i++) {
        const ch = availableChapters[i];
        setProgressStatus(`Processing ${ch.unitNumber}: ${ch.shortTitle}... (${i + 1}/${availableChapters.length})`);
        setProgressPercent(Math.round(((i + 1) / availableChapters.length) * 100));

        // Use custom export to return doc or generate blob
        const { jsPDF } = await import('jspdf');
        const doc = new jsPDF({
          orientation: layout === 'landscape' ? 'landscape' : 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        // Basic summary page
        doc.setFontSize(22);
        doc.text(`${ch.unitNumber}: ${ch.title}`, 20, 30);
        doc.setFontSize(12);
        doc.text(`Instructor: ${ch.instructor}`, 20, 45);
        doc.text(`Total Slides: ${ch.slides.length}`, 20, 55);
        doc.text(`Reference: ${ch.referenceUrl || 'https://chalisesaroj.github.io/slide/'}`, 20, 65);

        ch.slides.slice(0, 50).forEach((s, idx) => {
          doc.addPage();
          doc.setFontSize(16);
          doc.text(`Slide ${idx + 1}: ${s.title}`, 20, 30);
          if (s.subtitle) {
            doc.setFontSize(10);
            doc.text(s.subtitle, 20, 40);
          }
          if (s.bullets) {
            doc.setFontSize(10);
            s.bullets.slice(0, 5).forEach((b, bIdx) => {
              doc.text(`• ${b}`, 25, 55 + bIdx * 8);
            });
          }
        });

        const pdfBlob = doc.output('blob');
        const filename = `${ch.unitNumber.replace(/\s+/g, '_')}_${ch.shortTitle.replace(/\s+/g, '_')}.pdf`;
        zip.file(filename, pdfBlob);
      }

      setProgressStatus('Compressing ZIP archive...');
      const zipContent = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipContent);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Instrumentation_All_Units_PDF_Bundle.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setIsExportingAll(false);
      setProgressStatus('');
      onClose();
    } catch (err) {
      console.error(err);
      setIsExportingAll(false);
      setProgressStatus('Failed to generate bundle.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Download Chapter PDF
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Generate high-resolution printable presentation slides or study handouts
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isExporting || isExportingAll}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {/* Chapter Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Select Chapter to Download:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableChapters.map((ch) => {
                const isSelected = ch.id === targetChapter.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => {
                      setSelectedChapterId(ch.id);
                      if (onSelectChapter) onSelectChapter(ch.id);
                    }}
                    disabled={isExporting}
                    className={`flex items-start gap-2.5 p-3 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500/60 text-rose-950 dark:text-rose-200 shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-rose-600 bg-rose-600 text-white'
                          : 'border-slate-400 dark:border-slate-600'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold text-xs uppercase text-rose-600 dark:text-rose-400">
                          {ch.unitNumber}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {ch.slides.length} slides
                        </span>
                      </div>
                      <div className="font-semibold text-xs text-slate-900 dark:text-white truncate">
                        {ch.shortTitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Format / Layout Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Select PDF Document Format (All formats credit Author Er. Saroj Chalise in page footer):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* Option 1: Textbook Book Chapter */}
              <div
                onClick={() => !isExporting && setLayout('book')}
                className={`cursor-pointer p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                  layout === 'book'
                    ? 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-500 text-rose-950 dark:text-rose-200 shadow-sm ring-1 ring-rose-500'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    Textbook Chapter
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  A4 portrait academic textbook format with section hierarchy, formulas, figures, worked examples, and author footer.
                </p>
                <span className="mt-2 text-[10px] font-semibold text-rose-600 dark:text-rose-400">
                  Recommended for study
                </span>
              </div>

              {/* Option 2: Landscape Deck */}
              <div
                onClick={() => !isExporting && setLayout('landscape')}
                className={`cursor-pointer p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                  layout === 'landscape'
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-500 text-indigo-950 dark:text-indigo-200 shadow-sm ring-1 ring-indigo-500'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    16:9 Presentation
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  1 slide per page in landscape format. Perfect for laptop viewing, tablets, and slide projectors.
                </p>
                <span className="mt-2 text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                  Slide projection
                </span>
              </div>

              {/* Option 3: Handout */}
              <div
                onClick={() => !isExporting && setLayout('handout')}
                className={`cursor-pointer p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                  layout === 'handout'
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-500 text-indigo-950 dark:text-indigo-200 shadow-sm ring-1 ring-indigo-500'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Printer className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    Study Handout
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                  2 slides per A4 page with student note-taking lines. Optimized for physical classroom printing.
                </p>
                <span className="mt-2 text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                  Classroom printout
                </span>
              </div>
            </div>
          </div>

          {/* Options Checkboxes */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Export Configuration:
            </span>
            <label className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={includeFigures}
                onChange={(e) => setIncludeFigures(e.target.checked)}
                disabled={isExporting}
                className="rounded border-slate-300 text-rose-600 focus:ring-rose-500 w-4 h-4"
              />
              <span>Render vector SVG figures into high-resolution graphics</span>
            </label>
            <label className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={includeNotes}
                onChange={(e) => setIncludeNotes(e.target.checked)}
                disabled={isExporting}
                className="rounded border-slate-300 text-rose-600 focus:ring-rose-500 w-4 h-4"
              />
              <span>Include core pedagogical takeaways and formula breakdowns</span>
            </label>
          </div>

          {/* Progress Indicator */}
          {(isExporting || isExportingAll) && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 space-y-2 animate-in fade-in">
              <div className="flex items-center justify-between text-xs font-semibold text-rose-900 dark:text-rose-200">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
                  {progressStatus || 'Generating PDF...'}
                </span>
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-rose-200 dark:bg-rose-900 overflow-hidden">
                <div
                  className="h-full bg-rose-600 transition-all duration-200 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleDownloadAllUnitsZip}
            disabled={isExporting || isExportingAll}
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
            title="Download PDF archive containing all 5 units"
          >
            <Archive className="w-4 h-4 text-slate-500" />
            <span>Download All Units (ZIP)</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              disabled={isExporting || isExportingAll}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDownloadSinglePdf}
              disabled={isExporting || isExportingAll}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-all shadow-lg shadow-rose-600/25 disabled:opacity-50"
            >
              <FileDown className="w-4 h-4" />
              <span>Download {targetChapter.unitNumber} PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
