import ReactSelect from 'components/base/ReactSelect';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductVariant = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="d-flex gap-2 mb-2">
        <h5 className="mb-0 text-1000">Option 1</h5>
        <Link className="fw-bold fs-9" to="#!">
          Remove
        </Link>
      </div>
      <Form.Select className="mb-3">
        <option value="size">Size</option>
        <option value="color">Color</option>
        <option value="weight">Weight</option>
        <option value="smell">Smell</option>
      </Form.Select>
      <ReactSelect
        options={[
          { value: '4x6 in', label: '4x6 in' },
          { value: '9x6 in', label: '9x6 in' },
          { value: '11x8 in', label: '11x8 in' }
        ]}
        isMulti
        placeholder=""
        styles={{
          control: baseStyles => ({
            ...baseStyles,
            height: '70px',
            alignItems: 'start'
          }),
          dropdownIndicator: baseStyles => ({
            ...baseStyles,
            display: 'none'
          })
        }}
      />
    </div>
  );
};

export default ProductVariant;
