import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categories } from 'data/e-commerce';
import { useCallback, useLayoutEffect, useRef } from 'react';
import {
  Card,
  Col,
  Dropdown,
  Nav,
  NavItem,
  Navbar,
  Row
} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Scrollbar from 'components/base/Scrollbar';
import classNames from 'classnames';

type NavItemType = {
  id: number;
  label: string;
  url: string;
};

const initNavItems: NavItemType[] = [
  {
    id: 1,
    label: 'Home',
    url: '/apps/e-commerce/customer/homepage'
  },
  {
    id: 2,
    label: 'My Favorite Stores',
    url: '/apps/e-commerce/customer/favorite-stores'
  },
  {
    id: 3,
    label: 'Products',
    url: '/apps/e-commerce/customer/products-filter'
  },
  {
    id: 4,
    label: 'Wishlist',
    url: '/apps/e-commerce/customer/wishlist'
  },
  {
    id: 5,
    label: 'Shipping Info',
    url: '/apps/e-commerce/customer/shipping-info'
  },
  {
    id: 6,
    label: 'Be a vendor',
    url: '/apps/e-commerce/admin/add-product'
  },
  {
    id: 7,
    label: 'Track order',
    url: '/apps/e-commerce/customer/order-tracking'
  },
  {
    id: 8,
    label: 'Checkout',
    url: '/apps/e-commerce/customer/checkout'
  }
];

const EcommerceNavbar = () => {
  const { pathname } = useLocation();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const otherElsRef = useRef<HTMLDivElement | null>(null);
  const moreBtnRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dropdownItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const updateItems = useCallback(() => {
    const otherElsWidth = otherElsRef.current?.clientWidth || 0;
    const containerWidth = containerRef.current?.clientWidth || 0;
    const moreBtnWidth = moreBtnRef.current?.clientWidth || 0;

    let totalItemsWidth = 0;
    if (moreBtnRef.current) {
      moreBtnRef.current.style.display = 'none';
    }
    navItemsRef.current.forEach((item, index) => {
      const dropdownItem = dropdownItemsRef.current[index];
      if (item && dropdownItem && moreBtnRef.current) {
        totalItemsWidth = totalItemsWidth + item.clientWidth + 32;
        if (
          otherElsWidth + totalItemsWidth + moreBtnWidth + 50 >
          containerWidth
        ) {
          item.style.display = 'none';
          dropdownItem.style.display = 'block';
          moreBtnRef.current.style.display = 'block';
        } else {
          item.style.display = 'block';
          dropdownItem.style.display = 'none';
        }
      }
    });
  }, []);

  useLayoutEffect(() => {
    updateItems();
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateItems);
    return () => {
      window.removeEventListener('resize', updateItems);
    };
  }, [updateItems]);

  return (
    <Navbar className="ecommerce-navbar bg-white justify-content-between p-0">
      <div
        className="container-small d-flex flex-between-center flex-nowrap w-100"
        ref={containerRef}
      >
        <Dropdown ref={otherElsRef}>
          <Dropdown.Toggle
            variant=""
            className="text-900 ps-0 pe-5 text-nowrap dropdown-toggle dropdown-caret-none"
          >
            <FontAwesomeIcon icon="bars" className="me-2" />
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu className="border py-0 category-dropdown-menu ms-2">
            <Card className="border-0">
              <Scrollbar autoHeight autoHeightMax={657}>
                <Card.Body className="p-6 pb-3">
                  <Row className="gx-7 gy-5 mb-5">
                    {categories.map(category => (
                      <Col xs={12} sm={6} md={4} key={category.title}>
                        <div className="d-flex align-items-center mb-3">
                          <FeatherIcon
                            icon={category.icon}
                            className="text-primary me-2"
                            style={{ strokeWidth: 3 }}
                            size={16}
                          />
                          <h6 className="text-1000 mb-0 text-nowrap">
                            {category.title}
                          </h6>
                        </div>
                        <div className="ms-n2">
                          {category.sections.map(section => (
                            <Link
                              key={section.label}
                              to={section.url}
                              className="text-black d-block mb-1 text-decoration-none hover-bg-100 px-2 py-1 rounded-2"
                            >
                              {section.label}
                            </Link>
                          ))}
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <div className="text-center border-top pt-3">
                    <Link className="fw-bold" to="#!">
                      See all Categories
                      <FontAwesomeIcon icon="angle-right" className="ms-1" />
                    </Link>
                  </div>
                </Card.Body>
              </Scrollbar>
            </Card>
          </Dropdown.Menu>
        </Dropdown>
        <Nav as="ul" className="justify-content-end align-items-center gap-5">
          {initNavItems.map((item, index) => (
            <Nav.Item
              className="gap-3"
              key={item.id}
              ref={(el: HTMLDivElement) => (navItemsRef.current[index] = el)}
            >
              <Nav.Link
                key={item.id}
                as={Link}
                to={item.url}
                className={classNames({
                  active: pathname === item.url
                })}
              >
                {item.label}
              </Nav.Link>
            </Nav.Item>
          ))}
          <Dropdown align="end" as={NavItem} ref={moreBtnRef}>
            <Dropdown.Toggle
              variant=""
              className="fw-bold nav-link dropdown-caret-none"
            >
              More
              <FontAwesomeIcon icon="angle-down" className="ms-2" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end" renderOnMount>
              {initNavItems.map((item, index) => (
                <Dropdown.Item
                  key={item.id}
                  as={Link}
                  to={item.url}
                  ref={(el: HTMLAnchorElement) =>
                    (dropdownItemsRef.current[index] = el)
                  }
                >
                  {item.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </div>
    </Navbar>
  );
};

export default EcommerceNavbar;
