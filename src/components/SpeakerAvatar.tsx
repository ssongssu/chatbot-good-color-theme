import React from 'react';

interface Props {
  imageUrl: string;
  name: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function SpeakerAvatar({ imageUrl, name, gradientFrom, gradientTo }: Props) {
  return (
    <div className="text-center">
      <div className={`w-16 h-16 rounded-full overflow-hidden ring-2 ring-white shadow-lg mb-1 bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`}>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
}