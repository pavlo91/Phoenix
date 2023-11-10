import team32 from "assets/phoenix/img/team/32.webp";
import team35 from "assets/phoenix/img/team/35.webp";
import team57 from "assets/phoenix/img/team/57.webp";
import team58 from "assets/phoenix/img/team/58.webp";
import team59 from "assets/phoenix/img/team/59.webp";
import team31 from "assets/phoenix/img/team/31.webp";
import team33 from "assets/phoenix/img/team/33.webp";
import team34 from "assets/phoenix/img/team/34.webp";
import team29 from "assets/phoenix/img/team/29.webp";
import team3 from "assets/phoenix/img/team/3.webp";
import team25 from "assets/phoenix/img/team/25.webp";
import { BadgeBg } from "components/base/Badge";

export type Customer = {
  avatar?: string;
  name: string;
  email: string;
  city: string;
  totalOrders: number;
  totalSpent: number;
  lastSeen: string;
  lastOrder: string;
  placeholder?: boolean;
};

export type CustomerReview = {
  product: string;
  rating: number;
  review: string;
  status: {
    title: string;
    badgeBg: BadgeBg;
    icon: string;
  };
  time: string;
};

export const customers: Customer[] = [
  {
    avatar: team32,
    name: "Carry Anna",
    email: "annac34@gmail.com",
    city: "Budapest",
    totalOrders: 89,
    totalSpent: 23987,
    lastSeen: "34 min ago",
    lastOrder: "Dec 12, 12:56 PM",
  },
  {
    name: "Milind Mikuja",
    placeholder: true,
    email: "mimiku@yahoo.com",
    city: "Manchester",
    totalOrders: 76,
    totalSpent: 21567,
    lastSeen: "6 hours ago",
    lastOrder: "Dec 9, 2:28 PM",
  },
  {
    avatar: team35,
    name: "Stanly Drinkwater",
    email: "stnlwasser@hotmail.com",
    city: "Smallville",
    totalOrders: 69,
    totalSpent: 19872,
    lastSeen: "43 min ago",
    lastOrder: "Dec 4, 12:56 PM",
  },
  {
    avatar: team57,
    name: "Josef Stravinsky",
    email: "Josefsky@sni.it",
    city: "Metropolis",
    totalOrders: 67,
    totalSpent: 17996,
    lastSeen: "2 hours ago",
    lastOrder: "Dec 1,  4:07 AM",
  },
  {
    avatar: team58,
    name: "Igor Borvibson",
    email: "vibigorr@technext.it",
    city: "Central city",
    totalOrders: 61,
    totalSpent: 16785,
    lastSeen: "5 days ago",
    lastOrder: "Nov 28, 7:28 PM",
  },
  {
    avatar: team59,
    name: "Katerina Karenin",
    email: "karkat99@gmail.com",
    city: "Gotham",
    totalOrders: 58,
    totalSpent: 14956,
    lastSeen: "2 weeks ago",
    lastOrder: "Nov 24, 10:16 AM",
  },
  {
    name: "Roy Anderson",
    email: "andersonroy@netflix.chill",
    city: "Vancouver",
    totalOrders: 52,
    totalSpent: 12509,
    lastSeen: "4 days ago",
    lastOrder: "Nov 18, 5:43 PM",
  },
  {
    avatar: team31,
    name: "Martina scorcese",
    email: "cesetina1@gmail.com",
    city: "Viena",
    totalOrders: 49,
    totalSpent: 11003,
    lastSeen: "6 min ago",
    lastOrder: "Nov 18, 2:09 AM",
  },
  {
    avatar: team33,
    name: "Luis Bunuel",
    email: "luisuel@live.com",
    city: "Bangalore",
    totalOrders: 44,
    totalSpent: 7897,
    lastSeen: "56 min ago",
    lastOrder: "Nov 16, 3:22 PM",
  },
  {
    avatar: team34,
    name: "Jean Renoir",
    email: "renoirjean1836@gmail.com",
    city: "Chittagong",
    totalOrders: 37,
    totalSpent: 7781,
    lastSeen: "Yesterday",
    lastOrder: "Nov 09, 8:49 AM",
  },
  {
    avatar: team29,
    name: "Ricky Antony",
    email: "ricky@example.com",
    city: "New Jersey",
    totalOrders: 33,
    totalSpent: 7825,
    lastSeen: "1 hour ago",
    lastOrder: "Oct 19, 8:00 AM",
  },
  {
    avatar: team3,
    name: "Emma Watson",
    email: "emma@example.com",
    city: "New York",
    totalOrders: 45,
    totalSpent: 18975,
    lastSeen: "6 hours ago",
    lastOrder: "Oct 15, 12:00 PM",
  },
  {
    name: "Jennifer Schramm",
    placeholder: true,
    email: "jennifer@example.com",
    city: "Charlotte",
    totalOrders: 39,
    totalSpent: 8967,
    lastSeen: "12 hours ago",
    lastOrder: "Oct 12, 11:00 AM",
  },
  {
    avatar: team32,
    name: "Raymond Mims",
    email: "raymond@example.com",
    city: "Artesia",
    totalOrders: 30,
    totalSpent: 14587,
    lastSeen: "2 day ago",
    lastOrder: "Oct 10, 8:30 AM",
  },
  {
    avatar: team25,
    name: "Michael Jenkins",
    email: "jenkins@example.com",
    city: "Philadelphia",
    totalOrders: 43,
    totalSpent: 45697,
    lastSeen: "12 hours ago",
    lastOrder: "Oct 3, 8:30 AM",
  },
];

export const customerNotes = [
  {
    note: "Gave us a nice feedback",
    date: "12 Nov, 2020",
  },
  {
    note: "Customer added product to cart and then forgot to checkout. Later knocked the customer support to ask about update on shipping. Later, settled on “One day Shipping” though “Free delivery” was preferred. Overall good behavior.",
    date: "23 Dec, 2019",
  },
  {
    note: "User of this support ticket won a 100% off coupon and received top-notch service from the technical support engineer. Along with providing a good review, user highly appreciated the team.",
    date: "2 Oct, 2020",
  },
  {
    note: "Customer returned and bought 2 related items, which is currently being shipped. Customer chose “One day Shipping”. Additional notes were added regarding customised wrapping. Customer submitted positive review.",
    date: "26 Apr, 2019",
  },
];

export const customerRatingsTableData: CustomerReview[] = [
  {
    product: "Apple Magic Mouse (Wireless, Rechargable) - Silver",
    rating: 4,
    review:
      "It's lovely, works right out of the box (as you'd expect from an Apple device), and has a number of useful functions.",
    status: {
      title: "Success",
      badgeBg: "success",
      icon: "check",
    },
    time: "Just now",
  },
  {
    product: "Fitbit Sense Advanced Smartwatch with Tools",
    rating: 5,
    review:
      "This is an exceptional smartwatch, featuring a wealth of useful functions at an affordable price. The watch is small tool",
    status: {
      title: "Success",
      badgeBg: "success",
      icon: "check",
    },
    time: "Dec 9, 2:28PM",
  },
  {
    product: "HORI Racing Wheel Apex for PlayStation 4_3, and PC",
    rating: 4,
    review:
      "This steering wheel is a great buy! It works well and feels good, however I wish it had a wider diameter like a real steering wheel.",
    status: {
      title: "Pending",
      badgeBg: "warning",
      icon: "alert-octagon",
    },
    time: "Dec 4, 12:56 PM",
  },
  {
    product: "Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset",
    rating: 3,
    review: "My son says these are the greatest he's ever tasted.",
    status: {
      title: "Cancelled",
      badgeBg: "secondary",
      icon: "x",
    },
    time: "Nov 28, 7:28 PM",
  },
  {
    product: "iPhone 13 pro max-Pacific Blue-128GB storage",
    rating: 3,
    review:
      "I chose wisely. The phone is in excellent condition, with no scratches or dents, excellent battery life, and flawless operation.",
    status: {
      title: "Success",
      badgeBg: "success",
      icon: "check",
    },
    time: "Nov 24, 10:16 AM",
  },
  {
    product: "Apple MacBook Pro 13 inch-M1-8/256GB-space",
    rating: 4.5,
    review:
      "It's lovely, works right out of the box (as you'd expect from an Apple device), and has a number of useful functions.",
    status: {
      title: "Pending",
      badgeBg: "warning",
      icon: "alert-octagon",
    },
    time: "Just now",
  },
  {
    product: 'Apple iMac 24" 4K Retina Display M1 8 Core CPU...',
    rating: 3,
    review:
      "The best experience we could hope for. Customer service team is amazing and the quality of their products is unsurpassed.",
    status: {
      title: "Pending",
      badgeBg: "warning",
      icon: "alert-octagon",
    },
    time: "Nov 09, 3:23 AM",
  },
  {
    product: "PlayStation 5 DualSense Wireless Controller",
    rating: 4,
    review: "My son says these are the greatest he's ever tasted.",
    status: {
      title: "Success",
      badgeBg: "success",
      icon: "check",
    },
    time: "Nov 08, 8:53 AM",
  },
  {
    product: "2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray",
    rating: 4.5,
    review:
      "The response time and service I received when contacted the designers were Phenomenal!",
    status: {
      title: "Pending",
      badgeBg: "warning",
      icon: "alert-octagon",
    },
    time: "Nov 07, 9:00 PM",
  },
  {
    product: "Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)",
    rating: 3,
    review:
      "I chose wisely. The phone is in excellent condition, with no scratches or dents, excellent battery life, and flawless operation.",
    status: {
      title: "Pending",
      badgeBg: "warning",
      icon: "alert-octagon",
    },
    time: "Nov 07, 11:20 AM",
  },
];
