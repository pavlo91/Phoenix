import classNames from 'classnames';
import Button from 'components/base/Button';
import { PropsWithChildren } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const ToggleViewButton = ({
  active,
  tooltip,
  onClick,
  children
}: PropsWithChildren<{
  active?: boolean;
  tooltip: string;
  onClick: () => void;
}>) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip style={{ position: 'fixed' }}>{tooltip}</Tooltip>}
    >
      <div>
        <Button
          variant="phoenix-primary"
          className={classNames('px-3', {
            'text-900 border-0': active
          })}
          onClick={onClick}
        >
          {children}
        </Button>
      </div>
    </OverlayTrigger>
  );
};

export default ToggleViewButton;
