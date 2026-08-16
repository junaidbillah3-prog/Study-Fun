import React from 'react';
// 1. Mandatory CSS for formatting
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function MathText({ text }) {
  if (!text) return null;

  // 2. Fixes double backslashes if you copy-pasted JS strings directly into Supabase
  const formattedText = typeof text === 'string' 
    ? text.replace(/\\\\\(/g, '\\(').replace(/\\\\\)/g, '\\)') 
    : text;

  return (
    // 3. strict={false} prevents a tiny LaTeX typo from crashing the whole app
    <Latex strict={false}>
      {formattedText}
    </Latex>
  );
}