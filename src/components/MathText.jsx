import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

function transformRawMath(text) {
  if (typeof text !== 'string') return text;

  // Don't transform if the string already has manual LaTeX $ delimiters
  if (text.includes('$')) return text;

  return text
    // Square roots: sqrt(expr) -> $\sqrt{expr}$
    .replace(/sqrt\(([^)]+)\)/g, (_, expr) => `$\\sqrt{${expr}}$`)

    // Exponents with parentheses: base^(expr) -> $base^{expr}$
    .replace(/([a-zA-Z0-9_\.]+)\^\(([^)]+)\)/g, (_, base, expr) => `$${base}^{${expr}}$`)

    // Single token exponents: base^exponent -> $base^{exponent}$
    .replace(/([a-zA-Z0-9_\.]+)\^([a-zA-Z0-9_\.]+)/g, (_, base, exp) => `$${base}^{${exp}}$`)

    // Simple fractions: (num)/(den) -> $\frac{num}{den}$
    .replace(/\(([^)]+)\)\/\(([^)]+)\)/g, (_, num, den) => `$\\frac{${num}}{${den}}$`);
}

export default function MathText({ text }) {
  if (text === null || text === undefined) return null;
  if (typeof text !== 'string') return <span>{String(text)}</span>;

  try {
    const processedText = transformRawMath(text);
    const parts = processedText.split(/(\$\$.*?\$\$|\$.*?\$)/g);

    return (
      <span>
        {parts.map((part, index) => {
          if (!part) return null;

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

          return <React.Fragment key={index}>{part}</React.Fragment>;
        })}
      </span>
    );
  } catch (err) {
    console.error('MathText error:', err);
    return <span>{text}</span>;
  }
}