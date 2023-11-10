import product1 from 'assets/phoenix/img/products/60x60/1.png';
import product2 from 'assets/phoenix/img/products/60x60/2.png';
import product3 from 'assets/phoenix/img/products/60x60/3.png';
import product4 from 'assets/phoenix/img/products/60x60/4.png';
import product5 from 'assets/phoenix/img/products/60x60/5.png';
import product6 from 'assets/phoenix/img/products/60x60/6.png';
import product7 from 'assets/phoenix/img/products/60x60/7.png';
import product8 from 'assets/phoenix/img/products/60x60/8.png';
import product9 from 'assets/phoenix/img/products/60x60/9.png';
import product10 from 'assets/phoenix/img/products/60x60/10.png';
import product11 from 'assets/phoenix/img/products/60x60/11.png';
import product12 from 'assets/phoenix/img/products/60x60/12.png';
import product13 from 'assets/phoenix/img/products/60x60/13.png';
import product14 from 'assets/phoenix/img/products/60x60/14.png';
import product15 from 'assets/phoenix/img/products/60x60/15.png';
import team59 from 'assets/phoenix/img/team/40x40/59.webp';
import team57 from 'assets/phoenix/img/team/40x40/57.webp';
import team58 from 'assets/phoenix/img/team/40x40/58.webp';
import team3 from 'assets/phoenix/img/team/40x40/3.webp';
import team26 from 'assets/phoenix/img/team/40x40/26.webp';
import team29 from 'assets/phoenix/img/team/40x40/29.webp';
import team8 from 'assets/phoenix/img/team/40x40/8.webp';
import team9 from 'assets/phoenix/img/team/40x40/9.webp';
import team24 from 'assets/phoenix/img/team/40x40/24.webp';
import { BadgeBg } from 'components/base/Badge';

export type LatestReviewsTableDataType = {
  product: string;
  productImage: string;
  customer: {
    name: string;
    avatar?: string;
    variant?: 'image' | 'name';
    avatarPlaceholder?: boolean;
  };
  rating: number;
  review: string;
  status: {
    title: string;
    badgeBg: BadgeBg;
    icon: string;
  };
  time: string;
};

export const latestReviewsTableData: LatestReviewsTableDataType[] = [
  {
    product:
      'Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, Carbon/Graphite, One Size (S & L Bands)',
    productImage: product1,
    customer: {
      name: 'Richard Dawkins',
      variant: 'name'
    },
    rating: 5,
    review:
      'This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.',
    status: {
      title: 'Approved',
      badgeBg: 'success',
      icon: 'check'
    },
    time: 'Just now'
  },
  {
    product: 'iPhone 13 pro max-Pacific Blue-128GB storage',
    productImage: product2,
    customer: {
      name: 'Ashley Garrett',
      avatar: team59
    },
    rating: 3,
    review:
      'The order was delivered ahead of schedule. To give us additional time, you should leave the packaging sealed with plastic.',
    status: {
      title: 'Approved',
      badgeBg: 'success',
      icon: 'check'
    },
    time: 'Just now'
  },
  {
    product: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
    productImage: product3,
    customer: {
      name: 'Woodrow Burton',
      avatar: team58
    },
    rating: 4.5,
    review:
      "It's a Mac, after all. Once you've gone Mac, there's no going back. My first Mac lasted over nine years, and this is my second.",
    status: {
      title: 'Pending',
      badgeBg: 'warning',
      icon: 'clock'
    },
    time: 'Just now'
  },
  {
    product:
      'Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021',
    productImage: product4,
    customer: {
      name: 'Eric McGee',
      avatarPlaceholder: true
    },
    rating: 3,
    review:
      "Personally, I like the minimalist style, but I wouldn't choose it if I were searching for a computer that I would use frequently. It's not horrible in terms of speed and power, but the",
    status: {
      title: 'Pending',
      badgeBg: 'warning',
      icon: 'clock'
    },
    time: 'Nov 09, 3:23 AM'
  },
  {
    product: 'Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset',
    productImage: product5,
    customer: {
      name: 'Kim Carroll',
      avatarPlaceholder: true
    },
    rating: 4,
    review:
      'It performs exactly as expected. There are three of these in the family.',
    status: {
      title: 'Pending',
      badgeBg: 'warning',
      icon: 'clock'
    },
    time: 'Nov 09, 2:15 PM'
  },
  {
    product: 'PlayStation 5 DualSense Wireless Controller',
    productImage: product6,
    customer: {
      name: 'Barbara Lucas',
      avatar: team57
    },
    rating: 4,
    review:
      'The controller is quite comfy for me. Despite its increased size, the controller still fits well in my hands.',
    status: {
      title: 'Approved',
      badgeBg: 'success',
      icon: 'check'
    },
    time: 'Nov 08, 8:53 AM'
  },
  {
    product: '2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray',
    productImage: product7,
    customer: {
      name: 'Ansolo Lazinatov',
      avatar: team3
    },
    rating: 4.5,
    review:
      'The response time and service I received when contacted the designers were Phenomenal!',
    status: {
      title: 'Pending',
      badgeBg: 'warning',
      icon: 'clock'
    },
    time: 'Nov 07, 9:00 PM'
  },
  {
    product: 'Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)',
    productImage: product8,
    customer: {
      name: 'Emma watson',
      avatar: team26
    },
    rating: 3,
    review:
      'I have started using this theme in the last week and it has really impressed me very much, the support is second to none.',
    status: {
      title: 'Pending',
      badgeBg: 'warning',
      icon: 'clock'
    },
    time: 'Nov 07, 11:20 AM'
  },
  {
    product:
      'Amazon Basics Mesh, Mid-Back, Swivel Office Desk Chair with Armrests, Black',
    productImage: product9,
    customer: {
      name: 'Rowen Atkinson',
      avatar: team29
    },
    rating: 5,
    review:
      'The best experience we could hope for. Customer service team is amazing and the quality of their products is unsurpassed. Great theme too!',
    status: {
      title: 'Approved',
      badgeBg: 'success',
      icon: 'check'
    },
    time: 'Nov 07, 2:00 PM'
  },
  {
    product: 'Apple Magic Mouse (Wireless, Rechargable) - Silver',
    productImage: product10,
    customer: {
      name: 'Anthony Hopkins',
      variant: 'name'
    },
    rating: 4,
    review:
      'This template has allowed me to convert my existing web app into a great looking, easy to use UI in less than 2 weeks. Very easy to use and understand and has a wide range of ready to use elements. ',
    status: {
      title: 'Approved',
      badgeBg: 'success',
      icon: 'check'
    },
    time: 'Nov 06, 8:00 AM'
  },
  {
    product: 'Echo Dot (4th Gen) _ Smart speaker with Alexa _ Glacier White',
    productImage: product11,
    customer: {
      name: 'Jennifer Schramm',
      avatar: team8
    },
    rating: 4.5,
    review:
      'The theme is really beautiful and the support answer very quickly and is friendly. Buy it, you will not regret it.',
    status: {
      title: 'Pending',
      badgeBg: 'warning',
      icon: 'clock'
    },
    time: 'Nov 05, 4:00 AM'
  },
  {
    product: 'HORI Racing Wheel Apex for PlayStation 4_3, and PC',
    productImage: product12,
    customer: {
      name: 'Raymond Mims',
      avatarPlaceholder: true
    },
    rating: 4,
    review:
      'As others mentioned, the team behind this theme is super responsive. I sent a message during the weekend, fully expecting a response after the weekend, but I got one within minutes, and I was unblocked.',
    status: {
      title: 'Approved',
      badgeBg: 'success',
      icon: 'check'
    },
    time: 'Nov 04, 6:53 PM'
  },
  {
    product:
      'Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)',
    productImage: product13,
    customer: {
      name: 'Michael Jenkins',
      avatar: team9
    },
    rating: 5,
    review: `I had a bit of a hard time at first but after I contacted the team they were able to help me set up the theme. It's really good and I highly recommend it to everyone.`,
    status: {
      title: 'Pending',
      badgeBg: 'warning',
      icon: 'clock'
    },
    time: 'Nov 04, 12:00 PM'
  },
  {
    product: 'Oculus Rift S PC-Powered VR Gaming Headset',
    productImage: product14,
    customer: {
      name: 'Kristine Cadena',
      avatarPlaceholder: true
    },
    rating: 5,
    review:
      'Excellent. All my doubts were answered by the team quickly. I highly recommend it.',
    status: {
      title: 'Pending',
      badgeBg: 'warning',
      icon: 'clock'
    },
    time: 'Nov 03, 8:53 AM'
  },
  {
    product: 'Sony X85J 75 Inch Sony 4K Ultra HD LED Smart Google TV',
    productImage: product15,
    customer: {
      name: 'Suzanne Martinez',
      avatar: team24
    },
    rating: 3.5,
    review:
      "This theme is great. Clean and easy to understand. Perfect for those who don't have time to start everything from scratch. The support is simply phenomenal! Highly recommended!",
    status: {
      title: 'Approved',
      badgeBg: 'success',
      icon: 'check'
    },
    time: 'Nov 03, 10:43 AM'
  }
];
