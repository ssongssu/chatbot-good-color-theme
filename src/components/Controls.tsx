import React from 'react';
import { Play, Pause, SkipForward } from 'lucide-react';

interface Props {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  colorScheme: {
    card: string;
    bubble: {
      primary: string;
      secondary: string;
      accent: string;
    };
    progress: {
      bg: string;
      fill: string;
    };
  };
}

export default function Controls({ isPlaying, onPlayPause, onNext, colorScheme }: Props) {
  return (
    <div className="flex justify-center gap-4 mb-2">
      <button
        onClick={onPlayPause}
        className={`p-3 rounded-2xl ${colorScheme.progress.bg} text-gray-800 
          hover:${colorScheme.progress.fill} transition-all duration-300 transform 
          hover:scale-110 hover:rotate-3 focus:outline-none 
          focus:ring-4 focus:ring-${colorScheme.progress.fill} shadow-lg group 
          animate-glow active:animate-pop`}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 group-hover:animate-wiggle" />
        ) : (
          <Play className="w-6 h-6 group-hover:animate-wiggle" />
        )}
      </button>
      
      <button
        onClick={onNext}
        className={`p-3 rounded-2xl ${colorScheme.progress.bg} text-gray-800 
          hover:${colorScheme.progress.fill} transition-all duration-300 transform 
          hover:scale-110 hover:-rotate-3 focus:outline-none 
          focus:ring-4 focus:ring-${colorScheme.progress.fill} shadow-lg group 
          animate-glow active:animate-pop`}
        aria-label="Next conversation"
      >
        <SkipForward className="w-6 h-6 group-hover:animate-wiggle" />
      </button>
    </div>
  );
}