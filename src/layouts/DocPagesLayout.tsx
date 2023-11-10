/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { snakeCase } from 'helpers/utils';
import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState
} from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export type SideNavItem = {
  to: string;
  label: string;
  subItem?: SideNavItem[];
};

interface DocPagesLayoutProps {
  sideNavItems?: SideNavItem[];
}

const DocPagesLayout = ({
  children,
  sideNavItems
}: PropsWithChildren<DocPagesLayoutProps>) => {
  const [navItems, setNavItems] = useState<SideNavItem[]>([]);

  useEffect(() => {
    if (sideNavItems) {
      setNavItems(sideNavItems);
    } else {
      const items: SideNavItem[] = [];
      const recursiveMap = (children: ReactNode) => {
        React.Children.forEach(children, child => {
          if (React.isValidElement(child)) {
            if (
              child?.props?.children &&
              typeof child.type !== 'string' &&
              //@ts-ignore
              child.type?.componentName !== 'PhoenixDocCardHeader'
            ) {
              recursiveMap((child.props as any).children);
            } else {
              if (
                typeof child.type !== 'string' &&
                //@ts-ignore
                child.type?.componentName === 'PhoenixDocCardHeader' &&
                (child.props as any).title
              ) {
                items.push({
                  to: snakeCase((child.props as any).title),
                  label: (child.props as any).title
                });
              }
            }
          }
        });
      };
      recursiveMap(children);

      setNavItems(items);
    }
  }, []);

  return (
    <Row className="gx-3 gy-4 mb-7">
      <Col xs={12} xl={10} className="order-1 order-xl-0">
        {children}
      </Col>
      <Col xs={12} xl={2}>
        <div className="position-sticky" style={{ top: 80 }}>
          <h5>On this page</h5>
          <hr className="text-300" />
          <Nav as="ul" className="flex-column nav-vertical doc-nav">
            {navItems.map(item => (
              <NavItem item={item} key={item.label} />
            ))}
          </Nav>
        </div>
      </Col>
    </Row>
  );
};

const NavItem = ({ item }: { item: SideNavItem }) => {
  const { hash } = useLocation();

  return (
    <Nav.Item as="li" key={item.to}>
      <Nav.Link active={hash === `#${item.to}`} href={`#${item.to}`}>
        {item.label}
      </Nav.Link>
      {item.subItem && (
        <Nav as="ul" className="flex-column">
          {item.subItem.map(subItem => (
            <NavItem item={subItem} key={subItem.to} />
          ))}
        </Nav>
      )}
    </Nav.Item>
  );
};

export default DocPagesLayout;
