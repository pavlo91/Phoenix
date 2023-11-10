import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import { Form } from 'react-bootstrap';
import { FormCheckInputProps } from 'react-bootstrap/esm/FormCheckInput';

interface IndeterminateCheckboxProps extends FormCheckInputProps {
  indeterminate?: boolean;
}

const IndeterminateCheckbox = ({
  indeterminate,
  className,
  ...rest
}: IndeterminateCheckboxProps & HTMLProps<HTMLInputElement>) => {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      if (ref.current) {
        ref.current.indeterminate = !rest.checked && indeterminate;
      }
    }
  }, [ref, indeterminate]);

  return (
    <Form.Check
      type="checkbox"
      className={classNames('form-check fs-8 mb-0', className)}
    >
      <Form.Check.Input type="checkbox" ref={ref} {...rest} />
    </Form.Check>
  );
};
export default IndeterminateCheckbox;
