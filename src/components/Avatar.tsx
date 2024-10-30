import React from 'react';

interface Props {
  imageUrl: string;
  name: string;
  isSpeaking: boolean;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export default function Avatar({ imageUrl, name, isSpeaking }: Props) {
  return (
    <div className="text-center group cursor-pointer">
      <div 
        className={`w-20 h-20 rounded-2xl overflow-hidden ring-4 
          ${isSpeaking ? 'ring-black animate-bounce-slow' : 'ring-black/50'} 
          shadow-lg mb-2 bg-white
          transition-all duration-500 
          group-hover:animate-float group-hover:ring-offset-4 
          group-hover:ring-offset-black hover:animate-pop
          ${isSpeaking ? 'scale-110 shadow-2xl' : 'scale-100'}`}
      >
        <img
          src={imageUrl}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 
            group-hover:scale-110`}
        />
      </div>
      <span className={`text-sm font-medium text-black transition-all duration-300
        ${isSpeaking ? 'animate-pulse font-bold' : ''} 
        group-hover:animate-wave`}
      >
        {name}
      </span>
    </div>
  );
}