import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Trophy, RotateCcw } from 'lucide-react';
import { getRandomMeme } from '../data/memeAssets';

// Sample meme matching pairs per subject
const SAMPLE_PAIRS = {
  'life-sciences': [
    { id: 1, prompt: 'Mitochondria', answer: 'Powerhouse of the cell' },
    { id: 2, prompt: 'Ribosome', answer: 'Protein synthesis factory' },
    { id: 3, prompt: 'Chloroplast', answer: 'Site of photosynthesis' },
  ],
  'physical-sciences': [
    { id: 1, prompt: 'Newton 1st Law', answer: 'Inertia / Law of Rest' },
    { id: 2, prompt: 'F = ma', answer: 'Newton 2nd Law equation' },
    { id: 3, prompt: 'Work done', answer: 'Force times displacement' },
  ],
  'mathematics': [
    { id: 1, prompt: 'Derivative of x²', answer: '2x' },
    { id: 2, prompt: 'Integral of 1/x', answer: 'ln|x| + C' },
    { id: 3, prompt: 'Sin²θ + Cos²θ', answer: '1' },
  ],
  'history': [
    { id: 1, prompt: 'Cold War', answer: 'US vs USSR tension without direct war' },
    { id: 2, prompt: '1994', answer: 'First democratic election in South Africa' },
  ]
};

export default function MemeMode() {
  const { subjectId } = useParams();
  const pairs = SAMPLE_PAIRS[subjectId] || SAMPLE_PAIRS['life-sciences'];

  const [prompts, setPrompts] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [connections, setConnections] = useState({}); // { promptId: answerId }
  const [draggedPromptId, setDraggedPromptId] = useState(null);
  
  // Anti-cheat & Completion States
  const [isCompleted, setIsCompleted] = useState(false);
  const [pointsAwarded, setPointsAwarded] = useState(false); // Prevents repeat point farming
  const [leaderboardScore, setLeaderboardScore] = useState(0);
  
  // Active Meme Overlay State
  const [activeMeme, setActiveMeme] = useState(null);
  
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const resetGame = () => {
    setConnections({});
    setIsCompleted(false);
    setPointsAwarded(false); // Reset award lock for new shuffled round
    setActiveMeme(null);
    setPrompts([...pairs].sort(() => Math.random() - 0.5));
    setAnswers([...pairs].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    resetGame();
    const savedScore = parseInt(localStorage.getItem('leaderboard_score') || '0', 10);
    setLeaderboardScore(savedScore);
  }, [subjectId]);

  // Programmatically trigger media playback when a meme is selected
  useEffect(() => {
    if (!activeMeme) return;

    if (activeMeme.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => console.warn('Video playback blocked:', err));
    } else if (activeMeme.type === 'audio' && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.warn('Audio playback blocked:', err));
    }
  }, [activeMeme]);

  const stopCurrentMedia = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const triggerMeme = (isCorrect) => {
    stopCurrentMedia();
    const meme = getRandomMeme(isCorrect);
    setActiveMeme(meme);
  };

  // Drag and Drop Handlers
  const handleDragStart = (e, promptId) => {
    setDraggedPromptId(promptId);
    e.dataTransfer.setData('text/plain', promptId.toString());
  };

  const handleDrop = (e, answerId) => {
    e.preventDefault();
    if (!draggedPromptId) return;

    const isCorrect = Number(draggedPromptId) === Number(answerId);

    const updatedConnections = {
      ...connections,
      [draggedPromptId]: answerId,
    };

    setConnections(updatedConnections);
    triggerMeme(isCorrect);
    setDraggedPromptId(null);

    // Calculate dynamic correct matches count based on current set size
    const correctCount = Object.entries(updatedConnections).filter(
      ([pId, aId]) => Number(pId) === Number(aId)
    ).length;

    // Trigger mode end dynamically when ALL available tiles are matched
    if (correctCount === pairs.length) {
      setIsCompleted(true);

      // ANTI-CHEAT CHECK: Award +3 points ONLY ONCE per active round session
      if (!pointsAwarded) {
        setPointsAwarded(true);
        const newScore = leaderboardScore + 3;
        setLeaderboardScore(newScore);
        localStorage.setItem('leaderboard_score', newScore.toString());
      }
    }
  };

  const handleDisconnect = (promptId) => {
    stopCurrentMedia();
    setActiveMeme(null);
    setIsCompleted(false); // Hides completion banner if they un-match

    setConnections((prev) => {
      const copy = { ...prev };
      delete copy[promptId];
      return copy;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Dynamic match progress count
  const correctCount = Object.entries(connections).filter(
    ([pId, aId]) => Number(pId) === Number(aId)
  ).length;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 max-w-5xl mx-auto flex flex-col justify-between relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-purple-900/50 border border-purple-500/40 px-3 py-1.5 rounded-full text-purple-300 font-bold text-sm">
            <Trophy className="w-4 h-4 text-yellow-400" /> Leaderboard: {leaderboardScore} pts
          </div>
          <div className="flex items-center gap-2 text-purple-400 font-extrabold text-xl">
            <Sparkles className="w-6 h-6 animate-pulse" /> Meme Mode
          </div>
        </div>
      </div>

      {/* Dynamic Progress Indicator */}
      <div className="text-center mb-8">
        <p className="text-gray-400 mb-2">
          Drag a question tile and scroll or slide on the correct answer tile!
        </p>
        <div className="inline-block bg-gray-800/80 px-4 py-1.5 rounded-full border border-gray-700 text-sm text-gray-300 font-medium">
          Matched: <span className="text-purple-400 font-bold">{correctCount}</span> / {pairs.length}
        </div>
      </div>

      {/* Completion Banner */}
      {isCompleted && (
        <div className="mb-8 p-6 bg-gradient-to-r from-purple-900/80 via-emerald-900/80 to-purple-900/80 border-2 border-emerald-400 rounded-2xl text-center shadow-2xl">
          <h2 className="text-2xl font-extrabold text-emerald-300 mb-2 flex items-center justify-center gap-2">
            <Trophy className="w-7 h-7 text-yellow-400" /> Mode Complete! 🎉
          </h2>
          <p className="text-gray-200 text-sm mb-4">
            You matched all <span className="font-bold">{pairs.length}</span> tiles! {pointsAwarded ? <span className="text-yellow-300 font-bold">+3 Points</span> : <span className="text-gray-400 font-semibold">(Already Claimed)</span>} added to your leaderboard score.
          </p>
          <button
            onClick={resetGame}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-lg hover:scale-105"
          >
            <RotateCcw className="w-4 h-4" /> Play Again (New Round)
          </button>
        </div>
      )}

      {/* Drag & Drop Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Prompts Column */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-300 mb-2">Questions</h3>
          {prompts.map((p) => {
            const isConnected = connections[p.id] !== undefined;
            return (
              <div
                key={p.id}
                draggable
                onDragStart={(e) => handleDragStart(e, p.id)}
                className={`p-4 rounded-xl border font-bold cursor-grab active:cursor-grabbing transition-all flex justify-between items-center ${
                  isConnected
                    ? 'bg-purple-900/40 border-purple-500/50 text-purple-200'
                    : 'bg-gray-800 border-gray-700 hover:border-gray-500 text-white'
                }`}
              >
                <span>{p.prompt}</span>
                {isConnected && (
                  <button
                    onClick={() => handleDisconnect(p.id)}
                    className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded hover:bg-red-500/40"
                  >
                    Disconnect
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Answers Column (Drop Zones) */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-300 mb-2">Answers</h3>
          {answers.map((a) => {
            const connectedPromptId = Object.keys(connections).find(
              (pId) => connections[pId] === a.id
            );
            return (
              <div
                key={a.id}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, a.id)}
                className={`p-4 rounded-xl border font-medium transition-all min-h-[60px] flex items-center ${
                  connectedPromptId
                    ? Number(connectedPromptId) === a.id
                      ? 'bg-emerald-900/30 border-emerald-500 text-emerald-300'
                      : 'bg-red-900/30 border-red-500 text-red-300'
                    : 'bg-gray-800/60 border-dashed border-gray-600 hover:border-purple-400'
                }`}
              >
                <span>{a.answer}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Meme Popup */}
      {activeMeme && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 border-2 border-purple-500 rounded-2xl p-2 shadow-2xl max-w-[240px]">
          {activeMeme.type === 'video' ? (
            <video
              ref={videoRef}
              src={activeMeme.video}
              preload="auto"
              playsInline
              className="rounded-xl w-full h-auto object-cover"
              onEnded={() => setActiveMeme(null)}
            />
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={activeMeme.image}
                alt="Meme Popup"
                className="rounded-xl w-full h-auto object-cover"
              />
              <audio
                ref={audioRef}
                src={activeMeme.audio}
                preload="auto"
                onEnded={() => setActiveMeme(null)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}