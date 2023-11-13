import Avatar from 'components/base/Avatar';
import { useState } from 'react';
import { Card, Dropdown, Form, Nav } from 'react-bootstrap';
import avatar from 'assets/phoenix/img/team/72x72/57.webp';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import Scrollbar from 'components/base/Scrollbar';
import classNames from 'classnames';

const ProfileDropdownMenu = ({ className }: { className?: string }) => {
  const [navItems] = useState([
    {
      label: 'Profile',
      url: '#!',
      icon: 'user'
    },
    {
      label: 'Dashboard',
      url: '#!',
      icon: 'pie-chart'
    },
    {
      label: 'Posts & Activity',
      url: '#!',
      icon: 'lock'
    },
    {
      label: 'Settings & Privacy ',
      url: '/settings',
      icon: 'settings'
    },
    {
      label: 'Help Center',
      url: '#!',
      icon: 'help-circle'
    },
    {
      label: 'Language',
      url: '#!',
      icon: 'globe'
    }
  ]);
  return (
    <Dropdown.Menu
      align="end"
      className={classNames(
        className,
        'navbar-top-dropdown-menu navbar-dropdown-caret py-0 dropdown-profile shadow border border-300'
      )}
    >
      <Card className="position-relative border-0">
        <Card.Body className="p-0">
          <div className="d-flex flex-column align-items-center justify-content-center gap-2 pt-4 pb-3">
            <Avatar src={avatar} size="xl" />
            <h6 className="text-black">Jerry Seinfield</h6>
          </div>
          <div className="mb-3 mx-3">
            <Form.Control
              type="text"
              placeholder="Update your status"
              size="sm"
            />
          </div>
          <div style={{ height: '10rem' }}>
            <Scrollbar>
              <Nav className="nav flex-column mb-2 pb-1">
                {navItems.map(item => (
                  <Nav.Item key={item.label}>
                    <Nav.Link href="#!" className="px-3">
                      <FeatherIcon
                        icon={item.icon}
                        size={16}
                        className="me-2 text-900"
                      />
                      <span className="text-1000">{item.label}</span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Scrollbar>
          </div>
        </Card.Body>
        <Card.Footer className="p-0 border-top">
          <Nav className="nav flex-column my-3">
            <Nav.Item>
              <Nav.Link href="#!" className="px-3">
                <FeatherIcon
                  icon="user-plus"
                  size={16}
                  className="me-2 text-900"
                />
                <span>Add another account</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <hr />
          <div className="px-3">
            <Link
              to="#!"
              className="btn btn-phoenix-secondary d-flex flex-center w-100"
            >
              <FeatherIcon icon="log-out" className="me-2" size={16} />
              Sign out
            </Link>
          </div>
          <div className="my-2 text-center fw-bold fs-10 text-600">
            <Link className="text-600 me-1" to="#!">
              Privacy policy
            </Link>
            •
            <Link className="text-600 mx-1" to="#!">
              Terms
            </Link>
            •
            <Link className="text-600 ms-1" to="#!">
              Cookies
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Dropdown.Menu>
  );
};

export default ProfileDropdownMenu;
