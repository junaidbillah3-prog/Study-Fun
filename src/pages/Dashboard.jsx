import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Atom, Globe, Calculator, Award, User, LogOut, Trophy, Sparkles, FlaskConical, Dna, X, FileText, ArrowRight, Edit3 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import AuthModal from '../components/AuthModal';
import UsernameModal from '../components/UsernameModal';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isUsernameOpen, setIsUsernameOpen] = useState(false);
  const [selectedPaperSubject, setSelectedPaperSubject] = useState(null);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const displayName = user
    ? (user.user_metadata?.username || user.user_metadata?.full_name || user.email?.split('@')[0])
    : '';

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
      window.location.reload();
    }
  };

  const handleSubjectClick = (subj, mode) => {
    if (subj.hasSubPapers) {
      setSelectedPaperSubject({ subject: subj, mode });
    } else {
      navigate(`/${mode}/${subj.id}`);
    }
  };

  const subjects = [
    {
      id: 'life-sciences',
      name: 'Life Sciences',
      icon: Dna,
      color: 'text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10',
      hasSubPapers: true,
      papers: [
        {
          id: 'life-sciences-p1',
          name: 'Paper 1',
          description: 'Meiosis, Reproduction, Nervous System, Endocrine & Homeostasis',
          topics: ['Meiosis', 'Human Reproduction', 'Nervous System', 'Endocrine & Homeostasis']
        },
        {
          id: 'life-sciences-p2',
          name: 'Paper 2',
          description: 'DNA & RNA, Genetics & Inheritance, Evolution',
          topics: ['DNA: Code of Life', 'Genetics', 'Evolution']
        }
      ]
    },
    {
      id: 'history',
      name: 'History',
      icon: Globe,
      color: 'text-amber-400 border-amber-500/30 hover:bg-amber-500/10',
      hasSubPapers: true,
      papers: [
        {
          id: 'Vietnam-War',
          name: 'Vietnam War',
          description: 'The Vietnam War and its global implications',
          topics: ['Vietnam War', 'Global Implications']
        },
        {
          id: 'Cold-War',
          name: 'Cold War',
          description: 'The Cold War and its global implications',
          topics: ['Cold War', 'Global Implications']
        },
        {
          id: 'Civil-Rights-Movement-(USA)',
          name: 'Civil Rights Movement (USA)',
          description: 'The Civil Rights Movement in the United States and its Outcomes',
          topics: ['Civil Rights Movement', 'The Outcomes']
        },
        {
          id: 'Black-Consciousness-Movement-(South-Africa)',
          name: 'Black Consciousness Movement (South Africa)',
          description: 'The Black Consciousness Movement in South Africa and its Impact',
          topics: ['Black Consciousness Movement', 'Impact']
        },
        {
          id: 'Road-To-Democracy',
          name: 'Road to Democracy (South Africa)',
          description: 'The Road to Democracy in South Africa and its Challenges',
          topics: ['Road to Democracy', 'Challenges']
        },
      ]
    },
    { id: 'physics', name: 'Physics', icon: Atom, color: 'text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10' },
    { id: 'chemistry', name: 'Chemistry', icon: FlaskConical, color: 'text-teal-400 border-teal-500/30 hover:bg-teal-500/10' },
    { id: 'mathematics', name: 'Mathematics', icon: Calculator, color: 'text-purple-400 border-purple-500/30 hover:bg-purple-500/10' },
  ];

  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto flex flex-col justify-center">
      {/* Top Header & Auth Bar */}
      <div className="flex justify-between items-center mb-10 bg-gray-800/40 border border-gray-700/60 p-4 rounded-2xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-yellow-400" />
          <span className="font-bold text-white">Study-Fun Matric</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Leaderboard Button */}
          <Link
            to="/leaderboard"
            className="flex items-center gap-2 px-3.5 py-1.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold text-sm rounded-xl hover:bg-yellow-500/20 transition-all"
          >
            <Trophy className="w-4 h-4" />
            Leaderboard
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsUsernameOpen(true)}
                className="text-sm text-gray-300 flex items-center gap-2 bg-gray-900/60 hover:bg-gray-800 px-3 py-1.5 rounded-xl border border-gray-700 transition-all group"
                title="Click to edit username"
              >
                <User className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-white">{displayName}</span>
                <Edit3 className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors ml-1" />
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-sm font-semibold text-red-400 hover:text-red-300 bg-red-500/10 px-3 py-1.5 rounded-xl border border-red-500/20 transition-all"
              >
                <LogOut className="w-4 h-4" /> Log Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthOpen(true)}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg"
            >
              Log In / Sign Up
            </button>
          )}
        </div>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-3 tracking-tight">Study-Fun By Junaid</h1>
        <p className="text-lg text-gray-400">South African Matric Revision Platform!</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-200 mb-6">Select a Subject</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {subjects.map((subj) => {
          const IconComponent = subj.icon;
          return (
            <div
              key={subj.id}
              className={`p-6 rounded-2xl border bg-gray-800/50 backdrop-blur-sm transition-all flex flex-col justify-between shadow-lg ${subj.color}`}
            >
              <div className="flex items-center gap-5 mb-4">
                <div className="p-4 rounded-xl bg-gray-900/80 shadow-inner">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{subj.name}</h3>
                  <p className="text-sm text-gray-400">Practice questions, past papers, and instant scoring.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-2">
                <button
                  onClick={() => handleSubjectClick(subj, 'quiz')}
                  className="text-center py-2 px-4 bg-blue-600/80 hover:bg-blue-600 text-white font-bold text-sm rounded-xl transition-all"
                >
                  Classic Quiz
                </button>
                <button
                  onClick={() => handleSubjectClick(subj, 'meme-mode')}
                  className="text-center py-2 px-4 bg-purple-600/80 hover:bg-purple-600 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" /> Meme Mode
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Paper Selection Modal */}
      {selectedPaperSubject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-2xl">
            <button
              onClick={() => setSelectedPaperSubject(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-1">
              {selectedPaperSubject.subject.name} - {selectedPaperSubject.mode === 'meme-mode' ? 'Meme Mode' : 'Classic Quiz'}
            </h2>
            <p className="text-gray-400 mb-6 text-sm">Select an examination paper to start practice:</p>

            <div className="space-y-4">
              {selectedPaperSubject.subject.papers.map((paper) => (
                <button
                  key={paper.id}
                  onClick={() => {
                    const mode = selectedPaperSubject.mode;
                    setSelectedPaperSubject(null);
                    navigate(`/${mode}/${paper.id}`);
                  }}
                  className="w-full text-left group cursor-pointer rounded-xl border border-gray-800 bg-gray-800/50 p-4 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-emerald-400" />
                      <h3 className="font-semibold text-white">{paper.name}</h3>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-emerald-400" />
                  </div>
                  <p className="text-xs text-gray-400">{paper.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <UsernameModal
        isOpen={isUsernameOpen}
        onClose={() => setIsUsernameOpen(false)}
        user={user}
        onUsernameUpdated={(updatedUser) => setUser(updatedUser)}
      />
    </div>
  );
}