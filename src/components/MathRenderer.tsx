import React, { useMemo } from 'react';
import katex from 'katex';
import { FormulaSymbolItem } from '../types/chapterDeck';

interface MathRendererProps {
  math: string;
  display?: boolean;
  className?: string;
  label?: string;
  description?: string;
  symbols?: FormulaSymbolItem[];
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  math,
  display = false,
  className = '',
  label,
  description,
  symbols
}) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math.trim(), {
        displayMode: display,
        throwOnError: false,
        trust: true,
      });
    } catch {
      return math;
    }
  }, [math, display]);

  if (display) {
    return (
      <div className={`w-full my-4 py-2 px-1 overflow-hidden ${className}`}>
        {/* Subtle academic equation label */}
        {label && (
          <div className="flex items-center justify-center gap-2 mb-2 text-xs font-medium text-slate-500 dark:text-slate-400 tracking-normal">
            <span className="font-mono bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded text-[11px] text-slate-600 dark:text-slate-300">
              {label}
            </span>
          </div>
        )}

        {/* Free, open equation display using unified math-responsive scaling container */}
        <div className="math-responsive">
          <div
            className="katex-display-inner text-slate-900 dark:text-slate-100 tracking-normal text-center select-all"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        {/* Physical Interpretation Description */}
        {description && (
          <p className="mt-1.5 text-center text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-normal italic max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}

        {/* Clean parameter & variable symbol breakdown without heavy boxes */}
        {symbols && symbols.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 max-w-4xl mx-auto">
            <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2 text-center">
              Parameter & Variable Definitions:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {symbols.map((item, idx) => {
                let symbolHtml = item.symbol;
                try {
                  const cleaned = item.symbol.replace(/^\$|\$$/g, '');
                  symbolHtml = katex.renderToString(cleaned, { displayMode: false, throwOnError: false });
                } catch {
                  symbolHtml = item.symbol;
                }

                const cleanUnit = item.unit
                  ? item.unit.replace(/\\text\{([^}]+)\}/g, '$1').replace(/^\{|\}$/g, '').replace(/^\[|\]$/g, '').trim()
                  : '';

                return (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2 rounded-lg bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <div
                      className="text-sm text-indigo-600 dark:text-indigo-400 font-bold shrink-0 min-w-[26px] text-center mt-0.5"
                      dangerouslySetInnerHTML={{ __html: symbolHtml }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {item.name}
                        </span>
                        {cleanUnit && (
                          <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                            [{cleanUnit}]
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <span
      className={`katex-inline inline-flex items-baseline mx-0.5 align-baseline text-inherit font-normal ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
