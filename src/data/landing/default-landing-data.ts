import illustration22 from 'assets/phoenix/img/spot-illustrations/22_2.png';
import illustration22dark from 'assets/phoenix/img/spot-illustrations/dark_22.png';
import illustration23 from 'assets/phoenix/img/spot-illustrations/23_2.png';
import illustration23dark from 'assets/phoenix/img/spot-illustrations/dark_23.png';
import illustration24 from 'assets/phoenix/img/spot-illustrations/24_2.png';
import illustration24dark from 'assets/phoenix/img/spot-illustrations/dark_24.png';
import blog1 from 'assets/phoenix/img/blog/blog-1.png';
import blog2 from 'assets/phoenix/img/blog/blog-2.png';
import blog3 from 'assets/phoenix/img/blog/blog-3.png';
import blog4 from 'assets/phoenix/img/blog/blog-4.png';

export type Feature = {
  lightImage: string;
  darkImage: string;
  label: string;
  title: string;
  details: string;
  link: string;
};

export type Blog = {
  id: number;
  image: string;
  views: number;
  likes: number;
  comments: number;
  category: string;
  title: string;
};

export const defaultFeatures: Feature[] = [
  {
    lightImage: illustration22,
    darkImage: illustration22dark,
    label: 'SIGNAL',
    title: ' Recieve the signals instantly',
    details:
      'Phoenix makes it possible for you to quickly and effectively receive every signal. No need for drawn-out waiting.',
    link: '#!'
  },
  {
    lightImage: illustration23,
    darkImage: illustration23dark,
    label: 'REVENUE',
    title: 'See Your Revenue Grow',
    details:
      'Grow with Phoenix. We help you with everything you might need., We make it easy and keep it simple.',
    link: '#!'
  },
  {
    lightImage: illustration24,
    darkImage: illustration24dark,
    label: 'REPORTS',
    title: 'Get Reports Ready',
    details:
      'With Phoenix, you can get ready reports on your growth analysis anytime. This dashboard also has all filters accessible according to your needs.',
    link: '#!'
  }
];

export const blogs: Blog[] = [
  {
    id: 1,
    image: blog1,
    views: 2563,
    likes: 125,
    comments: 125,
    category: 'SEO',
    title: 'Top 10 ways to Ace SEO for your business'
  },
  {
    id: 2,
    image: blog2,
    views: 1256,
    likes: 325,
    comments: 32,
    category: 'Marketing',
    title: 'Top 12 Marketing strategies you can take'
  },
  {
    id: 3,
    image: blog3,
    views: 142,
    likes: 123,
    comments: 22,
    category: 'Marketing',
    title: 'The top 7 methods to improve as a marketer'
  },
  {
    id: 4,
    image: blog4,
    views: 2563,
    likes: 325,
    comments: 112,
    category: 'Tech',
    title: 'Best places for a tech job in U.S'
  }
];
