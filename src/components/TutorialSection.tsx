import React, { useMemo, useState } from 'react';
import { ChapterConfig } from '../data/chaptersData';
import {
  CHAPTER_TUTORIALS,
  TutorialProblem,
  TutorialTopic
} from '../data/tutorialContent';
import { FormattedMathText } from './FormattedMathText';
import { MathRenderer } from './MathRenderer';
import { exportTutorialToPdf } from '../utils/tutorialPdfExport';
import {
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  FileDown,
  KeyRound,
  Lightbulb,
  Lock,
  Printer,
  ShieldCheck,
  Sparkles,
  Unlock,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

interface TutorialSectionProps {
  currentChapterId: string;
  activeChapterConfig: ChapterConfig;
  availableChapters: ChapterConfig[];
  onChapterChange: (chapterId: string) => void;
}

type TopicFilter = 'All' | TutorialTopic;

const SOLUTION_PASSWORD = 'itemBike136//';

export const TutorialSection: React.FC<TutorialSectionProps> = ({
  currentChapterId,
  activeChapterConfig,
  onChapterChange
}) => {
  const tutorialSheet = CHAPTER_TUTORIALS[currentChapterId] || null;

  const [topicFilter, setTopicFilter] = useState<TopicFilter>('All');
  const [isSolutionsUnlocked, setIsSolutionsUnlocked] = useState(false);
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});
  const [activePromptTarget, setActivePromptTarget] = useState<string | null>(null); // problem.id or 'toolbar'
  const [passwordInput, setPasswordInput] = useState('');
  const [showPasswordText, setShowPasswordText] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isExportingPdf, setIsExportingPdf] = useState(false);

  const filteredProblems = useMemo(() => {
    if (!tutorialSheet) return [];
    if (topicFilter === 'All') return tutorialSheet.problems;
    return tutorialSheet.problems.filter((p) => p.topic === topicFilter);
  }, [tutorialSheet, topicFilter]);

  const topicCounts = useMemo(() => {
    if (!tutorialSheet) {
      return {
        All: 0,
        Hysteresis: 0,
        'Single-Point Calibration': 0,
        'Multi-Point Calibration': 0
      };
    }
    return {
      All: tutorialSheet.problems.length,
      Hysteresis: tutorialSheet.problems.filter((p) => p.topic === 'Hysteresis').length,
      'Single-Point Calibration': tutorialSheet.problems.filter(
        (p) => p.topic === 'Single-Point Calibration'
      ).length,
      'Multi-Point Calibration': tutorialSheet.problems.filter(
        (p) => p.topic === 'Multi-Point Calibration'
      ).length
    };
  }, [tutorialSheet]);

  const allExpanded = useMemo(() => {
    if (!isSolutionsUnlocked || filteredProblems.length === 0) return false;
    return filteredProblems.every((p) => Boolean(expandedSolutions[p.id]));
  }, [isSolutionsUnlocked, filteredProblems, expandedSolutions]);

  const openUnlockPrompt = (targetId: string) => {
    setActivePromptTarget(targetId);
    setPasswordInput('');
    setPasswordError(null);
  };

  const handleVerifyPassword = (targetId: string) => {
    if (passwordInput === SOLUTION_PASSWORD) {
      setIsSolutionsUnlocked(true);
      setPasswordError(null);
      setPasswordInput('');
      setActivePromptTarget(null);

      if (targetId === 'toolbar') {
        const next: Record<string, boolean> = {};
        filteredProblems.forEach((p) => {
          next[p.id] = true;
        });
        setExpandedSolutions(next);
      } else {
        setExpandedSolutions((prev) => ({ ...prev, [targetId]: true }));
      }
    } else {
      setPasswordError('Incorrect password. Please contact Er. Saroj Chalise for full solution access.');
    }
  };

  const handleLockSolutions = () => {
    setIsSolutionsUnlocked(false);
    setExpandedSolutions({});
    setActivePromptTarget(null);
    setPasswordInput('');
    setPasswordError(null);
  };

  const toggleSolution = (id: string) => {
    if (!isSolutionsUnlocked) {
      openUnlockPrompt(id);
      return;
    }
    setExpandedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAllSolutions = () => {
    if (!isSolutionsUnlocked) {
      openUnlockPrompt('toolbar');
      return;
    }
    const target = !allExpanded;
    const next: Record<string, boolean> = { ...expandedSolutions };
    filteredProblems.forEach((p) => {
      next[p.id] = target;
    });
    setExpandedSolutions(next);
  };

  const handlePrintSheet = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    if (!tutorialSheet) return;
    try {
      setIsExportingPdf(true);
      await exportTutorialToPdf(tutorialSheet);
    } catch (err) {
      console.error('Tutorial PDF export failed:', err);
    } finally {
      setIsExportingPdf(false);
    }
  };

  // Fallback for chapters without a tutorial sheet yet
  if (!tutorialSheet) {
    return (
      <section className="max-w-4xl mx-auto py-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 text-center space-y-5 shadow-xs">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center mx-auto text-indigo-600">
            <Calculator className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
              {activeChapterConfig.unitNumber} · Tutorial Worksheet Archive
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Dedicated Tutorial Sheet Ready for Unit I
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              The standalone Tutorial Section for{' '}
              <span className="font-semibold text-slate-900">{activeChapterConfig.title}</span> is
              queued next. Open the complete{' '}
              <span className="font-semibold text-indigo-700">Unit I Tutorial Sheet</span> now
              to practice 5 exam-standard numericals on Hysteresis, Single-Point Calibration, and
              Multi-Point OLS Calibration with written final answers.
            </p>
          </div>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onChapterChange('unit1')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Open Unit I Tutorial (5 Numericals)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  const totalMarks = tutorialSheet.problems.reduce((sum, p) => sum + p.marks, 0);

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* =====================================================================
          TUTORIAL SHEET OVERVIEW HEADER (LIGHT INTERFACE, SEPARATE FROM DECK)
          ===================================================================== */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 space-y-5 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-indigo-600">
              <span className="font-semibold uppercase tracking-wider">Standalone Tutorial Sheet</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-700 font-semibold">{tutorialSheet.unitNumber}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500">{tutorialSheet.estimatedTime}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {tutorialSheet.unitNumber} Tutorial: Numerical Problems &amp; Calibration Practice
            </h2>

            <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
              {tutorialSheet.subtitle}
            </p>
          </div>

          {/* Summary Telemetry Strip */}
          <div className="flex items-center gap-5 sm:gap-6 border-t lg:border-t-0 lg:border-l border-slate-200 pt-4 lg:pt-0 lg:pl-6 shrink-0">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                Numericals
              </div>
              <div className="text-xl font-bold text-slate-900 font-mono tabular-nums mt-0.5">
                {tutorialSheet.problems.length}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                Total Marks
              </div>
              <div className="text-xl font-bold text-slate-900 font-mono tabular-nums mt-0.5">
                {totalMarks}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                Solutions
              </div>
              <div
                className={`text-sm font-bold font-mono mt-1 flex items-center gap-1 ${
                  isSolutionsUnlocked ? 'text-emerald-700' : 'text-amber-700'
                }`}
              >
                {isSolutionsUnlocked ? (
                  <>
                    <Unlock className="w-3.5 h-3.5" />
                    <span>Unlocked</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Locked</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Filter & Solution Lock Controls Bar */}
        <div className="pt-4 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Topic Filter Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {(
              [
                { id: 'All', label: `All Problems (${topicCounts.All})` },
                { id: 'Hysteresis', label: `Hysteresis (${topicCounts.Hysteresis})` },
                {
                  id: 'Single-Point Calibration',
                  label: `Single-Point (${topicCounts['Single-Point Calibration']})`
                },
                {
                  id: 'Multi-Point Calibration',
                  label: `Multi-Point (${topicCounts['Multi-Point Calibration']})`
                }
              ] as { id: TopicFilter; label: string }[]
            ).map((tab) => {
              const active = topicFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setTopicFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Global Solution Lock & Print Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            {isSolutionsUnlocked ? (
              <>
                <button
                  onClick={toggleAllSolutions}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition-colors whitespace-nowrap shrink-0"
                >
                  {allExpanded ? (
                    <EyeOff className="w-3.5 h-3.5" />
                  ) : (
                    <Eye className="w-3.5 h-3.5" />
                  )}
                  <span>{allExpanded ? 'Hide All Solutions' : 'Show All Solutions'}</span>
                </button>

                <button
                  onClick={handleLockSolutions}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition-colors whitespace-nowrap shrink-0"
                  title="Re-lock worked solutions with password protection"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Lock Solutions</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => openUnlockPrompt('toolbar')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors whitespace-nowrap shrink-0 shadow-xs"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Unlock Full Solutions</span>
              </button>
            )}

            <button
              onClick={handleDownloadPdf}
              disabled={isExportingPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors whitespace-nowrap shrink-0 disabled:opacity-50"
              title="Download this tutorial worksheet as PDF"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{isExportingPdf ? 'Generating PDF...' : 'Download PDF'}</span>
            </button>

            <button
              onClick={handlePrintSheet}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition-colors whitespace-nowrap shrink-0"
              title="Print or save this tutorial worksheet"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-600" />
              <span>Print Sheet</span>
            </button>
          </div>
        </div>

        {/* Toolbar Password Unlock Panel */}
        {!isSolutionsUnlocked && activePromptTarget === 'toolbar' && (
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 space-y-3">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-900">
                <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Instructor Password Required to View Full Worked Solutions</span>
              </div>
              <button
                onClick={() => setActivePromptTarget(null)}
                className="text-xs font-medium text-slate-500 hover:text-slate-800"
              >
                Cancel
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="relative flex-1 max-w-sm">
                <input
                  type={showPasswordText ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (passwordError) setPasswordError(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleVerifyPassword('toolbar');
                  }}
                  placeholder="Enter password to unlock solutions..."
                  autoFocus
                  className="w-full pl-3 pr-9 py-2 rounded-lg bg-white border border-indigo-200 text-xs sm:text-sm font-mono text-slate-900 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordText((v) => !v)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  title={showPasswordText ? 'Hide password' : 'Show password'}
                >
                  {showPasswordText ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <button
                onClick={() => handleVerifyPassword('toolbar')}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                Unlock Solutions
              </button>
            </div>

            {passwordError && (
              <div className="flex items-center gap-1.5 text-xs font-medium text-rose-700">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{passwordError}</span>
              </div>
            )}
          </div>
        )}
      </section>

      {/* =====================================================================
          NUMERICAL PROBLEMS LIST (QUESTION + FINAL ANSWER VISIBLE; SOLUTION LOCKED)
          ===================================================================== */}
      <div className="space-y-6">
        {filteredProblems.map((problem: TutorialProblem) => {
          const isExpanded = isSolutionsUnlocked && Boolean(expandedSolutions[problem.id]);
          const isPromptOpenOnCard = !isSolutionsUnlocked && activePromptTarget === problem.id;

          return (
            <article
              key={problem.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors hover:border-slate-300 shadow-xs"
            >
              {/* Problem Header */}
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-500">
                    <span className="font-bold text-indigo-700">{problem.number}</span>
                    <span>·</span>
                    <span className="text-slate-800 font-semibold">{problem.topic}</span>
                    <span>·</span>
                    <span>{problem.difficulty}</span>
                    <span>·</span>
                    <span className="tabular-nums">{problem.marks} Marks</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {problem.title}
                  </h3>
                </div>
              </div>

              {/* Problem Body */}
              <div className="p-6 space-y-5">
                {/* Question Statement */}
                <div className="text-base sm:text-[17px] text-slate-800 leading-relaxed">
                  <FormattedMathText text={problem.statement} />
                </div>

                {/* Given Parameters Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {problem.given.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5"
                    >
                      <div className="text-xs font-mono text-slate-600">{item.label}</div>
                      <div className="text-sm sm:text-base font-semibold text-slate-900 font-mono tabular-nums mt-0.5">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Measured Calibration Data Table (Part of Question Statement) */}
                {problem.dataTable && (
                  <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                    {problem.dataTable.caption && (
                      <div className="px-4 py-2.5 border-b border-slate-200 bg-slate-50 text-xs sm:text-sm font-mono text-slate-700 flex items-center justify-between">
                        <span className="font-semibold">{problem.dataTable.caption}</span>
                        <span className="text-slate-500">
                          {problem.dataTable.rows.length} Readings
                        </span>
                      </div>
                    )}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200 bg-slate-50/70">
                            {problem.dataTable.headers.map((header, hIdx) => (
                              <th
                                key={hIdx}
                                className={`px-4 py-2.5 text-xs sm:text-sm font-mono font-semibold text-slate-700 whitespace-nowrap ${
                                  hIdx === 0 ? 'text-left' : 'text-right'
                                }`}
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {problem.dataTable.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`px-4 py-2.5 text-sm sm:text-[15px] font-mono tabular-nums whitespace-nowrap ${
                                    cIdx === 0
                                      ? 'font-semibold text-indigo-700 text-left'
                                      : 'text-slate-800 text-right'
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Prominent Written Final Answer Block (Always Visible) */}
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Final Answer</span>
                    </div>
                    <div className="text-xs sm:text-sm text-emerald-700 font-mono">
                      Key Computed Outputs
                    </div>
                  </div>

                  <p className="text-base font-medium text-slate-900 leading-relaxed">
                    {problem.finalAnswerSummary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
                    {problem.finalAnswerItems.map((ans, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg bg-white border border-emerald-200 px-3 py-2"
                      >
                        <div className="text-xs font-mono text-slate-600">{ans.label}</div>
                        <div className="text-sm sm:text-base font-bold text-emerald-800 font-mono tabular-nums mt-0.5">
                          {ans.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution Action Bar: Locked by Password Until Authenticated */}
                <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    {isSolutionsUnlocked ? (
                      <>
                        <Unlock className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Full step-by-step derivation unlocked.</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-slate-500 shrink-0" />
                        <span>Full worked solution is password-protected.</span>
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => toggleSolution(problem.id)}
                    className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      isExpanded
                        ? 'bg-indigo-600 text-white'
                        : isSolutionsUnlocked
                        ? 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {!isSolutionsUnlocked && <KeyRound className="w-4 h-4" />}
                    <span>
                      {!isSolutionsUnlocked
                        ? 'Enter Password to View Full Solution'
                        : isExpanded
                        ? 'Hide Worked Solution'
                        : 'Show Full Worked Solution'}
                    </span>
                    {isSolutionsUnlocked &&
                      (isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      ))}
                  </button>
                </div>

                {/* Per-Card Inline Password Prompt (Shown only when clicked while locked) */}
                {isPromptOpenOnCard && (
                  <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-4 space-y-3">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2 text-sm font-semibold text-indigo-900">
                        <KeyRound className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>Enter Password to Unlock Full Worked Solution ({problem.number})</span>
                      </div>
                      <button
                        onClick={() => setActivePromptTarget(null)}
                        className="text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-800"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <div className="relative flex-1 max-w-sm">
                        <input
                          type={showPasswordText ? 'text' : 'password'}
                          value={passwordInput}
                          onChange={(e) => {
                            setPasswordInput(e.target.value);
                            if (passwordError) setPasswordError(null);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleVerifyPassword(problem.id);
                          }}
                          placeholder="Enter instructor password..."
                          autoFocus
                          className="w-full pl-3 pr-9 py-2 rounded-lg bg-white border border-indigo-200 text-sm font-mono text-slate-900 focus:outline-none focus:border-indigo-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPasswordText((v) => !v)}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                          title={showPasswordText ? 'Hide password' : 'Show password'}
                        >
                          {showPasswordText ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      <button
                        onClick={() => handleVerifyPassword(problem.id)}
                        className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                      >
                        Unlock Solution
                      </button>
                    </div>

                    {passwordError && (
                      <div className="flex items-center gap-1.5 text-sm font-medium text-rose-700">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{passwordError}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Collapsible Full Worked Solution (Strictly Gated Behind Password Unlock) */}
                {isExpanded && (
                  <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                      <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-indigo-700">
                        Step-by-Step Worked Solution
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        MEC 232 Solution Key
                      </span>
                    </div>

                    {/* Method Hint (Hidden until unlocked) */}
                    <div className="rounded-xl border border-amber-200 bg-amber-50/70 px-4 py-3 text-sm sm:text-[15px] text-amber-950 flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-amber-800 mr-1.5">Method Summary:</span>
                        <FormattedMathText text={problem.formulaHint} />
                      </div>
                    </div>

                    <div className="space-y-4">
                      {problem.steps.map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className="rounded-xl border border-slate-200 bg-white p-4 space-y-2 shadow-2xs"
                        >
                          <h4 className="text-sm sm:text-base font-bold text-slate-900">
                            {step.title}
                          </h4>
                          <div className="text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                            <FormattedMathText text={step.explanation} />
                          </div>
                          {step.math && (
                            <div className="pt-1">
                              <MathRenderer math={step.math} display />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Engineering Takeaway Note */}
                    <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 px-4 py-3 flex items-start gap-2.5 text-sm text-slate-800 leading-relaxed">
                      <Lightbulb className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-indigo-800 mr-1">
                          Engineering Insight:
                        </span>
                        <FormattedMathText text={problem.engineeringNote} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
