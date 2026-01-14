
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 bg-pink-400 text-white rounded-full font-semibold shadow-lg hover:bg-pink-500 hover:shadow-pink-200/50 transform hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2 group ${className}`}
    >
      {children}
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </button>
  );
};
