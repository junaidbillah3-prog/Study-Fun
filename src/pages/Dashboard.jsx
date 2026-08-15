import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Atom, Globe, Calculator, Award, User, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';
import AuthModal from '../components/AuthModal';


<Link
  to="/leaderboard"
  className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-bold rounded-xl hover:bg-yellow-500/20 transition-all"
>
  <Trophy className="w-5 h-5" />
  Leaderboard
</Link>

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    if (!supabase) return;

    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
      window.location.reload();
    }
  };

  const subjects = [
    { id: 'life-sciences', name: 'Life Sciences', icon: BookOpen, color: 'text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10' },
    { id: 'physical-sciences', name: 'Physical Sciences', icon: Atom, color: 'text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10' },
    { id: 'history', name: 'History', icon: Globe, color: 'text-amber-400 border-amber-500/30 hover:bg-amber-500/10' },
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

        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-300 flex items-center gap-2 bg-gray-900/60 px-3 py-1.5 rounded-xl border border-gray-700">
                <User className="w-4 h-4 text-blue-400" /> {user.email}
              </span>
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
        <h1 className="text-5xl font-extrabold text-blue-400 mb-3 tracking-tight">Study-Fun</h1>
        <p className="text-lg text-gray-400">South African Matric Revision Platform by Junaid!</p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-200 mb-6">Select a Subject</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {subjects.map((subj) => {
          const IconComponent = subj.icon;
          return (
            <Link
              key={subj.id}
              to={`/quiz/${subj.id}`}
              className={`p-6 rounded-2xl border bg-gray-800/50 backdrop-blur-sm transition-all transform hover:-translate-y-1 flex items-center gap-5 shadow-lg ${subj.color}`}
            >
              <div className="p-4 rounded-xl bg-gray-900/80 shadow-inner">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{subj.name}</h3>
                <p className="text-sm text-gray-400">Practice questions, past papers, and instant scoring.</p>
              </div>
            </Link>
          );
        })}
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
