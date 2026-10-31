import React, { useState, useEffect } from 'react';
import { CHAPTERS, ChapterId, SyllabusSection } from '../data/chaptersData';
import { BookOpen, CheckCircle2, AlertCircle, HelpCircle, Clock, ChevronDown, ChevronUp, GraduationCap, Award } from 'lucide-react';

import { ChapterConfig } from '../data/chaptersData';

export interface SyllabusGuideProps {
  currentChapterId?: string;
  activeChapterConfig?: ChapterConfig;
  availableChapters?: ChapterConfig[];
  onChapterChange?: (id: any) => void;
}

export const SyllabusGuide: React.FC<SyllabusGuideProps> = ({
  currentChapterId = 'unit1',
  activeChapterConfig,
  availableChapters = Object.values(CHAPTERS),
  onChapterChange
}) => {
  const [activeChapterId, setActiveChapterId] = useState<string>(currentChapterId);
  const [expandedSection, setExpandedSection] = useState<string | null>('1.1');

  // Sync with prop
  useEffect(() => {
    if (currentChapterId) {
      setActiveChapterId(currentChapterId);
      const ch = activeChapterConfig || availableChapters.find(c => c.id === currentChapterId) || CHAPTERS[currentChapterId as ChapterId];
      if (ch && ch.syllabusSections && ch.syllabusSections.length > 0) {
        setExpandedSection(ch.syllabusSections[0].number);
      }
    }
  }, [currentChapterId, activeChapterConfig, availableChapters]);

  const handleChapterSwitch = (id: string) => {
    setActiveChapterId(id);
    const ch = availableChapters.find(c => c.id === id) || CHAPTERS[id as ChapterId];
    if (ch && ch.syllabusSections && ch.syllabusSections.length > 0) {
      setExpandedSection(ch.syllabusSections[0].number);
    }
    if (onChapterChange) {
      onChapterChange(id);
    }
  };

  const chapter = activeChapterConfig || availableChapters.find(c => c.id === activeChapterId) || CHAPTERS[activeChapterId as ChapterId] || CHAPTERS.unit1;

  const toggleSection = (num: string) => {
    setExpandedSection(expandedSection === num ? null : num);
  };

  return (
    <div className="space-y-6">
      {/* Syllabus Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="font-mono text-indigo-400 font-bold text-xs bg-indigo-500/10 px-2.5 py-0.5 rounded border border-indigo-500/30">
              MEC 232 (3-1-1) · 3 Credits
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-300 font-medium">BE Mechanical · Total: 45 Hours (Full Marks: 100, Pass Marks: 45)</span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs font-mono text-indigo-300 font-semibold">Instructor: Er. Saroj Chalise</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {chapter.title} ({chapter.hours})
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
            {chapter.summary}
          </p>
        </div>

        {/* Chapter Switcher Pills */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 shrink-0 flex-wrap">
          {availableChapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => handleChapterSwitch(ch.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeChapterId === ch.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {ch.unitNumber} ({ch.hours})
            </button>
          ))}
        </div>
      </div>

      {/* Learning Objectives Card */}
      {activeChapterId === 'unit4' ? (
        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
            <Award className="w-4 h-4" />
            <span>Unit IV Core Syllabus Learning Objectives (Syllabus Mandate):</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Identify principles &amp; types of sensors and transducers:</strong> Differentiate primary sensing detectors from electrical transducers, active (self-generating) vs passive (externally excited) taxonomy, and static/dynamic metrics.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Measure force, torque, and moment:</strong> Structural load cells (S-beam, shear web, column), full-bridge circuit scaling, 6-DOF cross-talk calibration matrices [F]=[C][V], and shaft torque rosettes with RF telemetry.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Apply pressure and flow measurement tools:</strong> U-tube &amp; inclined manometers, Bourdon tubes, MEMS piezoresistive diaphragms, Pitot-static Bernoulli airspeed, and Venturi/orifice differential flow meters.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Employ visualization &amp; thermal/vibration sensors:</strong> PIV laser sheet correlation, Z-type Schlieren optics (dn/dy), BOS, RTD PT100 3-wire bridges, thermocouple CJC Seebeck loops, Stefan-Boltzmann pyrometry, and seismic accelerometers.</span>
            </div>
          </div>
        </div>
      ) : activeChapterId === 'unit3' ? (
        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
            <Award className="w-4 h-4" />
            <span>Unit III Core Syllabus Learning Objectives (Syllabus Mandate):</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Understand the concept &amp; significance of gauge factor:</strong> First-principles derivation GF = 1 + 2ν + (Δρ/ρ₀)/ε, Poisson's contraction, piezoresistivity, and alloy benchmarks.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Differentiate bonded vs unbonded strain gauges:</strong> Backing carriers, adhesive shear transfer, fatigue endurance, and unbonded wire flexures for accelerometer &amp; pressure sensing.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Learn various circuit configurations used with strain gauges:</strong> Ballast circuit ($m=1$ sensitivity peak), Wheatstone bridges (quarter $1\times$, half $2\times$, full $4\times$), and 4-wire Kelvin constant current circuits.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Understand temperature compensation techniques:</strong> Thermal apparent strain mechanisms, adjacent arm dummy balancing, and metallurgical self-temperature compensation (STC-13, STC-23, STC-06).</span>
            </div>
          </div>
        </div>
      ) : activeChapterId === 'unit2' ? (
        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
            <Award className="w-4 h-4" />
            <span>Unit II Core Syllabus Learning Objectives (Syllabus Mandate):</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Familiarize with common types of signals:</strong> Continuous vs discrete, periodic vs aperiodic, deterministic vs random, and energy vs power signals.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Acquire and characterize digital signals:</strong> Nyquist-Shannon sampling theorem, aliasing prevention, ADC quantization, and aperture jitter bounds.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Apply signal conditioning methods:</strong> Pre-amplification, analog anti-aliasing filtering, galvanic isolation barriers, and impedance matching.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Utilize signal processing techniques:</strong> Discrete convolution, cross/auto-correlation, FIR vs IIR filtering, and windowing.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 md:col-span-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Fourier / inverse transforms &amp; data presentation:</strong> Continuous FT, Discrete FT (DFT), Cooley-Tukey Radix-2 FFT, IDFT synthesis, and accurate data presentation (Bode, PSD, STFT).</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
            <Award className="w-4 h-4" />
            <span>Unit I Core Syllabus Learning Objectives:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Methods of Measurement:</strong> Direct comparison, deflection, and null-balance instruments with loading effects.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Analog vs. Digital:</strong> Resolution, quantization noise, theoretical SNR (6.02N + 1.76 dB), and sampling.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Data Acquisition:</strong> Full multi-stage DAQ pipeline from transducer to microcontroller/DSP bus.</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Uncertainty &amp; Safety:</strong> ISO GUM Type A &amp; Type B uncertainty propagation and IEC 61010-1 overvoltage ratings.</span>
            </div>
          </div>
        </div>
      )}

      {/* Syllabus Sections Accordion */}
      <div className="space-y-3">
        {chapter.syllabusSections.map((sec) => {
          const isExpanded = expandedSection === sec.number;
          return (
            <div
              key={sec.number}
              className={`rounded-xl border transition-all overflow-hidden ${
                isExpanded
                  ? 'border-indigo-500/50 bg-slate-900/90 shadow-lg ring-1 ring-indigo-500/20'
                  : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleSection(sec.number)}
                className="w-full text-left p-4 flex items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                    {sec.number}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {sec.specificObjective}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="hidden sm:flex items-center gap-1 text-xs text-slate-400 font-mono bg-slate-800 px-2.5 py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    {sec.hours}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-indigo-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="p-5 pt-0 border-t border-slate-800/80 mt-2 space-y-4 text-xs">
                  {/* Core Concepts */}
                  <div className="space-y-1.5 pt-3">
                    <h4 className="font-semibold text-slate-200 flex items-center gap-1.5 text-xs uppercase tracking-wider text-indigo-400">
                      <BookOpen className="w-3.5 h-3.5" />
                      Core Engineering Concepts
                    </h4>
                    <ul className="space-y-1.5 pl-5 list-disc text-slate-300 leading-relaxed">
                      {sec.coreConcepts.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Difficult Concepts & Misconceptions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="p-3.5 rounded-lg bg-amber-950/20 border border-amber-800/30 space-y-1.5">
                      <h5 className="font-semibold text-amber-300 flex items-center gap-1.5 text-xs">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                        Key Difficult Concepts:
                      </h5>
                      <ul className="space-y-1 pl-4 list-disc text-slate-300 leading-relaxed text-[11px]">
                        {sec.difficultConcepts.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-lg bg-rose-950/20 border border-rose-800/30 space-y-1.5">
                      <h5 className="font-semibold text-rose-300 flex items-center gap-1.5 text-xs">
                        <HelpCircle className="w-3.5 h-3.5 text-rose-400" />
                        Common Student Misconceptions:
                      </h5>
                      <ul className="space-y-1 pl-4 list-disc text-slate-300 leading-relaxed text-[11px]">
                        {sec.misconceptions.map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Typical Exam Questions */}
                  <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1.5">
                    <h5 className="font-semibold text-emerald-400 flex items-center gap-1.5 text-xs">
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                      Representative University Exam Questions:
                    </h5>
                    <ul className="space-y-1 pl-4 list-disc text-slate-300 font-mono text-[11px] leading-relaxed">
                      {sec.examQuestions.map((q, i) => (
                        <li key={i}>"{q}"</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
