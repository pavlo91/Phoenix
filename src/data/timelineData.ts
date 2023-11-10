import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface TimelineData {
  oppositeContent: {
    date: string;
    time: string;
  };
  content: {
    title: string;
    subtitle: string;
  };
  separator: {
    icon: IconProp;
    dotClass: string;
    barClass?: string;
  };
}

export const orderTrackingTimelineData: TimelineData[] = [
  {
    oppositeContent: {
      date: '23 August, 2023',
      time: '10:30 AM'
    },
    content: {
      title: 'Order is processing',
      subtitle: 'Your package is ready for the seller to prepare.'
    },
    separator: {
      icon: 'check',
      dotClass: 'bg-success dark__bg-success',
      barClass: 'border-success'
    }
  },
  {
    oppositeContent: {
      date: '25 August, 2023',
      time: '11:30 AM'
    },
    content: {
      title: 'Picked Up',
      subtitle: 'Your package has been picked up from the seller.'
    },
    separator: {
      icon: 'check',
      dotClass: 'bg-success dark__bg-success',
      barClass: 'border-warning'
    }
  },
  {
    oppositeContent: {
      date: '27 August, 2023',
      time: '6:30 AM'
    },
    content: {
      title: 'Ready to Ship',
      subtitle: 'Your package is now ready to be shipped.'
    },
    separator: {
      icon: 'truck-ramp-box',
      dotClass: 'bg-warning dark__bg-warning',
      barClass: 'border-400 border-dashed'
    }
  },
  {
    oppositeContent: {
      date: 'Estimated time',
      time: '29 August, 2023'
    },
    content: {
      title: 'Shipped',
      subtitle: 'Pending'
    },
    separator: {
      icon: 'truck',
      dotClass: 'bg-400',
      barClass: 'border-400 border-dashed'
    }
  },
  {
    oppositeContent: {
      date: 'Estimated time',
      time: '30 August, 2023'
    },
    content: {
      title: 'Delivered',
      subtitle: 'Pending'
    },
    separator: {
      icon: 'truck-fast',
      dotClass: 'bg-400'
    }
  }
];
