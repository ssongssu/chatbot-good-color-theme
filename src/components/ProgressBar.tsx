import React from 'react';

interface Props {
  current: number;
  total: number;
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

export default function ProgressBar({ current, total, colorScheme }: Props) {
  return (
    <div className="mb-4">
      <div className={`h-2 w-full ${colorScheme.progress.bg} rounded-full overflow-hidden`}>
        <div 
          className={`h-full ${colorScheme.progress.fill} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  );
}