import { Nav, Navbar } from 'react-bootstrap';
import { routes } from 'sitemap';
import { capitalize } from 'helpers/utils';
import NavbarVerticalMenu from './NavbarVerticalMenu';
import {
  UilArrowFromRight,
  UilLeftArrowToLeft
} from '@iconscout/react-unicons';
import { useAppContext } from 'providers/AppProvider';
import classNames from 'classnames';
import Button from 'components/base/Button';
import NavbarTopNav from '../navbar-horizontal/NavbarTopNav';
import { useBreakpoints } from 'providers/BreakpointsProvider';

const NavbarVerical = () => {
  const {
    config: {
      navbarPosition,
      openNavbarVertical,
      navbarVerticalAppearance,
      isNavbarVerticalCollapsed
    },
    setConfig
  } = useAppContext();

  const { breakpoints } = useBreakpoints();

  return (
    <Navbar
      className={classNames('navbar-vertical', {
        'navbar-darker': navbarVerticalAppearance === 'darker'
      })}
      expand="lg"
      variant=""
    >
      <Navbar.Collapse id="navbarVerticalCollapse" in={openNavbarVertical}>
        <div className="navbar-vertical-content">
          <Nav className="flex-column" as="ul" id="navbarVerticalNav">
            {routes.map(route => (
              <Nav.Item key={route.label}>
                {!route.labelDisabled && (
                  <>
                    <p className="navbar-vertical-label">
                      {capitalize(route.label)}
                    </p>
                    <hr className="navbar-vertical-line" />
                  </>
                )}
                <NavbarVerticalMenu level={1} routes={route.pages} />
              </Nav.Item>
            ))}
          </Nav>

          {navbarPosition === 'combo' && breakpoints.down('lg') && (
            <div className="move-container">
              <div className="navbar-vertical-divider">
                <hr className="navbar-vertical-hr" />
              </div>
              <NavbarTopNav />
            </div>
          )}
        </div>
      </Navbar.Collapse>
      <div className="navbar-vertical-footer">
        <Button
          className="navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center"
          onClick={() => {
            setConfig({
              isNavbarVerticalCollapsed: !isNavbarVerticalCollapsed
            });
          }}
        >
          {isNavbarVerticalCollapsed ? (
            <UilArrowFromRight size={16} className="mb-1" />
          ) : (
            <>
              <UilLeftArrowToLeft size={16} className="mb-1" />
              <span className="ms-2">Collapsed View</span>
            </>
          )}
        </Button>
      </div>
    </Navbar>
  );
};

export default NavbarVerical;
