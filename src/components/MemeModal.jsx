import React, { useEffect, useRef } from 'react';

export default function MemeModal({ activeMeme, onClose }) {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!activeMeme) return;

    if (activeMeme.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.warn('Video playback prevented by browser:', err);
      });
    } else if (activeMeme.type === 'audio' && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn('Audio playback prevented by browser:', err);
      });
    }
  }, [activeMeme]);

  if (!activeMeme) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-2xl p-6 max-w-lg w-full flex flex-col items-center border border-gray-700 shadow-2xl">
        
        {/* Video Player */}
        {activeMeme.type === 'video' && (
          <video
            ref={videoRef}
            src={activeMeme.video}
            preload="auto"
            playsInline
            className="w-full max-h-80 object-contain rounded-xl"
            onEnded={onClose}
          />
        )}

        {/* Audio + Image Player */}
        {activeMeme.type === 'audio' && (
          <div className="flex flex-col items-center w-full">
            <img
              src={activeMeme.image}
              alt="Meme reaction"
              className="w-full max-h-80 object-contain rounded-xl mb-4"
            />
            <audio
              ref={audioRef}
              src={activeMeme.audio}
              preload="auto"
              onEnded={onClose}
            />
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all"
        >
          Next Question
        </button>
      </div>
    </div>
  );
}