import React, { useEffect } from 'react';

export default function MemeModal({ activeMeme, onClose }) {
  if (!activeMeme) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-2xl p-6 max-w-lg w-full flex flex-col items-center border border-gray-700 shadow-2xl">
        
        {/* Render MP4 Video if type is video */}
        {activeMeme.type === 'video' && (
          <video
            src={activeMeme.video}
            autoPlay
            playsInline
            className="w-full max-h-80 object-contain rounded-xl"
            onEnded={onClose}
          />
        )}

        {/* Render Image + Audio if type is audio */}
        {activeMeme.type === 'audio' && (
          <div className="flex flex-col items-center">
            <img
              src={activeMeme.image}
              alt="Meme reaction"
              className="w-full max-h-80 object-contain rounded-xl mb-4"
            />
            <audio
              src={activeMeme.audio}
              autoPlay
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