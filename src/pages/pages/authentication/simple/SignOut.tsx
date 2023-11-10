import { useEffect } from 'react';
import lightImg from 'assets/phoenix/img/spot-illustrations/1.png';
import darkImg from 'assets/phoenix/img/spot-illustrations/dark_1.png';
import { Link } from 'react-router-dom';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSimpleAuthConfig } from 'layouts/SimpleAuthLayout';

const SignOut = () => {
  const { setConfig } = useSimpleAuthConfig();
  useEffect(() => {
    setConfig({ logo: false, className: 'col-xl-6 col-xxl-4' });
    return () => {
      setConfig({ logo: true, className: 'col-xl-5 col-xxl-3' });
    };
  }, []);
  return (
    <div>
      <div className="text-center mb-6 mx-auto">
        <img className="mb-7 d-dark-none" src={lightImg} alt="phoenix" />
        <img className="mb-7 d-light-none" src={darkImg} alt="phoenix" />
        <div className="mb-6">
          <h4 className="text-1000">Come back soon!</h4>
          <p className="text-700">
            Thanks for using Phoenix. <br className="d-lg-none" />
            You are now successfully signed out.
          </p>
        </div>
        <div className="d-grid">
          <Button
            variant="primary"
            as={Link}
            to="/pages/authentication/simple/sign-in"
            startIcon={<FontAwesomeIcon icon="angle-left" className="me-2" />}
          >
            Go to sign in page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
