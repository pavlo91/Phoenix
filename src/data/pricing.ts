import { PageBreadcrumbItem } from 'components/common/PageBreadcrumb';
import icon1 from 'assets/phoenix/img/spot-illustrations/13.png';
import icon1Dark from 'assets/phoenix/img/spot-illustrations/dark_13.png';
import icon2 from 'assets/phoenix/img/spot-illustrations/14.png';
import icon2Dark from 'assets/phoenix/img/spot-illustrations/dark_14.png';
import icon3 from 'assets/phoenix/img/spot-illustrations/15.png';
import icon3Dark from 'assets/phoenix/img/spot-illustrations/dark_15.png';
import icon4 from 'assets/phoenix/img/spot-illustrations/16.png';
import icon4Dark from 'assets/phoenix/img/spot-illustrations/dark_16.png';

export const pricingBreadcrumbItems: PageBreadcrumbItem[] = [
  {
    label: 'Pages',
    url: '#!'
  },
  {
    label: 'Pricing',
    url: '#!',
    active: true
  }
];

export type Feature = {
  id: string;
  label: string;
  new?: boolean;
};

export interface Pricing {
  id: number;
  title: string;
  icon: string;
  iconDark: string;
  description: string;
  price: number;
  features: string[];
  selected?: boolean;
}

export const pricingColumnFeatures: Feature[] = [
  {
    id: 'advanced_search',
    label: 'Advanced Search'
  },
  {
    id: 'custom_fields',
    label: 'Custom fields',
    new: true
  },
  {
    id: 'task_dependencies',
    label: 'Task dependencies'
  },
  {
    id: 'private_teams',
    label: 'Private teams & projects'
  }
];

export const pricingItems: Pricing[] = [
  {
    id: 1,
    title: 'Learner',
    icon: icon1,
    iconDark: icon1Dark,
    description:
      'For individuals who are interested in giving it a shot first.',
    price: 0,
    features: ['timeline']
  },
  {
    id: 2,
    title: 'Starter',
    icon: icon2,
    iconDark: icon2Dark,
    description: 'For teams that need to create project plans with confidence.',
    price: 14.99,
    features: ['timeline', 'advanced_search']
  },
  {
    id: 3,
    title: 'Team',
    icon: icon3,
    iconDark: icon3Dark,
    description: 'For teams that need to manage work across initiatives.',
    price: 49.99,
    selected: true,
    features: ['timeline', 'advanced_search', 'custom_fields']
  },
  {
    id: 4,
    title: 'Industry',
    icon: icon4,
    iconDark: icon4Dark,
    description: 'For organizations that need additional security and support.',
    price: 149.99,
    features: [
      'timeline',
      'advanced_search',
      'custom_fields',
      'task_dependencies',
      'private_teams'
    ]
  }
];
