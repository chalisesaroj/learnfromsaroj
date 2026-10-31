import React from 'react';
import { ChapterConfig } from '../data/chaptersData';
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Award,
  Layers,
  FileDown,
  Download,
  Presentation,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Gauge,
  Cpu,
  Flame,
  ArrowRight,
  BookMarked
} from 'lucide-react';

export interface InstructorPortfolioProps {
  chapters: ChapterConfig[];
  currentChapterId: string;
  onSelectChapter: (chapterId: string) => void;
  onNavigate: (view: 'deck' | 'book' | 'simulations' | 'figures' | 'syllabus' | 'code') => void;
  onOpenPdfModal: (layout: 'book' | 'landscape' | 'handout') => void;
}

export const InstructorPortfolio: React.FC<InstructorPortfolioProps> = ({
  chapters,
  currentChapterId,
  onSelectChapter,
  onNavigate,
  onOpenPdfModal
}) => {
  return (
    <div className="space-y-12">
      {/* =========================================================================
          HERO & PORTFOLIO HEADER
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950 p-6 sm:p-10 lg:p-12 shadow-2xl">
        {/* Subtle decorative mesh grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#4338ca_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Portrait Avatar & Direct Contact / Academic Credentials */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left space-y-5">
            <div className="relative">
              {/* Monogram Professional Seal */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-indigo-700 via-blue-600 to-indigo-500 p-1 shadow-xl shadow-indigo-950/60 flex items-center justify-center">
                <div className="w-full h-full rounded-[14px] bg-slate-950 flex flex-col items-center justify-center border border-indigo-400/30">
                  <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-100 to-indigo-300 font-mono tracking-tighter">
                    SC
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-semibold mt-1">
                    IOE Pulchowk
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono font-medium flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Faculty & Consultant</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
                Instructor &amp; Mechanical Engineer
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Er. Saroj Chalise
              </h1>
              <p className="text-sm sm:text-base text-slate-300 font-medium">
                Mechanical Engineer · Tribhuvan University, IOE Pulchowk Campus
              </p>
            </div>

            {/* Academic Credentials Badges */}
            <div className="w-full space-y-2 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                <div className="flex-1 text-left">
                  <div className="font-bold text-white">ME Mechanical Engineering</div>
                  <div className="text-[11px] text-slate-400">IOE Pulchowk Campus · Class of 2019</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex-1 text-left">
                  <div className="font-bold text-white">BE Mechanical Engineering</div>
                  <div className="text-[11px] text-slate-400">IOE Pulchowk Campus · Class of 2014</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200">
                <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex-1 text-left">
                  <div className="font-bold text-white">10+ Years Professional Experience</div>
                  <div className="text-[11px] text-slate-400">Hydropower Engineering · Automobile Diagnostics · Engineering Pedagogy</div>
                </div>
              </div>
            </div>

            {/* Reference Portfolio Link */}
            <div className="pt-1 flex items-center gap-3 flex-wrap justify-center sm:justify-start">
              <a
                href="https://chalisesaroj.github.io/slide/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                <span>chalisesaroj.github.io/slide</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400 font-mono">Department of Mechanical Engineering</span>
            </div>
          </div>

          {/* Right Column: Official Syllabus & Course Specification Box */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/80 p-6 sm:p-7 shadow-xl backdrop-blur-md space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-300">
                    Official Course Specification
                  </span>
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 font-semibold">
                  MEC 232 · 3 Credits
                </span>
              </div>

              {/* Course Title & Degree Program */}
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Level: Bachelor · Program: BE Mechanical
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
                  Instrumentation and Measurement (3-1-1)
                </h2>
              </div>

              {/* Course Parameter Grid (Exact Syllabus Fields) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Course Code</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">MEC 232</div>
                  <div className="text-[10px] text-indigo-400 font-mono">3 Credits</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Full Marks</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">100 Marks</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Pass: 45 Marks</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Course Nature</div>
                  <div className="text-sm font-bold text-white mt-0.5">Theory &amp; Practical</div>
                  <div className="text-[10px] text-slate-400 font-mono">Ratio (3-1-1)</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Total Lectures</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">45 Hours</div>
                  <div className="text-[10px] text-indigo-400 font-mono">Units I through V</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Engineering Field</div>
                  <div className="text-sm font-bold text-white mt-0.5">BE Mechanical</div>
                  <div className="text-[10px] text-slate-400 font-mono">IOE Pulchowk Campus</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Industrial Domain</div>
                  <div className="text-sm font-bold text-white mt-0.5">Hydropower &amp; Auto</div>
                  <div className="text-[10px] text-cyan-400 font-mono">Diagnostic DSP/DAQ</div>
                </div>
              </div>

              {/* Fast Course Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <button
                  onClick={() => onNavigate('deck')}
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-indigo-600/30"
                >
                  <Presentation className="w-4 h-4" />
                  <span>Open Deck Simulator</span>
                </button>

                <button
                  onClick={() => onNavigate('book')}
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-rose-600/30"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Book Chapter</span>
                </button>

                <button
                  onClick={() => onOpenPdfModal('book')}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors border border-slate-700"
                  title="Download Official Textbook PDF"
                >
                  <FileDown className="w-3.5 h-3.5 text-rose-400" />
                  <span>PDF Export</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROFESSIONAL DOMAIN EXPERTISE & INDUSTRY PILLARS
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-indigo-400" />
            <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
              10+ Years Engineering Practice &amp; Applied Field Domains
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline">
            Theory &amp; Industrial Reality Synced
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Pillar 1: Hydropower Engineering */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Hydropower &amp; Turbomachinery</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Extensive hands-on field experience in Pelton, Francis, and Kaplan turbine vibration monitoring, penstock pressure surge transient recording, hydro-generator shaft alignment, and real-time acoustic emission monitoring.
            </p>
            <div className="pt-1 text-[11px] font-mono text-slate-400 space-y-1">
              <div>• Penstock piezo-resistive pressure diagnostics</div>
              <div>• Turbine bearing vibration ISO standards</div>
              <div>• Flow measurement via ultrasonic time-of-flight</div>
            </div>
          </div>

          {/* Pillar 2: Automobile Diagnostics & Powertrain */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Automobile Systems &amp; Powertrain</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Industrial troubleshooting of automotive ECU sensor conditioning, engine cylinder dynamic pressure profiling, chassis dynamometer torque telemetry, exhaust gas temperature pyrometry, and CAN bus data acquisition.
            </p>
            <div className="pt-1 text-[11px] font-mono text-slate-400 space-y-1">
              <div>• Foil strain gauge torque dynamometers</div>
              <div>• Optical crank angle &amp; crankshaft speed encoders</div>
              <div>• Exhaust thermocouple signal conditioning</div>
            </div>
          </div>

          {/* Pillar 3: Engineering Education & Research */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Pedagogy &amp; Curriculum Design</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dedicated teaching for BE Mechanical engineering students at Tribhuvan University, modernizing traditional lecture delivery with Quarto Reveal.js presentation suites, LaTeX mathematical clarity, and vector SVGs.
            </p>
            <div className="pt-1 text-[11px] font-mono text-slate-400 space-y-1">
              <div>• BE IOE Pulchowk Campus (2014 &amp; 2019)</div>
              <div>• Author of MEC 232 Interactive Textbook</div>
              <div>• 45 Hours Comprehensive Lecture Modules</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COURSE MODULES & SYLLABUS DIRECTORY (MEC 232)
          ========================================================================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <BookMarked className="w-4 h-4 text-indigo-400" />
            <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
              MEC 232: Course Units &amp; Curriculum Modules (45 Hours)
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Click any unit to open slides or book chapter
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((ch, idx) => {
            const isCurrent = ch.id === currentChapterId;
            return (
              <div
                key={ch.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                  isCurrent
                    ? 'bg-slate-900 border-indigo-500/60 shadow-lg shadow-indigo-950/40 ring-1 ring-indigo-500/30'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                      {ch.unitNumber} · {ch.hours}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {ch.slides.length} Slides
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {ch.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {ch.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      onSelectChapter(ch.id);
                      onNavigate('deck');
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-semibold transition-colors"
                  >
                    <Presentation className="w-3.5 h-3.5" />
                    <span>Presentation</span>
                  </button>

                  <button
                    onClick={() => {
                      onSelectChapter(ch.id);
                      onNavigate('book');
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-rose-400" />
                    <span>Textbook</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          KEY FEATURES & LEARNING TOOLS BAR
          ========================================================================= */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="p-3">
          <div className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono">100%</div>
          <div className="text-xs font-bold text-white mt-1">Vector SVG Standard</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Pure #ffffff background, 16:9 widescreen diagrams</div>
        </div>

        <div className="p-3">
          <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono">LaTeX</div>
          <div className="text-xs font-bold text-white mt-1">Mathematical Precision</div>
          <div className="text-[11px] text-slate-400 mt-0.5">KaTeX responsive scaling &amp; symbol definitions</div>
        </div>

        <div className="p-3">
          <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">7 Labs</div>
          <div className="text-xs font-bold text-white mt-1">Interactive Simulations</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Virtual potentiometers, ADC quantizers &amp; Wheatstone bridges</div>
        </div>

        <div className="p-3">
          <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">A4 PDF</div>
          <div className="text-xs font-bold text-white mt-1">Classroom-Ready Export</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Printable textbook chapters &amp; Quarto Reveal.js decks</div>
        </div>
      </section>
    </div>
  );
};
