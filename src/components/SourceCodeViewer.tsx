import React, { useState } from 'react';
import { CHAPTERS, ChapterId } from '../data/chaptersData';
import JSZip from 'jszip';
import { Copy, Check, Download, FileCode, Terminal, Archive, Code2, Layers, FileDown } from 'lucide-react';

import { ChapterConfig } from '../data/chaptersData';

export interface SourceCodeViewerProps {
  currentChapterId?: string;
  activeChapterConfig?: ChapterConfig;
  availableChapters?: ChapterConfig[];
  onChapterChange?: (id: any) => void;
  onOpenPdfModal?: () => void;
}

export const SourceCodeViewer: React.FC<SourceCodeViewerProps> = ({
  currentChapterId = 'unit1',
  activeChapterConfig,
  availableChapters = Object.values(CHAPTERS),
  onChapterChange,
  onOpenPdfModal
}) => {
  const [activeChapterId, setActiveChapterId] = useState<string>(currentChapterId);
  const [activeTab, setActiveTab] = useState<'py' | 'qmd' | 'run'>('py');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [isZipping, setIsZipping] = useState(false);

  // Sync with prop
  React.useEffect(() => {
    if (currentChapterId) {
      setActiveChapterId(currentChapterId);
    }
  }, [currentChapterId]);

  const handleChapterSwitch = (id: string) => {
    setActiveChapterId(id);
    if (onChapterChange) {
      onChapterChange(id);
    }
  };

  const chapter = activeChapterConfig || availableChapters.find(c => c.id === activeChapterId) || CHAPTERS[activeChapterId as ChapterId] || CHAPTERS.unit1;

  const copyToClipboard = (text: string, tabName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tabName);
    setTimeout(() => setCopiedTab(null), 2200);
  };

  const downloadFile = (filename: string, content: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadCompleteZip = async () => {
    try {
      setIsZipping(true);
      const zip = new JSZip();

      // Add lecture.py
      zip.file(chapter.pyFileName, chapter.pySource);

      // Add lecture.qmd
      zip.file(chapter.qmdFileName, chapter.qmdSource);

      // Add README.md
      const readme = `# ${chapter.title}
Quarto Reveal.js Lecture Package with Python-First Vector Visualizations
Author: ${chapter.instructor}
Reference Deck: ${chapter.referenceUrl}

## Files Included:
- \`${chapter.pyFileName}\`: Python asset generator producing all vector SVGs in \`figures/\`
- \`${chapter.qmdFileName}\`: Complete Quarto Reveal.js presentation with embedded figures and LaTeX math
- \`figures/\`: All pre-generated 16:9 vector SVG diagrams

## Quick Run:
\`\`\`bash
pip install numpy matplotlib
python ${chapter.pyFileName}
quarto render ${chapter.qmdFileName}
\`\`\`

Rendered output will be generated as \`${chapter.qmdFileName.replace('.qmd', '.html')}\` ready for classroom projection!
`;
      zip.file('README.md', readme);

      // Add figures/ directory and all SVGs
      const folderName = activeChapterId === 'unit1' ? 'figures' : `figures_${activeChapterId}`;
      const figuresFolder = zip.folder(folderName);
      if (figuresFolder && chapter.figures) {
        Object.values(chapter.figures).forEach((fig) => {
          figuresFolder.file(fig.filename, fig.svgContent);
        });
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = chapter.zipFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to generate zip:', err);
    } finally {
      setIsZipping(false);
    }
  };

  const getActiveCode = () => {
    switch (activeTab) {
      case 'py':
        return chapter.pySource;
      case 'qmd':
        return chapter.qmdSource;
      case 'run':
        return chapter.runInstructions;
    }
  };

  const getLineCount = (text: string) => text.split('\n').length;
  const getByteSize = (text: string) => (new Blob([text]).size / 1024).toFixed(1);

  return (
    <div className="space-y-4">
      {/* Top Banner & Fast Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base font-semibold text-white">
              Raw Production Source Code
            </h3>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
              Strict Master Prompt Format
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Complete, verbatim code blocks for <code className="text-indigo-300">{chapter.pyFileName}</code> and <code className="text-indigo-300">{chapter.qmdFileName}</code> with zero omissions.
          </p>
        </div>

        {/* Chapter Switcher & Global Download */}
        <div className="flex items-center gap-3 self-stretch sm:self-auto flex-wrap">
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 flex-wrap">
            {availableChapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => handleChapterSwitch(ch.id)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  activeChapterId === ch.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {ch.unitNumber} ({ch.hours})
              </button>
            ))}
          </div>

          {onOpenPdfModal && (
            <button
              onClick={onOpenPdfModal}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs shadow-lg shadow-rose-600/20 transition-all"
              title={`Download ${chapter.unitNumber} as high-resolution PDF`}
            >
              <FileDown className="w-4 h-4" />
              <span>Download {chapter.unitNumber} PDF</span>
            </button>
          )}

          <button
            onClick={downloadCompleteZip}
            disabled={isZipping}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/20 transition-all disabled:opacity-50"
          >
            <Archive className="w-4 h-4" />
            <span>{isZipping ? 'Packaging ZIP...' : `Download ${chapter.unitNumber} ZIP`}</span>
          </button>
        </div>
      </div>

      {/* Tabs and Tab Bar Actions */}
      <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
        <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5 gap-3">
          {/* File selector tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800/80">
            <button
              onClick={() => setActiveTab('py')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'py'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-cyan-400" />
              <span>FILE 1: {chapter.pyFileName}</span>
              <span className="text-[10px] opacity-75 font-mono">({getLineCount(chapter.pySource)} lines)</span>
            </button>

            <button
              onClick={() => setActiveTab('qmd')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'qmd'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-amber-400" />
              <span>FILE 2: {chapter.qmdFileName}</span>
              <span className="text-[10px] opacity-75 font-mono">({getLineCount(chapter.qmdSource)} lines)</span>
            </button>

            <button
              onClick={() => setActiveTab('run')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeTab === 'run'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>RUN INSTRUCTIONS</span>
            </button>
          </div>

          {/* Action buttons for active tab */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-500 mr-2 hidden sm:inline">
              {getByteSize(getActiveCode())} KB
            </span>

            {/* One-click copy */}
            <button
              onClick={() => copyToClipboard(getActiveCode(), activeTab)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
              title="Copy complete literal file content in one click"
            >
              {copiedTab === activeTab ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Literal Code</span>
                </>
              )}
            </button>

            {/* Individual download */}
            {activeTab !== 'run' && (
              <button
                onClick={() =>
                  downloadFile(
                    activeTab === 'py' ? chapter.pyFileName : chapter.qmdFileName,
                    getActiveCode(),
                    'text/plain'
                  )
                }
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save {activeTab === 'py' ? '.py' : '.qmd'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Code View Area */}
        <div className="relative p-4 font-mono text-xs overflow-x-auto max-h-[640px] leading-relaxed select-text scrollbar-thin">
          <pre className="text-slate-300 font-mono">
            <code>{getActiveCode()}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
