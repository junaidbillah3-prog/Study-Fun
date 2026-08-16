import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function MathText({ text }) {
  if (text === null || text === undefined) return null;
  if (typeof text !== 'string') return <span>{String(text)}</span>;

  // Split string into plain text and LaTeX blocks ($...$ or $$...$$)
  const parts = text.split(/(\$\$.*?\$\$|\$.*?\$)/g);

  return (
    <span>
      {parts.map((part, index) => {
        if (!part) return null;

        // Display / Block Math ($$...$$)
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const math = part.slice(2, -2).trim();
          return (
            <BlockMath
              key={index}
              math={math}
              renderError={() => <span>{part}</span>}
            />
          );
        }

        // Inline Math ($...$)
        if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1).trim();
          return (
            <InlineMath
              key={index}
              math={math}
              renderError={() => <span>{part}</span>}
            />
          );
        }

        // Plain text segment
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
}