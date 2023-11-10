import Logo from 'components/common/Logo';
import { Modal, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import SearchBox from 'components/common/SearchBox';
import Button from 'components/base/Button';
import ThemeToggler from 'components/common/ThemeToggler';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import DropdownSearchBox from 'components/common/DropdownSearchBox';
import SearchResult from 'components/common/SearchResult';

const NavItem = ({
  label,
  url,
  isLast
}: {
  label: string;
  url: string;
  isLast?: boolean;
}) => {
  return (
    <Nav.Item
      as="li"
      className={classNames({ 'border-bottom border-bottom-lg-0': !isLast })}
    >
      <Nav.Link href={url} className="lh-1 py-0 fs-9 fw-bold py-3">
        {label}
      </Nav.Link>
    </Nav.Item>
  );
};

const DefaultLandingNavbar = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  useEffect(() => {
    const toggleShadowClass = () => {
      if (window.scrollY > 300) {
        containerRef.current?.classList.add('navbar-shadow');
      } else {
        containerRef.current?.classList.remove('navbar-shadow');
      }
    };

    document.addEventListener('scroll', () => toggleShadowClass());

    return () => document.removeEventListener('scroll', toggleShadowClass);
  }, []);

  return (
    <>
      <div className="bg-white sticky-top landing-navbar" ref={containerRef}>
        <Navbar className="px-3 px-lg-7 px-xxl-3 container-small" expand="lg">
          <Navbar.Brand
            as={Link}
            to="/"
            className="text-decoration-none flex-1 flex-lg-grow-0"
          >
            <Logo />
          </Navbar.Brand>
          <ThemeToggler className="mx-2 d-lg-none" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <div className="border-bottom d-lg-none mb-2">
              <SearchBox
                placeholder="Search"
                className="w-100"
                inputClassName="rounded-pill my-4"
              />
            </div>
            <Nav className="me-auto mb-2 mb-lg-0" as="ul">
              <NavItem label="Home" url="#home" />
              <NavItem label="Features" url="#features" />
              <NavItem label="Blog" url="#blog" />
              <NavItem label="Team" url="#team" isLast />
            </Nav>

            <div className="d-grid d-lg-flex gap-4 align-items-center">
              <ThemeToggler className="d-none d-lg-block" />
              <Button
                className="p-0 text-700 hover-text-1100 d-none d-lg-inline lh-sm"
                onClick={() => setOpenSearchModal(!openSearchModal)}
              >
                <FeatherIcon icon="search" size={20} />
              </Button>
              <Link
                to="#!"
                className="btn btn-link p-0 text-900 order-1 order-lg-0"
              >
                Sign in
              </Link>
              <Link to="#!" className="btn btn-phoenix-primary order-0">
                Sign up
              </Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Modal
        show={openSearchModal}
        onHide={() => setOpenSearchModal(false)}
        className="search-box-modal mt-15"
      >
        <Modal.Body className="p-0 bg-transparent">
          <DropdownSearchBox
            size="lg"
            className="navbar-top-search-box"
            inputClassName="rounded-pill"
            style={{ width: 'auto' }}
          >
            <SearchResult />
          </DropdownSearchBox>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DefaultLandingNavbar;
