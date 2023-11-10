import { capitalize } from 'helpers/utils';
import React, { useEffect, useState } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { RouteItems, routes } from 'sitemap';
import TopNavMegaMenu from './TopNavMegaMenu';
import TopNavItem from './TopNavItem';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { useLocation } from 'react-router-dom';

const NavbarTopNav = () => {
  return (
    <Nav className="navbar-nav-top pb-4 pb-lg-0 scrollbar">
      {routes.map(route => (
        <NavbarTopNavItem route={route} key={route.label} />
      ))}
    </Nav>
  );
};

const NavbarTopNavItem = ({ route }: { route: RouteItems }) => {
  const Icon = route.icon;
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const { breakpoints } = useBreakpoints();

  const handleMouseEnter = () => {
    if (breakpoints.up('lg')) {
      setShow(true);
    }
  };

  const handleMouseLeave = () => {
    if (breakpoints.up('lg')) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      setShow(false);
    }
  }, [pathname]);

  return (
    <Dropdown
      as="li"
      show={show}
      className="nav-item"
      key={route.label}
      autoClose="outside"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onToggle={() => setShow(!show)}
    >
      <Dropdown.Toggle
        as="a"
        variant=""
        className="nav-link lh-1 d-flex align-items-center cursor-pointer"
        // onClick={handleClick}
      >
        <Icon className="me-2" size={16} />
        <span>
          {capitalize(
            route.horizontalNavLabel ? route.horizontalNavLabel : route.label
          )}
        </span>
      </Dropdown.Toggle>
      {route.megaMenu ? (
        <TopNavMegaMenu route={route} />
      ) : (
        <TopNavItem route={route} />
      )}
    </Dropdown>
  );
};

export default NavbarTopNav;
