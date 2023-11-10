import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface TimelineProps {
  variant: 'vertical' | 'basic';
  className?: string;
}

interface TimelineItemProps {
  className?: string;
}
interface TimelineBarProps
  extends TimelineItemProps,
    HTMLAttributes<HTMLSpanElement> {}

const Timeline = ({
  children,
  variant,
  className
}: PropsWithChildren<TimelineProps>) => {
  return (
    <div
      className={classNames(className, {
        'timeline-basic': variant === 'basic',
        'timeline-vertical': variant === 'vertical'
      })}
    >
      {children}
    </div>
  );
};

export const TimelineItem = ({
  children,
  className
}: PropsWithChildren<TimelineItemProps>) => {
  return (
    <div className={classNames(className, 'timeline-item')}>{children}</div>
  );
};

export const TimelineOppositeContent = ({
  children,
  className
}: PropsWithChildren<TimelineItemProps>) => {
  return (
    <div className={classNames(className, 'order-1 order-md-0 me-md-4')}>
      {children}
    </div>
  );
};

export const TimelineContent = ({
  children,
  className
}: PropsWithChildren<TimelineItemProps>) => {
  return (
    <div className={classNames(className, 'ps-6 ps-md-3')}>{children}</div>
  );
};

export const TimelineSeparator = ({
  children,
  className
}: PropsWithChildren<TimelineItemProps>) => {
  return (
    <div className={classNames(className, 'timeline-separator me-3 me-md-0')}>
      {children}
    </div>
  );
};

export const TimelineDot = ({
  children,
  className
}: PropsWithChildren<TimelineItemProps>) => {
  return (
    <div className={classNames(className, 'icon-item icon-item-sm')}>
      {children}
    </div>
  );
};

export const TimelineBar = ({ className, ...rest }: TimelineBarProps) => {
  return (
    <span
      className={classNames(className, 'timeline-bar border-end')}
      {...rest}
    />
  );
};

Timeline.Item = TimelineItem;
Timeline.OppositeContent = TimelineOppositeContent;
Timeline.Content = TimelineContent;
Timeline.Separator = TimelineSeparator;
Timeline.Bar = TimelineBar;
Timeline.Dot = TimelineDot;

export default Timeline;
