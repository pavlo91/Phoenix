import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ActionItem = {
  icon: IconProp;
  label: string;
};

export const addToCardItems: ActionItem[] = [
  {
    icon: 'user-plus',
    label: 'Assignee'
  },
  {
    icon: 'tag',
    label: 'Labels'
  },
  {
    icon: 'paperclip',
    label: 'Attachments'
  },
  {
    icon: 'square-check',
    label: 'Checklist'
  },
  {
    icon: 'calendar-days',
    label: 'Dates'
  }
];

export const actionItems: ActionItem[] = [
  {
    icon: 'arrow-right',
    label: 'Move'
  },
  {
    icon: 'copy',
    label: 'Copy'
  },
  {
    icon: 'trash',
    label: 'Remove'
  },
  {
    icon: 'box-archive',
    label: 'Archive'
  },
  {
    icon: 'share-nodes',
    label: 'Share'
  }
];
