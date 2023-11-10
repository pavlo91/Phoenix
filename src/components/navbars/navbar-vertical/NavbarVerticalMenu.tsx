import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Collapse, Nav } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import { Route } from 'sitemap';
import { capitalize } from 'helpers/utils';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface NavbarVerticalMenuProps {
  routes: Route[];
  level: number;
}

interface NavItemProps {
  route: Route;
  level: number;
}

const NavItem = ({ route, level }: NavItemProps) => {
  return (
    <Nav.Item as="li">
      <NavLink
        to={route.path ? route.path : '#!'}
        className={({ isActive }) =>
          classNames('nav-link', {
            'label-1': level === 1,
            active: isActive && route.path !== '#!'
          })
        }
      >
        <div
          className={classNames('d-flex align-items-center', {
            'text-300': !route.active
          })}
        >
          {route.icon ? (
            <>
              <span className="nav-link-icon ">
                {route.iconSet === 'font-awesome' ? (
                  <FontAwesomeIcon
                    icon={route.icon as IconProp}
                    className="fs-8 mx-1"
                  />
                ) : (
                  <FeatherIcon icon={route.icon} size={16} />
                )}
              </span>
              <span className="nav-link-text-wrapper">
                <span className="nav-link-text">{capitalize(route.name)}</span>
              </span>
            </>
          ) : (
            <span className="nav-link-text ">{capitalize(route.name)}</span>
          )}
        </div>
      </NavLink>
    </Nav.Item>
  );
};

const CollapsableNavItem = ({ route, level }: NavItemProps) => {
  const { pathname } = useLocation();

  const openCollapse = (childrens: Route[] = []) => {
    const checkLink = (children: Route) => {
      if (`${children.path}` === pathname) {
        return true;
      }
      return children.pages && children.pages.some(checkLink);
    };
    return childrens.some(checkLink);
  };

  const [open, setOpen] = useState(openCollapse(route.pages));

  return (
    <>
      <Nav.Link
        onClick={() => setOpen(!open)}
        className={classNames('dropdown-indicator', {
          'label-1': level === 1,
          collapsed: !open,
          'text-300': !route.active
        })}
        aria-expanded={open}
      >
        <div className="d-flex align-items-center">
          <div className="dropdown-indicator-icon">
            <FontAwesomeIcon
              icon="caret-right"
              className={classNames({
                'text-300': !route.active
              })}
            />
          </div>
          {level === 1 && (
            <span className="nav-link-icon">
              <FeatherIcon icon={route.icon} size={16} />
            </span>
          )}
          <span className="nav-link-text">{capitalize(route.name)}</span>
        </div>
      </Nav.Link>
      <div
        className={classNames('parent-wrapper', {
          'label-1': level === 1
        })}
      >
        <Collapse in={open} className="nav parent">
          <div>
            {level === 1 && (
              <div className="collapsed-nav-item-title d-none">
                {capitalize(route.name)}
              </div>
            )}
            <NavbarVerticalMenu routes={route.pages || []} level={level + 1} />
          </div>
        </Collapse>
      </div>
    </>
  );
};

const NavbarVerticalMenu = ({ routes, level }: NavbarVerticalMenuProps) => {
  return (
    <>
      {routes.map(route => (
        <div key={route.name}>
          {level === 1 ? (
            <div className="nav-item-wrapper">
              {route.pages ? (
                <CollapsableNavItem route={route} level={level} />
              ) : (
                <NavItem route={route} level={level} />
              )}
            </div>
          ) : (
            <>
              {route.pages ? (
                <CollapsableNavItem route={route} level={level} />
              ) : (
                <NavItem route={route} level={level} />
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default NavbarVerticalMenu;
