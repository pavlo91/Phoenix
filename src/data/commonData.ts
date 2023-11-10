import { PageBreadcrumbItem } from 'components/common/PageBreadcrumb';

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const monthsShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const defaultBreadcrumbItems: PageBreadcrumbItem[] = [
  {
    label: 'Page 1',
    url: '#!'
  },
  {
    label: 'Page 2',
    url: '#!'
  },
  {
    label: 'Default',
    active: true
  }
];

export const ecomBreadcrumbItems: PageBreadcrumbItem[] = [
  {
    label: 'Fashion',
    url: '#!'
  },
  {
    label: 'Womens Fashion',
    url: '#!'
  },
  {
    label: 'Footwear',
    url: '#!'
  },
  {
    label: 'Hills',
    active: true
  }
];
