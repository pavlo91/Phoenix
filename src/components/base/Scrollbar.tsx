import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import Scrollbars, {
  ScrollbarProps as ScrollbarsProps
} from 'react-custom-scrollbars-2';

interface ScrollbarProps extends ScrollbarsProps {
  autoHide?: boolean;
  className?: string;
}

const Scrollbar = ({
  children,
  autoHide = true,
  className,
  ...rest
}: PropsWithChildren<ScrollbarProps>) => {
  return (
    <Scrollbars
      autoHide={autoHide}
      renderTrackVertical={props => (
        <div {...props} className="track-vertical h-100 rounded" />
      )}
      className={classNames('custom-scrollbar', className)}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
