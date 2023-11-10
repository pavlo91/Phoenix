import pie from 'assets/phoenix/img/icons/illustrations/pie.png';
import bolt from 'assets/phoenix/img/icons/illustrations/bolt.png';
import edit from 'assets/phoenix/img/icons/illustrations/edit.png';
import shield from 'assets/phoenix/img/icons/illustrations/shield.png';

export type Feature = {
  label: string;
  newBadge?: boolean;
  supported: boolean;
};

export type Pricing = {
  id: number;
  icon: string;
  category: string;
  popular?: boolean;
  price: number;
  features: string[];
};

export const pricingFeatures = [
  {
    id: 'timeline',
    label: 'Timeline',
    icon: 'check'
  },
  {
    id: 'adv_search',
    label: 'Advanced Search',
    icon: 'check'
  },
  {
    id: 'custom_fields',
    label: 'Custom fields',
    new: true,
    icon: 'check'
  },
  {
    id: 'task_dependencies',
    label: 'Task dependencies',
    icon: 'star'
  },
  {
    id: 'private_teams_projects',
    label: 'Private teams & projects',
    icon: 'star'
  }
];

export const pricingItems: Pricing[] = [
  {
    id: 1,
    icon: pie,
    category: 'Starter',
    price: 6,
    features: ['timeline', 'adv_search']
  },
  {
    id: 2,
    icon: bolt,
    category: 'Team',
    popular: true,
    price: 12,
    features: ['timeline', 'adv_search', 'custom_fields']
  },
  {
    id: 3,
    icon: edit,
    category: 'Business',
    price: 23,
    features: ['timeline', 'adv_search', 'custom_fields', 'task_dependencies']
  },
  {
    id: 4,
    icon: shield,
    category: 'Enterprise',
    price: 40,
    features: [
      'timeline',
      'adv_search',
      'custom_fields',
      'task_dependencies',
      'private_teams_projects'
    ]
  }
];
