import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Sparkles, RefreshCw, Trophy } from 'lucide-react';

const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL;
const BUCKET_NAME = 'meme-assets';

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
  
  // Active Meme Overlay State
  const [activeMeme, setActiveMeme] = useState(null); // { type: 'correct'|'wrong', mediaUrl: '', isVideo: boolean }
  const audioRef = useRef(null);

  useEffect(() => {
    // Shuffle prompts and answers independently
    setPrompts([...pairs].sort(() => Math.random() - 0.5));
    setAnswers([...pairs].sort(() => Math.random() - 0.5));
  }, [subjectId]);

  const stopCurrentAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  };

  const triggerMeme = (isCorrect) => {
    stopCurrentAudio();

    const mediaFileName = isCorrect ? 'correct.mp4' : 'wrong.mp4';
    const audioFileName = isCorrect ? 'correct.mp3' : 'wrong.mp3';

    const mediaUrl = `${SUPABASE_PROJECT_URL}/storage/v1/object/public/${BUCKET_NAME}/${mediaFileName}`;
    const audioUrl = `${SUPABASE_PROJECT_URL}/storage/v1/object/public/${BUCKET_NAME}/${audioFileName}`;

    const isVideo = mediaFileName.endsWith('.mp4');

    setActiveMeme({
      type: isCorrect ? 'correct' : 'wrong',
      mediaUrl,
      isVideo,
    });

    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    
    audio.play().catch((err) => console.log('Audio playback prevented:', err));

    audio.onended = () => {
      setActiveMeme(null);
    };
  };

  // Drag and Drop Handlers
  const handleDragStart = (e, promptId) => {
    setDraggedPromptId(promptId);
    e.dataTransfer.setData('text/plain', promptId.toString());
  };

  const handleDrop = (e, answerId) => {
    e.preventDefault();
    if (!draggedPromptId) return;

    // Check if correct match
    const isCorrect = draggedPromptId === answerId;

    setConnections((prev) => ({
      ...prev,
      [draggedPromptId]: answerId,
    }));

    triggerMeme(isCorrect);
    setDraggedPromptId(null);
  };

  const handleDisconnect = (promptId) => {
    stopCurrentAudio();
    setActiveMeme(null);

    setConnections((prev) => {
      const copy = { ...prev };
      delete copy[promptId];
      return copy;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 max-w-5xl mx-auto flex flex-col justify-between relative">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center gap-2 text-purple-400 font-extrabold text-xl">
          <Sparkles className="w-6 h-6 animate-pulse" /> Meme Mode
        </div>
      </div>

      <p className="text-center text-gray-400 mb-8">
        Drag a question tile on the left and drop it onto its matching answer on the right!
      </p>

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
                    ? connectedPromptId === a.id
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

      {/* Floating Meme Popup (Bottom Right) */}
      {activeMeme && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 border-2 border-purple-500 rounded-2xl p-2 shadow-2xl max-w-[220px] animate-bounce">
          {activeMeme.isVideo ? (
            <video
              src={activeMeme.mediaUrl}
              autoPlay
              playsInline
              className="rounded-xl w-full h-auto object-cover"
            />
          ) : (
            <img
              src={activeMeme.mediaUrl}
              alt="Meme Popup"
              className="rounded-xl w-full h-auto object-cover"
            />
          )}
        </div>
      )}
    </div>
  );
}