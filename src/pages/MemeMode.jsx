import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Trophy, RotateCcw } from 'lucide-react';
import { getRandomMeme } from '../data/memeAssets';
import { SAMPLE_PAIRS } from '../data/Meme-tiles';


export default function MemeMode() {
  const { subjectId } = useParams();
  const pairs = SAMPLE_PAIRS[subjectId] || SAMPLE_PAIRS['life-sciences'];

  const quizLength = parseInt(searchParams.get('count')) || 8;

  const [prompts, setPrompts] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [connections, setConnections] = useState({});
  const [draggedPromptId, setDraggedPromptId] = useState(null);
  const [selectedPromptId, setSelectedPromptId] = useState(null);

  const [isCompleted, setIsCompleted] = useState(false);
  const [pointsAwarded, setPointsAwarded] = useState(false);
  const [leaderboardScore, setLeaderboardScore] = useState(0);

  const [activeMeme, setActiveMeme] = useState(null);

  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const resetGame = () => {
    setConnections({});
    setIsCompleted(false);
    setPointsAwarded(false);
    setSelectedPromptId(null);
    setActiveMeme(null);


    const shuffledPool = shuffleArray(pairs);


    const roundPairs = shuffledPool.slice(0, quizLength);


    setPrompts(shuffleArray(roundPairs));
    setAnswers(shuffleArray(roundPairs));
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

  // Core Matching Logic for both Drag-and-Drop and Tap-to-Match
  const handleMatch = (promptId, answerId) => {
    const isCorrect = Number(promptId) === Number(answerId);

    const updatedConnections = {
      ...connections,
      [promptId]: answerId,
    };

    setConnections(updatedConnections);
    triggerMeme(isCorrect);
    setSelectedPromptId(null);
    setDraggedPromptId(null);

    const correctCount = Object.entries(updatedConnections).filter(
      ([pId, aId]) => Number(pId) === Number(aId)
    ).length;

    if (correctCount === prompts.length) {
      setIsCompleted(true);
      if (!pointsAwarded) {
        setPointsAwarded(true);
        const newScore = leaderboardScore + 3;
        setLeaderboardScore(newScore);
        localStorage.setItem('leaderboard_score', newScore.toString());
      }
    }
  };

  // Drag and Drop Handlers
  const handleDragStart = (e, promptId) => {
    setDraggedPromptId(promptId);
    e.dataTransfer.setData('text/plain', promptId.toString());
  };

  const handleDrop = (e, answerId) => {
    e.preventDefault();
    if (!draggedPromptId) return;
    handleMatch(draggedPromptId, answerId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Tap-to-Match Handlers for Mobile
  const handlePromptClick = (pId) => {
    if (connections[pId] !== undefined) return;
    setSelectedPromptId(selectedPromptId === pId ? null : pId);
  };

  const handleAnswerClick = (aId) => {
    if (selectedPromptId !== null) {
      handleMatch(selectedPromptId, aId);
    }
  };

  const handleDisconnect = (promptId) => {

    if (Number(connections[promptId]) === Number(promptId)) {
      return;
    }

    stopCurrentMedia();
    setActiveMeme(null);
    setIsCompleted(false);

    setConnections((prev) => {
      const copy = { ...prev };
      delete copy[promptId];
      return copy;
    });
  };

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
          Drag tiles (Desktop) or <span className="text-purple-400 font-semibold">tap a question then tap an answer, CLICK DISCONNECT TO RETRY</span> (Mobile)!
        </p>
        <div className="inline-block bg-gray-800/80 px-4 py-1.5 rounded-full border border-gray-700 text-sm text-gray-300 font-medium">
          Matched: <span className="text-purple-400 font-bold">{correctCount}</span> / {prompts.length}
        </div>
      </div>

      {/* Completion Banner */}
      {isCompleted && (
        <div className="mb-8 p-6 bg-gradient-to-r from-purple-900/80 via-emerald-900/80 to-purple-900/80 border-2 border-emerald-400 rounded-2xl text-center shadow-2xl">
          <h2 className="text-2xl font-extrabold text-emerald-300 mb-2 flex items-center justify-center gap-2">
            <Trophy className="w-7 h-7 text-yellow-400" /> Mode Complete! 🎉
          </h2>
          <p className="text-gray-200 text-sm mb-4">
            You matched all <span className="font-bold">{prompts.length}</span> tiles! {pointsAwarded ? <span className="text-yellow-300 font-bold">+3 Points</span> : <span className="text-gray-400 font-semibold">(Already Claimed)</span>} added to your leaderboard score.
          </p>
          <button
            onClick={resetGame}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-extrabold px-5 py-2.5 rounded-xl transition-all shadow-lg hover:scale-105"
          >
            <RotateCcw className="w-4 h-4" /> Play Again (New Round)
          </button>
        </div>
      )}

      {/* Drag & Drop / Tap Area */}
      <div className="grid grid-cols-2 gap-3 md:gap-8 mb-12">
        {/* Prompts Column */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-300 mb-2">Questions</h3>
          {prompts.map((p) => {
            const isConnected = connections[p.id] !== undefined;
            const isSelected = selectedPromptId === p.id;

            
            const isCorrectMatch = isConnected && Number(connections[p.id]) === Number(p.id);

            return (
              <div
                key={p.id}
                
                draggable={!isCorrectMatch}
                onDragStart={(e) => {
                  if (isCorrectMatch) {
                    e.preventDefault();
                    return;
                  }
                  handleDragStart(e, p.id);
                }}
                onClick={() => {
                  if (!isCorrectMatch) handlePromptClick(p.id);
                }}
                className={`p-2.5 md:p-4 rounded-xl border font-bold text-xs md:text-base transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 
                  ${!isCorrectMatch ? 'cursor-pointer active:cursor-grabbing touch-none' : 'cursor-default'} 
                  ${isCorrectMatch
                    ? 'bg-emerald-900/40 border-emerald-500/50 text-emerald-200' // NEW: Make correctly locked prompts green!
                    : isConnected
                      ? 'bg-purple-900/40 border-purple-500/50 text-purple-200'
                      : isSelected
                        ? 'bg-purple-800/80 border-purple-400 text-white ring-2 ring-purple-400 shadow-lg scale-[1.02]'
                        : 'bg-gray-800 border-gray-700 hover:border-gray-500 text-white'
                  }`}
              >
                <span>{p.prompt}</span>

                {/* NEW: Only show the disconnect button if it's connected BUT wrong */}
                {isConnected && !isCorrectMatch && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDisconnect(p.id);
                    }}
                    className="text-[10px] md:text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-1.5 py-0.5 md:px-2 md:py-1 rounded hover:bg-red-500/40"
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
                onClick={() => handleAnswerClick(a.id)}
                className={`p-2.5 md:p-4 rounded-xl border font-medium text-xs md:text-base transition-all min-h-[60px] flex items-center cursor-pointer ${connectedPromptId
                  ? Number(connectedPromptId) === a.id
                    ? 'bg-emerald-900/30 border-emerald-500 text-emerald-300'
                    : 'bg-red-900/30 border-red-500 text-red-300'
                  : selectedPromptId !== null
                    ? 'bg-gray-800/80 border-purple-500/70 hover:border-purple-400 animate-pulse'
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
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gray-900 border-2 border-purple-500 rounded-2xl p-1.5 md:p-2 shadow-2xl max-w-[150px] sm:max-w-[200px] md:max-w-[240px]">
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