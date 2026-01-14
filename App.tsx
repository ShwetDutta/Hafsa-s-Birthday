
import React, { useState, useEffect } from 'react';
import { Section } from './types';
import { Particles } from './components/Particles';
import { Cat } from './components/Cat';
import { Button } from './components/Button';
import { REASONS_I_LOVE_YOU, MEMORIES, PROMISES } from './constants';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.Intro);
  const [revealedReasons, setRevealedReasons] = useState<number>(0);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [isJoyFlashing, setIsJoyFlashing] = useState(false);
  const [visibleMemories, setVisibleMemories] = useState<Set<number>>(new Set());
  const [musicEnabled, setMusicEnabled] = useState(false);

  const next = (s: Section) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentSection(s);
  };

  const toggleMemory = (id: number) => {
    setVisibleMemories(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleBlowCandles = () => {
    setIsJoyFlashing(true);
    setTimeout(() => {
      setCandlesBlown(true);
      setIsJoyFlashing(false);
    }, 600);
  };

  const handleReasonClick = () => {
    setRevealedReasons(p => Math.min(p + 1, REASONS_I_LOVE_YOU.length));
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8">
      <Particles />
      
      {isJoyFlashing && <div className="joy-overlay bg-white animate-[flash-joy_0.6s_ease-out_forwards]"></div>}

      {/* Persistent UI elements */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <button 
          onClick={() => setMusicEnabled(!musicEnabled)}
          className={`p-3 rounded-full backdrop-blur-md border border-white/40 shadow-lg transition-all ${musicEnabled ? 'bg-pink-400 text-white' : 'bg-white/60 text-pink-400'}`}
        >
          {musicEnabled ? '🎵' : '🔇'}
        </button>
      </div>

      {/* 1. INTRO SECTION */}
      {currentSection === Section.Intro && (
        <div className="text-center z-20 flex flex-col items-center gap-8 max-w-2xl animate-in fade-in zoom-in duration-1000 py-12">
          <div className="relative">
            <Cat className="w-32 h-32 md:w-48 md:h-48" />
            <div className="absolute -top-4 -right-4 bg-white/80 p-2 rounded-2xl shadow-sm text-sm font-romantic pointer-events-none">
              Click me for love! 🐾
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-elegant text-pink-800 leading-tight">
            Hey my love <span className="inline-block animate-bounce">💕</span>
          </h1>
          <p className="text-xl md:text-2xl text-pink-600 font-light italic">
            I made something special just for you.
          </p>
          <Button onClick={() => next(Section.Letter)}>
            Open Your Surprise
          </Button>
        </div>
      )}

      {/* 2. LOVE LETTER */}
      {currentSection === Section.Letter && (
        <div className="z-20 w-full max-w-lg animate-in slide-in-from-bottom duration-700 py-12">
          <div className="paper-texture p-8 md:p-12 rounded-xl shadow-2xl relative border-t-4 border-pink-300">
             <div className="absolute top-4 right-4 text-pink-100 opacity-50"><Cat className="w-16 h-16" pose="sleeping" /></div>
            <h2 className="text-4xl font-romantic text-pink-700 mb-6">Dearest You,</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>As the clock struck midnight and the world celebrated your birth, my heart was just celebrating <i>you</i>.</p>
              <p>Every day with you feels like a gift I didn't know I deserved. You bring color to my quietest moments and music to my soul.</p>
              <p>This little corner of the internet is a tribute to everything you are. I hope it makes you smile half as much as you make me smile.</p>
            </div>
            <div className="mt-8 font-romantic text-2xl text-pink-800">
              With all my love, always.
            </div>
            <div className="mt-12 flex justify-center">
              <Button onClick={() => next(Section.Memories)}>
                Walk Through Our Memories
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 3. INTERACTIVE MEMORIES */}
      {currentSection === Section.Memories && (
        <div className="z-20 w-full max-w-4xl animate-in fade-in duration-1000 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-elegant text-pink-800 mb-4">Fragments of Us</h2>
            <p className="text-pink-600">Click a card to reveal a whispered memory.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
            {MEMORIES.map((m) => (
              <div 
                key={m.id}
                onClick={() => toggleMemory(m.id)}
                className={`cursor-pointer transition-all duration-500 transform ${visibleMemories.has(m.id) ? 'scale-105' : 'hover:scale-102'} min-h-[16rem] h-auto`}
              >
                <div className={`h-full w-full bg-gradient-to-br ${m.gradient} rounded-3xl shadow-lg p-8 flex flex-col justify-center items-center text-center overflow-hidden border-4 border-white`}>
                  {!visibleMemories.has(m.id) ? (
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-4xl">✨</div>
                      <h3 className="text-2xl font-romantic text-pink-800">Locked Memory</h3>
                    </div>
                  ) : (
                    <div className="animate-in fade-in zoom-in duration-500">
                      <h3 className="text-3xl font-romantic text-pink-900 mb-3">{m.title}</h3>
                      <p className="text-pink-800 leading-relaxed">{m.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button onClick={() => next(Section.Reasons)}>
              Reasons I Love You
            </Button>
          </div>
        </div>
      )}

      {/* 4. REASONS I LOVE YOU */}
      {currentSection === Section.Reasons && (
        <div className="z-20 w-full max-w-2xl text-center py-12">
          <h2 className="text-4xl md:text-5xl font-elegant text-pink-800 mb-8">My Heart's Reasons</h2>
          
          <div className="relative min-h-[450px] flex flex-col items-center justify-center">
            <div 
              onClick={handleReasonClick}
              className="w-56 h-56 md:w-64 md:h-64 bg-pink-400 rounded-full flex items-center justify-center cursor-pointer shadow-xl hover:scale-110 active:scale-90 transition-transform relative group z-10"
            >
              <div className="absolute -top-4 -right-4 bg-white px-3 py-1 rounded-full text-pink-600 text-sm font-bold shadow-md">
                {revealedReasons}/{REASONS_I_LOVE_YOU.length}
              </div>
              <div className="text-white text-6xl group-active:scale-125 transition-transform">❤️</div>
              <div className="absolute inset-0 rounded-full bg-pink-300 animate-ping opacity-20 pointer-events-none"></div>
            </div>

            {revealedReasons > 0 && (
              <div key={revealedReasons} className="mt-12 p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-inner border border-white/50 animate-in slide-in-from-bottom fade-in duration-500 max-w-md">
                <p className="text-xl md:text-2xl font-romantic text-pink-900 italic leading-relaxed">
                  "{REASONS_I_LOVE_YOU[revealedReasons - 1]}"
                </p>
              </div>
            )}
          </div>

          <div className="mt-12">
            {revealedReasons >= 10 ? (
              <Button onClick={() => next(Section.Celebration)}>
                Let's Celebrate!
              </Button>
            ) : (
              <p className="text-pink-500 font-medium px-4">Keep clicking the heart to reveal more reasons... (at least 10!)</p>
            )}
          </div>
        </div>
      )}

      {/* 5. CELEBRATION */}
      {currentSection === Section.Celebration && (
        <div className="z-20 w-full max-w-lg text-center flex flex-col items-center animate-in zoom-in duration-700 py-12">
          <h2 className="text-4xl md:text-5xl font-elegant text-pink-800 mb-12">Make a Wish!</h2>
          
          <div className="relative mb-12 flex flex-col items-center">
            <div className="w-64 h-32 bg-rose-200 rounded-t-xl relative border-b-8 border-rose-300">
               <div className="absolute top-0 left-0 w-full h-8 bg-pink-100 rounded-full -translate-y-1/2 flex justify-around">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-8 h-8 bg-pink-100 rounded-full"></div>)}
               </div>
               
               {!candlesBlown && (
                 <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-4 h-16 bg-blue-300 rounded-full border-t-4 border-white">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-10 bg-orange-400 rounded-full animate-pulse shadow-[0_0_20px_orange]"></div>
                 </div>
               )}
            </div>
            
            <div className="flex gap-4 mt-8">
              <Cat pose="party" className="w-24 h-24" />
              <Cat pose="party" className="w-24 h-24 transform scale-x-[-1]" />
            </div>
          </div>

          {!candlesBlown ? (
            <Button onClick={handleBlowCandles}>
              Blow the Candles 🎂
            </Button>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-1000 px-4">
              <p className="text-3xl font-romantic text-pink-700">May all your wishes come true! ✨</p>
              <Button onClick={() => next(Section.Promises)}>
                A Promise for the Future
              </Button>
            </div>
          )}
        </div>
      )}

      {/* 6. PROMISES */}
      {currentSection === Section.Promises && (
        <div className="z-20 w-full max-w-2xl text-center space-y-12 py-12 px-4">
          <h2 className="text-4xl md:text-5xl font-elegant text-pink-800">My Promises to You</h2>
          
          <div className="space-y-6">
            {PROMISES.map((p, idx) => (
              <div 
                key={p.id} 
                className={`p-6 bg-white/40 backdrop-blur-sm rounded-xl border border-white/50 text-xl font-romantic text-pink-900 shadow-sm animate-in slide-in-from-left duration-700`}
                style={{ animationDelay: `${idx * 300}ms` }}
              >
                {p.text}
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-8">
            <Button onClick={() => next(Section.Closing)}>
              The Final Note
            </Button>
          </div>
        </div>
      )}

      {/* 7. CLOSING */}
      {currentSection === Section.Closing && (
        <div className="z-20 w-full max-w-2xl text-center flex flex-col items-center gap-8 animate-in zoom-in duration-1000 py-12 px-4">
          <div className="flex items-center gap-4">
             <Cat className="w-24 h-24" pose="sleeping" />
             <Cat className="w-24 h-24 transform scale-x-[-1]" pose="sleeping" />
          </div>
          <h2 className="text-5xl md:text-7xl font-elegant text-pink-800">You are my favorite person.</h2>
          <p className="text-xl md:text-2xl text-pink-600 italic">Today and every day after.</p>
          
          <div className="mt-8 flex flex-col gap-4">
            <Button onClick={() => next(Section.Intro)}>
              Start Over? 💌
            </Button>
            <p className="text-pink-400 text-sm">Created with all my heart just for you.</p>
          </div>
        </div>
      )}

      {/* PERSISTENT FOOTER CAT */}
      <div className="fixed bottom-0 right-0 p-4 opacity-50 z-10 hidden md:block">
        <Cat className="w-16 h-16" pose="sitting" />
      </div>
    </div>
  );
};

export default App;
