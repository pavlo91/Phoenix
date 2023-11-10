import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import TooltipIconButton from 'components/common/TooltipIconButton';
import React from 'react';
import { Form } from 'react-bootstrap';

const InboxToolbar = ({
  size = 'lg',
  className
}: {
  size?: 'sm' | 'lg';
  className?: string;
}) => {
  return (
    <>
      <div
        className={classNames(
          className,
          'd-flex align-items-center flex-wrap position-sticky pb-2 bg-soft z-index-2 email-toolbar'
        )}
      >
        <div className="d-flex align-items-center flex-1 me-2">
          <Button className="p-0 me-2" onClick={() => location.reload()}>
            <FontAwesomeIcon icon="redo" className="text-primary fs-10" />
          </Button>
          <p className="fw-semi-bold fs-10 text-600 mb-0 lh-sm text-nowrap">
            Last refreshed 1m ago
          </p>
        </div>
        <div className="d-flex gap-3">
          <p className="text-600 fs-9 fw-semi-bold mb-0">
            {size === 'lg' ? 'Showing : ' : ' '}
            <span className="text-900">1-7</span>
            {' of '}
            <span className="text-900">205</span>
          </p>
          <Button className="p-0" type="button">
            <FontAwesomeIcon icon="angle-left" className="text-500 fs-10" />
          </Button>
          <Button className="p-0" type="button">
            <FontAwesomeIcon
              icon="angle-right"
              className="text-primary fs-10"
            />
          </Button>
        </div>
      </div>
      <div className="border-y py-2 d-flex justify-content-between">
        <Form.Check type="checkbox" id="defaultCheckbox" />
        <div className="d-flex gap-2">
          <TooltipIconButton iconClass="fs-10" title="Archive" icon="archive" />
          <TooltipIconButton iconClass="fs-10" title="Delete" icon="trash" />
          <TooltipIconButton iconClass="fs-10" title="Star" icon="star" />
          <TooltipIconButton iconClass="fs-10" title="Tags" icon="tag" />
        </div>
      </div>
    </>
  );
};

export default InboxToolbar;
