import React, { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';
import type { Conversation } from '../data/conversations';
import { initSpeechSynthesis, speakText } from '../utils/speechUtils';
import SpeakerAvatar from './SpeakerAvatar';
import PlaybackControls from './PlaybackControls';
import ProgressBar from './ProgressBar';
import ChatBubble from './ChatBubble';

interface Props {
  conversation: Conversation;
  onNext: () => void;
  isLast: boolean;
}

export default function ConversationPlayer({ conversation, onNext, isLast }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const initSpeech = async () => {
      const supported = await initSpeechSynthesis();
      setIsSpeechSupported(supported);
    };
    initSpeech();
  }, []);

  useEffect(() => {
    setCurrentLineIndex(0);
    setHasStarted(false);
    setIsPlaying(false);
    window.speechSynthesis?.cancel();
  }, [conversation]);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  useEffect(() => {
    if (isPlaying && isSpeechSupported) {
      playCurrentLine();
    }
  }, [currentLineIndex, isPlaying]);

  const playCurrentLine = async () => {
    if (!isSpeechSupported) return;
    
    try {
      await speakText(conversation.dialogue[currentLineIndex].text);
      if (currentLineIndex < conversation.dialogue.length - 1) {
        setCurrentLineIndex(prev => prev + 1);
      } else {
        setIsPlaying(false);
        setHasStarted(false);
        setCurrentLineIndex(0);
        onNext();
      }
    } catch (error) {
      console.error(error);
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    if (!isSpeechSupported) {
      alert('Speech synthesis is not supported in your browser');
      return;
    }
    
    if (isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
    } else {
      setHasStarted(true);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    window.speechSynthesis?.cancel();
    setCurrentLineIndex(0);
    setHasStarted(true);
    setIsPlaying(true);
    onNext();
  };

  const currentLine = conversation.dialogue[currentLineIndex];
  const isFirstSpeaker = currentLine.speaker === conversation.dialogue[0].speaker;

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center px-4">
        <SpeakerAvatar
          imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
          name="Speaker A"
          gradientFrom="blue-400"
          gradientTo="blue-600"
        />
        <SpeakerAvatar
          imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
          name="Speaker B"
          gradientFrom="indigo-400"
          gradientTo="indigo-600"
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-gray-800">{conversation.title}</h2>
          <div className="flex items-center gap-1">
            <Volume2 className="w-4 h-4 text-blue-600" />
          </div>
        </div>
        
        <PlaybackControls
          isPlaying={isPlaying}
          isLast={isLast}
          onPlayPause={togglePlayPause}
          onNext={handleNext}
        />

        <ProgressBar
          current={currentLineIndex}
          total={conversation.dialogue.length}
        />
      </div>

      {(hasStarted || isPlaying) && (
        <ChatBubble
          speaker={currentLine.speaker}
          text={currentLine.text}
          isFirstSpeaker={isFirstSpeaker}
        />
      )}
    </div>
  );
}