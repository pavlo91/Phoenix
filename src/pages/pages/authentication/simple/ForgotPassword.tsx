import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { useSimpleAuthConfig } from 'layouts/SimpleAuthLayout';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const { setConfig } = useSimpleAuthConfig();
  useEffect(() => {
    setConfig({ logo: true, className: 'col-xxl-4' });
  }, []);
  return (
    <div>
      <div className="px-xxl-5">
        <div className="text-center mb-6">
          <h4 className="text-1000">Forgot your password?</h4>
          <p className="text-700 mb-5">
            Enter your email below and we will send <br className="d-sm-none" />
            you a reset link
          </p>
          <Form className="d-flex align-items-center mb-5">
            <Form.Control
              type="email"
              id="email"
              className="flex-1"
              placeholder="Email"
            />
            <Button
              variant="primary"
              className="ms-2"
              endIcon={
                <FontAwesomeIcon icon="chevron-right" className="ms-2" />
              }
            >
              Send
            </Button>
          </Form>
          <Link to="#!" className="fs-9 fw-bold">
            Still having problems?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
