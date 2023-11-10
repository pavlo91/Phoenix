import Avatar from 'components/base/Avatar';
import { useEffect } from 'react';
import avatar from 'assets/phoenix/img/team/30.webp';
import { Form } from 'react-bootstrap';
import Button from 'components/base/Button';
import { Link } from 'react-router-dom';
import { useSimpleAuthConfig } from 'layouts/SimpleAuthLayout';

const LockScreen = () => {
  const { setConfig } = useSimpleAuthConfig();
  useEffect(() => {
    setConfig({ logo: false, className: 'col-xl-5 col-xxl-3' });
  }, []);
  return (
    <div>
      <div className="text-center mb-5">
        <Avatar size="4xl" src={avatar} className="mb-3 d-inline-block" />
        <h2 className="text-1000">
          <span className="fw-normal">Hello </span>
          John Smith
        </h2>
        <p className="text-700">Enter your password to access the admin</p>
      </div>
      <Form>
        <Form.Control
          className="mb-3"
          id="password"
          type="password"
          placeholder="Enter Password"
        />
        <Button variant="primary" as={Link} to="/" className="w-100">
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default LockScreen;
