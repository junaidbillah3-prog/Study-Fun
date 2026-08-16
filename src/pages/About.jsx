import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Award, Heart, Sparkles, Target, Users } from 'lucide-react';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12 max-w-4xl mx-auto flex flex-col justify-between">
      <div>
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white bg-gray-800/60 hover:bg-gray-800 px-4 py-2 rounded-xl border border-gray-700 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </button>
          
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-400" />
            <span className="font-bold text-white text-lg">Study-Fun Matric</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Built for South African Matriculants
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Making Revision <span className="text-blue-400">Engaging & Effective</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Study-Fun was created to help Grade 12 students master high school subjects like Life Sciences, History, Physics, Chemistry, and Mathematics through interactive quizzes, study fun was founded by Junaid Billah in 2026.
          </p>
        </div>

        {/* Image Showcase Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-800/50 border border-gray-700/60 rounded-2xl p-4 flex flex-col items-center shadow-lg">
            <img 
              src="/images/study-fun2.jpg" 
              alt="Studying and exam revision" 
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="font-bold text-lg text-white mb-1">CAPS Aligned Revision</h3>
            <p className="text-xs text-gray-400 text-center">
              Practice tailored past paper questions organized by specific exam topics and sub-papers.
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700/60 rounded-2xl p-4 flex flex-col items-center shadow-lg">
            <img 
              src="/images/study-fun.jpg" 
              alt="Interactive learning" 
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="font-bold text-lg text-white mb-1">Gamified Progress</h3>
            <p className="text-xs text-gray-400 text-center">
              Compete on the leaderboard, track your high scores, and master topics with instant feedback.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-800/30 border border-gray-800 p-5 rounded-2xl">
            <Target className="w-6 h-6 text-emerald-400 mb-3" />
            <h4 className="font-bold text-white mb-1">Targeted Practice</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Drill specific exam sections individually, from Life Sciences P1 to History essays.
            </p>
          </div>

          <div className="bg-gray-800/30 border border-gray-800 p-5 rounded-2xl">
            <Sparkles className="w-6 h-6 text-purple-400 mb-3" />
            <h4 className="font-bold text-white mb-1">Meme Mode</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Keep revision lighthearted and stress-free with humorous reactions for every answer.
            </p>
          </div>

          <div className="bg-gray-800/30 border border-gray-800 p-5 rounded-2xl">
            <Users className="w-6 h-6 text-yellow-400 mb-3" />
            <h4 className="font-bold text-white mb-1">Live Leaderboard</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              See how your top quiz scores stack up against fellow matric students across the country.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col items-center gap-2">
        <p className="flex items-center gap-1">
          Created with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> for South African Matriculants
        </p>
        <p>© Study-Fun Matric. All rights reserved.</p>
      </div>
    </div>
  );
}