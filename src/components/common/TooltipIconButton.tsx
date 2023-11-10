import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const TooltipIconButton = ({
  title,
  icon,
  iconClass
}: {
  title: string;
  icon: IconProp;
  iconClass?: string;
}) => {
  return (
    <OverlayTrigger
      overlay={<Tooltip style={{ position: 'fixed' }}>{title}</Tooltip>}
    >
      <div>
        <Button className="p-0 text-500 hover-text-600">
          <FontAwesomeIcon icon={icon} className={classNames(iconClass)} />
        </Button>
      </div>
    </OverlayTrigger>
  );
};

export default TooltipIconButton;
