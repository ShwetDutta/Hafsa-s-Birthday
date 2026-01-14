
import React, { useEffect, useState } from 'react';

const icons = ['❤️', '🐾', '✨', '🌸', '🐱'];

export const Particles: React.FC = () => {
  const [elements, setElements] = useState<{ id: number; left: number; duration: number; size: number; icon: string }[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      size: 15 + Math.random() * 20,
      icon: icons[Math.floor(Math.random() * icons.length)],
    }));
    setElements(newElements);
  }, []);

  return (
    <>
      {elements.map((el) => (
        <div
          key={el.id}
          className="particle"
          style={{
            left: `${el.left}%`,
            fontSize: `${el.size}px`,
            '--duration': `${el.duration}s`,
          } as any}
        >
          {el.icon}
        </div>
      ))}
    </>
  );
};
