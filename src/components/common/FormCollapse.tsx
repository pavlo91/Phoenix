import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { PropsWithChildren, useState } from 'react';
import { Collapse } from 'react-bootstrap';

interface FormCollapseProps {
  title: string;
  defaultOpen?: boolean;
}

const FormCollapse = ({
  title,
  defaultOpen = true,
  children
}: PropsWithChildren<FormCollapseProps>) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        className={classNames('px-0 d-block collapse-indicator w-100', {
          collapsed: !open
        })}
      >
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="fs-8 text-1000">{title}</div>
          <FontAwesomeIcon icon="angle-up" className="toggle-icon text-500" />
        </div>
      </Button>
      <Collapse in={open}>
        <div>{children}</div>
      </Collapse>
    </>
  );
};

export default FormCollapse;
