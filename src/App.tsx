import React, { useState, useEffect } from 'react';
import { conversations } from './data/conversations';
import ConversationCard from './components/ConversationCard';

const colorSchemes = [
  { 
    card: 'bg-pink-50/80 border-pink-100', 
    bubble: { primary: 'bg-pink-700', secondary: 'bg-pink-800', accent: 'bg-pink-900' },
    progress: { bg: 'bg-pink-100', fill: 'bg-pink-300' }
  },
  { 
    card: 'bg-green-50/80 border-green-100', 
    bubble: { primary: 'bg-green-700', secondary: 'bg-green-800', accent: 'bg-green-900' },
    progress: { bg: 'bg-green-100', fill: 'bg-green-300' }
  },
  { 
    card: 'bg-purple-50/80 border-purple-100', 
    bubble: { primary: 'bg-purple-700', secondary: 'bg-purple-800', accent: 'bg-purple-900' },
    progress: { bg: 'bg-purple-100', fill: 'bg-purple-300' }
  },
  { 
    card: 'bg-blue-50/80 border-blue-100', 
    bubble: { primary: 'bg-blue-700', secondary: 'bg-blue-800', accent: 'bg-blue-900' },
    progress: { bg: 'bg-blue-100', fill: 'bg-blue-300' }
  },
  { 
    card: 'bg-orange-50/80 border-orange-100', 
    bubble: { primary: 'bg-orange-700', secondary: 'bg-orange-800', accent: 'bg-orange-900' },
    progress: { bg: 'bg-orange-100', fill: 'bg-orange-300' }
  }
];

function App() {
  const [currentConversation, setCurrentConversation] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [colorScheme, setColorScheme] = useState(colorSchemes[0]);

  useEffect(() => {
    if (isPlaying) {
      speak(conversations[currentConversation].dialogue[currentLine].text);
    }
  }, [currentLine, isPlaying]);

  useEffect(() => {
    setColorScheme(colorSchemes[currentConversation % colorSchemes.length]);
  }, [currentConversation]);

  const speak = async (text: string) => {
    if (!window.speechSynthesis) return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.onend = () => {
      if (currentLine < conversations[currentConversation].dialogue.length - 1) {
        setCurrentLine(prev => prev + 1);
      } else {
        setCurrentLine(0);
        setCurrentConversation(prev => (prev + 1) % conversations.length);
        setIsPlaying(false);
      }
    };
    
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const togglePlay = () => {
    if (isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    window.speechSynthesis?.cancel();
    setCurrentLine(0);
    setCurrentConversation(prev => (prev + 1) % conversations.length);
    setIsPlaying(true);
  };

  const conversation = conversations[currentConversation];
  const line = conversation.dialogue[currentLine];
  const isFirstSpeaker = line.speaker === conversation.speakers.first.name;

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-md mx-auto">
        <ConversationCard
          conversation={conversation}
          currentLine={currentLine}
          isPlaying={isPlaying}
          isFirstSpeaker={isFirstSpeaker}
          onPlayPause={togglePlay}
          onNext={handleNext}
          speaker={line.speaker}
          text={line.text}
          colorScheme={colorScheme}
        />
      </div>
    </div>
  );
}

export default App;