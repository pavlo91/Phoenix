import classNames from 'classnames';
import { Nav, NavProps } from 'react-bootstrap';

export interface IsotopeNavItem {
  eventKey: string | number;
  label: string;
}

interface IsotopeNavProps extends NavProps {
  navItems: IsotopeNavItem[];
}

const IsotopeNav = ({ navItems, className, onSelect }: IsotopeNavProps) => {
  return (
    <Nav
      className={classNames(className, 'font-sans-serif')}
      defaultActiveKey="1"
      onSelect={onSelect}
    >
      {navItems.map((navItem: IsotopeNavItem) => (
        <Nav.Item key={navItem.eventKey}>
          <Nav.Link className="isotope-nav" eventKey={navItem.eventKey}>
            {navItem.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default IsotopeNav;
