export interface DialogueLine {
  speaker: string;
  text: string;
}

export interface Conversation {
  title: string;
  dialogue: DialogueLine[];
  speakers: {
    first: {
      name: string;
      avatarUrl: string;
    };
    second: {
      name: string;
      avatarUrl: string;
    };
  };
}

export const conversations: Conversation[] = [
  {
    title: "Coffee Shop Order",
    speakers: {
      first: {
        name: "Emily",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
      },
      second: {
        name: "Michael",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
      }
    },
    dialogue: [
      { speaker: "Emily", text: "Hi, I'd like a medium latte with oat milk, please." },
      { speaker: "Michael", text: "Sure! Would you like that hot or iced?" },
      { speaker: "Emily", text: "Hot, please. And can I add a chocolate croissant?" },
      { speaker: "Michael", text: "Of course! That'll be $8.50." },
      { speaker: "Emily", text: "Here you go. Thank you!" },
    ]
  },
  {
    title: "Making Weekend Plans",
    speakers: {
      first: {
        name: "Alex",
        avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces"
      },
      second: {
        name: "Sam",
        avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
      }
    },
    dialogue: [
      { speaker: "Alex", text: "Hey, what are you doing this weekend?" },
      { speaker: "Sam", text: "Nothing planned yet. Do you have any ideas?" },
      { speaker: "Alex", text: "How about we go hiking at the national park?" },
      { speaker: "Sam", text: "That sounds great! What time should we meet?" },
      { speaker: "Alex", text: "Let's meet at 9 AM on Saturday." },
    ]
  },
  {
    title: "At the Restaurant",
    speakers: {
      first: {
        name: "David",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
      },
      second: {
        name: "Sarah",
        avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces"
      }
    },
    dialogue: [
      { speaker: "Sarah", text: "Welcome! Would you like to start with any appetizers?" },
      { speaker: "David", text: "Yes, we'll have the calamari, please." },
      { speaker: "Sarah", text: "Excellent choice. And what would you like for your main course?" },
      { speaker: "David", text: "I'll have the grilled salmon with vegetables." },
      { speaker: "Sarah", text: "Perfect! I'll get your order started right away." },
    ]
  },
  {
    title: "Shopping for Clothes",
    speakers: {
      first: {
        name: "Lisa",
        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces"
      },
      second: {
        name: "John",
        avatarUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=faces"
      }
    },
    dialogue: [
      { speaker: "Lisa", text: "Excuse me, do you have this shirt in medium?" },
      { speaker: "John", text: "Let me check our inventory. What color would you like?" },
      { speaker: "Lisa", text: "The blue one, please." },
      { speaker: "John", text: "Yes, we have it! Would you like to try it on?" },
      { speaker: "Lisa", text: "Yes, that would be great, thank you!" },
    ]
  },
  {
    title: "Making a Doctor's Appointment",
    speakers: {
      first: {
        name: "Rachel",
        avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
      },
      second: {
        name: "Dr. Smith",
        avatarUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=faces"
      }
    },
    dialogue: [
      { speaker: "Dr. Smith", text: "Good morning, Dr. Smith's office. How can I help you?" },
      { speaker: "Rachel", text: "Hi, I'd like to make an appointment for next week." },
      { speaker: "Dr. Smith", text: "Sure, we have openings on Tuesday at 2 PM or Thursday at 10 AM." },
      { speaker: "Rachel", text: "Tuesday at 2 PM works for me." },
      { speaker: "Dr. Smith", text: "Great, you're all set for Tuesday at 2 PM." },
    ]
  }
];