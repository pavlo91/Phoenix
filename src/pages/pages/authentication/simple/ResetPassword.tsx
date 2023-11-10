import Button from 'components/base/Button';
import { Form } from 'react-bootstrap';

const ResetPassword = () => {
  return (
    <div>
      <div className="text-center mb-6">
        <h4 className="text-1000">Reset new password</h4>
        <p className="text-700">Type your new password</p>
        <Form className="mt-5">
          <Form.Control
            className="mb-2"
            id="password"
            type="password"
            placeholder="Type new password"
          />
          <Form.Control
            className="mb-4"
            id="confirmPassword"
            type="password"
            placeholder="Cofirm new password"
          />
          <Button variant="primary" className="w-100">
            Set Password
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
