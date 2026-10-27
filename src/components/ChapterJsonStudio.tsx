import React, { useState, useRef } from 'react';
import { ChapterConfig } from '../data/chaptersData';
import {
  exportChapterToJSON,
  parseAndValidateChapterJSON,
  SAMPLE_CHAPTER_JSON_TEMPLATE,
  AI_PROMPT_GENERATOR_TEMPLATE
} from '../utils/chapterJsonIO';
import {
  Upload,
  Download,
  FileCode,
  Sparkles,
  Check,
  Copy,
  AlertCircle,
  CheckCircle2,
  Play,
  RotateCcw,
  BookOpen,
  Code2,
  FileText
} from 'lucide-react';

interface ChapterJsonStudioProps {
  currentChapter: ChapterConfig;
  onImportChapter: (importedChapter: ChapterConfig) => void;
  onSelectChapter: (id: any) => void;
  loadedChapters: ChapterConfig[];
}

export const ChapterJsonStudio: React.FC<ChapterJsonStudioProps> = ({
  currentChapter,
  onImportChapter,
  onSelectChapter,
  loadedChapters
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'prompt' | 'editor' | 'export'>('upload');

  // Upload state
  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Prompt Generator state
  const [promptCourse, setPromptCourse] = useState('Instrumentation & Measurement Systems');
  const [promptUnitNumber, setPromptUnitNumber] = useState('Unit VI');
  const [promptTitle, setPromptTitle] = useState('Optical Measurement, Fiber Optics & Laser Doppler Velocimetry');
  const [promptHours, setPromptHours] = useState('8 Hours');
  const [promptInstructor, setPromptInstructor] = useState('Er. Saroj Chalise');
  const [promptTopics, setPromptTopics] = useState(
    `1. Principles of optical interferometry: Michelson, Mach-Zehnder, and Fabry-Perot\n2. Laser Doppler Velocimetry (LDV) and Laser Doppler Anemometry (LDA)\n3. Optical fiber sensors: extrinsic vs intrinsic, fiber Bragg gratings (FBG)\n4. Optical pyrometry, two-color ratio pyrometers, and thermal imaging\n5. Photodetectors: photodiodes, photomultiplier tubes (PMT), and CCD/CMOS arrays\n6. Mathematical modeling of optical heterodyne interference and Doppler shift\n7. Step-by-step worked numerical calculation of Doppler velocity and FBG strain wavelength shift`
  );
  const [promptCopied, setPromptCopied] = useState(false);

  // Live Editor state
  const [editorText, setEditorText] = useState(() => exportChapterToJSON(currentChapter));
  const [editorValidation, setEditorValidation] = useState<{ valid: boolean; error?: string } | null>(null);
  const [editorApplySuccess, setEditorApplySuccess] = useState(false);

  // Handle Drag & Drop
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const processFileContent = (content: string, filename: string) => {
    const result = parseAndValidateChapterJSON(content);
    if (result.success && result.chapter) {
      onImportChapter(result.chapter);
      setUploadStatus({
        type: 'success',
        message: `Successfully loaded "${result.chapter.title}" (${result.chapter.slides.length} slides) from ${filename}!`
      });
      setEditorText(exportChapterToJSON(result.chapter));
    } else {
      setUploadStatus({
        type: 'error',
        message: result.error || 'Failed to parse JSON file.'
      });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        processFileContent(text, file.name);
      };
      reader.readAsText(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        processFileContent(text, file.name);
      };
      reader.readAsText(file);
    }
  };

  // Generate and Copy Prompt
  const generatedPrompt = AI_PROMPT_GENERATOR_TEMPLATE({
    courseName: promptCourse,
    unitNumber: promptUnitNumber,
    chapterTitle: promptTitle,
    topics: promptTopics,
    hours: promptHours,
    instructor: promptInstructor
  });

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setPromptCopied(true);
      setTimeout(() => setPromptCopied(false), 2500);
    } catch {
      // Fallback
      setPromptCopied(true);
    }
  };

  // Live Editor Validate & Apply
  const handleValidateEditor = () => {
    const res = parseAndValidateChapterJSON(editorText);
    if (res.success && res.chapter) {
      setEditorValidation({ valid: true });
    } else {
      setEditorValidation({ valid: false, error: res.error });
    }
  };

  const handleApplyEditor = () => {
    const res = parseAndValidateChapterJSON(editorText);
    if (res.success && res.chapter) {
      onImportChapter(res.chapter);
      setEditorValidation({ valid: true });
      setEditorApplySuccess(true);
      setTimeout(() => setEditorApplySuccess(false), 2500);
    } else {
      setEditorValidation({ valid: false, error: res.error });
    }
  };

  const handleLoadSample = () => {
    const sampleStr = JSON.stringify(SAMPLE_CHAPTER_JSON_TEMPLATE, null, 2);
    setEditorText(sampleStr);
    processFileContent(sampleStr, 'sample_chapter_template.json');
  };

  // Download Current Chapter JSON
  const handleDownloadCurrentJSON = () => {
    const jsonStr = exportChapterToJSON(currentChapter);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentChapter.id || 'chapter'}_deck.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Download Sample Template JSON
  const handleDownloadSampleJSON = () => {
    const jsonStr = JSON.stringify(SAMPLE_CHAPTER_JSON_TEMPLATE, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sample_chapter_template.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Studio Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <FileCode className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Chapter JSON Studio &amp; AI Prompt Generator
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Dynamic lecture framework: upload, export, or generate complete multi-slide chapters in standardized JSON format
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'upload'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            Upload JSON
          </button>
          <button
            onClick={() => setActiveTab('prompt')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'prompt'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            AI Prompt Generator
          </button>
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'editor'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Live JSON Editor
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'export'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            Export &amp; Templates
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: UPLOAD & ACTIVE CHAPTER MANAGEMENT */}
      {/* ========================================================================= */}
      {activeTab === 'upload' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Upload Drop Zone */}
          <div className="lg:col-span-7 space-y-4">
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`p-10 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                dragActive
                  ? 'border-indigo-500 bg-indigo-950/20 shadow-xl'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,application/json"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="p-4 rounded-full bg-indigo-500/10 text-indigo-400 mb-4 border border-indigo-500/20">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Drop your Chapter JSON file here, or click to browse
              </h3>
              <p className="text-xs text-slate-400 max-w-md mb-4 leading-relaxed">
                Accepts any valid chapter file adhering to ChapterDeckJSON schema. Instantly loads into Presentation Viewer with figures, math, definitions, and analogies.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  .json files only
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  Schema v2.0
                </span>
              </div>
            </div>

            {/* Upload Feedback Status */}
            {uploadStatus && (
              <div
                className={`p-4 rounded-xl border flex items-start gap-3 text-xs ${
                  uploadStatus.type === 'success'
                    ? 'bg-emerald-950/40 border-emerald-800 text-emerald-200'
                    : 'bg-rose-950/40 border-rose-800 text-rose-200'
                }`}
              >
                {uploadStatus.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-semibold">{uploadStatus.type === 'success' ? 'Import Successful' : 'Import Error'}</p>
                  <p className="mt-0.5 opacity-90">{uploadStatus.message}</p>
                </div>
              </div>
            )}

            {/* Fast Action: Load Sample Template */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-white">Want to test right now?</h4>
                <p className="text-[11px] text-slate-400">
                  Load our full-featured sample chapter showcasing definitions, types, pros/cons, analogies &amp; worked examples.
                </p>
              </div>
              <button
                onClick={handleLoadSample}
                className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
              >
                <Play className="w-3.5 h-3.5" />
                Load Sample Chapter
              </button>
            </div>
          </div>

          {/* Loaded Chapters List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                Available Chapters in Memory ({loadedChapters.length})
              </h3>
              <p className="text-xs text-slate-400">
                Click any chapter to activate it immediately in Presentation Mode.
              </p>

              <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                {loadedChapters.map((ch) => {
                  const isCurrent = ch.id === currentChapter.id;
                  return (
                    <div
                      key={ch.id}
                      onClick={() => onSelectChapter(ch.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isCurrent
                          ? 'bg-indigo-950/40 border-indigo-500 text-white shadow-sm'
                          : 'bg-slate-950 border-slate-800/80 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="space-y-1 min-w-0 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                            {ch.unitNumber}
                          </span>
                          <span className="text-xs font-bold truncate">{ch.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 truncate">
                          {ch.slides.length} slides · {ch.hours} · {ch.instructor}
                        </p>
                      </div>

                      {isCurrent && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 shrink-0">
                          Active
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: AI PROMPT GENERATOR FOR GEMINI / CHATGPT */}
      {/* ========================================================================= */}
      {activeTab === 'prompt' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Customization Controls */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Configure Your Chapter Prompt</h3>
              </div>
              <p className="text-xs text-slate-400">
                Input your course details or paste your syllabus. The AI prompt generator will craft a ready-to-run prompt that instructs Gemini or ChatGPT to output exact ChapterDeckJSON.
              </p>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Course Name:</label>
                <input
                  type="text"
                  value={promptCourse}
                  onChange={(e) => setPromptCourse(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Unit / Module:</label>
                  <input
                    type="text"
                    value={promptUnitNumber}
                    onChange={(e) => setPromptUnitNumber(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Hours:</label>
                  <input
                    type="text"
                    value={promptHours}
                    onChange={(e) => setPromptHours(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Chapter Title:</label>
                <input
                  type="text"
                  value={promptTitle}
                  onChange={(e) => setPromptTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Instructor:</label>
                <input
                  type="text"
                  value={promptInstructor}
                  onChange={(e) => setPromptInstructor(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Syllabus Topics to Cover (Paste from syllabus):
                </label>
                <textarea
                  rows={6}
                  value={promptTopics}
                  onChange={(e) => setPromptTopics(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white font-mono leading-relaxed focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Generated Prompt Output Box */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 flex flex-col h-full">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    Copy-Pasteable AI Prompt (Ready for Gemini / ChatGPT / Claude)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Feed this prompt into any AI model. Save its output as <code>.json</code> and upload here.
                  </p>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                    promptCopied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30'
                  }`}
                >
                  {promptCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {promptCopied ? 'Copied Prompt!' : 'Copy Prompt'}
                </button>
              </div>

              <div className="relative flex-1">
                <textarea
                  readOnly
                  value={generatedPrompt}
                  className="w-full h-[520px] bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 leading-relaxed resize-none focus:outline-none selection:bg-indigo-500/40"
                />
              </div>

              {/* Instructions Pill */}
              <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-800/40 text-xs text-indigo-300 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-indigo-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Workflow Tip:
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  1. Click <strong>Copy Prompt</strong> above. <br />
                  2. Open <strong>Gemini</strong>, <strong>ChatGPT</strong>, or <strong>Claude</strong> and paste it. <br />
                  3. Save the response as <code className="text-cyan-300">my_chapter.json</code>. <br />
                  4. Drag and drop it into the <strong>Upload JSON</strong> tab, or paste into <strong>Live JSON Editor</strong>. It will immediately show up in the presentation view!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: LIVE JSON EDITOR & TESTER */}
      {/* ========================================================================= */}
      {activeTab === 'editor' && (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  Live JSON Code Editor &amp; Validator
                </h3>
                <p className="text-xs text-slate-400">
                  Edit slides, math, definitions, or analogies directly. Hit &quot;Validate &amp; Apply&quot; to test in real-time.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleValidateEditor}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  Check Syntax
                </button>
                <button
                  onClick={handleApplyEditor}
                  className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    editorApplySuccess
                      ? 'bg-emerald-600 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm'
                  }`}
                >
                  {editorApplySuccess ? <Check className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {editorApplySuccess ? 'Applied to Deck!' : 'Apply to Live Deck'}
                </button>
              </div>
            </div>

            {/* Editor Textarea */}
            <textarea
              rows={22}
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-200 leading-relaxed focus:outline-none focus:border-indigo-500"
              spellCheck={false}
            />

            {/* Validation Feedback */}
            {editorValidation && (
              <div
                className={`p-3 rounded-xl border text-xs flex items-center gap-2.5 ${
                  editorValidation.valid
                    ? 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-800 text-rose-300'
                }`}
              >
                {editorValidation.valid ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Valid Chapter JSON! Ready to present.</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                    <span>Validation Error: {editorValidation.error}</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: EXPORT & TEMPLATES */}
      {/* ========================================================================= */}
      {activeTab === 'export' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Export Current Active Chapter */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 w-fit text-indigo-400">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">
                Export Current Chapter as JSON
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Download the complete JSON for &quot;<strong>{currentChapter.title}</strong>&quot; ({currentChapter.slides.length} slides). You can re-upload this file on any computer or share it with students and colleagues.
              </p>
            </div>

            <button
              onClick={handleDownloadCurrentJSON}
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/30"
            >
              <Download className="w-4 h-4" />
              Download &quot;{currentChapter.id}_deck.json&quot;
            </button>
          </div>

          {/* Card 2: Download Blank Starter Template */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 w-fit text-emerald-400">
                <FileCode className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">
                Download Sample Starter Template
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Download a clean, fully populated template containing definition cards, taxonomy grids, advantages/disadvantages, analogies, worked mathematical examples, and inline vector figures.
              </p>
            </div>

            <button
              onClick={handleDownloadSampleJSON}
              className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-slate-700"
            >
              <Download className="w-4 h-4" />
              Download &quot;sample_chapter_template.json&quot;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
