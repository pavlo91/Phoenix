import classNames from 'classnames';
import Logo from 'components/common/Logo';
import { Dispatch, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, Outlet, useOutletContext } from 'react-router-dom';

interface SimpleAuthLayoutProps {
  logo?: boolean;
  className?: string;
}

interface UseSimpleAuthConfig {
  setConfig: Dispatch<React.SetStateAction<SimpleAuthLayoutProps | null>>;
}

const SimpleAuthLayout = () => {
  const [config, setConfig] = useState<SimpleAuthLayoutProps>({
    logo: true,
    className: 'col-xl-5 col-xxl-3'
  });
  return (
    <div className="container">
      <Row className="flex-center min-vh-100 py-5">
        <Col sm={10} md={8} lg={5} className={classNames(config?.className)}>
          {config?.logo && (
            <Link
              to="/"
              className="d-flex flex-center text-decoration-none mb-4"
            >
              <Logo
                text={false}
                width={58}
                className="fw-bolder fs-5 d-inline-block"
              />
            </Link>
          )}
          <Outlet context={{ setConfig }} />
        </Col>
      </Row>
    </div>
  );
};

export function useSimpleAuthConfig() {
  return useOutletContext<UseSimpleAuthConfig>();
}

export default SimpleAuthLayout;
