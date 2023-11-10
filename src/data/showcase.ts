import demo1 from 'assets/phoenix/img/sections/demo-1.webp';
import demo2 from 'assets/phoenix/img/sections/demo-2.webp';
import demo16 from 'assets/phoenix/img/sections/demo-16.webp';
import demo4 from 'assets/phoenix/img/sections/demo-4.webp';
import demo5 from 'assets/phoenix/img/sections/demo-5.webp';
import demo6 from 'assets/phoenix/img/sections/demo-6.webp';
import demo7 from 'assets/phoenix/img/sections/demo-7.webp';
import demo8 from 'assets/phoenix/img/sections/demo-8.webp';
import demo9 from 'assets/phoenix/img/sections/demo-9.webp';
import demo10 from 'assets/phoenix/img/sections/demo-10.webp';
import demo11 from 'assets/phoenix/img/sections/demo-11.webp';
import demo12 from 'assets/phoenix/img/sections/demo-12.webp';
import demo13 from 'assets/phoenix/img/sections/demo-13.webp';
import demo14 from 'assets/phoenix/img/sections/demo-14.webp';
import demo15 from 'assets/phoenix/img/sections/demo-15.webp';
import section64 from 'assets/phoenix/img/sections/64.webp';
import section65 from 'assets/phoenix/img/sections/65.webp';
import section66 from 'assets/phoenix/img/sections/66.webp';
import section21 from 'assets/phoenix/img/sections/21.webp';
import section22 from 'assets/phoenix/img/sections/22.webp';
import section23 from 'assets/phoenix/img/sections/23.webp';
import section24 from 'assets/phoenix/img/sections/24.webp';
import section26 from 'assets/phoenix/img/sections/26.webp';
import section27 from 'assets/phoenix/img/sections/27.webp';

import kanban from 'assets/phoenix/img/sections/kanban.webp';

export const demos = [
  {
    sideThumb: demo2,
    mainThumb: demo1,
    variantName: 'Vertical Sidenav (Default)',
    link: '/pages/demo/vertical-sidenav'
  },
  {
    sideThumb: demo16,
    mainThumb: demo16,
    variantName: 'Dark Mode',
    link: '/pages/demo/dark-mode'
  },
  {
    sideThumb: demo5,
    mainThumb: demo4,
    variantName: 'Darknav',
    link: '/pages/demo/darknav'
  },
  {
    sideThumb: demo7,
    mainThumb: demo6,
    variantName: 'Topnav Slim',
    link: '/pages/demo/topnav-slim'
  },
  {
    sideThumb: demo9,
    mainThumb: demo8,
    variantName: 'Topnav Only',
    link: '/pages/demo/navbar-top'
  },
  {
    sideThumb: demo11,
    mainThumb: demo10,
    variantName: 'Horizontal Slim',
    link: '/pages/demo/navbar-top-slim'
  },
  {
    sideThumb: demo13,
    mainThumb: demo12,
    variantName: 'Combo Nav',
    link: '/pages/demo/combo-nav'
  },
  {
    sideThumb: demo15,
    mainThumb: demo14,
    variantName: 'Dual Nav',
    link: '/pages/demo/dual-nav'
  }
];

export const importantApplications = [
  {
    title: 'Email',
    link: '/apps/email/inbox',
    thumb: section64,
    details:
      'You’ll get a pre-built email app with this template so that your customer-client communication remains smooth and steady. Enjoy thorough communication with us!',
    btnLabel: 'View email'
  },
  {
    title: 'Chat',
    link: '/apps/chat',
    thumb: section66,
    details:
      'Our pre-built web app will help you have steady communication with your customers and grow your business rigorously. Hopefully, you’ll enjoy using this web app in Phoenix!',
    btnLabel: 'View chat'
  },
  {
    title: 'Calender',
    link: '#!',
    thumb: section65,
    details:
      'Our calendar app will help you painlessly track all your trades. You can add, edit and revise the previous reminders and stay updated according to your schedule.',
    btnLabel: 'View calender',
    disable: true
  },
  {
    title: 'Kanban',
    link: '#!',
    thumb: kanban,
    details:
      'Our pre-built web app will help you have steady communication with your customers and grow your business rigorously. Hopefully, you’ll enjoy using this web app in Phoenix!',
    btnLabel: 'View kanban',
    disable: true
  }
];

export const necessaryPages = [
  {
    thumb: section21,
    pageName: 'Profile',
    pageLink: '/apps/social/profile'
  },
  {
    thumb: section22,
    pageName: 'Pricing',
    pageLink: '/pages/pricing/pricing-column'
  },
  {
    thumb: section23,
    pageName: 'FAQ',
    pageLink: '/pages/faq/faq-accordion'
  },
  {
    thumb: section24,
    pageName: 'Notifications',
    pageLink: '/pages/notifications'
  },
  {
    thumb: section27,
    pageName: 'Authentication',
    pageLink: '/pages/authentication/simple/sign-in'
  },
  {
    thumb: section26,
    pageName: 'Event',
    pageLink: '/apps/events/event-detail'
  }
];

export const showcaseFaqs = [
  {
    id: 1,
    question: `Is this template built on Vite or Create React App scaffolding?`,
    answer: 'This template is built using Create React App scaffolding.'
  },
  {
    id: 2,
    question: ` Is this template built using TypeScript?`,
    answer: 'Yes, this template is built using TypeScript.'
  },
  {
    id: 3,
    question: `Is there any Trial version of ${process.env.REACT_APP_TITLE} React?`,
    answer: `We are sorry to inform you that there is no free or trial version of  ${process.env.REACT_APP_TITLE} React, but you would get a full refund within 10 days if the template does not match your requirement.`
  },
  {
    id: 4,
    question: `Which bootstrap react framework you are using?`,
    answer: `We are using React-Bootstrap for ${process.env.REACT_APP_TITLE} React`
  },
  {
    id: 5,
    question: 'Where will I get the Figma Files?',
    answer: `You will find the Figma link in the README.md file on your downloaded copy of  ${process.env.REACT_APP_TITLE} React.`
  }
];
