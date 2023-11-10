import { Col, Dropdown, Row } from 'react-bootstrap';
import { Route, RouteItems } from 'sitemap';
import { capitalize } from 'helpers/utils';
import { Link, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import logoBg from 'assets/phoenix/img/icons/logo-bg.png';
import { Fragment, useEffect, useState } from 'react';

const TopNavMegaMenu = ({ route }: { route: RouteItems }) => {
  const [columns, setColumns] = useState<Route[][]>([]);

  useEffect(() => {
    const cols: Route[][] = [[], [], []];
    route.pages.forEach((page, index) => {
      if ([0, 1, 3].includes(index)) {
        cols[1].push(page);
      }
      if (index === 4) {
        cols[0].push(page);
      }
      if ([2, 5].includes(index)) {
        cols[2].push(page);
      }
    });

    setColumns(cols);
  }, []);

  return (
    <Dropdown.Menu
      as="ul"
      className=" navbar-dropdown-caret dropdown-menu-card py-0"
    >
      <div className="border-0 scrollbar" style={{ height: '60vh' }}>
        <div
          className="px-3 pt-4 pb-3 img-dropdown scrollbar"
          style={{
            backgroundImage: `url(${logoBg})`
          }}
        >
          <Row className="gx-4 gy-5">
            {columns.map((column, index) => (
              <Col key={index} xs={12} sm={6} md={4}>
                {column.map((page, index) => (
                  <Fragment key={page.name}>
                    <div
                      className={classNames('dropdown-item-group', {
                        'mt-5': index > 0
                      })}
                    >
                      <FeatherIcon
                        icon={page.icon}
                        size={16}
                        className="me-2"
                      />
                      <h6 className="dropdown-item-title">
                        {capitalize(page.name)}
                      </h6>
                    </div>
                    <TopNavMegaMenuIitemsLooper page={page} />
                  </Fragment>
                ))}
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Dropdown.Menu>
  );
};

const TopNavMegaMenuIitemsLooper = ({ page }: { page: Route }) => {
  const { pathname } = useLocation();
  return (
    <>
      {page.pages?.map(page => (
        <Fragment key={page.name}>
          {page.pages ? (
            <TopNavMegaMenuIitemsLooper page={page} />
          ) : (
            <Link
              to={page.path || '#!'}
              className={classNames('dropdown-link', {
                'text-300': !page.active,
                active: pathname === page.path
              })}
            >
              {capitalize(page.name)}
            </Link>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default TopNavMegaMenu;
