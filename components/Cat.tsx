
import React, { useState } from 'react';
import { CatSVG } from '../constants';

interface CatProps {
  pose?: 'sitting' | 'sleeping' | 'party';
  className?: string;
  animate?: boolean;
}

export const Cat: React.FC<CatProps> = ({ pose = 'sitting', className = '', animate = true }) => {
  const [purring, setPurring] = useState(false);

  const handlePurr = () => {
    setPurring(true);
    setTimeout(() => setPurring(false), 1500);
  };

  return (
    <div 
      onClick={handlePurr}
      className={`relative cursor-pointer transition-all duration-300 ${animate ? 'hover:scale-110' : ''} active:scale-95 ${className}`}
    >
      {purring && (
        <span className="purr-text font-romantic text-pink-500 text-lg -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          Purr... 🐾
        </span>
      )}
      <CatSVG pose={pose} className={`w-full h-full text-pink-300 drop-shadow-md transition-colors ${purring ? 'text-pink-400' : ''}`} />
    </div>
  );
};
