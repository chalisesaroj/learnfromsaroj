import React from 'react';
import { ChapterConfig } from '../data/chaptersData';
import {
  GraduationCap,
  Briefcase,
  Gauge,
  Flame,
  ExternalLink
} from 'lucide-react';

export interface InstructorPortfolioProps {
  chapters: ChapterConfig[];
}

export const InstructorPortfolio: React.FC<InstructorPortfolioProps> = ({
  chapters
}) => {
  const totalHours = chapters.reduce((acc, ch) => {
    const parsed = parseInt(ch.hours, 10);
    return acc + (Number.isNaN(parsed) ? 0 : parsed);
  }, 0);

  return (
    <div className="space-y-12 py-2">
      {/* =====================================================================
          WELCOMING HERO & INSTRUCTOR BIOGRAPHY
          ===================================================================== */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Welcoming Personal Note & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm text-indigo-700 font-medium">
                <span>Instrumentation &amp; Measurement</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>MEC 232 (3-1-1)</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-500">BE Mechanical Engineering</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
                Welcome to Er. Saroj Chalise&rsquo;s Engineering Portal
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                Thank you for visiting. Whether you are a mechanical engineering student preparing for exams, a fellow educator, or a practicing engineer revisiting measurement fundamentals, this space brings together my complete classroom decks, structured textbook chapters, numerical tutorials, and interactive engineering simulations in one calm workspace.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                My teaching philosophy centers on connecting first-principles physics and mathematics directly with real industrial machinery—turning abstract sensor equations, calibration curves, and digital signal processing into clear, lasting engineering intuition.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-500">
              <span className="font-semibold text-slate-900">Department of Mechanical Engineering</span>
              <span aria-hidden="true">·</span>
              <span>{chapters.length} Course Units</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{totalHours || 45} Lecture Hours</span>
              <span aria-hidden="true">·</span>
              <a
                href="https://chalisesaroj.github.io/slide/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-indigo-700 hover:text-indigo-800 underline underline-offset-4"
              >
                <span>chalisesaroj.github.io/slide</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Instructor Profile & Academic Credentials */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-indigo-700 text-white flex flex-col items-center justify-center shrink-0">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight font-mono">
                  SC
                </span>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Er. Saroj Chalise
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Mechanical Engineer &amp; Faculty Instructor
                </p>
                <p className="text-xs text-indigo-700 font-medium mt-0.5">
                  Tribhuvan University · IOE Pulchowk Campus
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-indigo-700 mt-0.5 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-slate-900">ME in Mechanical Engineering</div>
                  <div className="text-slate-500">IOE Pulchowk Campus · Class of 2019</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-slate-900">BE in Mechanical Engineering</div>
                  <div className="text-slate-500">IOE Pulchowk Campus · Class of 2014</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-slate-900">10+ Years of Field &amp; Teaching Practice</div>
                  <div className="text-slate-500">
                    Hydropower Turbomachinery · Automotive Powertrain Diagnostics · Curriculum Design
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-3 text-left tabular-nums">
              <div>
                <div className="text-xs text-slate-500">Course Code</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">MEC 232</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Credit Ratio</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">3-1-1</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Assessment</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">100 Marks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          WHAT YOU WILL FIND IN THIS PORTAL (QUIET GUIDE TO THE TOP MENU)
          ===================================================================== */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-3 flex items-baseline justify-between gap-4 flex-wrap">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            How This Learning Portal Is Organized
          </h2>
          <span className="text-xs text-slate-500">
            Use the navigation bar above to switch sections anytime
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-1.5">
            <h3 className="text-base font-bold text-slate-900">Deck</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              View interactive classroom slide decks chapter by chapter or download them in PowerPoint (.pptx) and PDF slide formats.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-1.5">
            <h3 className="text-base font-bold text-slate-900">Book</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Read structured textbook chapters with complete mathematical derivations and figures, or export formatted A4 textbook PDFs.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-1.5">
            <h3 className="text-base font-bold text-slate-900">Tutorial</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Practice solved numerical problem sets with written final answers, self-check inputs, and downloadable worksheet PDFs.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-1.5">
            <h3 className="text-base font-bold text-slate-900">Lab</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Experiment hands-on with interactive simulations covering ADC quantization, calibration, loading error, bridges, and dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          APPLIED ENGINEERING BACKGROUND
          ===================================================================== */}
      <section className="space-y-4">
        <div className="border-b border-slate-200 pb-3 flex items-baseline justify-between gap-4 flex-wrap">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Professional Practice &amp; Applied Domains
          </h2>
          <span className="text-xs text-slate-500">
            10+ years connecting industrial testing and classroom theory
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <Gauge className="w-5 h-5 text-indigo-700" />
            <h3 className="text-base font-bold text-slate-900">Hydropower &amp; Turbomachinery</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Field engineering in Pelton, Francis, and Kaplan turbine vibration diagnostics, penstock pressure surge transient logging, shaft alignment, and ultrasonic flow metering.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <Flame className="w-5 h-5 text-rose-700" />
            <h3 className="text-base font-bold text-slate-900">Automotive Systems &amp; Powertrain</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hands-on experience in ECU sensor conditioning, cylinder pressure profiling, chassis dynamometer torque telemetry, and exhaust thermocouple signal conditioning.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <GraduationCap className="w-5 h-5 text-emerald-700" />
            <h3 className="text-base font-bold text-slate-900">Curriculum &amp; Pedagogy</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Teaching BE Mechanical students under Tribhuvan and Pokhara University syllabi using progressive derivations, vector schematic diagrams, and interactive diagnostic labs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
