import React, { useState } from 'react';
import { PresentationViewer } from './components/PresentationViewer';
import { BookChapterViewer } from './components/BookChapterViewer';
import { TutorialSection } from './components/TutorialSection';
import { InteractiveSimulations } from './components/InteractiveSimulations';
import { InstructorPortfolio } from './components/InstructorPortfolio';
import { ChapterDirectoryHub } from './components/ChapterDirectoryHub';
import { PdfDownloadModal } from './components/PdfDownloadModal';
import { CHAPTERS, ChapterConfig } from './data/chaptersData';
import { ArrowLeft } from 'lucide-react';

type NavTab = 'home' | 'deck' | 'book' | 'tutorial' | 'lab';

export default function App() {
  const [loadedChapters] = useState<ChapterConfig[]>(() => Object.values(CHAPTERS));
  const [currentChapterId, setCurrentChapterId] = useState<string>('unit1');
  const [activeNav, setActiveNav] = useState<NavTab>('home');
  const [isViewingChapter, setIsViewingChapter] = useState<boolean>(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [pdfModalInitialLayout, setPdfModalInitialLayout] = useState<'book' | 'landscape' | 'handout'>('book');

  const chapter =
    loadedChapters.find((c) => c.id === currentChapterId) || loadedChapters[0] || CHAPTERS.unit1;

  const handleSelectNav = (tab: NavTab) => {
    setActiveNav(tab);
    setIsViewingChapter(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenChapterView = (chapterId: string) => {
    setCurrentChapterId(chapterId);
    setIsViewingChapter(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'deck', label: 'Deck' },
    { id: 'book', label: 'Book' },
    { id: 'tutorial', label: 'Tutorial' },
    { id: 'lab', label: 'Lab' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Clean Top Bar: Wordmark + Strictly 5 Navigation Buttons */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleSelectNav('home');
            }}
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 hover:text-indigo-700 transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
          >
            Er. Saroj Chalise
          </a>

          <nav
            aria-label="Primary Navigation"
            className="flex items-center justify-between sm:justify-end gap-1 sm:gap-2 overflow-x-auto scrollbar-none"
          >
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectNav(item.id)}
                  className={`min-h-[38px] px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 py-5 sm:p-6 lg:p-8 space-y-6">
        {activeNav === 'home' && <InstructorPortfolio chapters={loadedChapters} />}

        {activeNav === 'deck' && !isViewingChapter && (
          <ChapterDirectoryHub
            mode="deck"
            chapters={loadedChapters}
            onViewChapter={handleOpenChapterView}
          />
        )}

        {activeNav === 'deck' && isViewingChapter && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap pb-2 border-b border-slate-200">
              <button
                type="button"
                onClick={() => setIsViewingChapter(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors whitespace-nowrap shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Decks</span>
              </button>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 truncate">
                {chapter.unitNumber}: {chapter.title}
              </span>
            </div>

            <PresentationViewer
              currentChapterId={currentChapterId}
              activeChapterConfig={chapter}
              availableChapters={loadedChapters}
              onChapterChange={setCurrentChapterId}
              onOpenPdfModal={() => {
                setPdfModalInitialLayout('landscape');
                setIsPdfModalOpen(true);
              }}
            />
          </div>
        )}

        {activeNav === 'book' && !isViewingChapter && (
          <ChapterDirectoryHub
            mode="book"
            chapters={loadedChapters}
            onViewChapter={handleOpenChapterView}
          />
        )}

        {activeNav === 'book' && isViewingChapter && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap pb-2 border-b border-slate-200">
              <button
                type="button"
                onClick={() => setIsViewingChapter(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors whitespace-nowrap shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Book Chapters</span>
              </button>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 truncate">
                {chapter.unitNumber}: {chapter.title}
              </span>
            </div>

            <BookChapterViewer
              chapter={chapter}
              availableChapters={loadedChapters}
              onChapterChange={setCurrentChapterId}
              onOpenPdfModal={(lyt) => {
                if (lyt) setPdfModalInitialLayout(lyt);
                setIsPdfModalOpen(true);
              }}
            />
          </div>
        )}

        {activeNav === 'tutorial' && !isViewingChapter && (
          <ChapterDirectoryHub
            mode="tutorial"
            chapters={loadedChapters}
            onViewChapter={handleOpenChapterView}
          />
        )}

        {activeNav === 'tutorial' && isViewingChapter && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap pb-2 border-b border-slate-200">
              <button
                type="button"
                onClick={() => setIsViewingChapter(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors whitespace-nowrap shrink-0"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Tutorials</span>
              </button>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 truncate">
                {chapter.unitNumber}: {chapter.title}
              </span>
            </div>

            <TutorialSection
              currentChapterId={currentChapterId}
              activeChapterConfig={chapter}
              availableChapters={loadedChapters}
              onChapterChange={setCurrentChapterId}
            />
          </div>
        )}

        {activeNav === 'lab' && <InteractiveSimulations />}
      </main>

      {/* PDF Download Provision Modal */}
      <PdfDownloadModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        currentChapter={chapter}
        availableChapters={loadedChapters}
        onSelectChapter={(id) => setCurrentChapterId(id)}
        initialLayout={pdfModalInitialLayout}
      />

      {/* Footer */}
      <footer className="mt-auto px-6 py-5 border-t border-slate-200 bg-white text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap text-center sm:text-left">
          <span className="font-semibold text-slate-900">Er. Saroj Chalise</span>
          <span aria-hidden="true">·</span>
          <span>Mechanical Engineer (BE 2014, ME 2019 · IOE Pulchowk Campus)</span>
          <span aria-hidden="true">·</span>
          <span className="text-indigo-700 font-medium">MEC 232: Instrumentation &amp; Measurement</span>
        </div>
        <div className="flex items-center gap-3 text-slate-500 flex-wrap justify-center sm:justify-end">
          <a
            href="https://chalisesaroj.github.io/slide/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-700 hover:text-indigo-800 underline"
          >
            chalisesaroj.github.io/slide
          </a>
        </div>
      </footer>
    </div>
  );
}
