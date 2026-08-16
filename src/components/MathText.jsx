import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function MathText({ text }) {
  if (typeof text !== 'string') return text;

  // Splits string into regular text and LaTeX blocks delimited by $ or $$
  const parts = text.split(/(\$\$.*?\$\$|\$.*?\$)/g);

  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          return <BlockMath key={index} math={part.slice(2, -2)} />;
        }
        if (part.startsWith('$') && part.endsWith('$')) {
          return <InlineMath key={index} math={part.slice(1, -1)} />;
        }
        return part;
      })}
    </span>
  );
}