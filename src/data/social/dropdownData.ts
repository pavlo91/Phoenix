import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface DropdownData {
  label: string;
  icon: IconProp;
}

export const dropdownData: DropdownData[] = [
  {
    label: 'Followers',
    icon: 'user-group'
  },
  {
    label: 'Communities',
    icon: 'users'
  },
  {
    label: 'Media Files',
    icon: 'photo-film'
  },
  {
    label: 'Events',
    icon: 'calendar-days'
  },
  {
    label: 'Games',
    icon: 'dice'
  },
  {
    label: 'Settings',
    icon: 'user-gear'
  },
  {
    label: 'Mute Conversation',
    icon: 'bell-slash'
  },
  {
    label: 'Manage Settings',
    icon: 'gear'
  },
  {
    label: 'Get help',
    icon: 'hand-holding-heart'
  },
  {
    label: 'Report Account',
    icon: 'flag'
  },
  {
    label: 'Block Account',
    icon: 'ban'
  }
];

export const mutualData: DropdownData[] = [
  {
    label: '432 Common Followers',
    icon: 'user-group'
  },
  {
    label: '21 Communities',
    icon: 'users'
  },
  {
    label: '12 Tagged Images',
    icon: 'tags'
  },
  {
    label: '3 Common Events',
    icon: 'calendar-days'
  },
  {
    label: '45 Common Check-ins',
    icon: 'location-dot'
  }
];
