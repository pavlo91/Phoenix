import { BadgeBg } from 'components/base/Badge';
import generic40 from 'assets/phoenix/img/generic/40.png';
interface Badge {
  label: string;
  bg: BadgeBg;
}

export interface ToDoItem {
  task: string;
  date: string;
  time: string;
  attachment?: number;
  badge?: Badge;
  listitems?: number;
}
export interface SubTaskItem {
  task: string;
}

export interface Attachment {
  name: string;
  mimeType: string;
  size: string;
  user: string;
  date: string;
  thumbnail?: string;
}

export const todoList: ToDoItem[] = [
  {
    task: 'Designing the dungeon',
    badge: {
      label: 'DRAFT',
      bg: 'primary'
    },
    attachment: 2,
    date: '12 Nov, 2021',
    time: '12:00 PM'
  },
  {
    task: 'Hiring a motion graphic designer',
    badge: {
      label: 'URGENT',
      bg: 'warning'
    },
    date: '12 Nov, 2021',
    time: '12:00 PM',
    attachment: 2,
    listitems: 3
  },
  {
    task: 'Daily Meetings Purpose, participants',
    badge: {
      label: 'ON PROCESS',
      bg: 'info'
    },
    date: '12 Dec, 2021',
    time: '05:00 AM',
    attachment: 4
  },
  {
    task: 'Finalizing the geometric shapes',
    date: '12 Nov, 2021',
    time: '12:00 PM',
    attachment: 3
  },
  {
    task: 'Daily meeting with team members',
    date: '1 Nov, 2021',
    time: '12:00 PM'
  },
  {
    task: 'Daily Standup Meetings',
    date: '13 Nov, 2021',
    time: '10:00 PM'
  },
  {
    task: 'Procrastinate for a month',
    badge: {
      label: 'ON PROCESS',
      bg: 'info'
    },
    date: '12 Nov, 2021',
    time: '12:00 PM',
    attachment: 3
  },
  {
    task: 'warming up',
    date: '12 Nov, 2021',
    time: '12:00 PM',
    attachment: 3,
    badge: {
      label: 'CLOSE',
      bg: 'secondary'
    }
  },
  {
    task: 'Make ready for release',
    date: '2o Nov, 2021',
    time: '1:00 AM',
    attachment: 2
  }
];

export const subTasks: SubTaskItem[] = [
  {
    task: 'Study Dragons'
  },
  {
    task: 'Procrastinate a bit'
  },
  {
    task: 'Staring at the notebook for 5 mins'
  }
];

export const attachments: Attachment[] = [
  {
    name: 'Silly_sight_1.png',
    mimeType: 'image',
    size: '768kb',
    user: 'Shantinan Mekalan',
    date: '21st Dec, 12:56 PM',
    thumbnail: generic40
  },
  {
    name: 'All_images.zip',
    mimeType: 'zip',
    size: '12.8 mb',
    user: 'Yves Tanguy',
    date: '19th Dec, 08:56 PM'
  },
  {
    name: 'Project.txt',
    mimeType: 'txt',
    size: '123 kb',
    user: 'Shantinan Mekalan',
    date: '12th Dec, 12:56 PM'
  }
];
