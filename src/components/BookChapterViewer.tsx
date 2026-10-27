import React, { useState, useMemo, useEffect } from 'react';
import { ChapterConfig } from '../data/chaptersData';
import { SlideData } from '../types/chapterDeck';
import { FormattedMathText } from './FormattedMathText';
import { MathRenderer } from './MathRenderer';
import { exportChapterToPdf } from '../utils/pdfExport';
import { TEXTBOOK_UNIT1_CHAPTER } from '../data/textbookUnit1';
import {
  BookOpen,
  FileDown,
  Printer,
  ChevronRight,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  HelpCircle,
  Clock,
  Layers,
  ArrowUp,
  Maximize2,
  Search,
  BookMarked,
  Hash,
  Compass,
  FileText
} from 'lucide-react';

export interface BookChapterViewerProps {
  chapter: ChapterConfig;
  availableChapters?: ChapterConfig[];
  onChapterChange?: (chapterId: string) => void;
  onOpenPdfModal?: (initialLayout?: 'book' | 'landscape' | 'handout') => void;
}

type ReadingTheme = 'clean' | 'warm' | 'dark';
type FontSize = 'sm' | 'base' | 'lg' | 'xl';

export const BookChapterViewer: React.FC<BookChapterViewerProps> = ({
  chapter,
  availableChapters = [],
  onChapterChange,
  onOpenPdfModal
}) => {
  const [theme, setTheme] = useState<ReadingTheme>('clean');
  const [fontSize, setFontSize] = useState<FontSize>('base');
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [pdfProgress, setPdfProgress] = useState<string>('');
  const [selectedZoomFigure, setSelectedZoomFigure] = useState<{
    key: string;
    caption: string;
    svgContent: string;
  } | null>(null);

  const isUnit1 = chapter.id === 'unit1';

  // Group slides by section tag for non-Unit 1 chapters
  const sectionGroups = useMemo(() => {
    if (isUnit1) {
      return TEXTBOOK_UNIT1_CHAPTER.sections.map((sec) => ({
        tag: `Section ${sec.number}`,
        id: `sec-${sec.number.replace('.', '-')}`,
        number: sec.number,
        title: `${sec.number} ${sec.title}`,
        hours: sec.hours,
        abstract: sec.abstract,
        sectionData: sec,
        slides: [] as SlideData[],
        syllabusInfo: undefined as (typeof chapter.syllabusSections)[0] | undefined
      }));
    }

    const groups: {
      tag: string;
      id: string;
      number: string;
      title: string;
      hours?: string;
      abstract?: string;
      slides: SlideData[];
      syllabusInfo?: (typeof chapter.syllabusSections)[0];
    }[] = [];

    const tagMap = new Map<string, SlideData[]>();

    chapter.slides.forEach((slide) => {
      if (slide.type === 'title' && !slide.sectionTag) return;
      const rawTag = slide.sectionTag || 'Overview & Foundations';
      if (!tagMap.has(rawTag)) {
        tagMap.set(rawTag, []);
      }
      tagMap.get(rawTag)!.push(slide);
    });

    tagMap.forEach((slidesInGroup, tag) => {
      const sectionNumMatch = tag.match(/(\d+\.\d+)/);
      const secNum = sectionNumMatch ? sectionNumMatch[1] : '';
      const syllabusInfo = chapter.syllabusSections?.find(
        (s) => s.number === secNum || tag.toLowerCase().includes(s.title.toLowerCase())
      );

      let sectionTitle = tag;
      if (syllabusInfo) {
        sectionTitle = `${syllabusInfo.number} ${syllabusInfo.title}`;
      }

      groups.push({
        tag,
        id: `sec-${tag.replace(/[^a-zA-Z0-9]/g, '-')}`,
        number: syllabusInfo?.number || '',
        title: sectionTitle,
        hours: syllabusInfo?.hours,
        slides: slidesInGroup,
        syllabusInfo
      });
    });

    return groups;
  }, [chapter, isUnit1]);

  // Set default active section
  useEffect(() => {
    if (sectionGroups.length > 0 && !activeSectionId) {
      setActiveSectionId(sectionGroups[0].id);
    }
  }, [sectionGroups, activeSectionId]);

  // Track scrolling to highlight active section in sidebar TOC
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (let i = sectionGroups.length - 1; i >= 0; i--) {
        const secId = sectionGroups[i].id;
        const el = document.getElementById(secId);
        if (el && el.offsetTop <= scrollY) {
          setActiveSectionId(secId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionGroups]);

  const scrollToSection = (secId: string) => {
    setActiveSectionId(secId);
    const el = document.getElementById(secId);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleDirectDownloadBookPdf = async () => {
    try {
      setIsDownloadingPdf(true);
      setPdfProgress('Generating academic book chapter PDF with high-DPI LaTeX formulas...');
      await exportChapterToPdf(chapter, {
        layout: 'book',
        includeNotes: true,
        includeFigures: true,
        onProgress: (curr, total, status) => {
          setPdfProgress(status);
        }
      });
      setTimeout(() => {
        setIsDownloadingPdf(false);
        setPdfProgress('');
      }, 700);
    } catch (err) {
      console.error('Book PDF export failed:', err);
      setIsDownloadingPdf(false);
      setPdfProgress('Export failed. Please try again.');
    }
  };

  // Typography font size mapping
  const fontClasses = useMemo(() => {
    switch (fontSize) {
      case 'sm':
        return 'text-xs sm:text-sm leading-relaxed';
      case 'lg':
        return 'text-base sm:text-lg leading-relaxed';
      case 'xl':
        return 'text-lg sm:text-xl leading-loose';
      case 'base':
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  }, [fontSize]);

  // Theme styling configurations
  const themeStyles = useMemo(() => {
    switch (theme) {
      case 'warm':
        return {
          wrapper: 'bg-[#faf6ee] text-[#2c2416]',
          headerBg: 'bg-[#f4ece0]/90 border-[#e5d8c3]',
          paperBg: 'bg-[#fffcf7] border-[#e7dac7] shadow-sm',
          sidebarBg: 'bg-[#f5ede2]/80 border-[#e3d5bf]',
          calloutBg: 'bg-[#f3eadb] border-[#decbb2]',
          borderLine: 'border-[#e4d6c1]',
          subtleText: 'text-[#7d6b52]'
        };
      case 'dark':
        return {
          wrapper: 'bg-slate-950 text-slate-100',
          headerBg: 'bg-slate-900/90 border-slate-800',
          paperBg: 'bg-slate-900/90 border-slate-800 shadow-md',
          sidebarBg: 'bg-slate-900/80 border-slate-800',
          calloutBg: 'bg-slate-800/60 border-slate-700',
          borderLine: 'border-slate-800',
          subtleText: 'text-slate-400'
        };
      case 'clean':
      default:
        return {
          wrapper: 'bg-slate-50 text-slate-900',
          headerBg: 'bg-white/90 border-slate-200',
          paperBg: 'bg-white border-slate-200/90 shadow-sm',
          sidebarBg: 'bg-slate-100/70 border-slate-200',
          calloutBg: 'bg-slate-50 border-slate-200',
          borderLine: 'border-slate-200',
          subtleText: 'text-slate-500'
        };
    }
  }, [theme]);

  // Aggregate statistics
  const totalFormulas = useMemo(() => {
    if (isUnit1) return 10;
    return chapter.slides.filter((s) => s.type === 'formula' || s.formulaBlock || s.equation).length;
  }, [chapter, isUnit1]);

  const totalFigures = useMemo(() => {
    return Object.keys(chapter.figures || {}).length;
  }, [chapter]);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${themeStyles.wrapper}`}>
      {/* Top Floating Control Bar */}
      <div
        className={`sticky top-0 z-30 backdrop-blur-md border-b ${themeStyles.headerBg} transition-all duration-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 flex-wrap">
          {/* Chapter Selector & Navigation Breadcrumb */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center gap-1 shadow-xs">
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Textbook</span>
              </span>
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {chapter.unitNumber}: {chapter.shortTitle}
              </span>
            </div>

            {availableChapters.length > 1 && onChapterChange && (
              <select
                value={chapter.id}
                onChange={(e) => onChapterChange(e.target.value)}
                className="text-xs font-medium py-1 px-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                {availableChapters.map((ch) => (
                  <option key={ch.id} value={ch.id}>
                    {ch.unitNumber}: {ch.shortTitle}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Reading Customization Controls */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* Direct Book PDF Download Button */}
            <button
              onClick={handleDirectDownloadBookPdf}
              disabled={isDownloadingPdf}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-xs disabled:opacity-50"
              title="Download this complete academic chapter as an A4 Book PDF"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{isDownloadingPdf ? 'Generating PDF...' : 'Download Book (PDF)'}</span>
            </button>

            {onOpenPdfModal && (
              <button
                onClick={() => onOpenPdfModal('book')}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-all"
                title="Open Advanced PDF Export Settings"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden sm:inline">PDF Options</span>
              </button>
            )}

            {/* Reading Theme Toggle */}
            <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => setTheme('clean')}
                className={`px-2 py-1 rounded-md font-medium transition-all ${
                  theme === 'clean'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Clean Modern Theme"
              >
                Clean
              </button>
              <button
                onClick={() => setTheme('warm')}
                className={`px-2 py-1 rounded-md font-medium transition-all ${
                  theme === 'warm'
                    ? 'bg-[#f6efe0] text-amber-950 font-bold shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Warm Paper Theme (Book-style)"
              >
                Paper
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`px-2 py-1 rounded-md font-medium transition-all ${
                  theme === 'dark'
                    ? 'bg-slate-950 text-white font-bold shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Night Mode"
              >
                Dark
              </button>
            </div>

            {/* Font size toggles */}
            <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-1.5 py-1 rounded text-[11px] font-bold ${fontSize === 'sm' ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}
                title="Small text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-1 rounded text-xs font-bold ${fontSize === 'base' ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}
                title="Default text size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 rounded text-sm font-bold ${fontSize === 'lg' ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}
                title="Large text"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`px-2 py-1 rounded text-base font-bold ${fontSize === 'xl' ? 'bg-indigo-600 text-white' : 'text-slate-500'}`}
                title="Extra large text"
              >
                A++
              </button>
            </div>
          </div>
        </div>

        {/* PDF Generation Status Banner if in progress */}
        {isDownloadingPdf && (
          <div className="bg-indigo-50 dark:bg-indigo-950/80 border-t border-indigo-200 dark:border-indigo-900 px-4 py-2 text-xs font-semibold text-indigo-800 dark:text-indigo-200 flex items-center justify-center gap-2 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            <span>{pdfProgress || 'Building A4 textbook PDF with vector LaTeX equations...'}</span>
          </div>
        )}
      </div>

      {/* Main Grid: Sticky Sidebar TOC + Scrollable Textbook Prose */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Sticky Table of Contents (Desktop lg:col-span-3) */}
          {/* ========================================================= */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-4">
            <div className={`p-4 rounded-2xl border ${themeStyles.sidebarBg} backdrop-blur-md shadow-xs`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-3">
                <div className="flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Chapter Contents
                  </span>
                </div>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                  {sectionGroups.length} Sections
                </span>
              </div>

              {/* Quick Jump List */}
              <nav className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 scrollbar-thin text-xs">
                {sectionGroups.map((sec, idx) => {
                  const isActive = activeSectionId === sec.id;
                  return (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-2.5 py-2 rounded-lg transition-all flex items-start gap-2 group ${
                        isActive
                          ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-bold border-l-3 border-indigo-600 shadow-xs'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <span
                        className={`text-[10px] font-mono mt-0.5 shrink-0 px-1 py-0.2 rounded ${
                          isActive
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {sec.number || `${idx + 1}`}
                      </span>
                      <span className="line-clamp-2 leading-tight">
                        {sec.title}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Author Attribution Card in Sidebar */}
              <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-[11px] space-y-1">
                <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Instructor & Author:</span>
                </div>
                <div className="font-extrabold text-indigo-600 dark:text-indigo-400 text-xs">
                  Er. Saroj Chalise
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-[10px]">
                  Dept. of Electrical & Instrumentation Engineering
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleDirectDownloadBookPdf}
                    className="w-full py-1.5 px-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold transition-all shadow-xs flex items-center justify-center gap-1"
                  >
                    <FileDown className="w-3 h-3" />
                    <span>Download Book PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: The Academic Textbook Chapter Article Body   */}
          {/* ========================================================= */}
          <main className="lg:col-span-9 space-y-10">
            {/* Textbook Chapter Opener Page */}
            <article
              className={`p-6 sm:p-10 rounded-3xl border ${themeStyles.paperBg} transition-all duration-200 relative overflow-hidden`}
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500" />

              {/* Header Meta */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    <span>Course Module</span>
                    <span>•</span>
                    <span>{chapter.unitNumber}</span>
                    <span>•</span>
                    <span>{chapter.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                      {chapter.code}
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  {chapter.title}
                </h1>

                {/* Author Credit Banner */}
                <div className="flex items-center gap-3 pt-2 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                    SC
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>Er. Saroj Chalise</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        Lead Author & Curriculum Engineer
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Department of Electrical & Instrumentation Engineering • Reference Slides:{' '}
                      <a
                        href={chapter.referenceUrl || 'https://chalisesaroj.github.io/slide/'}
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        chalisesaroj.github.io/slide
                      </a>
                    </p>
                  </div>
                </div>

                {/* Chapter Abstract / Overview */}
                <div className={`p-4 sm:p-5 rounded-2xl ${themeStyles.calloutBg} border ${themeStyles.borderLine} space-y-2`}>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    <Compass className="w-4 h-4" />
                    <span>Chapter Abstract & Scope</span>
                  </div>
                  <p className={`text-slate-700 dark:text-slate-300 ${fontClasses}`}>
                    {isUnit1 ? TEXTBOOK_UNIT1_CHAPTER.overview : chapter.summary}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-700/60">
                      <div className="font-extrabold text-slate-900 dark:text-white text-base">
                        {sectionGroups.length}
                      </div>
                      <div className="text-slate-500 text-[11px]">Syllabus Topics</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-700/60">
                      <div className="font-extrabold text-indigo-600 dark:text-indigo-400 text-base">
                        {chapter.slides.length}
                      </div>
                      <div className="text-slate-500 text-[11px]">Concept Units</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-700/60">
                      <div className="font-extrabold text-emerald-600 dark:text-emerald-400 text-base">
                        {totalFormulas}
                      </div>
                      <div className="text-slate-500 text-[11px]">Formulas & Laws</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-700/60">
                      <div className="font-extrabold text-rose-600 dark:text-rose-400 text-base">
                        {totalFigures}
                      </div>
                      <div className="text-slate-500 text-[11px]">Technical Figures</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* ========================================================= */}
            {/* CASE 1: UNIT 1 - FULL ACADEMIC TEXTBOOK CHAPTER PROSE     */}
            {/* ========================================================= */}
            {isUnit1 ? (
              TEXTBOOK_UNIT1_CHAPTER.sections.map((sec, secIdx) => {
                const secId = `sec-${sec.number.replace('.', '-')}`;

                return (
                  <section
                    key={secIdx}
                    id={secId}
                    className={`p-6 sm:p-10 rounded-3xl border ${themeStyles.paperBg} space-y-8 scroll-mt-24 transition-all duration-200`}
                  >
                    {/* Section Header */}
                    <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-5">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800">
                          Section {sec.number}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{sec.hours}</span>
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {sec.title}
                      </h2>
                    </div>

                    {/* Section Abstract Callout */}
                    {sec.abstract && (
                      <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic">
                        <strong>Curriculum Scope:</strong> <FormattedMathText text={sec.abstract} />
                      </div>
                    )}

                    {/* Section Narrative Lead-in Paragraphs (Smooth, continuous, no bullets!) */}
                    {sec.paragraphs && sec.paragraphs.length > 0 && (
                      <div className="space-y-4">
                        {sec.paragraphs.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            className={`${fontClasses} leading-relaxed text-slate-800 dark:text-slate-200 text-justify`}
                          >
                            <FormattedMathText text={p} />
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Subsections */}
                    <div className="space-y-10 pt-4">
                      {sec.subsections.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          className="space-y-4 pb-8 border-b border-slate-100 dark:border-slate-800/60 last:border-0 last:pb-0"
                        >
                          {/* Subsection Heading */}
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="w-1.5 h-4 rounded-full bg-indigo-600 shrink-0" />
                            <span>{sub.number} {sub.title}</span>
                          </h3>

                          {/* Subsection Paragraphs (Smooth, continuous textbook prose) */}
                          <div className="space-y-3.5">
                            {sub.paragraphs.map((p, pIdx) => (
                              <p
                                key={pIdx}
                                className={`${fontClasses} leading-relaxed text-slate-800 dark:text-slate-200 text-justify`}
                              >
                                <FormattedMathText text={p} />
                              </p>
                            ))}
                          </div>

                          {/* Mathematical Formula Display (Open, free, clean whitespace, NO boxes) */}
                          {sub.equation && (
                            <div className="py-3 space-y-2">
                              <MathRenderer
                                math={sub.equation.tex}
                                display={true}
                                label={sub.equation.label}
                                description={sub.equation.description}
                                symbols={sub.equation.symbols}
                              />
                            </div>
                          )}

                          {/* Post-Equation Paragraphs */}
                          {sub.postEquationParagraphs && sub.postEquationParagraphs.length > 0 && (
                            <div className="space-y-3.5 pt-1">
                              {sub.postEquationParagraphs.map((p, pIdx) => (
                                <p
                                  key={pIdx}
                                  className={`${fontClasses} leading-relaxed text-slate-800 dark:text-slate-200 text-justify`}
                                >
                                  <FormattedMathText text={p} />
                                </p>
                              ))}
                            </div>
                          )}

                          {/* Second Equation if present */}
                          {sub.secondEquation && (
                            <div className="py-3 space-y-2">
                              <MathRenderer
                                math={sub.secondEquation.tex}
                                display={true}
                                label={sub.secondEquation.label}
                                description={sub.secondEquation.description}
                                symbols={sub.secondEquation.symbols}
                              />
                            </div>
                          )}

                          {/* Concluding Paragraphs if present */}
                          {sub.concludingParagraphs && sub.concludingParagraphs.length > 0 && (
                            <div className="space-y-3.5 pt-1">
                              {sub.concludingParagraphs.map((p, pIdx) => (
                                <p
                                  key={pIdx}
                                  className={`${fontClasses} leading-relaxed text-slate-800 dark:text-slate-200 text-justify`}
                                >
                                  <FormattedMathText text={p} />
                                </p>
                              ))}
                            </div>
                          )}

                          {/* Technical Vector Diagram if referenced */}
                          {sub.figureRef && chapter.figures?.[sub.figureRef] && (
                            <div className="my-6 space-y-2">
                              <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm relative group overflow-hidden">
                                <div
                                  className="w-full flex items-center justify-center max-h-[380px] overflow-hidden cursor-pointer"
                                  onClick={() =>
                                    setSelectedZoomFigure({
                                      key: sub.figureRef!,
                                      caption: sub.figureCaption || chapter.figures[sub.figureRef!].title || 'Technical Diagram',
                                      svgContent: chapter.figures[sub.figureRef!].svgContent
                                    })
                                  }
                                  dangerouslySetInnerHTML={{
                                    __html: chapter.figures[sub.figureRef].svgContent
                                  }}
                                />
                                <button
                                  onClick={() =>
                                    setSelectedZoomFigure({
                                      key: sub.figureRef!,
                                      caption: sub.figureCaption || chapter.figures[sub.figureRef!].title || 'Technical Diagram',
                                      svgContent: chapter.figures[sub.figureRef!].svgContent
                                    })
                                  }
                                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/70 text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs flex items-center gap-1 backdrop-blur-xs"
                                  title="Enlarge Figure"
                                >
                                  <Maximize2 className="w-3.5 h-3.5" />
                                  <span>Enlarge</span>
                                </button>
                              </div>
                              <div className="text-center">
                                <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                                  {sub.figureCaption || chapter.figures[sub.figureRef].title}
                                </p>
                                <p className="text-[11px] text-slate-400 dark:text-slate-500">
                                  Vector schematic illustration • Er. Saroj Chalise
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Bullet List ONLY where strictly appropriate (e.g. equipment specifications) */}
                          {sub.bulletList && sub.bulletList.items.length > 0 && (
                            <div className="my-3 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-2">
                              {sub.bulletList.title && (
                                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                                  {sub.bulletList.title}
                                </div>
                              )}
                              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                {sub.bulletList.items.map((it, itIdx) => (
                                  <li key={itIdx} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                                    <span><FormattedMathText text={it} /></span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Key Takeaway Callout Box */}
                          {sub.keyTakeaway && (
                            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 space-y-1">
                              <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                                <Lightbulb className="w-4 h-4 text-amber-500" />
                                <span>Core Engineering Principle</span>
                              </div>
                              <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                                <FormattedMathText text={sub.keyTakeaway} />
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Section Worked Numerical Example */}
                    {sec.workedExample && (
                      <div className="mt-8 p-5 sm:p-7 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/60 space-y-5">
                        <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider pb-3 border-b border-indigo-100 dark:border-indigo-900/60">
                          <GraduationCap className="w-4 h-4 text-indigo-600" />
                          <span>Worked Numerical Example & Analytical Derivation: {sec.workedExample.title}</span>
                        </div>

                        {/* Problem Statement */}
                        <div className="space-y-1">
                          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Problem Statement:</div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                            <FormattedMathText text={sec.workedExample.problem} />
                          </p>
                        </div>

                        {/* Step by Step Breakdown */}
                        <div className="space-y-4 pt-2">
                          {sec.workedExample.steps.map((st, stIdx) => (
                            <div key={stIdx} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
                              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs flex items-center justify-center font-bold shrink-0">
                                  {st.stepNumber}
                                </span>
                                <span>{st.title}</span>
                              </div>
                              {st.explanation && (
                                <p className="text-xs text-slate-600 dark:text-slate-300">
                                  <FormattedMathText text={st.explanation} />
                                </p>
                              )}
                              {st.math && (
                                <div className="py-1">
                                  <MathRenderer math={st.math} display={true} />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Final Result Callout */}
                        <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 flex items-center justify-between gap-3 flex-wrap">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                            Final Analytical Result:
                          </span>
                          <span className="font-mono font-extrabold text-sm text-emerald-700 dark:text-emerald-300">
                            <FormattedMathText text={sec.workedExample.finalAnswer} />
                          </span>
                        </div>

                        {/* Practical Insight */}
                        {sec.workedExample.practicalInsight && (
                          <p className="text-xs text-slate-600 dark:text-slate-400 italic pt-1">
                            <strong>Practical Workshop Insight:</strong> {sec.workedExample.practicalInsight}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Board Examination & Review Questions */}
                    {sec.examQuestions && sec.examQuestions.length > 0 && (
                      <div className="mt-6 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                          <CheckCircle2 className="w-4 h-4 text-purple-600" />
                          <span>Board Examination Review Questions</span>
                        </div>
                        <div className="space-y-2">
                          {sec.examQuestions.map((q, qIdx) => (
                            <div key={qIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                              <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                {qIdx + 1}
                              </span>
                              <p className="leading-relaxed"><FormattedMathText text={q} /></p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </section>
                );
              })
            ) : (
              // =========================================================
              // CASE 2: GENERAL CHAPTERS (UNITS 2-5)
              // =========================================================
              sectionGroups.map((group, gIdx) => {
                const secId = group.id;
                const syllabus = group.syllabusInfo;

                return (
                  <section
                    key={gIdx}
                    id={secId}
                    className={`p-6 sm:p-10 rounded-3xl border ${themeStyles.paperBg} space-y-8 scroll-mt-24 transition-all duration-200`}
                  >
                    {/* Section Title Header */}
                    <div className="space-y-2 border-b border-slate-200 dark:border-slate-800 pb-5">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800">
                          Section {syllabus?.number || `${gIdx + 1}.0`}
                        </span>
                        {syllabus?.hours && (
                          <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{syllabus.hours}</span>
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {syllabus?.title || group.tag}
                      </h2>
                      {syllabus?.specificObjective && (
                        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 italic">
                          <strong>Specific Learning Objective:</strong> {syllabus.specificObjective}
                        </p>
                      )}
                    </div>

                    {/* Section Slides Rendered as Continuous Textbook Prose */}
                    <div className="space-y-8">
                      {group.slides?.map((slide, sIdx) => {
                        return (
                          <div
                            key={sIdx}
                            className="space-y-5 pb-6 border-b border-slate-100 dark:border-slate-800/60 last:border-0 last:pb-0"
                          >
                            {/* Slide Sub-heading */}
                            {slide.title && (
                              <div className="space-y-1">
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                  <span className="w-1.5 h-4 rounded-full bg-indigo-600 shrink-0" />
                                  <span>{slide.title}</span>
                                </h3>
                                {slide.subtitle && (
                                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium pl-3.5">
                                    <FormattedMathText text={slide.subtitle} />
                                  </p>
                                )}
                              </div>
                            )}

                            {/* Definition Callout Box if present */}
                            {slide.definition && (
                              <div
                                className={`p-5 rounded-2xl ${themeStyles.calloutBg} border-l-4 border-indigo-600 border-y border-r ${themeStyles.borderLine} space-y-2.5`}
                              >
                                <div className="flex items-center gap-2">
                                  <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                                    Standard Engineering Definition: {slide.definition.term}
                                  </span>
                                </div>
                                <p className={`font-semibold text-slate-900 dark:text-white ${fontClasses}`}>
                                  <FormattedMathText
                                    text={
                                      slide.definition.formalDefinition ||
                                      slide.definition.formalText ||
                                      ''
                                    }
                                  />
                                </p>
                              </div>
                            )}

                            {/* Smooth, Continuous Textbook Prose */}
                            {slide.bullets && slide.bullets.length > 0 && (
                              <div className="space-y-3.5">
                                {slide.bullets.map((bullet, bIdx) => {
                                  const leadInMatch = bullet.match(/^((?:\d+\.|\bStep\s+\d+:|[A-Z][A-Za-z0-9\s/&—\-]+:))(.*)$/);
                                  if (leadInMatch) {
                                    return (
                                      <p
                                        key={bIdx}
                                        className={`${fontClasses} leading-relaxed text-slate-800 dark:text-slate-200 text-justify`}
                                      >
                                        <strong className="text-slate-900 dark:text-white font-bold mr-1.5">
                                          <FormattedMathText text={leadInMatch[1]} />
                                        </strong>
                                        <FormattedMathText text={leadInMatch[2].trim()} />
                                      </p>
                                    );
                                  }
                                  return (
                                    <p
                                      key={bIdx}
                                      className={`${fontClasses} leading-relaxed text-slate-800 dark:text-slate-200 text-justify`}
                                    >
                                      <FormattedMathText text={bullet} />
                                    </p>
                                  );
                                })}
                              </div>
                            )}

                            {/* Mathematical Formula Display (Clean, Open, Free, No Boxes) */}
                            {(slide.formulaBlock?.equation || slide.equation) && (
                              <div className="py-2 space-y-2">
                                <MathRenderer
                                  math={slide.formulaBlock?.equation || slide.equation || ''}
                                  display={true}
                                  label={slide.formulaBlock?.label || (slide.equation ? 'Equation' : undefined)}
                                  description={slide.formulaBlock?.description || slide.equationDescription}
                                  symbols={slide.formulaBlock?.symbols || slide.symbols}
                                />
                              </div>
                            )}

                            {/* Embedded Vector Figure */}
                            {slide.figureKey && chapter.figures?.[slide.figureKey] && (
                              <div className="my-6 space-y-2">
                                <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm relative group overflow-hidden">
                                  <div
                                    className="w-full flex items-center justify-center max-h-[380px] overflow-hidden cursor-pointer"
                                    onClick={() =>
                                      setSelectedZoomFigure({
                                        key: slide.figureKey!,
                                        caption: chapter.figures[slide.figureKey!].title || slide.figureCaption || 'Technical Diagram',
                                        svgContent: chapter.figures[slide.figureKey!].svgContent
                                      })
                                    }
                                    dangerouslySetInnerHTML={{
                                      __html: chapter.figures[slide.figureKey].svgContent
                                    }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              })
            )}

            {/* Chapter Footer Attribution as requested: Credit to Er. Saroj Chalise */}
            <footer className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="font-bold text-slate-800 dark:text-slate-200">
                  {chapter.unitNumber}: {chapter.title}
                </div>
                <div>
                  Textbook Author & Curriculum Designer:{' '}
                  <strong className="text-indigo-600 dark:text-indigo-400">
                    Er. Saroj Chalise
                  </strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors shadow-xs"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to Top</span>
                </button>
                <button
                  onClick={handleDirectDownloadBookPdf}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-xs"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download Book PDF</span>
                </button>
              </div>
            </footer>
          </main>
        </div>
      </div>

      {/* Modal for Figure Zoom */}
      {selectedZoomFigure && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                {selectedZoomFigure.caption}
              </h4>
              <button
                onClick={() => setSelectedZoomFigure(null)}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                ✕
              </button>
            </div>
            <div
              className="w-full flex items-center justify-center max-h-[70vh] overflow-auto p-4 bg-white dark:bg-slate-950 rounded-xl"
              dangerouslySetInnerHTML={{ __html: selectedZoomFigure.svgContent }}
            />
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Author: Er. Saroj Chalise • Vector SVG Illustration</span>
              <button
                onClick={() => setSelectedZoomFigure(null)}
                className="px-4 py-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
