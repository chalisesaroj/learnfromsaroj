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

        {/* Free, open equation display with generous whitespace */}
        <div className="py-5 px-3 flex items-center justify-center overflow-x-auto scrollbar-thin">
          <div
            className="katex-display-inner text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-slate-50 font-serif tracking-normal text-center select-all"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

        {/* Physical Interpretation Description */}
        {description && (
          <p className="mt-2 text-center text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium max-w-3xl mx-auto">
            {description}
          </p>
        )}

        {/* Clean parameter & variable symbol breakdown without heavy boxes */}
        {symbols && symbols.length > 0 && (
          <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-3 text-center">
              Where the symbols mean:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
                    className="flex items-start gap-2.5 py-1.5 px-2 text-sm text-slate-700 dark:text-slate-200"
                  >
                    <div
                      className="font-serif text-lg text-indigo-600 dark:text-cyan-400 font-bold shrink-0 min-w-[28px] text-center"
                      dangerouslySetInnerHTML={{ __html: symbolHtml }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {item.name}
                        </span>
                        {item.unit && (
                          <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                            ({item.unit})
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
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
      className={`katex-inline inline-flex items-baseline mx-1 text-[1.12em] font-serif ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
