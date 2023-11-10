import {
  UilBooks,
  UilInvoice,
  UilRefresh,
  UilUsersAlt
} from '@iconscout/react-unicons';

export interface ProjectManagementStat {
  title: string;
  count: string;
  icon: JSX.Element;
  subtitle: string;
}

export const stats: ProjectManagementStat[] = [
  {
    title: 'Projects',
    count: '32',
    icon: <UilBooks className="text-primary-500" size={40} />,
    subtitle: 'Awating processing'
  },
  {
    title: 'Members',
    icon: <UilUsersAlt className="text-success-500" size={40} />,
    count: '94',
    subtitle: 'Working hard'
  },
  {
    title: 'Invoices',
    icon: <UilInvoice className="text-warning-500" size={40} />,
    count: '23',
    subtitle: 'Soon to be cleared'
  },
  {
    title: 'Refunds',
    icon: <UilRefresh className="text-danger-500" size={40} />,
    count: '3',
    subtitle: 'Fresh start'
  }
];
