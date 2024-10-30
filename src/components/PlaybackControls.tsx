import React from 'react';
import { Play, Pause, SkipForward } from 'lucide-react';

interface Props {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  isLast: boolean;
}

export default function PlaybackControls({ isPlaying, onPlayPause, onNext }: Props) {
  return (
    <div className="flex justify-center gap-4 my-4">
      <button
        onClick={onPlayPause}
        className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>
      
      <button
        onClick={onNext}
        className="p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
        aria-label="Next conversation"
      >
        <SkipForward className="w-6 h-6" />
      </button>
    </div>
  );
}