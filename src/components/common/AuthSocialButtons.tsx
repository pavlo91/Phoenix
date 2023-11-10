import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';

const AuthSocialButtons = ({ title }: { title: string }) => {
  return (
    <>
      <Button
        variant="phoenix-secondary"
        className="w-100 mb-3"
        startIcon={
          <FontAwesomeIcon
            icon={['fab', 'google']}
            className="text-danger me-2 fs-9"
          />
        }
      >
        {title} with google
      </Button>
      <Button
        variant="phoenix-secondary"
        className="w-100"
        startIcon={
          <FontAwesomeIcon
            icon={['fab', 'facebook']}
            className="text-primary me-2 fs-9"
          />
        }
      >
        {title} with facebook
      </Button>
    </>
  );
};

export default AuthSocialButtons;
