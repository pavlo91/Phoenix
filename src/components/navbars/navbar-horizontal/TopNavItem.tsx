import { Dropdown } from 'react-bootstrap';
import { Fragment, useState } from 'react';
import { Route, RouteItems } from 'sitemap';
import { capitalize } from 'helpers/utils';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeatherIcon from 'feather-icons-react';
import { UilAngleRight } from '@iconscout/react-unicons';
import classNames from 'classnames';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const TopNavItem = ({ route }: { route: RouteItems }) => {
  return (
    <Dropdown.Menu as="ul" className="navbar-dropdown-caret">
      {route.pages.map(page => (
        <Fragment key={page.name}>
          {page.pages ? (
            <Fragment key={page.name}>
              {page.flat ? (
                page.pages?.map(page => (
                  <TopNavDropdownItem page={page} key={page.name} />
                ))
              ) : (
                <TopNavLooper page={page} />
              )}
            </Fragment>
          ) : (
            <TopNavDropdownItem page={page} />
          )}
        </Fragment>
      ))}
    </Dropdown.Menu>
  );
};

const TopNavLooper = ({ page }: { page: Route }) => {
  const [show, setShow] = useState(false);

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

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Dropdown
      as="li"
      show={show}
      className={classNames({
        'dropdown-inside': page.dropdownInside
      })}
      onMouseEnter={!page.dropdownInside ? handleMouseEnter : undefined}
      onMouseLeave={!page.dropdownInside ? handleMouseLeave : undefined}
      autoClose={false}
    >
      <Dropdown.Toggle
        as="a"
        variant=""
        className="dropdown-item dropdown-caret-none lh-1 d-flex align-items-center cursor-pointer"
        onClick={handleClick}
      >
        <div
          className={classNames('dropdown-item-wrapper', {
            'text-300': !page.active
          })}
        >
          <UilAngleRight className="lh-1 dropdown-indicator-icon" size={16} />
          <span>
            {page.icon && (
              <FeatherIcon icon={page.icon} size={16} className="me-2" />
            )}
            {capitalize(page.name)}
          </span>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu as="ul">
        {page.pages?.map(page => (
          <Fragment key={page.name}>
            {page.pages ? (
              <TopNavLooper page={page} />
            ) : (
              <TopNavDropdownItem page={page} />
            )}
          </Fragment>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const TopNavDropdownItem = ({ page }: { page: Route }) => {
  const { pathname } = useLocation();
  return (
    <li>
      <Dropdown.Item
        as={Link}
        to={page.path || '#!'}
        className={classNames({
          'text-300': !page.active,
          active: pathname === page.path
        })}
      >
        <div className="dropdown-item-wrapper">
          {page.icon && (
            <>
              {page.iconSet === 'font-awesome' ? (
                <FontAwesomeIcon
                  icon={page.icon as IconProp}
                  className="fs-8 ms-1 me-2"
                />
              ) : (
                <FeatherIcon icon={page.icon} size={14} className="me-2" />
              )}
            </>
          )}
          {page.topNavIcon && (
            <FeatherIcon icon={page.topNavIcon} size={14} className="me-2" />
          )}
          {capitalize(page.name)}
        </div>
      </Dropdown.Item>
    </li>
  );
};

export default TopNavItem;
