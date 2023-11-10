import React, { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';

interface RadioItemProps {
  name: string;
  value: string;
  thumb: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioItem = ({
  name,
  value,
  thumb,
  label,
  checked,
  handleChange,
  disabled
}: RadioItemProps) => {
  return (
    <>
      <Form.Check.Input
        className="btn-check"
        type="radio"
        id={`${name}-${value}`}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <Form.Check.Label
        htmlFor={`${name}-${value}`}
        className="btn btn-navbar-style d-inline-block fs-9"
      >
        <span className="mb-2 rounded d-block">
          <img className="img-fluid img-prototype mb-0" src={thumb} alt="" />
        </span>
        <span className="label-text">{label}</span>
      </Form.Check.Label>
    </>
  );
};

export default RadioItem;
