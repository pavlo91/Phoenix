import { useAppContext } from 'providers/AppProvider';
import { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const NavbarToggleButton = () => {
  const {
    config: { openNavbarVertical },
    setConfig
  } = useAppContext();
  const { pathname } = useLocation();

  const toggleOpenNavbarVertical = () => {
    setConfig({
      openNavbarVertical: !openNavbarVertical
    });
  };

  useEffect(() => {
    return () => {
      setConfig({
        openNavbarVertical: false
      });
    };
  }, []);

  useEffect(() => {
    if (openNavbarVertical) {
      setConfig({
        openNavbarVertical: false
      });
    }
  }, [pathname]);

  return (
    <Navbar.Toggle
      className="hover-bg-transparent navbar-toggler-humburger-icon"
      onClick={toggleOpenNavbarVertical}
    >
      <span className="navbar-toggle-icon">
        <span className="toggle-line" />
      </span>
    </Navbar.Toggle>
  );
};

export default NavbarToggleButton;
