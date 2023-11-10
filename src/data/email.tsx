import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  UilArchive,
  UilExclamationCircle,
  UilInbox,
  UilLocationArrow,
  UilPen,
  UilStar,
  UilTrash
} from '@iconscout/react-unicons';
import team60 from 'assets/phoenix/img/team/60.webp';
import team58 from 'assets/phoenix/img/team/58.webp';
import team57 from 'assets/phoenix/img/team/57.webp';
import team59 from 'assets/phoenix/img/team/59.webp';
import team30 from 'assets/phoenix/img/team/30.webp';

export interface SidebarItem {
  icon: JSX.Element;
  label: string;
  count?: number;
  link?: string;
  active?: boolean;
}

export interface Email {
  id: number;
  sender: {
    name: string;
    avatar?: string;
  };
  subject: string;
  details: string;
  time: string;
  starred: boolean;
  read_at: Date | null;
  attachments?: {
    id: number;
    format: string;
    fileName: string;
  }[];
}
export const mailboxItems: SidebarItem[] = [
  {
    icon: <UilInbox size={12} />,
    label: 'Inbox',
    count: 5,
    link: '/apps/email/inbox'
  },
  {
    icon: <UilLocationArrow size={12} />,
    label: 'Sent',
    count: 23,
    active: true
  },
  {
    icon: <UilPen size={12} />,
    label: 'Draft'
  },
  {
    icon: <UilExclamationCircle size={12} />,
    label: 'Spam'
  },
  {
    icon: <UilTrash size={12} />,
    label: 'Trash'
  }
];

export const filteredItems: SidebarItem[] = [
  {
    icon: <UilStar size={12} />,
    label: 'Starred'
  },
  {
    icon: <UilArchive size={12} />,
    label: 'Archive'
  }
];

export const labelItems: SidebarItem[] = [
  {
    icon: (
      <FontAwesomeIcon
        icon="circle"
        className="text-primary ms-n1"
        transform="shrink-10"
      />
    ),
    label: 'Personal'
  },
  {
    icon: (
      <FontAwesomeIcon
        icon="circle"
        className="text-primary-600 ms-n1"
        transform="shrink-10"
      />
    ),
    label: 'Work'
  },
  {
    icon: (
      <FontAwesomeIcon
        icon="circle"
        className="text-success ms-n1"
        transform="shrink-10"
      />
    ),
    label: 'Payments'
  },
  {
    icon: (
      <FontAwesomeIcon
        icon="circle"
        className="text-warning ms-n1"
        transform="shrink-10"
      />
    ),
    label: 'Invoices'
  },
  {
    icon: (
      <FontAwesomeIcon
        icon="circle"
        className="text-danger ms-n1"
        transform="shrink-10"
      />
    ),
    label: 'Accounts'
  },
  {
    icon: (
      <FontAwesomeIcon
        icon="circle"
        className="text-info ms-n1"
        transform="shrink-10"
      />
    ),
    label: 'Forums'
  }
];

export const emails: Email[] = [
  {
    id: 1,
    sender: {
      name: 'Jessica Ball',
      avatar: team60
    },
    subject: 'Query about purchased soccer socks',
    details:
      'Greetings. I have purchased some socks under the bundle offer you availed this week. According to the offer I was thrilled to get a 25% off of any product I bought. Regardless, I had to pay the exact full price for them...',
    time: '1 M',
    starred: true,
    read_at: null
  },
  {
    id: 2,
    sender: {
      name: 'Danny Reid',
      avatar: team58
    },
    subject: 'How to take the headache out of Order',
    details: `Hello! As I've mentioned before, we have this huge order deals to ship within this month. Also, the financial report is attached to this email. Hopefully, you'll find it useful for the company.`,
    time: '3 M',
    starred: false,
    read_at: null,
    attachments: [
      {
        id: 1,
        format: 'pdf',
        fileName: 'Financial_Reports.pdf'
      },
      {
        id: 2,
        format: 'zip',
        fileName: 'Frame20.zip'
      }
    ]
  },
  {
    id: 3,
    sender: {
      name: 'Harley Brown',
      avatar: team57
    },
    subject: 'The Arnold Schwarzenegger of Order',
    details:
      'I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount or...',
    time: '5 M',
    starred: true,
    read_at: new Date()
  },
  {
    id: 4,
    sender: {
      name: 'Hollie Stephens',
      avatar: team59
    },
    subject: 'My order is not being taken',
    details:
      'Hello. I’m knocking to let you know that I am trying to place some orders on your site. But my orders are not being taken, maybe it’s technical issues. Can you help me with it as I really need the products I am trying to...',
    time: '8 M',
    starred: false,
    read_at: null
  },
  {
    id: 5,
    sender: {
      name: 'Natasha West'
    },
    subject: 'Shipment is missing',
    details:
      'Greetings! I’ve got an email saying I was to get the products yesterday. But got a call instead saying the shipment was misplaced. Can you put some light on it? Really need the products.',
    time: '20 M',
    starred: true,
    read_at: new Date()
  },
  {
    id: 6,
    sender: {
      name: 'Max Williamson'
    },
    subject: 'How can I order something urgently?',
    details:
      'I saw your promotion on 25% sales. Do you avail emergency orders and urgent shipments? If you do, I need to place some orders. Please reply, thanks.',
    time: '30 M',
    starred: true,
    read_at: new Date(),
    attachments: [
      {
        id: 1,
        format: 'wav',
        fileName: 'syllabus'
      }
    ]
  },
  {
    id: 7,
    sender: {
      name: 'Ethan Hawkins',
      avatar: team30
    },
    subject: 'How the delicacy of the products will be handled??',
    details:
      'Hello! I need to purchase some delicate products. Can you tell me how you handle the delicacy of the products to be shipped? I don’t want to get my hands on broken things, so. Thank you!  ',
    time: '32 M',
    starred: false,
    read_at: new Date()
  }
];
