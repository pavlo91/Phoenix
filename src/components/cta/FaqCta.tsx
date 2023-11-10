import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';

const FaqCta = () => {
  return (
    <div>
      <div className="text-center py-11">
        <h3 className="text-black">Still can’t find your answer?</h3>
        <p className="text-900">We are happy to help</p>
        <Button
          variant="outline-primary"
          size="sm"
          className="btn-support-chat"
          startIcon={<FontAwesomeIcon icon="comment" className="me-2" />}
        >
          Chat with us
        </Button>
      </div>
    </div>
  );
};

export default FaqCta;
