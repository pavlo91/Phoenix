import React, { ReactNode } from 'react';
import { Form } from 'react-bootstrap';

export interface CheckboxItemProps {
  type?: 'checkbox' | 'radio';
  name: string;
  label: string | ReactNode;
  value: string | number;
}

const CheckboxItem = ({
  type = 'checkbox',
  name,
  label,
  value
}: CheckboxItemProps) => {
  return (
    <Form.Check
      type={type}
      id={String(value)}
      className="mb-0 d-flex align-items-center gap-2"
    >
      <Form.Check.Input
        type={type}
        value={value}
        name={name}
        className="mt-0"
      />
      <Form.Check.Label className="d-block lh-sm fs-8 text-900 fw-normal mb-0">
        {label}
      </Form.Check.Label>
    </Form.Check>
  );
};

export default CheckboxItem;
