export async function initSpeechSynthesis(): Promise<boolean> {
  if (!('speechSynthesis' in window)) {
    console.error('Speech synthesis not supported');
    return false;
  }

  // Wait for voices to be loaded
  if (speechSynthesis.getVoices().length === 0) {
    await new Promise(resolve => {
      speechSynthesis.addEventListener('voiceschanged', resolve, { once: true });
    });
  }

  return true;
}

export function speakText(text: string, isFirstSpeaker: boolean): Promise<void> {
  return new Promise((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    
    // Filter for English voices
    const englishVoices = voices.filter(voice => voice.lang.startsWith('en'));
    
    // For first speaker, prefer female voices
    const femaleVoices = englishVoices.filter(voice => voice.name.toLowerCase().includes('female') || 
      voice.name.toLowerCase().includes('samantha') ||
      voice.name.toLowerCase().includes('victoria'));
      
    // For second speaker, prefer male voices
    const maleVoices = englishVoices.filter(voice => voice.name.toLowerCase().includes('male') || 
      voice.name.toLowerCase().includes('daniel') ||
      voice.name.toLowerCase().includes('alex'));

    // Set voice with fallbacks
    if (isFirstSpeaker) {
      utterance.voice = femaleVoices[0] || englishVoices[0] || voices[0];
    } else {
      utterance.voice = maleVoices[0] || englishVoices[1] || voices[0];
    }
    
    // Updated speech settings:
    // First speaker: higher pitch (1.3) and faster rate (1.3)
    // Second speaker: lower pitch (0.7) and slower rate (0.8)
    utterance.pitch = isFirstSpeaker ? 1.3 : 0.7;
    utterance.rate = isFirstSpeaker ? 1.3 : 0.8;
    
    utterance.onend = () => resolve();
    utterance.onerror = (event) => reject(event);
    
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  });
}