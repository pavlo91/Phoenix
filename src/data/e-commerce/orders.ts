import team32 from 'assets/phoenix/img/team/32.webp';
import team35 from 'assets/phoenix/img/team/35.webp';
import team57 from 'assets/phoenix/img/team/57.webp';
import team58 from 'assets/phoenix/img/team/58.webp';
import team59 from 'assets/phoenix/img/team/59.webp';
import team31 from 'assets/phoenix/img/team/31.webp';
import team33 from 'assets/phoenix/img/team/33.webp';
import team34 from 'assets/phoenix/img/team/34.webp';
import team29 from 'assets/phoenix/img/team/29.webp';
import team3 from 'assets/phoenix/img/team/3.webp';
import team25 from 'assets/phoenix/img/team/25.webp';
import { BadgeBg } from 'components/base/Badge';

export interface Order {
  orderId: number;
  total: number;
  customer: {
    avatar?: string;
    name: string;
    placeholder?: boolean;
  };
  payment_status: {
    label: string;
    type: BadgeBg;
    icon: string;
  };
  fulfilment_status: {
    label: string;
    type: BadgeBg;
    icon: string;
  };
  delivery_type: string;
  date: string;
}

export const ordersTableData: Order[] = [
  {
    orderId: 2453,
    total: 87,
    customer: {
      avatar: team32,
      name: 'Carry Anna'
    },
    payment_status: {
      label: 'Paid',
      type: 'success',
      icon: 'check'
    },
    fulfilment_status: {
      label: 'Order Fulfilled',
      type: 'success',
      icon: 'check'
    },
    delivery_type: 'Cash on delivery',
    date: 'Dec 12, 12:56 PM'
  },
  {
    orderId: 2452,
    total: 7264,
    customer: {
      name: 'Milind Mikuja'
    },
    fulfilment_status: {
      label: 'Ready to pickup',
      type: 'info',
      icon: 'info'
    },
    payment_status: {
      label: 'Cancelled',
      type: 'secondary',
      icon: 'x'
    },
    delivery_type: 'Free shipping',
    date: 'Dec 9, 2:28PM'
  },
  {
    orderId: 2451,
    total: 375,
    customer: {
      avatar: team35,
      name: 'Stanly Drinkwater'
    },
    payment_status: {
      label: 'Pending',
      type: 'warning',
      icon: 'clock'
    },
    fulfilment_status: {
      label: 'Partial Fulfilled',
      type: 'warning',
      icon: 'info'
    },
    delivery_type: 'Local pickup',
    date: 'Dec 4, 12:56 PM'
  },
  {
    orderId: 2450,
    total: 657,
    customer: {
      avatar: team57,
      name: 'Josef Stravinsky'
    },
    payment_status: {
      label: 'Cancelled',
      type: 'secondary',
      icon: 'x'
    },
    fulfilment_status: {
      label: 'Order Cancelled',
      type: 'secondary',
      icon: 'x'
    },
    delivery_type: 'Standard shipping',
    date: 'Dec 1, 4:07 AM'
  },
  {
    orderId: 2449,
    total: 9562,
    customer: {
      avatar: team58,
      name: 'Igor Borvibson'
    },
    payment_status: {
      label: 'Failed',
      type: 'danger',
      icon: 'info'
    },
    fulfilment_status: {
      label: 'Order Fulfilled',
      type: 'success',
      icon: 'check'
    },
    delivery_type: 'Express',
    date: 'Nov 28, 7:28 PM'
  },
  {
    orderId: 2448,
    total: 46,
    customer: {
      avatar: team59,
      name: 'Katerina Karenin'
    },
    payment_status: {
      label: 'Paid',
      type: 'success',
      icon: 'check'
    },
    fulfilment_status: {
      label: 'DELIVERY DELAYED',
      type: 'danger',
      icon: 'info'
    },
    delivery_type: 'Local delivery',
    date: 'Nov 24, 10:16 AM'
  },
  {
    orderId: 2447,
    total: 953,
    customer: {
      name: 'Roy Anderson'
    },
    payment_status: {
      label: 'Pending',
      type: 'warning',
      icon: 'clock'
    },
    fulfilment_status: {
      label: 'Order Fulfilled',
      type: 'success',
      icon: 'check'
    },
    delivery_type: 'Cash on delivery',
    date: 'Nov 18, 5:43 PM'
  },
  {
    orderId: 2446,
    total: 12,
    customer: {
      avatar: team31,
      name: 'Martina scorcese'
    },
    payment_status: {
      label: 'Pending',
      type: 'warning',
      icon: 'clock'
    },
    fulfilment_status: {
      label: 'Order Fulfilled',
      type: 'success',
      icon: 'check'
    },
    delivery_type: 'Standard shipping',
    date: 'Nov 18, 2:09 AM'
  },
  {
    orderId: 2445,
    total: 3927,
    customer: {
      avatar: team33,
      name: 'Luis Bunuel'
    },
    payment_status: {
      label: 'Paid',
      type: 'success',
      icon: 'check'
    },
    fulfilment_status: {
      label: 'Order Cancelled',
      type: 'secondary',
      icon: 'x'
    },
    delivery_type: 'Cash on delivery',
    date: 'Nov 16, 3:22 PM'
  },
  {
    orderId: 2444,
    total: 5937,
    customer: {
      avatar: team34,
      name: 'Jean Renoir'
    },
    payment_status: {
      label: 'Paid',
      type: 'success',
      icon: 'check'
    },
    fulfilment_status: {
      label: 'Ready to pickup',
      type: 'secondary',
      icon: 'info'
    },
    delivery_type: 'Local pickup',
    date: 'Nov 09, 8:49 AM'
  },
  {
    orderId: 2443,
    total: 124,
    customer: {
      avatar: team29,
      name: 'Ricky Antony'
    },
    payment_status: {
      label: 'Failed',
      type: 'danger',
      icon: 'x'
    },
    fulfilment_status: {
      label: 'Unfulfiled',
      type: 'danger',
      icon: 'x'
    },
    delivery_type: 'Cash on delivery',
    date: 'Nov 05, 4:35 PM'
  },
  {
    orderId: 2442,
    total: 542,
    customer: {
      avatar: team3,
      name: 'Emma Watson'
    },
    payment_status: {
      label: 'Pending',
      type: 'warning',
      icon: 'clock'
    },
    fulfilment_status: {
      label: 'Order Fulfilled',
      type: 'success',
      icon: 'check'
    },
    delivery_type: 'Standard shipping',
    date: 'Nov 05, 12:00 PM'
  },
  {
    orderId: 2441,
    total: 1480,
    customer: {
      avatar: '/team/avatar.webp',
      name: 'Jennifer Schramm',
      placeholder: true
    },
    payment_status: {
      label: 'Paid',
      type: 'success',
      icon: 'check'
    },
    fulfilment_status: {
      label: 'Ready to pickup',
      type: 'info',
      icon: 'info'
    },
    delivery_type: 'Local delivery',
    date: 'Nov 02, 2:00 AM'
  },
  {
    orderId: 2440,
    total: 80,
    customer: {
      avatar: team25,
      name: 'Michael Jenkins'
    },
    payment_status: {
      label: 'Cancelled',
      type: 'secondary',
      icon: 'x'
    },
    fulfilment_status: {
      label: 'Unfulfiled',
      type: 'danger',
      icon: 'x'
    },
    delivery_type: 'Free shipping',
    date: 'Oct 30, 4:25 PM'
  },
  {
    orderId: 2439,
    total: 999,
    customer: {
      avatar: team32,
      name: 'Raymond Mims'
    },
    payment_status: {
      label: 'Pending',
      type: 'warning',
      icon: 'clock'
    },
    fulfilment_status: {
      label: 'Order Fulfilled',
      type: 'success',
      icon: 'check'
    },
    delivery_type: 'Cash on delivery',
    date: 'Oct 28, 3:00 PM'
  }
];
