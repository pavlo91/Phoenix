import team61 from 'assets/phoenix/img/team/61.webp';
import team8 from 'assets/phoenix/img/team/8.webp';
import team35 from 'assets/phoenix/img/team/35.webp';

export type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  occupation: string;
  comment: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    avatar: team61,
    rating: 5,
    comment:
      'Brilliant app! Will definitely be my first choice starting from today',
    name: 'Monica Gomez',
    occupation: 'UX designer, Google'
  },
  {
    id: 2,
    avatar: team8,
    rating: 4,
    comment:
      'Excellent to work with and comfortable to customize. This is what I was looking for till the date!',
    name: 'Marc Chiasson',
    occupation: 'UX designer, Adobe'
  },
  {
    id: 3,
    avatar: team35,
    rating: 5,
    comment:
      'Phoenix is all you can ask for. This is a perfect fit for everything you might want to work on!',
    name: 'Axel Barry',
    occupation: 'UX designer, Apple'
  }
];
