import classNames from 'classnames';
import React, { InputHTMLAttributes } from 'react';
import { Button } from 'react-bootstrap';

interface CheckButtonProps {
  type?: 'checkbox' | 'radio';
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  label: string;
  id: string;
  variant?: string;
  className?: string;
}

const CheckButton = ({
  inputProps,
  label,
  id,
  type = 'radio',
  className,
  variant = 'phoenix-secondary'
}: CheckButtonProps) => {
  return (
    <>
      <input className="btn-check" type={type} id={id} {...inputProps} />
      <Button
        as="label"
        variant={variant}
        className={classNames(className, 'hover-bg-100 fs-10 py-1 mb-0')}
        htmlFor={id}
      >
        {label}
      </Button>
    </>
  );
};

export default CheckButton;
