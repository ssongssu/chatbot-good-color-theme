import React from 'react';
import type { Conversation } from '../data/conversations';
import Header from './Header';
import Avatar from './Avatar';
import ProgressBar from './ProgressBar';
import Controls from './Controls';
import ChatBubble from './ChatBubble';

interface Props {
  conversation: Conversation;
  currentLine: number;
  isPlaying: boolean;
  isFirstSpeaker: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  speaker: string;
  text: string;
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

export default function ConversationCard({
  conversation,
  currentLine,
  isPlaying,
  isFirstSpeaker,
  onPlayPause,
  onNext,
  speaker,
  text,
  colorScheme,
}: Props) {
  return (
    <div className={`${colorScheme.card} rounded-3xl p-5 shadow-xl transition-all duration-700 border-2 min-h-[480px] flex flex-col`}>
      <div className="flex-1 flex flex-col">
        <div className="h-[150px] mb-2">
          {isPlaying && (
            <div className="animate-fadeSlide">
              <ChatBubble
                speaker={speaker}
                text={text}
                isFirstSpeaker={isFirstSpeaker}
                colorScheme={colorScheme.bubble}
              />
            </div>
          )}
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex justify-between items-center mb-4">
            <Avatar
              imageUrl={conversation.speakers.first.avatarUrl}
              name={conversation.speakers.first.name}
              isSpeaking={isPlaying && isFirstSpeaker}
              colorScheme={colorScheme}
            />
            <div className="flex-1 mx-3">
              <Header colorScheme={colorScheme} />
            </div>
            <Avatar
              imageUrl={conversation.speakers.second.avatarUrl}
              name={conversation.speakers.second.name}
              isSpeaking={isPlaying && !isFirstSpeaker}
              colorScheme={colorScheme}
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <ProgressBar
          current={currentLine}
          total={conversation.dialogue.length}
          colorScheme={colorScheme}
        />

        <Controls
          isPlaying={isPlaying}
          onPlayPause={onPlayPause}
          onNext={onNext}
          colorScheme={colorScheme}
        />
      </div>
    </div>
  );
}