import { FeedPost } from '../../apps/hyper_socialFeed/types';

export type Project = {
    id: number;
    clientProfile: string;
    client: string;
    name: string;
    startDate: string;
    dueDate: string;
    status: string;
};

export type TimelinePost = FeedPost & {
    engagement: boolean;
};
