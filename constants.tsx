
import React from 'react';
import { Memory, PromiseItem } from './types';

export const REASONS_I_LOVE_YOU: string[] = [
  "Your laugh makes my whole day better.",
  "The way you look at me from a distance and smile when I'm walking towards you.",
  "You are incredibly kind to everyone around you.",
  "Your passion for the things you love.",
  "How you always know exactly what to say to comfort me.",
  "The way you look without makeup and messy hair.",
  "Your endless curiosity about the world.",
  "How you treat our cats like literal royalty.",
  "The way you cook delicious food.",
  "Your strength during difficult times.",
  "The way you awkwardly hold my hand.",
  "Your intelligence that surprises me every day.",
  "How you make 'home' feel like a person, not a place.",
  "The way you challenge me to be a better person.",
  "When you get annoyed at the silly things I do.",
  "The way you remember small details I've mentioned.",
  "Your beautiful, expressive eyes.",
  "How you always try your best.",
  "The peaceful feeling I get just being near you.",
  "Your sense of humor.",
  "The way you appreciate the small things in life.",
  "Your bravery in being yourself.",
  "How you light up every room you walk into.",
  "The way you care for your friends.",
  "The fact that you chose me."
];

export const MEMORIES: Memory[] = [
  { id: 1, title: "The first time I saw you", description: "The moment the world stopped for me and I fell for you.", gradient: "from-pink-100 to-rose-200" },
  { id: 2, title: "That first date", description: "Sharing coffee and quiet thoughts while the world blurred outside on a rainy evening at Stellar.", gradient: "from-blue-100 to-indigo-200" },
  { id: 3, title: "First kiss", description: "The first time I kissed you and gave you a hickey and you freaked out.", gradient: "from-green-100 to-teal-200" },
  { id: 4, title: "Our first scooty ride", description: "It was very fun even though we were caught by the police later.", gradient: "from-purple-100 to-fuchsia-200" },
];

export const PROMISES: PromiseItem[] = [
  { id: 1, text: "I promise to always listen to your heart." },
  { id: 2, text: "I promise to be your biggest cheerleader." },
  { id: 3, text: "I promise to never let you face a storm alone." },
  { id: 4, text: "I promise to love you more with every passing sunset." }
];

export const CatSVG = ({ className = "w-24 h-24", pose = "sitting" }) => {
  if (pose === "sleeping") {
    return (
      <svg viewBox="0 0 100 60" className={className}>
        <path d="M20 45 Q50 60 80 45 Q90 35 70 20 Q50 10 30 20 Q10 35 20 45" fill="currentColor" opacity="0.8" />
        <path d="M75 25 Q85 15 95 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 25 Q25 25 20 30" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M20 32 Q25 32 30 32" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }
  if (pose === "party") {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M30 80 Q50 90 70 80 Q85 60 75 40 Q65 25 50 25 Q35 25 25 40 Q15 60 30 80" fill="currentColor" />
        <path d="M40 25 L50 5 L60 25 Z" fill="#f472b6" />
        <circle cx="50" cy="5" r="3" fill="#fbbf24" />
        <circle cx="40" cy="45" r="2" fill="white" />
        <circle cx="60" cy="45" r="2" fill="white" />
        <path d="M45 55 Q50 58 55 55" fill="none" stroke="white" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 120" className={className}>
      <path d="M30 100 Q50 110 70 100 Q85 80 75 50 Q65 30 50 30 Q35 30 25 50 Q15 80 30 100" fill="currentColor" />
      <path d="M30 35 L20 15 L40 30 Z" fill="currentColor" />
      <path d="M70 35 L80 15 L60 30 Z" fill="currentColor" />
      <circle cx="40" cy="55" r="3" fill="white" />
      <circle cx="60" cy="55" r="3" fill="white" />
      <path d="M45 65 Q50 70 55 65" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M75 80 Q95 70 90 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
};
