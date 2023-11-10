import Button from 'components/base/Button';
import Logo from 'components/common/Logo';
import useNavbarBgChangeOnScroll from 'hooks/useNavbarBgChangeOnScroll';
import { useRef } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowcaseNavbar = () => {
  const navbarRef = useRef(null);

  useNavbarBgChangeOnScroll(navbarRef);

  return (
    <Navbar ref={navbarRef} expand="lg" sticky="top" className="py-3">
      <div className="container-small px-0 px-sm-3">
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Item className="border-bottom border-bottom-lg-0">
              <Nav.Link
                as={Link}
                to="/documentation/getting-started"
                className="fs-9 fw-bold pe-3 active"
                aria-current="page"
              >
                Documentation
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="border-bottom border-bottom-lg-0">
              <Nav.Link
                className="fs-9 fw-bold pe-3"
                href="mailto:support@themewagon.com"
              >
                Support
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="fs-9 fw-bold pe-5"
                href="https://themewagon.com/hire-us/"
                target="_blank"
              >
                Hire us
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-grid d-lg-flex align-items-center">
            <Button variant="primary" as={Link} to="#!" target="_blank">
              Purchase
            </Button>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default ShowcaseNavbar;
