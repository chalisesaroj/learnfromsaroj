import React, { useMemo } from 'react';
import katex from 'katex';

interface FormattedMathTextProps {
  text: string;
  className?: string;
  displayMode?: boolean;
}

export const FormattedMathText: React.FC<FormattedMathTextProps> = ({
  text,
  className = '',
  displayMode = false
}) => {
  const parts = useMemo(() => {
    if (!text) return [];

    // Regex to split by display math ($$...$$), inline math ($...$ or \(...\)), and markdown bold (**...**)
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$|\\\(.+?\\\)|(?:\*\*[^*]+?\*\*))/g;
    const tokens: Array<{ type: 'text' | 'math' | 'bold'; content: string; display?: boolean }> = [];

    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        tokens.push({
          type: 'text',
          content: text.substring(lastIndex, match.index)
        });
      }

      const raw = match[0];
      if (raw.startsWith('$$') && raw.endsWith('$$')) {
        tokens.push({
          type: 'math',
          content: raw.slice(2, -2).trim(),
          display: true
        });
      } else if (raw.startsWith('$') && raw.endsWith('$')) {
        tokens.push({
          type: 'math',
          content: raw.slice(1, -1).trim(),
          display: false
        });
      } else if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
        tokens.push({
          type: 'math',
          content: raw.slice(2, -2).trim(),
          display: false
        });
      } else if (raw.startsWith('**') && raw.endsWith('**')) {
        tokens.push({
          type: 'bold',
          content: raw.slice(2, -2)
        });
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      tokens.push({
        type: 'text',
        content: text.substring(lastIndex)
      });
    }

    return tokens;
  }, [text]);

  return (
    <span className={`inline-block-math leading-relaxed ${className}`}>
      {parts.map((p, idx) => {
        if (p.type === 'bold') {
          return (
            <strong key={idx} className="font-bold text-slate-900 dark:text-white">
              <FormattedMathText text={p.content} />
            </strong>
          );
        }

        if (p.type === 'math') {
          try {
            const isDisplay = displayMode || p.display || false;
            const html = katex.renderToString(p.content, {
              displayMode: isDisplay,
              throwOnError: false,
              trust: true
            });
            if (isDisplay) {
              return (
                <div key={idx} className="math-responsive">
                  <span
                    className="katex-display-inner text-slate-900 dark:text-slate-100 tracking-normal text-center select-all"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              );
            }
            return (
              <span
                key={idx}
                className="katex-inline inline-flex items-baseline mx-0.5 align-baseline text-inherit font-normal"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch {
            return (
              <span key={idx} className="font-mono text-blue-600 dark:text-blue-400">
                {p.content}
              </span>
            );
          }
        }

        return <React.Fragment key={idx}>{p.content}</React.Fragment>;
      })}
    </span>
  );
};
