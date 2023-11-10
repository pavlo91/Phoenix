import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React, { PropsWithChildren } from 'react';

const ActionButton = ({
  icon,
  children
}: PropsWithChildren<{ icon: IconProp }>) => (
  <div>
    <Button className="p-0 fw-semi-bold d-block">
      <FontAwesomeIcon icon={icon} className="me-3" />
      {children}
    </Button>
  </div>
);

export default ActionButton;
