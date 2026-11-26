import React, { useState } from 'react';
import { ChapterConfig } from '../data/chaptersData';
import { CHAPTER_TUTORIALS } from '../data/tutorialContent';
import { TEXTBOOK_UNIT1_CHAPTER } from '../data/textbookUnit1';
import { exportChapterToPdf } from '../utils/pdfExport';
import { exportChapterToPptx } from '../utils/pptxExport';
import { exportTutorialToPdf } from '../utils/tutorialPdfExport';
import {
  Presentation,
  BookOpen,
  Calculator,
  FileDown,
  Eye,
  ExternalLink,
  Loader2
} from 'lucide-react';

export type HubMode = 'deck' | 'book' | 'tutorial';

interface ChapterDirectoryHubProps {
  mode: HubMode;
  chapters: ChapterConfig[];
  onViewChapter: (chapterId: string) => void;
}

const STATIC_PPTX_MAP: Record<string, string> = {
  unit1: 'Unit1_Fundamentals_of_Measurement_Systems.pptx',
  unit2: 'Unit2_Digital_Signal_Processing.pptx',
  unit3: 'Unit3_Strain_Gauges.pptx'
};

const STATIC_HTML_DECK_MAP: Record<string, string> = {
  unit1: 'chapter1_presentation.html',
  unit3: 'strain_gauges_presentation.html'
};

export const ChapterDirectoryHub: React.FC<ChapterDirectoryHubProps> = ({
  mode,
  chapters,
  onViewChapter
}) => {
  const [activeExport, setActiveExport] = useState<{
    key: string;
    label: string;
  } | null>(null);

  const isBusy = activeExport !== null;

  const handleDownloadSlidesPdf = async (ch: ChapterConfig) => {
    const key = `${ch.id}-slides-pdf`;
    try {
      setActiveExport({ key, label: `Preparing ${ch.unitNumber} Slides PDF...` });
      await exportChapterToPdf(ch, {
        layout: 'landscape',
        includeNotes: true,
        includeFigures: true,
        onProgress: (_cur, _tot, status) => {
          setActiveExport({ key, label: status });
        }
      });
    } catch (err) {
      console.error('Slides PDF export failed:', err);
    } finally {
      setActiveExport(null);
    }
  };

  const handleDownloadPptx = async (ch: ChapterConfig) => {
    const staticFile = STATIC_PPTX_MAP[ch.id];
    if (staticFile) {
      const link = document.createElement('a');
      link.href = staticFile;
      link.download = staticFile;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const key = `${ch.id}-pptx`;
    try {
      setActiveExport({ key, label: `Generating ${ch.unitNumber} PowerPoint (.pptx)...` });
      await exportChapterToPptx(ch, {
        includeNotes: true,
        onProgress: (_cur, _tot, status) => {
          setActiveExport({ key, label: status });
        }
      });
    } catch (err) {
      console.error('PPTX export failed:', err);
    } finally {
      setActiveExport(null);
    }
  };

  const handleDownloadBookPdf = async (ch: ChapterConfig) => {
    const key = `${ch.id}-book-pdf`;
    try {
      setActiveExport({ key, label: `Preparing ${ch.unitNumber} Book PDF...` });
      await exportChapterToPdf(ch, {
        layout: 'book',
        includeNotes: true,
        includeFigures: true,
        onProgress: (_cur, _tot, status) => {
          setActiveExport({ key, label: status });
        }
      });
    } catch (err) {
      console.error('Book PDF export failed:', err);
    } finally {
      setActiveExport(null);
    }
  };

  const handleDownloadTutorialPdf = async (ch: ChapterConfig) => {
    const sheet = CHAPTER_TUTORIALS[ch.id];
    if (!sheet) return;
    const key = `${ch.id}-tutorial-pdf`;
    try {
      setActiveExport({ key, label: `Generating ${ch.unitNumber} Tutorial PDF...` });
      await exportTutorialToPdf(sheet, (_cur, _tot, status) => {
        setActiveExport({ key, label: status });
      });
    } catch (err) {
      console.error('Tutorial PDF export failed:', err);
    } finally {
      setActiveExport(null);
    }
  };

  const headerConfig = {
    deck: {
      eyebrow: 'Lecture Presentations',
      title: 'Course Decks by Chapter',
      description:
        'Open any chapter in the interactive slide presenter or download complete slide decks in PowerPoint (.pptx) and PDF formats.',
      icon: Presentation,
      accentText: 'text-indigo-700',
      buttonPrimary: 'bg-indigo-600 hover:bg-indigo-700 text-white'
    },
    book: {
      eyebrow: 'Academic Textbook',
      title: 'Textbook Chapters & Reading Notes',
      description:
        'Read full chapter derivations, diagrams, and worked examples online, or download formatted A4 academic textbook PDFs.',
      icon: BookOpen,
      accentText: 'text-rose-700',
      buttonPrimary: 'bg-rose-600 hover:bg-rose-700 text-white'
    },
    tutorial: {
      eyebrow: 'Numerical Practice',
      title: 'Chapter Tutorial Worksheets',
      description:
        'View interactive tutorial problems with written final answers and password-protected full solutions, or download printable PDF worksheets.',
      icon: Calculator,
      accentText: 'text-emerald-700',
      buttonPrimary: 'bg-emerald-600 hover:bg-emerald-700 text-white'
    }
  }[mode];

  const HeaderIcon = headerConfig.icon;

  return (
    <section className="space-y-8 py-2">
      {/* Section Heading */}
      <div className="border-b border-slate-200 pb-6 space-y-2">
        <div className={`flex items-center gap-2 text-xs font-semibold tracking-wide ${headerConfig.accentText}`}>
          <HeaderIcon className="w-4 h-4" />
          <span>{headerConfig.eyebrow}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
          {headerConfig.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {headerConfig.description}
        </p>
      </div>

      {/* Live Export Progress Banner */}
      {activeExport && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-900 text-xs sm:text-sm font-medium">
          <Loader2 className="w-4 h-4 animate-spin text-indigo-600 shrink-0" />
          <span className="truncate">{activeExport.label}</span>
        </div>
      )}

      {/* Chapter Directory List */}
      <div className="space-y-4">
        {chapters.map((ch) => {
          const figureCount = Object.keys(ch.figures || {}).length;
          const sectionCount =
            ch.id === 'unit1'
              ? TEXTBOOK_UNIT1_CHAPTER.sections.length
              : ch.syllabusSections?.length || 0;
          const tutorialSheet = CHAPTER_TUTORIALS[ch.id];
          const htmlDeckPath = STATIC_HTML_DECK_MAP[ch.id];

          return (
            <div
              key={ch.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-colors hover:border-slate-300 flex flex-col lg:flex-row lg:items-center justify-between gap-5"
            >
              {/* Chapter Title & Unboxed Metadata */}
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500 font-medium tabular-nums">
                  <span className={`font-semibold ${headerConfig.accentText}`}>{ch.unitNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span>{ch.hours}</span>
                  {mode === 'deck' && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{ch.slides.length} Slides</span>
                      <span aria-hidden="true">·</span>
                      <span>{figureCount} Diagrams</span>
                    </>
                  )}
                  {mode === 'book' && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{sectionCount} Sections</span>
                      <span aria-hidden="true">·</span>
                      <span>{figureCount} Figures</span>
                    </>
                  )}
                  {mode === 'tutorial' && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>
                        {tutorialSheet
                          ? `${tutorialSheet.problems.length} Solved Numericals · ${tutorialSheet.estimatedTime}`
                          : 'Tutorial sheet upcoming'}
                      </span>
                    </>
                  )}
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {ch.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {tutorialSheet && mode === 'tutorial' ? tutorialSheet.subtitle : ch.summary}
                </p>
              </div>

              {/* View & Format-Specific Downloads */}
              <div className="flex items-center flex-wrap gap-2.5 shrink-0">
                {mode === 'deck' && (
                  <>
                    <button
                      onClick={() => onViewChapter(ch.id)}
                      className={`min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${headerConfig.buttonPrimary}`}
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Deck</span>
                    </button>

                    <button
                      onClick={() => handleDownloadPptx(ch)}
                      disabled={isBusy}
                      className="min-h-[42px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 disabled:opacity-50"
                      title={`Download ${ch.unitNumber} PowerPoint (.pptx)`}
                    >
                      <FileDown className="w-4 h-4 text-amber-600" />
                      <span>Download PPTX</span>
                    </button>

                    <button
                      onClick={() => handleDownloadSlidesPdf(ch)}
                      disabled={isBusy}
                      className="min-h-[42px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 disabled:opacity-50"
                      title={`Download ${ch.unitNumber} Slides as Widescreen PDF`}
                    >
                      <FileDown className="w-4 h-4 text-rose-600" />
                      <span>Download Slides PDF</span>
                    </button>

                    {htmlDeckPath && (
                      <a
                        href={htmlDeckPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[42px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                        title={`Open ${ch.unitNumber} standalone HTML Reveal.js deck`}
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                        <span>HTML Deck</span>
                      </a>
                    )}
                  </>
                )}

                {mode === 'book' && (
                  <>
                    <button
                      onClick={() => onViewChapter(ch.id)}
                      className={`min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${headerConfig.buttonPrimary}`}
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Book</span>
                    </button>

                    <button
                      onClick={() => handleDownloadBookPdf(ch)}
                      disabled={isBusy}
                      className="min-h-[42px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 disabled:opacity-50"
                      title={`Download ${ch.unitNumber} as A4 Textbook PDF`}
                    >
                      <FileDown className="w-4 h-4 text-rose-600" />
                      <span>Download Book PDF</span>
                    </button>
                  </>
                )}

                {mode === 'tutorial' && (
                  tutorialSheet ? (
                    <>
                      <button
                        onClick={() => onViewChapter(ch.id)}
                        className={`min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${headerConfig.buttonPrimary}`}
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Tutorial</span>
                      </button>

                      <button
                        onClick={() => handleDownloadTutorialPdf(ch)}
                        disabled={isBusy}
                        className="min-h-[42px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 disabled:opacity-50"
                        title={`Download ${ch.unitNumber} Tutorial Worksheet PDF`}
                      >
                        <FileDown className="w-4 h-4 text-emerald-600" />
                        <span>Download Tutorial PDF</span>
                      </button>
                    </>
                  ) : (
                    <span className="text-xs font-medium text-slate-400">
                      Upcoming
                    </span>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
