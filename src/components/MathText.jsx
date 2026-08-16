import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';


function transformRawMath(text) {
  if (typeof text !== 'string') return text;


  if (text.includes('$')) return text;

  return text
    // Square roots: sqrt(expr) -> $\sqrt{expr}$
    .replace(/sqrt\(([^)]+)\)/g, '$\\sqrt{$1}$')

    // Exponents with parentheses: base^(expr) -> $base^{expr}$
    .replace(/([a-zA-Z0-9_\.]+)\^\(([^)]+)\)/g, '$$1^{$2}$$')

    // Single token exponents: base^exponent -> $base^{exponent}$
    .replace(/([a-zA-Z0-9_\.]+)\^([a-zA-Z0-9_\.]+)/g, '$$1^{$2}$$')

    // Simple fractions: (numerator)/(denominator) -> $\frac{numerator}{denominator}$
    .replace(/\(([^)]+)\)\/\(([^)]+)\)/g, '$\\frac{$1}{$2}$');
}

export default function MathText({ text }) {
  if (typeof text !== 'string') return text;

  const processedText = transformRawMath(text);
  const parts = processedText.split(/(\$\$.*?\$\$|\$.*?\$)/g);

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