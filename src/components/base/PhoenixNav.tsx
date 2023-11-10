import React from 'react';
import { Nav, NavLinkProps } from 'react-bootstrap';

interface PhoenixNavItem extends NavLinkProps {
  label: string;
}

interface PhoenixNavProps {
  navItems: PhoenixNavItem[];
}

const PhoenixNav = ({ navItems }: PhoenixNavProps) => {
  return (
    <Nav variant="phoenix-pills" className="mb-5 d-sm-none d-xl-flex">
      {navItems.map(item => {
        const { label, ...rest } = item;
        return (
          <Nav.Item key={item.eventKey}>
            <Nav.Link {...rest}>{label}</Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};

export default PhoenixNav;
