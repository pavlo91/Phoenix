import blueFront from 'assets/phoenix/img/products/details/blue_front.png';
import blueBack from 'assets/phoenix/img/products/details/blue_back.png';
import blueSide from 'assets/phoenix/img/products/details/blue_side.png';

import redFront from 'assets/phoenix/img/products/details/red_front.png';
import redBack from 'assets/phoenix/img/products/details/red_back.png';
import redSide from 'assets/phoenix/img/products/details/red_side.png';

import greenFront from 'assets/phoenix/img/products/details/green_front.png';
import greenBack from 'assets/phoenix/img/products/details/green_back.png';
import greenSide from 'assets/phoenix/img/products/details/green_side.png';

import purpleFront from 'assets/phoenix/img/products/details/purple_front.png';
import purpleBack from 'assets/phoenix/img/products/details/purple_back.png';
import purpleSide from 'assets/phoenix/img/products/details/purple_side.png';

import silverFront from 'assets/phoenix/img/products/details/silver_front.png';
import silverBack from 'assets/phoenix/img/products/details/silver_back.png';
import silverSide from 'assets/phoenix/img/products/details/silver_side.png';

import yellowFront from 'assets/phoenix/img/products/details/yellow_front.png';
import yellowBack from 'assets/phoenix/img/products/details/yellow_back.png';
import yellowSide from 'assets/phoenix/img/products/details/yellow_side.png';

import orangeFront from 'assets/phoenix/img/products/details/orange_front.png';
import orangeBack from 'assets/phoenix/img/products/details/orange_back.png';
import orangeSide from 'assets/phoenix/img/products/details/orange_side.png';

import review11 from 'assets/phoenix/img/e-commerce/review-11.jpg';
import review12 from 'assets/phoenix/img/e-commerce/review-12.jpg';
import review13 from 'assets/phoenix/img/e-commerce/review-13.jpg';
import review14 from 'assets/phoenix/img/e-commerce/review-14.jpg';
import review15 from 'assets/phoenix/img/e-commerce/review-15.jpg';
import review16 from 'assets/phoenix/img/e-commerce/review-16.jpg';
import { BadgeBg } from 'components/base/Badge';

type Category = {
  title: string;
  icon: string;
  sections: {
    label: string;
    url: string;
  }[];
};

export type ProductReviewType = {
  id: number;
  star: number;
  customer: string;
  date: string;
  review: string;
  images?: string[];
  reply?: {
    text: string;
    from: string;
    time: string;
  };
};

type Variant = {
  id: string;
  name: string;
  thumb: string;
  images: string[];
};

export interface AddressTableDataType {
  labelIcon: string;
  label: string;
  value: string;
}

export interface CustomerOrder {
  orderId: string;
  totalPrice: number;
  payment_status: {
    status: string;
    type: BadgeBg;
    icon: string;
  };
  delivery_method: string;
  date: string;
}

export const categories: Category[] = [
  {
    title: 'Collectibles & Art',
    icon: 'pocket',
    sections: [
      {
        label: 'Collectibles',
        url: '#!'
      },
      {
        label: 'Antiques',
        url: '#!'
      },
      {
        label: 'Sports memorabilia ',
        url: '#!'
      },
      {
        label: 'Art',
        url: '#!'
      }
    ]
  },
  {
    title: 'Home & Gardan',
    icon: 'home',
    sections: [
      {
        label: 'Yard, Garden & Outdoor',
        url: '#!'
      },
      {
        label: 'Crafts',
        url: '#!'
      },
      {
        label: 'Home Improvement',
        url: '#!'
      },
      {
        label: 'Pet Supplies',
        url: '#!'
      }
    ]
  },
  {
    title: 'Sporting Goods',
    icon: 'globe',
    sections: [
      {
        label: 'Outdoor Sports',
        url: '#!'
      },
      {
        label: 'Team Sports',
        url: '#!'
      },
      {
        label: 'Exercise & Fitness',
        url: '#!'
      },
      {
        label: 'Golf',
        url: '#!'
      }
    ]
  },
  {
    title: 'Electronics',
    icon: 'monitor',
    sections: [
      {
        label: 'Computers & Tablets',
        url: '#!'
      },
      {
        label: 'Camera & Photo',
        url: '#!'
      },
      {
        label: 'TV, Audio & Surveillance',
        url: '#!'
      },
      {
        label: 'Cell Ohone & Accessories',
        url: '#!'
      }
    ]
  },
  {
    title: 'Auto Parts & Accessories',
    icon: 'truck',
    sections: [
      {
        label: 'GPS & Security Devices',
        url: '#!'
      },
      {
        label: 'Rader & Laser Detectors',
        url: '#!'
      },
      {
        label: 'Care & Detailing',
        url: '#!'
      },
      {
        label: 'Scooter Parts & Accessories',
        url: '#!'
      }
    ]
  },
  {
    title: 'Toys & Hobbies',
    icon: 'codesandbox',
    sections: [
      {
        label: 'Radio Control',
        url: '#!'
      },
      {
        label: 'Kids Toys',
        url: '#!'
      },
      {
        label: 'Action Figures',
        url: '#!'
      },
      {
        label: 'Dolls & Bears',
        url: '#!'
      }
    ]
  },
  {
    title: 'Fashion',
    icon: 'watch',
    sections: [
      {
        label: 'Women',
        url: '#!'
      },
      {
        label: 'Men',
        url: '#!'
      },
      {
        label: 'Jewelry & Watches',
        url: '#!'
      },
      {
        label: 'Shoes',
        url: '#!'
      }
    ]
  },
  {
    title: 'Musical Instruments & Gear',
    icon: 'music',
    sections: [
      {
        label: 'Guitar',
        url: '#!'
      },
      {
        label: 'Pro Audio Equipment',
        url: '#!'
      },
      {
        label: 'String',
        url: '#!'
      },
      {
        label: 'Stage Lighting & Effects',
        url: '#!'
      }
    ]
  },
  {
    title: 'Other Categories',
    icon: 'grid',
    sections: [
      {
        label: 'Video Games & Consoles',
        url: '#!'
      },
      {
        label: 'Health & Beauty',
        url: '#!'
      },
      {
        label: 'Baby',
        url: '#!'
      },
      {
        label: 'Business & Industrial',
        url: '#!'
      }
    ]
  }
];

export const productColorVariants: Variant[] = [
  {
    id: 'blue',
    name: 'Blue',
    thumb: blueFront,
    images: [blueFront, blueBack, blueSide]
  },
  {
    id: 'red',
    name: 'Red',
    thumb: redFront,
    images: [redFront, redBack, redSide]
  },
  {
    id: 'green',
    name: 'Green',
    thumb: greenFront,
    images: [greenFront, greenBack, greenSide]
  },
  {
    id: 'purple',
    name: 'Purple',
    thumb: purpleFront,
    images: [purpleFront, purpleBack, purpleSide]
  },
  {
    id: 'silver',
    name: 'Silver',
    thumb: silverFront,
    images: [silverFront, silverBack, silverSide]
  },
  {
    id: 'yellow',
    name: 'Yellow',
    thumb: yellowFront,
    images: [yellowFront, yellowBack, yellowSide]
  },
  {
    id: 'orange',
    name: 'Orange',
    thumb: orangeFront,
    images: [orangeFront, orangeBack, orangeSide]
  }
];

export const productReviews: ProductReviewType[] = [
  {
    id: 1,
    star: 5,
    customer: 'Zingko Kudobum',
    date: '35 mins ago',
    review: '100% satisfied',
    images: [review11, review12, review13],
    reply: {
      text: 'Thank you for your valuable feedback',
      from: 'store',
      time: '5 mins ago'
    }
  },
  {
    id: 2,
    star: 4,
    customer: 'Piere Auguste Renoir',
    date: '23 Oct, 12:09 PM',
    review:
      "Since the spring loaded event, I've been wanting an iMac, and it's exceeded my expectations. The screen is clear, the colors are vibrant (I got the blue one! ), and the performance is more than adequate for my needs as a college student. That's how good it is."
  },
  {
    id: 3,
    star: 3.5,
    customer: 'Abel Kablmann ',
    date: '21 Oct, 12:00 PM',
    review:
      "Over the years, I've preferred Apple products. My job has allowed me to use Windows products on laptops and PCs. I've owned Windows laptops and desktops for home use in the past and will never use them again."
  },
  {
    id: 4,
    star: 5,
    customer: 'Pennywise Alfred',
    date: '35 mins ago',
    review: 'Nice and beautiful product.',
    images: [review14, review15, review16]
  }
];

export const shippingDetailsAddress: AddressTableDataType[] = [
  {
    labelIcon: 'user',
    label: 'Name',
    value: 'Shatinon Mekalan'
  },
  {
    labelIcon: 'home',
    label: 'Address',
    value: 'Apt: 6/B, 192 Edsel Road, Van Nuys California, USA 96580'
  },
  {
    labelIcon: 'phone',
    label: 'Phone',
    value: '818-414-4092'
  }
];

export const customerOrders: CustomerOrder[] = [
  {
    orderId: '#2453',
    totalPrice: 87,
    payment_status: {
      status: 'Shipped',
      type: 'success',
      icon: 'check'
    },
    delivery_method: 'Cash on delivery',
    date: 'Dec 12, 12:56 PM'
  },
  {
    orderId: '#2452',
    totalPrice: 7264,
    payment_status: {
      status: 'Ready to pickup',
      type: 'info',
      icon: 'info'
    },
    delivery_method: 'Free shipping',
    date: 'Dec 9, 2:28PM'
  },
  {
    orderId: '#2451',
    totalPrice: 375,
    payment_status: {
      status: 'Partially fulfilled',
      type: 'warning',
      icon: 'clock'
    },
    delivery_method: 'Local pickup',
    date: 'Dec 4, 12:56 PM'
  },
  {
    orderId: '#2450',
    totalPrice: 657,
    payment_status: {
      status: 'Canceled',
      type: 'secondary',
      icon: 'x'
    },
    delivery_method: 'Standard shipping',
    date: 'Dec 1, 4:07 AM'
  },
  {
    orderId: '#2449',
    totalPrice: 9562,
    payment_status: {
      status: 'fulfilled',
      type: 'success',
      icon: 'check'
    },
    delivery_method: 'Express',
    date: 'Nov 28, 7:28 PM'
  },
  {
    orderId: '#2448',
    totalPrice: 256,
    payment_status: {
      status: 'Unfulfilled',
      type: 'danger',
      icon: 'check'
    },
    delivery_method: 'Local delivery',
    date: 'Nov 24, 10:16 AM'
  },
  {
    orderId: '#2447',
    totalPrice: 898,
    payment_status: {
      status: 'Cancelled',
      type: 'secondary',
      icon: 'x'
    },
    delivery_method: 'Standard shipping',
    date: 'Nov 10, 12:00 PM'
  },
  {
    orderId: '#2446',
    totalPrice: 4116,
    payment_status: {
      status: 'shipped',
      type: 'success',
      icon: 'check'
    },
    delivery_method: 'Express',
    date: 'Nov 12, 12:20 PM'
  },
  {
    orderId: '#2445',
    totalPrice: 4116,
    payment_status: {
      status: 'fulfilled',
      type: 'success',
      icon: 'check'
    },
    delivery_method: 'Free shipping',
    date: 'Oct 19, 1:20 PM'
  }
];
