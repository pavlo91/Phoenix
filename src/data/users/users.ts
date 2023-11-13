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

export type User = {
  avatar?: string;
  user: string;
  role: string;
  lastLogin: string;
  twoStep: string;
  joinedDate: string;
  actions: string;
  email?: string;
  placeholder?: boolean;
};

export type Permission = {
  name: string;
  assignedTo: string;
  createdDate: string;
  actions: string;
};

export type UserReview = {
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

export const permission: Permission[] = [
  {
    name: "User Management",
    assignedTo: "Administrator",
    createdDate: "20.12.2023.11:30",
    actions: "string"
  }
]

export const users: User[] = [
  {
    avatar: team32,
    user: "Carry Anna",
    role: "Administrator",
    email: "annac34@gmail.com",
    lastLogin: "Yesterday",
    twoStep: "Enabled",
    joinedDate: "22 Sep 2023, 6:05 pm",
    actions: "34 min ago",
  },
  {
    user: "Milind Mikuja",
    placeholder: true,
    role: "Support",
    email: "mimiku@yahoo.com",
    lastLogin: "20 mins ago	",
    twoStep: "Enabled",
    joinedDate: "15 Apr 2023, 10:30 am",
    actions: "6 hours ago",
  },
  {
    avatar: team35,
    user: "Stanly Drinkwater",
    role: "Analyst",
    email: "stnlwasser@hotmail.com",
    lastLogin: "2 mins ago	",
    twoStep: "",
    joinedDate: "10 Mar 2023, 6:05 pm",
    actions: "43 min ago",
  },
  {
    avatar: team57,
    user: "Josef Stravinsky",
    role: "Support",
    email: "Josefsky@sni.it",
    lastLogin: "3 mins ago	",
    twoStep: "",
    joinedDate: "20 Jun 2023, 11:30 am",
    actions: "2 hours ago",
  },
  {
    avatar: team58,
    user: "Igor Borvibson",
    role: "Analyst",
    email: "vibigorr@technext.it",
    lastLogin: "20 mins ago	",
    twoStep: "Enabled",
    joinedDate: "20 Dec 2023, 11:30 am",
    actions: "5 days ago",
  },
  {
    avatar: team59,
    user: "Katerina Karenin",
    role: "Administrator",
    email: "karkat99@gmail.com",
    lastLogin: "3 weeks ago	",
    twoStep: "",
    joinedDate: "25 Jul 2023, 5:30 pm",
    actions: "2 weeks ago",
  },
  {
    user: "Roy Anderson",
    role: "Administrator",
    email: "andersonroy@netflix.chill",
    lastLogin: "Yesterday",
    twoStep: "Enabled",
    joinedDate: "19 Aug 2023, 11:05 am",
    actions: "4 days ago",
  },
  {
    avatar: team31,
    user: "Martina scorcese",
    role: "Developer",
    email: "cesetina1@gmail.com",
    lastLogin: "3 days ago	",
    twoStep: "",
    joinedDate: "19 Aug 2023, 5:30 pm",
    actions: "6 min ago",
  },
  {
    avatar: team33,
    user: "Luis Bunuel",
    role: "Administrator",
    email: "luisuel@live.com",
    lastLogin: "5 days ago	",
    twoStep: "Enabled",
    joinedDate: "20 Jun 2023, 8:43 pm",
    actions: "56 min ago",
  },
  {
    avatar: team34,
    user: "Jean Renoir",
    role: "Developer",
    email: "renoirjean1836@gmail.com",
    lastLogin: "5 hours ago	",
    twoStep: "Enabled",
    joinedDate: "21 Feb 2023, 6:05 pm",
    actions: "Yesterday",
  },
  {
    avatar: team29,
    user: "Ricky Antony",
    role: "Trial",
    email: "ricky@example.com",
    lastLogin: "20 mins ago	",
    twoStep: "Enabled",
    joinedDate: "20 Jun 2023, 11:30 am",
    actions: "1 hour ago",
  },
  {
    avatar: team3,
    user: "Emma Watson",
    role: "Support",
    email: "emma@example.com",
    lastLogin: "3 days ago	",
    twoStep: "",
    joinedDate: "24 Jun 2023, 5:20 pm",
    actions: "6 hours ago",
  },
  {
    user: "Jennifer Schramm",
    placeholder: true,
    role: "Developer",
    email: "jennifer@example.com",
    lastLogin: "3 days ago	",
    twoStep: "",
    joinedDate: "22 Sep 2023, 6:43 am",
    actions: "12 hours ago",
  },
  {
    avatar: team32,
    user: "Raymond Mims",
    role: "Analyst",
    email: "raymond@example.com",
    lastLogin: "3 days ago	",
    twoStep: "Enabled",
    joinedDate: "15 Apr 2023, 9:23 pm",
    actions: "2 day ago",
  },
  {
    avatar: team25,
    user: "Michael Jenkins",
    role: "Administrator",
    email: "jenkins@example.com",
    lastLogin: "3 days ago	",
    twoStep: "Enabled",
    joinedDate: "20 Jun 2023, 11:30 am",
    actions: "12 hours ago",
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

export const customerRatingsTableData: UserReview[] = [
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
