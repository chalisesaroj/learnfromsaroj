import React, { useState, useRef } from 'react';
import { PresentationViewer } from './components/PresentationViewer';
import { SourceCodeViewer } from './components/SourceCodeViewer';
import { InteractiveSimulations } from './components/InteractiveSimulations';
import { VisualAssetGallery } from './components/VisualAssetGallery';
import { SyllabusGuide } from './components/SyllabusGuide';
import { AiTopicGenerator } from './components/AiTopicGenerator';
import { ChapterJsonStudio } from './components/ChapterJsonStudio';
import { BookChapterViewer } from './components/BookChapterViewer';
import { PdfDownloadModal } from './components/PdfDownloadModal';
import { CHAPTERS, ChapterConfig, ChapterId } from './data/chaptersData';
import { exportChapterToJSON, parseAndValidateChapterJSON } from './utils/chapterJsonIO';
import JSZip from 'jszip';
import {
  Presentation,
  BookOpen,
  FileCode2,
  SlidersHorizontal,
  Image,
  BookOpenCheck,
  Sparkles,
  Download,
  Archive,
  Layers,
  GraduationCap,
  Upload,
  FileJson,
  CheckCircle2,
  PlusCircle,
  FileDown
} from 'lucide-react';

export default function App() {
  // Master list of available chapters (defaults: Units 1-5, plus dynamically uploaded chapters)
  const [loadedChapters, setLoadedChapters] = useState<ChapterConfig[]>(() => Object.values(CHAPTERS));
  const [currentChapterId, setCurrentChapterId] = useState<string>('unit1');
  const [activeNav, setActiveNav] = useState<
    'deck' | 'book' | 'code' | 'simulations' | 'figures' | 'syllabus' | 'generator' | 'json-studio'
  >('deck');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [pdfModalInitialLayout, setPdfModalInitialLayout] = useState<'book' | 'landscape' | 'handout'>('book');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const chapter = loadedChapters.find((c) => c.id === currentChapterId) || loadedChapters[0] || CHAPTERS.unit1;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Dynamic import handler
  const handleImportChapter = (newChapter: ChapterConfig) => {
    setLoadedChapters((prev) => {
      const idx = prev.findIndex((c) => c.id === newChapter.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = newChapter;
        return next;
      }
      return [...prev, newChapter];
    });
    setCurrentChapterId(newChapter.id);
    showToast(`Loaded "${newChapter.title}" (${newChapter.slides.length} slides)`);
  };

  // Quick file upload from header
  const handleQuickUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = parseAndValidateChapterJSON(content);
      if (res.success && res.chapter) {
        handleImportChapter(res.chapter);
        setActiveNav('deck');
      } else {
        alert(res.error || 'Failed to parse chapter JSON.');
      }
    };
    reader.readAsText(file);
    if (e.target) e.target.value = '';
  };

  // Export current chapter JSON
  const handleExportCurrentChapterJson = () => {
    const jsonStr = exportChapterToJSON(chapter);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${chapter.id}_deck.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Exported ${chapter.id}_deck.json`);
  };

  const downloadZipPackage = async (target?: ChapterConfig) => {
    try {
      const ch = target || chapter;
      const zip = new JSZip();
      if (ch.pySource) zip.file(ch.pyFileName || 'lecture.py', ch.pySource);
      if (ch.qmdSource) zip.file(ch.qmdFileName || 'lecture.qmd', ch.qmdSource);
      zip.file(
        'README.md',
        `# ${ch.title} (${ch.hours})
Quarto Reveal.js Lecture Package with Python-First Vector Visualizations
Author: ${ch.instructor}
Reference Deck: ${ch.referenceUrl || 'https://chalisesaroj.github.io/slide/'}

## Execution Commands:
\`\`\`bash
pip install numpy matplotlib
python ${ch.pyFileName || 'lecture.py'}
quarto render ${ch.qmdFileName || 'lecture.qmd'}
\`\`\`
`
      );

      // Add figures
      const folderName = ch.id === 'unit1' ? 'figures' : `figures_${ch.id}`;
      const figuresFolder = zip.folder(folderName);
      if (figuresFolder && ch.figures) {
        Object.values(ch.figures).forEach((fig) => {
          figuresFolder.file(fig.filename, fig.svgContent);
        });
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = ch.zipFileName || `${ch.id}_lecture.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
    }
  };

  const downloadMasterBundleZip = async () => {
    try {
      const zip = new JSZip();

      loadedChapters.forEach((ch) => {
        const folder = zip.folder(`${ch.unitNumber.replace(/\s+/g, '_')}_${ch.shortTitle.replace(/\s+/g, '_')}`);
        if (folder) {
          if (ch.pySource) folder.file(ch.pyFileName || 'lecture.py', ch.pySource);
          if (ch.qmdSource) folder.file(ch.qmdFileName || 'lecture.qmd', ch.qmdSource);
          const figsFolder = folder.folder(ch.id === 'unit1' ? 'figures' : `figures_${ch.id}`);
          if (figsFolder && ch.figures) {
            Object.values(ch.figures).forEach((fig) => {
              figsFolder.file(fig.filename, fig.svgContent);
            });
          }
        }
      });

      const totalFigures = loadedChapters.reduce((acc, c) => acc + Object.keys(c.figures || {}).length, 0);

      zip.file(
        'README.md',
        `# Instrumentation Engineering - Multi-Chapter Lecture Suites
Author: Er. Saroj Chalise
Reference Format: https://chalisesaroj.github.io/slide/

## Modules Included:
${loadedChapters.map((c, idx) => `${idx + 1}. ${c.title} (${c.hours}) - ${Object.keys(c.figures || {}).length} Vector SVGs`).join('\n')}

Total Figures: ${totalFigures} Publication-Grade 16:9 Vector SVGs with Pure White (#ffffff) Backgrounds.

## Execution:
\`\`\`bash
# Run any chapter folder:
cd <Chapter_Folder>
python lecture*.py
quarto render lecture*.qmd
\`\`\`
`
      );

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'instrumentation_engineering_complete_suite.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Hidden file input for fast upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        className="hidden"
        onChange={handleQuickUploadFile}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-emerald-600 text-white text-xs font-semibold rounded-xl shadow-2xl animate-fade-in border border-emerald-400">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar / App Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
        {/* Zone 1: Wordmark brand */}
        <div className="flex items-center gap-3 whitespace-nowrap shrink-0">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-600/30">
            QD
          </div>
          <div>
            <span className="text-base font-bold tracking-tight text-white block leading-none">
              QuartoDeck Studio
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              Presentation App &amp; JSON Engine
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-xs sm:text-sm font-medium text-slate-400">
          <button
            onClick={() => setActiveNav('deck')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
              activeNav === 'deck'
                ? 'text-white font-semibold border-b-2 border-indigo-500 pb-0.5'
                : 'hover:text-slate-200'
            }`}
          >
            <Presentation className="w-3.5 h-3.5 text-indigo-400" />
            <span>Deck Simulator</span>
          </button>
          <button
            onClick={() => setActiveNav('book')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
              activeNav === 'book'
                ? 'text-white font-semibold border-b-2 border-rose-500 pb-0.5'
                : 'hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-rose-400" />
            <span>Book Chapter</span>
          </button>
          <button
            onClick={() => setActiveNav('code')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
              activeNav === 'code'
                ? 'text-white font-semibold border-b-2 border-indigo-500 pb-0.5'
                : 'hover:text-slate-200'
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Source Code</span>
          </button>
          <button
            onClick={() => setActiveNav('simulations')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
              activeNav === 'simulations'
                ? 'text-white font-semibold border-b-2 border-indigo-500 pb-0.5'
                : 'hover:text-slate-200'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Labs (7 Labs)</span>
          </button>
          <button
            onClick={() => setActiveNav('figures')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
              activeNav === 'figures'
                ? 'text-white font-semibold border-b-2 border-indigo-500 pb-0.5'
                : 'hover:text-slate-200'
            }`}
          >
            <Image className="w-3.5 h-3.5 text-cyan-400" />
            <span>Vector SVGs</span>
          </button>
          <button
            onClick={() => setActiveNav('syllabus')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 ${
              activeNav === 'syllabus'
                ? 'text-white font-semibold border-b-2 border-indigo-500 pb-0.5'
                : 'hover:text-slate-200'
            }`}
          >
            <BookOpenCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Syllabus Guide</span>
          </button>
          <button
            onClick={() => setActiveNav('json-studio')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all whitespace-nowrap shrink-0 ${
              activeNav === 'json-studio'
                ? 'bg-indigo-600/20 text-indigo-300 font-semibold border border-indigo-500/40'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold">Chapter JSON Studio</span>
          </button>
        </nav>

        {/* Zone 3: Fast App Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setActiveNav('json-studio')}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
            title="Upload Chapter JSON or generate AI prompt"
          >
            <Upload className="w-3.5 h-3.5 text-indigo-400" />
            <span>Upload JSON</span>
          </button>

          <button
            onClick={handleExportCurrentChapterJson}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-750 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
            title="Export current chapter as editable JSON"
          >
            <FileJson className="w-3.5 h-3.5 text-cyan-400" />
            <span>Export JSON</span>
          </button>

          <button
            onClick={() => setIsPdfModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-rose-600 rounded-lg hover:bg-rose-500 transition-colors whitespace-nowrap shrink-0 shadow-lg shadow-rose-600/25"
            title={`Download ${chapter.unitNumber} as PDF (Presentation or Handout)`}
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>{chapter.unitNumber} PDF</span>
          </button>

          <button
            onClick={() => downloadZipPackage()}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors whitespace-nowrap shrink-0 shadow-lg shadow-indigo-600/25"
            title={`Download ${chapter.unitNumber} ZIP Package`}
          >
            <Archive className="w-3.5 h-3.5" />
            <span>{chapter.unitNumber} ZIP</span>
          </button>

          <button
            onClick={downloadMasterBundleZip}
            className="hidden md:flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-400 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
            title="Download complete multi-chapter bundle"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>All Units</span>
          </button>
        </div>
      </header>

      {/* Mobile/Tablet Sub-Navigation */}
      <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs scrollbar-none">
        <button
          onClick={() => setActiveNav('deck')}
          className={`px-3 py-1.5 rounded whitespace-nowrap ${
            activeNav === 'deck' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400'
          }`}
        >
          Deck
        </button>
        <button
          onClick={() => setActiveNav('book')}
          className={`px-3 py-1.5 rounded whitespace-nowrap flex items-center gap-1 ${
            activeNav === 'book' ? 'bg-rose-600 text-white font-semibold' : 'text-rose-400'
          }`}
        >
          <BookOpen className="w-3 h-3" />
          Book
        </button>
        <button
          onClick={() => setActiveNav('json-studio')}
          className={`px-3 py-1.5 rounded whitespace-nowrap flex items-center gap-1 ${
            activeNav === 'json-studio' ? 'bg-amber-600 text-white font-semibold' : 'text-amber-400'
          }`}
        >
          <Sparkles className="w-3 h-3" />
          JSON Studio
        </button>
        <button
          onClick={() => setActiveNav('code')}
          className={`px-3 py-1.5 rounded whitespace-nowrap ${
            activeNav === 'code' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400'
          }`}
        >
          Source Code
        </button>
        <button
          onClick={() => setActiveNav('simulations')}
          className={`px-3 py-1.5 rounded whitespace-nowrap ${
            activeNav === 'simulations' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400'
          }`}
        >
          Labs (7)
        </button>
        <button
          onClick={() => setActiveNav('figures')}
          className={`px-3 py-1.5 rounded whitespace-nowrap ${
            activeNav === 'figures' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400'
          }`}
        >
          Figures
        </button>
        <button
          onClick={() => setActiveNav('syllabus')}
          className={`px-3 py-1.5 rounded whitespace-nowrap ${
            activeNav === 'syllabus' ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400'
          }`}
        >
          Syllabus
        </button>
      </div>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Course Header Banner with Chapter Switcher Carousel */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 flex-wrap">
              <span>Instrumentation Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Er. Saroj Chalise</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-indigo-400">{chapter.unitNumber} ({chapter.hours})</span>
              <span aria-hidden="true">·</span>
              <span>{chapter.slides.length} Pedagogical Slides</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
              {chapter.title}
            </h1>
            <p className="text-sm text-slate-400 mt-1 max-w-3xl leading-relaxed">
              {chapter.summary}{' '}
              {chapter.referenceUrl && (
                <a
                  href={chapter.referenceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  {chapter.referenceUrl.replace('https://', '')}
                </a>
              )}
            </p>
          </div>

          {/* Dynamic Chapter Switcher Pill */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 shrink-0 shadow-lg flex-wrap max-w-full overflow-x-auto">
            {loadedChapters.map((ch) => {
              const isSelected = currentChapterId === ch.id;
              const isCustom = !['unit1', 'unit2', 'unit3', 'unit4', 'unit5'].includes(ch.id);
              return (
                <button
                  key={ch.id}
                  onClick={() => setCurrentChapterId(ch.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>{ch.unitNumber}</span>
                  {isCustom ? (
                    <span className="text-[10px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300">Custom</span>
                  ) : (
                    <span className="text-[10px] opacity-75 hidden xl:inline">({ch.hours})</span>
                  )}
                </button>
              );
            })}

            <button
              onClick={() => setActiveNav('json-studio')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-amber-300 bg-amber-950/40 border border-amber-800/40 hover:bg-amber-900/50 transition-colors"
              title="Add a new chapter via JSON or prompt"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>+ Add Chapter</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeNav === 'deck' && (
          <PresentationViewer
            currentChapterId={currentChapterId}
            activeChapterConfig={chapter}
            availableChapters={loadedChapters}
            onChapterChange={setCurrentChapterId}
            onOpenUploadStudio={() => setActiveNav('json-studio')}
            onOpenPdfModal={() => {
              setPdfModalInitialLayout('landscape');
              setIsPdfModalOpen(true);
            }}
          />
        )}

        {activeNav === 'book' && (
          <BookChapterViewer
            chapter={chapter}
            availableChapters={loadedChapters}
            onChapterChange={setCurrentChapterId}
            onOpenPdfModal={(lyt) => {
              if (lyt) setPdfModalInitialLayout(lyt);
              setIsPdfModalOpen(true);
            }}
          />
        )}

        {activeNav === 'code' && (
          <SourceCodeViewer
            currentChapterId={currentChapterId}
            activeChapterConfig={chapter}
            availableChapters={loadedChapters}
            onChapterChange={setCurrentChapterId}
            onOpenPdfModal={() => {
              setPdfModalInitialLayout('book');
              setIsPdfModalOpen(true);
            }}
          />
        )}

        {activeNav === 'simulations' && <InteractiveSimulations />}

        {activeNav === 'figures' && (
          <VisualAssetGallery
            currentChapterId={currentChapterId}
            activeChapterConfig={chapter}
            availableChapters={loadedChapters}
            onChapterChange={setCurrentChapterId}
          />
        )}

        {activeNav === 'syllabus' && (
          <SyllabusGuide
            currentChapterId={currentChapterId}
            activeChapterConfig={chapter}
            availableChapters={loadedChapters}
            onChapterChange={setCurrentChapterId}
          />
        )}

        {activeNav === 'generator' && <AiTopicGenerator />}

        {activeNav === 'json-studio' && (
          <ChapterJsonStudio
            currentChapter={chapter}
            onImportChapter={handleImportChapter}
            onSelectChapter={(id) => {
              setCurrentChapterId(id);
              setActiveNav('deck');
            }}
            loadedChapters={loadedChapters}
          />
        )}
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
      <footer className="mt-auto px-6 py-4 border-t border-slate-900 bg-slate-950 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span>Quarto Reveal.js Format</span>
          <span>·</span>
          <span>Er. Saroj Chalise (<a href="https://chalisesaroj.github.io/slide/" target="_blank" rel="noreferrer" className="hover:text-slate-300 underline">chalisesaroj.github.io/slide</a>)</span>
          <span>·</span>
          <span className="text-indigo-400 font-medium">Units I to V + Dynamic JSON Engine</span>
        </div>
        <div className="flex items-center gap-4 text-slate-500 flex-wrap">
          <span>Section 8A Pure White Background</span>
          <span>·</span>
          <span>LaTeX Formulas &amp; Mathtext</span>
          <span>·</span>
          <span>JSON Schema 2.0 Import/Export</span>
        </div>
      </footer>
    </div>
  );
}
