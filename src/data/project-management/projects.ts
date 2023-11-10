import bg51 from 'assets/phoenix/img/generic/51.png';
import bg52 from 'assets/phoenix/img/generic/52.png';
import bg53 from 'assets/phoenix/img/generic/53.png';
import bg54 from 'assets/phoenix/img/generic/54.png';
import bg55 from 'assets/phoenix/img/generic/55.png';
import bg56 from 'assets/phoenix/img/generic/56.png';
import bg57 from 'assets/phoenix/img/generic/57.png';

import { BadgeBg } from 'components/base/Badge';
import { Member, members } from 'data/users';

export interface Status {
  ongoing: number;
  critical: number;
  inactive: number;
  completed: number;
}

export interface Project {
  id: number;
  name: string;
  start: string;
  deadline: string;
  calculation?: {
    amount: string;
    label: string;
  };
  assigness: Member[];
  progress: {
    min: number;
    max: number;
  };
  task: number;
  statusProgress: Status;
  status: {
    label: string;
    type: BadgeBg;
  };
  bg: string;
  budget: number;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Making the Butterflies shoot each other dead',
    start: 'Dec 12, 2018',
    deadline: 'Dec 12, 2026',
    calculation: {
      amount: '$4',
      label: 'Cost'
    },
    assigness: [17, 16, 11, 5, 18, 19].map(index => members[index]),
    progress: {
      min: 145,
      max: 145
    },
    statusProgress: {
      ongoing: 30,
      critical: 5,
      inactive: 45,
      completed: 15
    },
    task: 287,
    status: {
      label: 'completed',
      type: 'success'
    },
    bg: bg51,
    budget: 3991
  },
  {
    id: 2,
    name: 'Project Doughnut Dungeon',
    assigness: [18, 19].map(index => members[index]),
    start: 'Jan 9, 2019',
    deadline: 'Dec 9, 2022',
    progress: {
      min: 148,
      max: 223
    },
    statusProgress: {
      ongoing: 20,
      critical: 15,
      inactive: 45,
      completed: 30
    },
    task: 125,
    status: {
      label: 'inactive',
      type: 'warning'
    },
    bg: bg52,
    budget: 5832
  },
  {
    id: 3,
    name: 'The Chewing Gum Attack',
    assigness: [12, 10].map(index => members[index]),
    start: 'Sep 4, 2019',
    deadline: 'Dec 4, 2021',
    calculation: {
      amount: '$657k',
      label: 'Estimation'
    },
    progress: {
      min: 277,
      max: 539
    },
    statusProgress: {
      ongoing: 10,
      critical: 10,
      inactive: 35,
      completed: 45
    },
    task: 72,
    status: {
      label: 'ongoing',
      type: 'primary'
    },
    bg: bg53,
    budget: 8305
  },
  {
    id: 4,
    name: 'Execution of Micky the foul mouse',
    assigness: [11, 18, 17, 5, 19].map(index => members[index]),
    start: 'Nov 1, 2019',
    deadline: 'Dec 1, 2024',
    progress: {
      min: 16,
      max: 56
    },
    statusProgress: {
      ongoing: 45,
      critical: 15,
      inactive: 20,
      completed: 20
    },
    task: 91,
    status: {
      label: 'critical',
      type: 'danger'
    },
    bg: bg54,
    budget: 8888
  },
  {
    id: 5,
    name: 'Harnessing stupidity from Jerry',
    assigness: [17, 16, 15].map(index => members[index]),
    start: 'Dec 28, 2019',
    deadline: 'Nov 28, 2021',
    progress: {
      min: 169,
      max: 394
    },
    statusProgress: {
      ongoing: 25,
      critical: 35,
      inactive: 20,
      completed: 15
    },
    task: 134,
    status: {
      label: 'ongoing',
      type: 'primary'
    },
    bg: bg55,
    budget: 7324
  },
  {
    id: 6,
    name: 'Water resistant mosquito killer gun',
    assigness: [1, 11, 10, 2].map(index => members[index]),
    start: 'Feb 24, 2020',
    deadline: 'Nov 24, 2021',
    calculation: {
      amount: '$55k',
      label: 'Budget'
    },
    progress: {
      min: 400,
      max: 600
    },
    statusProgress: {
      ongoing: 24,
      critical: 5,
      inactive: 35,
      completed: 35
    },
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    },
    bg: bg56,
    budget: 1219
  },
  {
    id: 7,
    name: 'Olga Dies Dreaming by Xóchitl González',
    assigness: [16, 18, 19].map(index => members[index]),
    start: 'Feb 24, 2020',
    deadline: 'Nov 24, 2021',
    calculation: {
      amount: '$55k',
      label: 'Budget'
    },
    progress: {
      min: 500,
      max: 800
    },
    statusProgress: {
      ongoing: 24,
      critical: 5,
      inactive: 35,
      completed: 35
    },
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    },
    bg: bg57,
    budget: 6067
  }
];
