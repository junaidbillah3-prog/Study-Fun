import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowRight, X } from 'lucide-react';

export default function PaperSelectorModal({ subject, onClose }) {
  const navigate = useNavigate();

  if (!subject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">{subject.name}</h2>
        <p className="text-slate-400 mb-6 text-sm">Select an examination paper to start practice:</p>

        <div className="space-y-4">
          {subject.papers.map((paper) => (
            <div
              key={paper.id}
              onClick={() => navigate(`/quiz/${paper.id}`)}
              className="group cursor-pointer rounded-xl border border-slate-800 bg-slate-800/50 p-4 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-emerald-400" />
                  <h3 className="font-semibold text-white">{paper.name}</h3>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-emerald-400" />
              </div>
              <p className="text-xs text-slate-400">{paper.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}