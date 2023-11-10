import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ActivityTimelineData {
  id: number;
  oppositeContent: {
    date: string;
    time: string;
  };
  content: {
    title: string;
    user: string;
    details: string;
  };
  separator: {
    icon: IconProp;
  };
}

export const activityTimelineData: ActivityTimelineData[] = [
  {
    id: 1,
    oppositeContent: {
      date: '01 DEC, 2023',
      time: '10:30 AM'
    },
    content: {
      title: 'Phoenix Template: Unleashing Creative Possibilities',
      user: 'Shantinon Mekalan',
      details:
        'Discover limitless creativity with the Phoenix template! Our latest update offers an array of innovative features and design options.'
    },
    separator: {
      icon: 'chess'
    }
  },
  {
    id: 2,
    oppositeContent: {
      date: '05 DEC, 2023',
      time: '12:30 AM'
    },
    content: {
      title: 'Empower Your Digital Presence: The Phoenix Template Unveiled',
      user: 'Bookworm22',
      details:
        'Unveiling the Phoenix template, a game-changer for your digital presence. With its powerful features and sleek design,'
    },
    separator: {
      icon: 'dove'
    }
  },
  {
    id: 3,
    oppositeContent: {
      date: '15 DEC, 2023',
      time: '2:30 PM'
    },
    content: {
      title: 'Phoenix Template: Simplified Design, Maximum Impact',
      user: 'Sharuka Nijibum',
      details:
        'Introducing the Phoenix template, where simplified design meets maximum impact. Elevate your digital presence with its sleek and intuitive features.'
    },
    separator: {
      icon: 'dungeon'
    }
  }
];
