import React from 'react';

interface Props {
  speaker: string;
  text: string;
  isFirstSpeaker: boolean;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export default function ChatBubble({ speaker, text, isFirstSpeaker, colorScheme }: Props) {
  return (
    <div 
      className={`max-w-[85%] ${isFirstSpeaker ? 'mr-auto' : 'ml-auto'} 
        animate-fadeSlide group cursor-pointer
        ${isFirstSpeaker ? colorScheme.secondary : colorScheme.accent}
        rounded-[2rem] rounded-br-none p-4 shadow-lg transition-all duration-500 
        hover:shadow-2xl hover:-translate-y-1 relative`}
    >
      <div 
        className={`absolute -bottom-3 ${isFirstSpeaker ? 'left-0' : 'right-0'} 
          w-6 h-6 
          ${isFirstSpeaker ? colorScheme.secondary : colorScheme.accent}
          clip-path-bubble transform ${isFirstSpeaker ? 'rotate-45' : 'rotate-[225deg]'}`}
      />
      <p className="text-sm font-bold text-white/90 mb-2 tracking-wide uppercase group-hover:animate-wave font-mono">
        {speaker}
      </p>
      <p className="text-white relative overflow-hidden group-hover:animate-shimmer font-sans text-lg leading-relaxed tracking-wide">
        {text}
      </p>
    </div>
  );
}