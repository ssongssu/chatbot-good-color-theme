import React from 'react';
import { Volume2 } from 'lucide-react';

interface Props {
  title: string;
}

export default function ConversationTitle({ title }: Props) {
  return (
    <div className="flex items-center justify-between mb-6 group">
      <h2 className="text-xl font-bold text-white group-hover:animate-wave">{title}</h2>
      <div className="animate-pulse group-hover:animate-float">
        <Volume2 className="w-5 h-5 text-white" />
      </div>
    </div>
  );
}