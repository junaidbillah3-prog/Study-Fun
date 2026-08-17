// src/components/PeekingCharacter.jsx

import { useState, useEffect } from 'react';
import { CHARACTERS } from '../data/charlist';

export default function PeekingCharacter() {
  const [currentChar, setCurrentChar] = useState(null);
  const [currentMessage, setCurrentMessage] = useState('');
  const [topPosition, setTopPosition] = useState(50);
  const [side, setSide] = useState('right');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let showTimer;
    let hideTimer;

    const peekAction = () => {
      // 1. Pick a random character from the list
      const randomChar = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
      
      // 2. Determine side based on character config
      let chosenSide = randomChar.side;
      if (!chosenSide || chosenSide === 'any') {
        chosenSide = Math.random() > 0.5 ? 'right' : 'left';
      }

      // 3. Randomize vertical height (15% to 75%)
      const randomTop = Math.floor(Math.random() * 60) + 15;

      // 4. Extract message (supports single string or array of quotes)
      let selectedText = randomChar.message || 'Hi! 🤭';
      if (Array.isArray(selectedText)) {
        selectedText = selectedText[Math.floor(Math.random() * selectedText.length)];
      }

      // 5. Update character data off-screen FIRST
      setCurrentChar(randomChar);
      setCurrentMessage(selectedText);
      setSide(chosenSide);
      setTopPosition(randomTop);

      // 6. Delay visibility slightly so DOM & image update before sliding in
      showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 50);

      // 7. Hide character after display time
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3500);
    };

    const initialTimer = setTimeout(peekAction, 2000);
    const interval = setInterval(peekAction, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  if (!currentChar) return null;

  const isLeft = side === 'left';

  return (
    <div
      className={`fixed z-50 pointer-events-none transition-all duration-500 ease-out transform ${
        isLeft ? 'left-0' : 'right-0'
      } ${
        isVisible
          ? 'scale-100 translate-x-0 opacity-100'
          : isLeft
          ? '-translate-x-full scale-50 opacity-0'
          : 'translate-x-full scale-50 opacity-0'
      }`}
      style={{ top: `${topPosition}%` }}
    >
      <div
        className={`relative flex items-center gap-2 ${
          isLeft ? 'flex-row pl-2' : 'flex-row-reverse pr-2'
        }`}
      >
        {/* Character Image */}
        <img
          src={currentChar.image}
          alt={currentChar.name}
          className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-2xl select-none"
        />

        {/* Pop-up Chat Bubble */}
        <div
          className={`bg-yellow-400 text-gray-900 font-extrabold text-xs px-3 py-1.5 rounded-full shadow-xl transition-all duration-300 delay-200 whitespace-nowrap ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          {currentMessage}
        </div>
      </div>
    </div>
  );
}