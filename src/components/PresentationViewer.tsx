import React, { useState, useEffect, useRef } from 'react';
import { CHAPTERS, ChapterId } from '../data/chaptersData';
import { SlideData, TypeItem } from '../types/chapterDeck';
import { FormattedMathText } from './FormattedMathText';
import { MathRenderer } from './MathRenderer';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  BookOpen,
  Menu,
  X,
  Sun,
  Moon,
  Clock,
  HelpCircle,
  Layers,
  FileText,
  UserCheck,
  Users,
  Eye,
  Info,
  BookOpenCheck,
  Sparkles,
  Upload,
  FileDown
} from 'lucide-react';
import { ChapterConfig } from '../data/chaptersData';

export interface PresentationViewerProps {
  currentChapterId?: ChapterId | string;
  activeChapterConfig?: ChapterConfig;
  availableChapters?: ChapterConfig[];
  onChapterChange?: (id: any) => void;
  onOpenUploadStudio?: () => void;
  onOpenPdfModal?: () => void;
}

const InteractiveQuizSlide: React.FC<{ quiz: any; title: string }> = ({ quiz, title }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="space-y-6 max-w-4xl mx-auto my-auto w-full">
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-3 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
        {title}
      </h2>

      <div className="p-7 rounded-3xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white leading-relaxed">
          <FormattedMathText text={quiz.question} />
        </div>

        <div className="space-y-3">
          {quiz.options.map((opt: string, idx: number) => {
            const isSelected = selectedIdx === idx;
            const isCorrect = idx === quiz.correctIndex;
            let btnClass = 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200';
            if (showExplanation) {
              if (isCorrect) {
                btnClass = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold';
              } else if (isSelected) {
                btnClass = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-100 line-through';
              }
            } else if (isSelected) {
              btnClass = 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-900 dark:text-indigo-100 font-bold';
            }

            return (
              <button
                key={idx}
                onClick={() => {
                  setSelectedIdx(idx);
                  setShowExplanation(true);
                }}
                className={`w-full text-left p-4 rounded-xl border text-lg md:text-xl transition-all flex items-center justify-between ${btnClass}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-sm font-bold shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span><FormattedMathText text={opt} /></span>
                </div>
                {showExplanation && isCorrect && (
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">✓ Correct</span>
                )}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="p-5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-base md:text-lg text-slate-800 dark:text-slate-200 space-y-1">
            <strong className="text-indigo-600 dark:text-indigo-400 block mb-1">Explanation:</strong>
            <FormattedMathText text={quiz.explanation} />
          </div>
        )}
      </div>
    </div>
  );
};

const StructuredWorkedExampleSlide: React.FC<{ example: any; title: string }> = ({ example, title }) => {
  return (
    <div className="space-y-6 max-w-6xl mx-auto my-auto w-full">
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-3 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column: Problem & Given */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-xl">Problem Statement:</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <FormattedMathText text={example.problem} />
            </p>

            {example.given && Object.keys(example.given).length > 0 && (
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Given Parameters:</h4>
                <div className="space-y-1.5 font-mono text-sm text-indigo-700 dark:text-indigo-300">
                  {Object.entries(example.given).map(([key, val]) => (
                    <div key={key} className="flex justify-between p-1.5 rounded bg-slate-100 dark:bg-slate-950">
                      <span className="text-slate-500">{key}:</span>
                      <span className="font-bold">{String(val)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Step-by-Step Derivation */}
        <div className="md:col-span-7 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-xl">Step-by-Step Solution:</h3>
            <div className="space-y-3.5 max-h-[460px] overflow-y-auto pr-1">
              {example.steps.map((st: any, idx: number) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
                      {st.stepNumber || idx + 1}
                    </span>
                    <span>{st.title}</span>
                  </div>
                  {st.math && (
                    <div className="my-1 text-base text-indigo-600 dark:text-cyan-400 font-mono">
                      <MathRenderer math={st.math} display />
                    </div>
                  )}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    <FormattedMathText text={st.explanation} />
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-base font-bold text-emerald-800 dark:text-emerald-200 flex items-center justify-between">
              <span>Final Answer:</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400">{example.finalAnswer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PresentationViewer: React.FC<PresentationViewerProps> = ({
  currentChapterId,
  activeChapterConfig,
  availableChapters,
  onChapterChange,
  onOpenUploadStudio,
  onOpenPdfModal
}) => {
  const [internalChapterId, setInternalChapterId] = useState<string>(currentChapterId || 'unit1');
  const activeChapterId = currentChapterId || internalChapterId;

  const handleSelectChapter = (id: string) => {
    setInternalChapterId(id);
    setCurrentSlideIndex(0);
    if (onChapterChange) {
      onChapterChange(id);
    }
  };

  useEffect(() => {
    if (currentChapterId && currentChapterId !== internalChapterId) {
      setInternalChapterId(currentChapterId);
      setCurrentSlideIndex(0);
    }
  }, [currentChapterId]);

  // Use activeChapterConfig if provided, otherwise fallback to registry
  const chapter = activeChapterConfig || CHAPTERS[activeChapterId as ChapterId] || CHAPTERS.unit1;
  const slides = chapter.slides;
  const figures = chapter.figures || {};

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Quarto defaults to clean light theme
  const [showNotesExplainer, setShowNotesExplainer] = useState(false);
  const [presenterMode, setPresenterMode] = useState(false); // Dual window / split presenter view

  const [showFloatingControls, setShowFloatingControls] = useState(false);
  const [showFullscreenHint, setShowFullscreenHint] = useState(false);
  const hideControlsTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hintTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;
  const currentSlide: SlideData = slides[currentSlideIndex] || slides[0];
  const nextSlide: SlideData | undefined = slides[currentSlideIndex + 1];

  // Sync with native fullscreen changes (e.g. user presses Esc in browser)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isNowFullscreen);
      if (isNowFullscreen) {
        setShowFloatingControls(true);
        setShowFullscreenHint(true);
        if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
        hintTimerRef.current = setTimeout(() => setShowFullscreenHint(false), 3000);
      } else {
        setShowFullscreenHint(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleMouseMove = () => {
    if (isFullscreen) {
      setShowFloatingControls(true);
      if (hideControlsTimerRef.current) clearTimeout(hideControlsTimerRef.current);
      hideControlsTimerRef.current = setTimeout(() => {
        setShowFloatingControls(false);
      }, 2500);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    if (diffX < -50) {
      // Swiped left -> next slide
      setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
    } else if (diffX > 50) {
      // Swiped right -> prev slide
      setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
    }
    touchStartX.current = null;
  };

  // Keyboard navigation matching Reveal.js hotkeys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlideIndex(totalSlides - 1);
      } else if (e.key.toLowerCase() === 's') {
        e.preventDefault();
        setShowNotes((prev) => !prev);
      } else if (e.key.toLowerCase() === 'p') {
        e.preventDefault();
        setPresenterMode((prev) => !prev);
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        if (isFullscreen) {
          toggleFullscreen();
        } else if (showOverview) {
          setShowOverview(false);
        } else if (showMenu) {
          setShowMenu(false);
        } else {
          setShowOverview(true);
        }
      } else if (e.key.toLowerCase() === 'o') {
        e.preventDefault();
        setShowOverview((prev) => !prev);
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        setShowMenu((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides, isFullscreen, showOverview, showMenu]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && !isFullscreen) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen().then(() => {
          setIsFullscreen(true);
        }).catch(() => {
          setIsFullscreen(true);
        });
      } else {
        setIsFullscreen(true);
      }
      setShowFloatingControls(true);
      setShowFullscreenHint(true);
      if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
      hintTimerRef.current = setTimeout(() => setShowFullscreenHint(false), 3000);
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {
          setIsFullscreen(false);
        });
      } else {
        setIsFullscreen(false);
      }
      setShowFullscreenHint(false);
    }
  };

  const currentFigure = currentSlide.figureKey ? figures[currentSlide.figureKey] : null;
  const svgToRender = currentSlide.figureSvg || (currentFigure ? currentFigure.svgContent : null);

  const chapterList = availableChapters && availableChapters.length > 0 ? availableChapters : Object.values(CHAPTERS);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`font-sans transition-colors ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      } ${
        isFullscreen
          ? 'fixed inset-0 z-[100] h-screen w-screen p-0 m-0 overflow-hidden flex flex-col justify-between'
          : 'relative flex flex-col rounded-xl border border-slate-300 dark:border-slate-800 shadow-2xl overflow-hidden'
      }`}
    >
      {/* Top Reveal.js Header Controls Strip (Shown only in standard mode, completely hidden in fullscreen) */}
      {!isFullscreen && (
        <div className={`flex items-center justify-between px-4 py-2 border-b select-none transition-colors ${
          isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
          {/* Hamburger Menu Toggle (identical to Reveal Menu in chalisesaroj.github.io/slide) */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`p-1.5 rounded transition-colors ${
              showMenu
                ? 'bg-blue-600 text-white'
                : isDarkMode
                ? 'hover:bg-slate-800 text-slate-300'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
            title="Slide Menu [M]"
          >
            <Menu className="w-4 h-4" />
          </button>

          <span className="font-semibold text-xs tracking-tight">
            Quarto Reveal.js · {chapter.instructor}
          </span>
          <span className="text-slate-400">/</span>
          <span className="text-xs text-slate-500 font-mono">
            slide {currentSlideIndex + 1} of {totalSlides}
          </span>
        </div>

        {/* Center: Dynamic Chapter Switcher Buttons */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700/60 shadow-xs max-w-full overflow-x-auto">
          {chapterList.map((ch) => {
            const isSelected = ch.id === chapter.id;
            return (
              <button
                key={ch.id}
                onClick={() => handleSelectChapter(ch.id)}
                className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {ch.unitNumber}
              </button>
            );
          })}
          {onOpenUploadStudio && (
            <button
              onClick={onOpenUploadStudio}
              className="px-2 py-1 rounded text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 flex items-center gap-1 transition-colors whitespace-nowrap"
              title="Upload new chapter JSON"
            >
              <Upload className="w-3 h-3" />
              Upload JSON
            </button>
          )}
        </div>

        {/* Section title tag */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-500">
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
            {currentSlide.sectionTag}
          </span>
        </div>

        {/* Right utility buttons */}
        <div className="flex items-center gap-1.5">
          {/* Speaker notes privacy explainer badge */}
          <button
            onClick={() => setShowNotesExplainer(!showNotesExplainer)}
            className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
            title="Click to learn how Speaker Notes work"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Notes: Presenter-Only</span>
          </button>

          {/* Presenter Mode Toggle */}
          <button
            onClick={() => setPresenterMode(!presenterMode)}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
              presenterMode
                ? 'bg-indigo-600 text-white'
                : isDarkMode
                ? 'hover:bg-slate-800 text-slate-300'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
            title="Toggle Presenter Console Mode [Hotkey: P]"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{presenterMode ? 'Audience View' : 'Presenter View'}</span>
          </button>

          {/* Theme switcher */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-1.5 rounded transition-colors ${
              isDarkMode ? 'hover:bg-slate-800 text-amber-300' : 'hover:bg-slate-100 text-slate-700'
            }`}
            title="Toggle Light / Dark Presentation Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Overview button */}
          <button
            onClick={() => setShowOverview(!showOverview)}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
              showOverview
                ? 'bg-blue-600 text-white'
                : isDarkMode
                ? 'hover:bg-slate-800 text-slate-300'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
            title="Slide Overview [Hotkey: O]"
          >
            Overview
          </button>

          {/* Speaker notes drawer button */}
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1 ${
              showNotes
                ? 'bg-amber-600 text-white'
                : isDarkMode
                ? 'hover:bg-slate-800 text-slate-300'
                : 'hover:bg-slate-100 text-slate-700'
            }`}
            title="Toggle Notes Drawer [Hotkey: S]"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Notes</span>
          </button>

          {/* PDF Download button */}
          {onOpenPdfModal && (
            <button
              onClick={onOpenPdfModal}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                isDarkMode
                  ? 'bg-rose-950/60 hover:bg-rose-900/80 border border-rose-800 text-rose-300'
                  : 'bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700'
              }`}
              title="Download Chapter as PDF (Slides or Handout)"
            >
              <FileDown className="w-3.5 h-3.5 text-rose-500" />
              <span>PDF</span>
            </button>
          )}

          {/* Fullscreen button */}
          <button
            onClick={toggleFullscreen}
            className={`p-1.5 rounded transition-colors ${
              isDarkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
            }`}
            title="Fullscreen [Hotkey: F]"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
      )}

      {/* Floating HUD in Fullscreen (Auto-hiding on mouse move, no bottom buttons) */}
      {isFullscreen && (
        <div
          className={`absolute top-4 right-4 z-40 flex items-center gap-2 p-1.5 px-3 rounded-full bg-slate-900/85 dark:bg-black/85 backdrop-blur-md border border-slate-700/60 text-white text-xs shadow-2xl transition-all duration-300 ${
            showFloatingControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <span className="font-mono text-slate-300 font-semibold px-1 text-[11px]">
            {currentSlideIndex + 1} / {totalSlides}
          </span>
          <div className="w-px h-3.5 bg-slate-700" />
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            title="Toggle presentation theme"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <div className="w-px h-3.5 bg-slate-700" />
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-colors font-semibold text-[11px] shadow-sm"
            title="Exit Fullscreen [Esc or F]"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Exit Fullscreen</span>
          </button>
        </div>
      )}

      {/* Floating onboarding hint when entering fullscreen */}
      {isFullscreen && showFullscreenHint && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none bg-slate-950/85 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-slate-700/60 shadow-xl flex items-center gap-2">
          <span>Navigate with <kbd className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-[10px]">Space</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-[10px]">→</kbd></span>
          <span className="text-slate-400">•</span>
          <span><kbd className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-[10px]">Esc</kbd> to exit</span>
        </div>
      )}

      {/* Speaker Notes Explainer Banner (Answers the user's question directly!) */}
      {showNotesExplainer && (
        <div className="p-3 px-5 bg-emerald-50 dark:bg-emerald-950/60 border-b border-emerald-200 dark:border-emerald-800 text-xs text-emerald-950 dark:text-emerald-200 flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
            <div className="space-y-1">
              <strong className="font-semibold block text-emerald-900 dark:text-emerald-300">
                How Speaker Notes Work in Quarto Reveal.js:
              </strong>
              <p className="leading-relaxed">
                <strong>Speaker notes display ONLY to you as the presenter.</strong> The audience seeing your projected slides or shared screen will <strong>never</strong> see them.
              </p>
              <p className="text-emerald-800 dark:text-emerald-300/90 leading-relaxed">
                When you press <kbd className="px-1 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 font-mono font-bold">S</kbd> in a real classroom projection setup, Reveal.js opens a separate private window on your laptop screen showing the notes, elapsed timer, and upcoming slide preview, while the projector shows only the pristine slide.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowNotesExplainer(false)}
            className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Slide Menu Drawer (Left Sliding Panel matching Reveal Menu plugin) */}
      {showMenu && (
        <div
          className={`absolute left-0 top-10 bottom-0 w-80 z-40 border-r shadow-2xl flex flex-col p-4 overflow-hidden backdrop-blur-md transition-all ${
            isDarkMode ? 'bg-slate-900/98 border-slate-800 text-slate-200' : 'bg-white/98 border-slate-200 text-slate-800'
          }`}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-2">
            <span className="font-bold text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {chapter.unitNumber}: {chapter.shortTitle}
            </span>
            <button onClick={() => setShowMenu(false)} className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chapter Quick Switcher in Drawer */}
          <div className="flex flex-wrap gap-1 p-1 mb-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-center text-xs font-semibold">
            {chapterList.map((ch) => (
              <button
                key={ch.id}
                onClick={() => handleSelectChapter(ch.id)}
                className={`py-1.5 px-2.5 rounded transition-colors flex-1 min-w-[70px] ${
                  activeChapterId === ch.id
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {ch.unitNumber}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto space-y-1 pr-1 scrollbar-thin text-xs">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentSlideIndex(idx);
                  setShowMenu(false);
                }}
                className={`w-full text-left p-2 rounded transition-colors flex items-start gap-2 ${
                  idx === currentSlideIndex
                    ? 'bg-blue-600 text-white font-semibold'
                    : isDarkMode
                    ? 'hover:bg-slate-800 text-slate-300'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                <span className="font-mono text-[11px] opacity-70 shrink-0 w-5">
                  {idx + 1}.
                </span>
                <span className="truncate">{s.title}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 space-y-1">
            <div className="flex justify-between"><span>Next / Prev</span><span className="font-mono font-bold">Space / ← / →</span></div>
            <div className="flex justify-between"><span>Fullscreen</span><span className="font-mono font-bold">F</span></div>
            <div className="flex justify-between"><span>Presenter Notes</span><span className="font-mono font-bold">S</span></div>
            <div className="flex justify-between"><span>Presenter View</span><span className="font-mono font-bold">P</span></div>
            <div className="flex justify-between"><span>Overview</span><span className="font-mono font-bold">O / Esc</span></div>
          </div>

          {onOpenPdfModal && (
            <button
              onClick={() => {
                setShowMenu(false);
                onOpenPdfModal();
              }}
              className="mt-3 w-full flex items-center justify-center gap-2 p-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-sm transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Chapter PDF</span>
            </button>
          )}
        </div>
      )}

      {/* Slide Overview Grid (when overview is active) */}
      {showOverview && (
        <div className={`absolute inset-0 top-10 z-30 p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 backdrop-blur-md ${
          isDarkMode ? 'bg-slate-950/95' : 'bg-slate-100/95'
        }`}>
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrentSlideIndex(idx);
                setShowOverview(false);
              }}
              className={`aspect-[16/9] p-3 rounded-lg border text-left flex flex-col justify-between transition-all ${
                idx === currentSlideIndex
                  ? 'border-blue-600 ring-2 ring-blue-600 bg-blue-50 dark:bg-blue-950/40'
                  : isDarkMode
                  ? 'border-slate-800 bg-slate-900 hover:border-slate-700'
                  : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>#{idx + 1}</span>
                <span className="truncate max-w-[80px]">{s.sectionTag}</span>
              </div>
              <p className="text-xs font-semibold line-clamp-2 leading-tight">
                {s.title}
              </p>
              <div className="text-[10px] text-slate-500">
                {s.type === 'figure' ? '🖼 Figure' : s.type === 'section-divider' ? '📌 Section' : '📄 Slide'}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* 
        MAIN PRESENTATION STAGE:
        If Presenter Mode is ON:
        Shows side-by-side: Left = Current Slide (as seen by audience), Right = Presenter Console with Private Notes and Next Slide Preview!
      */}
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`relative flex-1 flex flex-col items-center justify-center transition-colors ${
          isFullscreen ? 'p-0 w-full h-full' : 'p-3 sm:p-6'
        } ${
          isDarkMode ? 'bg-slate-950' : 'bg-slate-200/80'
        }`}
      >
        {presenterMode ? (
          /* ================= PRESENTER VIEW (PRESENTER SCREEN) ================= */
          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto">
            {/* Left: What the Audience Sees */}
            <div className="lg:col-span-7 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                  <Users className="w-3.5 h-3.5" /> Audience Screen (Projector)
                </span>
                <span>Slide {currentSlideIndex + 1} of {totalSlides}</span>
              </div>
              <div className={`w-full aspect-[16/9] rounded-xl border shadow-xl flex flex-col justify-between overflow-hidden ${
                isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-300 text-slate-900'
              }`}>
                {/* Render Slide */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center overflow-y-auto">
                  {currentSlide.type === 'figure' && currentFigure ? (
                    <div className="h-full flex flex-col items-center justify-center w-full">
                      <div
                        className="w-full h-full flex items-center justify-center"
                        dangerouslySetInnerHTML={{ __html: currentFigure.svgContent }}
                      />
                    </div>
                  ) : currentSlide.type === 'title' ? (
                    <div className="text-center my-auto space-y-4">
                      <h1 className="text-2xl md:text-3xl font-bold">{currentSlide.title}</h1>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{currentSlide.subtitle}</p>
                      <div className="text-xs text-blue-600 font-semibold">Er. Saroj Chalise</div>
                    </div>
                  ) : (
                    <div className="space-y-4 my-auto">
                      <h2 className="text-xl md:text-2xl font-bold border-b pb-2 border-slate-200 dark:border-slate-800">
                        {currentSlide.title}
                      </h2>
                      <div className="space-y-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {currentSlide.bullets?.map((b, i) => (
                          <p key={i} className="leading-relaxed">
                            <FormattedMathText text={b} />
                          </p>
                        ))}
                      </div>
                      {currentSlide.equation && (
                        <div className="py-2 text-center">
                          <MathRenderer math={currentSlide.equation} display />
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {/* Slide Footer */}
                <div className="px-4 py-2 border-t text-[11px] text-slate-500 flex justify-between">
                  <span>{chapter.unitNumber || 'Unit I'} · Er. Saroj Chalise</span>
                  <span>{currentSlideIndex + 1} / {totalSlides}</span>
                </div>
              </div>
            </div>

            {/* Right: Instructor's Private Presenter Console */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Private Notes Panel */}
              <div className="p-5 rounded-xl border bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800/60 shadow-lg flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 pb-2 border-b border-amber-200 dark:border-amber-800 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-3">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    <span>Your Private Speaker Notes (Visible ONLY to you)</span>
                  </div>
                  <div className="text-sm text-slate-800 dark:text-slate-100 leading-relaxed space-y-2">
                    <FormattedMathText text={currentSlide.speakerNotes} />
                  </div>
                </div>

                {currentSlide.takeaway && (
                  <div className="mt-4 p-3 bg-white dark:bg-slate-900 rounded-lg border border-amber-200 dark:border-amber-800/40 text-xs">
                    <strong className="text-amber-700 dark:text-amber-400 block mb-0.5">Core Pedagogical Takeaway:</strong>
                    <FormattedMathText text={currentSlide.takeaway} />
                  </div>
                )}
              </div>

              {/* Next Slide Preview */}
              {nextSlide && (
                <div className="p-4 rounded-xl border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-xs space-y-1">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px] block">
                    Upcoming Slide #{currentSlideIndex + 2}
                  </span>
                  <div className="font-bold text-slate-800 dark:text-slate-100 text-sm truncate">
                    {nextSlide.title}
                  </div>
                  <div className="text-slate-500 line-clamp-2">
                    {nextSlide.bullets?.[0] || nextSlide.subtitle || nextSlide.sectionTag}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ================= STANDARD FULL 16:9 SLIDE CANVAS ================= */
          <div className={`w-full ${
            isFullscreen
              ? 'h-full max-w-none rounded-none border-0 shadow-none'
              : 'max-w-6xl aspect-[16/9] rounded-xl border shadow-2xl'
          } relative flex flex-col justify-between overflow-hidden transition-colors ${
            isDarkMode
              ? 'bg-slate-900 border-slate-800 text-slate-100'
              : 'bg-white border-slate-300 text-slate-900'
          }`}>
            {/* Fullscreen Edge Navigation Zones (Left & Right hover chevrons) */}
            {isFullscreen && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlideIndex((p) => Math.max(p - 1, 0));
                  }}
                  disabled={currentSlideIndex === 0}
                  className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-20 flex items-center justify-start pl-3 opacity-0 hover:opacity-100 transition-opacity disabled:opacity-0 disabled:pointer-events-none group cursor-pointer select-none"
                  title="Previous slide [Left Arrow]"
                  aria-label="Previous slide"
                >
                  <div className="p-3 rounded-full bg-slate-900/75 text-white backdrop-blur-md shadow-xl group-hover:scale-110 transition-transform">
                    <ChevronLeft className="w-6 h-6" />
                  </div>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlideIndex((p) => Math.min(p + 1, totalSlides - 1));
                  }}
                  disabled={currentSlideIndex === totalSlides - 1}
                  className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-20 flex items-center justify-end pr-3 opacity-0 hover:opacity-100 transition-opacity disabled:opacity-0 disabled:pointer-events-none group cursor-pointer select-none"
                  title="Next slide [Right Arrow or Space]"
                  aria-label="Next slide"
                >
                  <div className="p-3 rounded-full bg-slate-900/75 text-white backdrop-blur-md shadow-xl group-hover:scale-110 transition-transform">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </button>
              </>
            )}

            {/* SLIDE CONTENT AREA (Minimum text size 22px+, minimal borders, large imagery & formulas) */}
            <div className={`flex-1 ${
              isFullscreen ? 'p-8 md:p-14 lg:p-16' : 'p-8 md:p-12'
            } flex flex-col justify-center overflow-y-auto`}>
              {/* 1. Title Slide */}
              {currentSlide.type === 'title' && (
                <div className="text-center max-w-5xl mx-auto my-auto space-y-8">
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                    {currentSlide.title}
                  </h1>
                  <p className="text-[24px] md:text-[28px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-4xl mx-auto">
                    <FormattedMathText text={currentSlide.subtitle || ''} />
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="text-[24px] md:text-[28px] font-bold text-blue-600 dark:text-blue-400">
                      Er. Saroj Chalise
                    </div>
                    <div className="text-[20px] text-slate-500 dark:text-slate-400">
                      2026-10-21 · Department of Electrical &amp; Instrumentation Engineering
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Lecture Roadmap */}
              {currentSlide.type === 'roadmap' && currentSlide.columns && (
                <div className="space-y-8 max-w-6xl mx-auto my-auto w-full">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-4 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
                    {currentSlide.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Column */}
                    <div className="space-y-5">
                      {currentSlide.columns.left.map((item, i) => (
                        <div key={i} className="flex items-start gap-3.5 text-[22px] md:text-[25px] text-slate-700 dark:text-slate-200 leading-relaxed">
                          <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0 mt-0.5">•</span>
                          <FormattedMathText text={item} />
                        </div>
                      ))}
                    </div>
                    {/* Right Column */}
                    <div className="space-y-5">
                      {currentSlide.columns.right.map((item, i) => (
                        <div key={i} className="flex items-start gap-3.5 text-[22px] md:text-[25px] text-slate-700 dark:text-slate-200 leading-relaxed">
                          <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0 mt-0.5">•</span>
                          <FormattedMathText text={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Section Title Slide (Level 1 heading center) */}
              {currentSlide.type === 'section-divider' && (
                <div className="text-center my-auto space-y-6 max-w-5xl mx-auto">
                  <span className="text-[20px] md:text-[22px] uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block">
                    Unit I Section Divider
                  </span>
                  <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                    {currentSlide.title}
                  </h1>
                  <p className="text-[24px] md:text-[28px] text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    <FormattedMathText text={currentSlide.takeaway || ''} />
                  </p>
                </div>
              )}

              {/* 4. Why This Chapter Matters */}
              {currentSlide.type === 'why-matters' && (
                <div className="space-y-6 max-w-5xl mx-auto my-auto w-full">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-4 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
                    {currentSlide.title}
                  </h2>
                  <div className="space-y-4 text-[22px] md:text-[25px] text-slate-700 dark:text-slate-200 leading-relaxed text-justify sm:text-left">
                    {currentSlide.bullets?.map((b, i) => (
                      <p key={i} className="leading-relaxed">
                        <FormattedMathText text={b} />
                      </p>
                    ))}
                  </div>
                  {currentSlide.equation && (
                    <div className="my-6">
                      <MathRenderer math={currentSlide.equation} display />
                    </div>
                  )}
                  <p className="text-[24px] md:text-[26px] font-bold text-slate-900 dark:text-white pt-2">
                    This chapter is about that fundamental chain.
                  </p>
                </div>
              )}

              {/* 5. Standard Content, Concept & Objectives Slides */}
              {(currentSlide.type === 'content' || currentSlide.type === 'objectives' || currentSlide.type === 'concept') && (
                <div className="space-y-6 max-w-5xl mx-auto my-auto w-full">
                  <div className="border-b pb-3 border-slate-200/50 dark:border-slate-800/40">
                    <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
                      {currentSlide.sectionTag || 'Topic Content'}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                      {currentSlide.title}
                    </h2>
                    {currentSlide.subtitle && (
                      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mt-1">
                        <FormattedMathText text={currentSlide.subtitle} />
                      </p>
                    )}
                  </div>

                  {/* If slide has an equation, render it prominently in a standard textbook plaque */}
                  {currentSlide.equation && (
                    <MathRenderer
                      math={currentSlide.equation}
                      display
                      label={currentSlide.formulaBlock?.label}
                      description={currentSlide.equationDescription}
                      symbols={currentSlide.symbols || currentSlide.formulaBlock?.symbols}
                    />
                  )}

                  {currentSlide.bullets && (
                    <div className="space-y-4 text-[20px] md:text-[23px] text-slate-800 dark:text-slate-100 leading-relaxed text-justify sm:text-left">
                      {currentSlide.bullets.map((b, i) => (
                        <p key={i} className="leading-relaxed">
                          <FormattedMathText text={b} />
                        </p>
                      ))}
                    </div>
                  )}

                  {currentSlide.takeaway && (
                    <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-base md:text-lg text-indigo-950 dark:text-indigo-200 flex items-start gap-3">
                      <strong className="text-indigo-600 dark:text-indigo-400 shrink-0 font-bold">Key Takeaway:</strong>
                      <FormattedMathText text={currentSlide.takeaway} />
                    </div>
                  )}
                </div>
              )}

              {/* 5B. Dedicated Formula & Derivation Slide (Single Idea Focus) */}
              {currentSlide.type === 'formula' && (
                <div className="space-y-5 max-w-5xl mx-auto my-auto w-full">
                  <div className="border-b pb-3 border-slate-200/50 dark:border-slate-800/40">
                    <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
                      {currentSlide.sectionTag || 'Mathematical Model'}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                      {currentSlide.title}
                    </h2>
                    {currentSlide.subtitle && (
                      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mt-1">
                        <FormattedMathText text={currentSlide.subtitle} />
                      </p>
                    )}
                  </div>

                  {/* Primary Equation Plaque with Symbol Breakdown */}
                  <MathRenderer
                    math={currentSlide.formulaBlock?.equation || currentSlide.equation || ''}
                    display
                    label={currentSlide.formulaBlock?.label}
                    description={currentSlide.formulaBlock?.description || currentSlide.equationDescription}
                    symbols={currentSlide.formulaBlock?.symbols || currentSlide.symbols}
                  />

                  {/* Single-Focus Narrative Paragraphs */}
                  {currentSlide.bullets && currentSlide.bullets.length > 0 && (
                    <div className="space-y-3 p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/50 text-lg md:text-xl text-slate-800 dark:text-slate-200 leading-relaxed text-justify sm:text-left">
                      {currentSlide.bullets.map((b, i) => (
                        <p key={i} className="leading-relaxed">
                          <FormattedMathText text={b} />
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Single Core Takeaway */}
                  {currentSlide.takeaway && (
                    <div className="p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-base md:text-lg text-indigo-950 dark:text-indigo-200 flex items-start gap-3">
                      <strong className="text-indigo-600 dark:text-indigo-400 shrink-0 font-bold">Key Takeaway:</strong>
                      <FormattedMathText text={currentSlide.takeaway} />
                    </div>
                  )}
                </div>
              )}

              {/* 6. Figure Slide (Supports both SvgAsset registry and inline figureSvg) */}
              {currentSlide.type === 'figure' && svgToRender && (
                <div className="h-full flex flex-col items-center justify-between w-full flex-1">
                  <div className="flex items-center justify-between border-b pb-2 w-full border-slate-200/50 dark:border-slate-800/40">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {currentSlide.title}
                    </h2>
                    {currentSlide.sectionTag && (
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        {currentSlide.sectionTag}
                      </span>
                    )}
                  </div>

                  <div
                    className="w-full flex-1 min-h-[500px] max-h-[82vh] flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-200/40 p-1 md:p-3 [&>svg]:w-full [&>svg]:h-full [&>svg]:max-h-[80vh] [&>svg]:object-contain my-1"
                    dangerouslySetInnerHTML={{ __html: svgToRender }}
                  />

                  {/* Isolated KaTeX Formula Plaque (Outside SVG) if formula exists on this figure */}
                  {(currentSlide.formulaBlock || currentSlide.equation) && (
                    <div className="w-full my-2">
                      <MathRenderer
                        math={currentSlide.formulaBlock?.equation || currentSlide.equation || ''}
                        display
                        label={currentSlide.formulaBlock?.label}
                        description={currentSlide.formulaBlock?.description || currentSlide.equationDescription}
                        symbols={currentSlide.formulaBlock?.symbols || currentSlide.symbols}
                      />
                    </div>
                  )}

                  {currentSlide.takeaway && (
                    <div className="w-full p-2.5 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-sm md:text-base text-indigo-950 dark:text-indigo-200 flex items-start gap-2 mt-1">
                      <strong className="text-indigo-600 dark:text-indigo-400 shrink-0 font-bold">Key Insight:</strong>
                      <FormattedMathText text={currentSlide.takeaway} />
                    </div>
                  )}

                  {currentSlide.figureCaption && (
                    <p className="text-xs text-slate-500 mt-1 font-mono text-center">
                      {currentSlide.figureCaption}
                    </p>
                  )}
                </div>
              )}

              {/* 7. Definition Slide */}
              {(currentSlide.type === 'definition' || currentSlide.definition) && currentSlide.definition && (
                <div className="space-y-6 max-w-5xl mx-auto my-auto w-full">
                  <div className="flex items-center justify-between border-b pb-3 border-slate-200/50 dark:border-slate-800/40">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {currentSlide.title}
                    </h2>
                    {currentSlide.definition.standardReference && (
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        {currentSlide.definition.standardReference}
                      </span>
                    )}
                  </div>

                  <div className="p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
                    <div className="flex items-baseline gap-4 flex-wrap">
                      <h3 className="text-4xl md:text-5xl font-black text-indigo-600 dark:text-indigo-400">
                        {currentSlide.definition.term}
                      </h3>
                      {currentSlide.definition.symbol && (
                        <span className="font-mono text-xl font-bold px-3.5 py-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800 flex items-center gap-2">
                          <span className="text-xs uppercase text-slate-500 dark:text-slate-400 font-sans">Symbol:</span>
                          <FormattedMathText text={currentSlide.definition.symbol} />
                        </span>
                      )}
                      {currentSlide.definition.units && (
                        <span className="font-mono text-lg text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                          <span className="text-xs uppercase text-slate-400 font-sans">Units:</span>
                          <span>[<FormattedMathText text={currentSlide.definition.units} />]</span>
                        </span>
                      )}
                    </div>

                    <blockquote className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-6 py-2 text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-serif italic leading-relaxed">
                      &ldquo;{currentSlide.definition.formalDefinition || currentSlide.definition.formalText}&rdquo;
                    </blockquote>

                    {currentSlide.definition.operationalMeaning && (
                      <div className="p-5 rounded-2xl bg-indigo-50/40 dark:bg-slate-900/50 border border-indigo-100 dark:border-slate-800 text-lg md:text-xl text-slate-700 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                        <strong className="text-indigo-700 dark:text-indigo-400 block mb-2 font-mono text-sm uppercase tracking-wider">
                          Operational Values:
                        </strong>
                        <FormattedMathText text={currentSlide.definition.operationalMeaning} />
                      </div>
                    )}

                    {currentSlide.bullets && currentSlide.bullets.length > 0 && (
                      <div className="space-y-2.5 pt-2">
                        {currentSlide.bullets.map((b, i) => (
                          <div key={i} className="flex items-start gap-3 text-lg md:text-xl text-slate-700 dark:text-slate-200">
                            <span className="text-indigo-600 dark:text-indigo-400 font-bold shrink-0 mt-0.5">•</span>
                            <FormattedMathText text={b} />
                          </div>
                        ))}
                      </div>
                    )}

                    {currentSlide.definition.keyImplication && (
                      <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 text-base md:text-lg text-slate-700 dark:text-slate-300 flex items-start gap-3">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400 shrink-0">Key Takeaway:</span>
                        <span>{currentSlide.definition.keyImplication}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 8. Types & Classification Taxonomy Slide */}
              {(currentSlide.type === 'types' || currentSlide.typesGrid) && currentSlide.typesGrid && (
                <div className="space-y-6 max-w-6xl mx-auto my-auto w-full">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-3 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
                    {currentSlide.title}
                  </h2>
                  <div className={`grid gap-5 ${currentSlide.typesGrid.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
                    {currentSlide.typesGrid.map((typeItem, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                              {typeItem.typeName}
                            </h3>
                            {typeItem.badge && (
                              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
                                {typeItem.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                            {typeItem.description}
                          </p>
                        </div>
                        <div className="space-y-2 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                          <div className="text-sm">
                            <span className="font-semibold text-slate-900 dark:text-white">Key Mechanism: </span>
                            <span className="text-slate-600 dark:text-slate-400">{typeItem.keyFeature}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Examples: </span>
                            <span className="text-slate-600 dark:text-slate-400">{typeItem.example}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 9. Advantages vs. Disadvantages (Pros/Cons) Slide */}
              {(currentSlide.type === 'pros-cons' || currentSlide.prosCons) && currentSlide.prosCons && (
                <div className="space-y-6 max-w-6xl mx-auto my-auto w-full">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-3 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
                    {currentSlide.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Advantages */}
                    <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 shadow-sm space-y-4">
                      <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                        ✓ Key Advantages
                      </h3>
                      <ul className="space-y-3">
                        {currentSlide.prosCons.advantages.map((adv, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                            <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                            <FormattedMathText text={adv} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Disadvantages */}
                    <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 shadow-sm space-y-4">
                      <h3 className="text-2xl font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                        ✗ Limitations &amp; Trade-offs
                      </h3>
                      <ul className="space-y-3">
                        {currentSlide.prosCons.disadvantages.map((dis, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
                            <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                            <FormattedMathText text={dis} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {currentSlide.prosCons.engineeringVerdict && (
                    <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-base text-slate-800 dark:text-slate-200">
                      <strong className="text-indigo-600 dark:text-indigo-400 mr-2">Engineering Verdict:</strong>
                      {currentSlide.prosCons.engineeringVerdict}
                    </div>
                  )}
                </div>
              )}

              {/* 10. Concept & Physical Analogy Slide */}
              {(currentSlide.type === 'analogy' || currentSlide.analogy) && currentSlide.analogy && (
                <div className="space-y-6 max-w-5xl mx-auto my-auto w-full">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-3 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
                    {currentSlide.title}
                  </h2>
                  <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 shadow-sm space-y-5">
                    <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
                      <Sparkles className="w-6 h-6 shrink-0" />
                      <h3 className="text-2xl md:text-3xl font-black">
                        Mental Model: {currentSlide.analogy.everydayConcept}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 className="font-bold text-slate-900 dark:text-white text-base">How it Maps to Engineering:</h4>
                        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                          {currentSlide.analogy.technicalMapping}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
                        <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-base">Why the Intuition Holds:</h4>
                        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                          {currentSlide.analogy.whyItWorks}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-sm text-slate-700 dark:text-slate-300">
                      <strong className="text-rose-600 dark:text-rose-400 mr-1.5">Where the Analogy Breaks Down:</strong>
                      {currentSlide.analogy.limitsOfAnalogy}
                    </div>
                  </div>
                </div>
              )}

              {/* 11. Worked Example Slide (Supports structured workedExample or HTML or columns) */}
              {currentSlide.type === 'worked-example' && currentSlide.workedExample && (
                <StructuredWorkedExampleSlide example={currentSlide.workedExample} title={currentSlide.title} />
              )}

              {currentSlide.type === 'worked-example' && !currentSlide.workedExample && currentSlide.contentHtml && (
                <div className="space-y-6 max-w-6xl mx-auto my-auto w-full">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-3 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
                    {currentSlide.title}
                  </h2>
                  <div
                    className="prose prose-slate dark:prose-invert max-w-none text-lg"
                    dangerouslySetInnerHTML={{ __html: currentSlide.contentHtml }}
                  />
                </div>
              )}

              {currentSlide.type === 'worked-example' && !currentSlide.workedExample && !currentSlide.contentHtml && (
                <div className="space-y-6 max-w-6xl mx-auto my-auto w-full">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-3 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
                    {currentSlide.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[22px]">
                    {/* Left: Problem Statement Card */}
                    <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/30 shadow-sm space-y-4">
                      {currentSlide.columns ? (
                        <div className="space-y-3">
                          {currentSlide.columns.left.map((item, idx) => (
                            <div key={idx} className="text-slate-700 dark:text-slate-200 text-[22px] md:text-[23px] leading-relaxed">
                              <FormattedMathText text={item} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          <h3 className="font-bold text-slate-900 dark:text-white text-[24px] md:text-[26px]">Problem Statement:</h3>
                          <p className="text-slate-700 dark:text-slate-300 text-[22px] leading-relaxed">
                            A pressure transducer follows the transfer function:
                          </p>
                          <div className="my-3">
                            <MathRenderer math="P = \frac{V_{\mathrm{out}}}{S}" display />
                          </div>
                        </>
                      )}
                    </div>

                    {/* Right: Step-by-Step Solution Card */}
                    <div className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/30 shadow-sm space-y-4">
                      {currentSlide.columns && (
                        <div className="space-y-3">
                          {currentSlide.columns.right.map((item, idx) => (
                            <div key={idx} className="text-slate-700 dark:text-slate-200 text-[22px] md:text-[23px] leading-relaxed">
                              <FormattedMathText text={item} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 12. Check Your Understanding / Formative Quiz Slide */}
              {(currentSlide.type === 'check-understanding' || currentSlide.quiz) && currentSlide.quiz && (
                <InteractiveQuizSlide quiz={currentSlide.quiz} title={currentSlide.title} />
              )}

              {currentSlide.type === 'check-understanding' && !currentSlide.quiz && currentSlide.bullets && (
                <div className="space-y-8 max-w-5xl mx-auto my-auto w-full">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-4 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
                    {currentSlide.title}
                  </h2>
                  <div className="p-7 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/30 space-y-6 shadow-sm">
                    <div className="text-[24px] md:text-[26px] text-slate-900 dark:text-white font-semibold leading-relaxed">
                      <FormattedMathText text={currentSlide.bullets[0]} />
                    </div>
                    {currentSlide.bullets[1] && (
                      <div className="p-6 bg-blue-50/70 dark:bg-blue-950/40 rounded-xl border border-blue-200/40 dark:border-blue-800/30 text-[22px] md:text-[24px] text-blue-950 dark:text-blue-100 leading-relaxed">
                        <FormattedMathText text={currentSlide.bullets[1]} />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 9. Misconceptions Slide */}
              {currentSlide.type === 'misconceptions' && currentSlide.bullets && (
                <div className="space-y-6 max-w-6xl mx-auto my-auto w-full">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-3 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
                    {currentSlide.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentSlide.bullets.map((b, i) => {
                      const [heading, body] = b.split(': ');
                      return (
                        <div key={i} className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/30 space-y-2.5 shadow-sm">
                          <div className="font-bold text-rose-600 dark:text-rose-400 text-[24px]">
                            <FormattedMathText text={heading} />
                          </div>
                          <p className="text-slate-700 dark:text-slate-200 text-[22px] md:text-[24px] leading-relaxed">
                            <FormattedMathText text={body} />
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 10. Review Formula Sheet */}
              {currentSlide.type === 'review' && currentSlide.bullets && (
                <div className="space-y-6 max-w-6xl mx-auto my-auto w-full">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white border-b pb-3 border-slate-200/50 dark:border-slate-800/40 tracking-tight">
                    {currentSlide.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {currentSlide.bullets.map((formula, i) => {
                      const [name, math] = formula.split(': ');
                      return (
                        <div key={i} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
                          <span className="font-bold text-lg md:text-xl text-slate-800 dark:text-slate-200 border-b pb-2 border-slate-100 dark:border-slate-800">
                            <FormattedMathText text={name} />
                          </span>
                          <div className="py-2 text-xl md:text-2xl text-indigo-600 dark:text-cyan-400 font-serif text-center overflow-x-auto scrollbar-thin">
                            <FormattedMathText text={math.includes('$') ? math : `$$${math}$$`} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* REVEAL.JS FOOTER STRIP (Hidden in fullscreen so slide covers entire window) */}
            {!isFullscreen && (
              <div className={`px-6 py-2.5 border-t text-xs flex items-center justify-between select-none ${
                isDarkMode ? 'bg-slate-950/80 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                <span className="truncate max-w-md font-medium">
                  Unit I: Fundamentals of Measurement Systems · Er. Saroj Chalise
                </span>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-semibold">
                    {currentSlideIndex + 1} / {totalSlides}
                  </span>
                </div>
              </div>
            )}

            {/* Progress bar line along absolute bottom edge */}
            <div className={`w-full ${isFullscreen ? 'h-0.5' : 'h-1'} bg-slate-200/50 dark:bg-slate-800/50`}>
              <div
                className="h-full bg-blue-600 transition-all duration-200"
                style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Slide Navigation Bottom Bar (Hidden in fullscreen: no next, previous, slider or bottoms) */}
      {!isFullscreen && (
        <div className={`px-6 py-3 border-t flex items-center justify-between ${
          isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlideIndex((p) => Math.max(p - 1, 0))}
              disabled={currentSlideIndex === 0}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button
              onClick={() => setCurrentSlideIndex((p) => Math.min(p + 1, totalSlides - 1))}
              disabled={currentSlideIndex === totalSlides - 1}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Slider */}
          <div className="hidden sm:flex items-center gap-3 w-1/3">
            <input
              type="range"
              min={0}
              max={totalSlides - 1}
              value={currentSlideIndex}
              onChange={(e) => setCurrentSlideIndex(Number(e.target.value))}
              className="w-full accent-blue-600 h-1.5 rounded cursor-pointer"
            />
          </div>

          {/* Keyboard shortcut hint */}
          <div className="text-xs text-slate-400 hidden md:flex items-center gap-3">
            <span>Navigate with <kbd className="px-1.5 py-0.5 rounded border text-[11px] font-mono">←</kbd> <kbd className="px-1.5 py-0.5 rounded border text-[11px] font-mono">→</kbd> or <kbd className="px-1.5 py-0.5 rounded border text-[11px] font-mono">Space</kbd></span>
          </div>
        </div>
      )}

      {/* Speaker Notes Drawer (Reveal.js <aside class="notes"> console, hidden in fullscreen) */}
      {showNotes && !presenterMode && !isFullscreen && (
        <div className="border-t border-amber-500/30 bg-amber-50 dark:bg-amber-950/20 p-4 px-6 flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  Presenter Speaker Notes
                </h4>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200">
                  Private to Instructor
                </span>
              </div>
              <button
                onClick={() => setShowNotes(false)}
                className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Close
              </button>
            </div>
            <div className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              <FormattedMathText text={currentSlide.speakerNotes} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
