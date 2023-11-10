import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const WarningMessage = ({ message }: { message: string }) => {
  return (
    <p className="text-warning-500 font-medium">
      <FontAwesomeIcon
        icon="triangle-exclamation"
        className="me-2 text-warning"
      />
      {message}
    </p>
  );
};

export default WarningMessage;
