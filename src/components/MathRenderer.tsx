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
      <div className={`w-full my-6 py-4 px-2 overflow-hidden ${className}`}>
        {/* Subtle non-boxed label */}
        {label && (
          <div className="flex items-center justify-center gap-2 mb-3 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
            <span className="uppercase tracking-wider font-semibold text-indigo-600 dark:text-indigo-400">Formula</span>
            <span className="text-slate-400">•</span>
            <span>{label}</span>
          </div>
        )}

        {/* Free, open equation display with generous whitespace and proportional font scale */}
        <div className="py-4 px-3 flex items-center justify-center overflow-x-auto scrollbar-thin">
          <div
            className="katex-display-inner text-lg sm:text-xl md:text-2xl text-slate-900 dark:text-slate-100 tracking-normal text-center select-all"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        {/* Physical Interpretation Description */}
        {description && (
          <p className="mt-1 text-center text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal italic max-w-3xl mx-auto">
            {description}
          </p>
        )}

        {/* Clean parameter & variable symbol breakdown without heavy boxes */}
        {symbols && symbols.length > 0 && (
          <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 max-w-4xl mx-auto">
            <div className="text-[11px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mb-2.5 text-center">
              Where the symbols represent:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {symbols.map((item, idx) => {
                let symbolHtml = item.symbol;
                try {
                  const cleaned = item.symbol.replace(/^\$|\$$/g, '');
                  symbolHtml = katex.renderToString(cleaned, { displayMode: false, throwOnError: false });
                } catch {
                  symbolHtml = item.symbol;
                }

                return (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2 rounded-lg bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 text-xs text-slate-700 dark:text-slate-300"
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
                        {item.unit && (
                          <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                            [{item.unit}]
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
