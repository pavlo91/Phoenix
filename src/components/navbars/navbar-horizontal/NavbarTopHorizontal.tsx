import { Navbar } from 'react-bootstrap';
import { useAppContext } from 'providers/AppProvider';
import classNames from 'classnames';
import NavbarBrand from 'components/navbars/nav-items/NavbarBrand';
import NavItemsSlim from 'components/navbars/nav-items/NavItemsSlim';
import NavItems from 'components/navbars/nav-items/NavItems';
import NavbarTopNav from './NavbarTopNav';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const NavbarTopHorizontal = () => {
  const {
    config: {
      navbarPosition,
      openNavbarVertical,
      navbarTopShape,
      navbarTopAppearance
    }
  } = useAppContext();

  const { breakpoints } = useBreakpoints();

  return (
    <Navbar
      className={classNames('navbar-top fixed-top', {
        'navbar-slim': navbarTopShape === 'slim',
        'navbar-darker': navbarTopAppearance === 'darker'
      })}
      expand="lg"
      variant=""
    >
      <NavbarBrand />
      {!(navbarPosition === 'combo' && breakpoints.down('lg')) && (
        <Navbar.Collapse
          className="navbar-top-collapse order-1 order-lg-0 justify-content-center pb-0"
          in={openNavbarVertical}
        >
          <NavbarTopNav />
        </Navbar.Collapse>
      )}
      {navbarTopShape === 'default' ? <NavItems /> : <NavItemsSlim />}
    </Navbar>
  );
};

export default NavbarTopHorizontal;
