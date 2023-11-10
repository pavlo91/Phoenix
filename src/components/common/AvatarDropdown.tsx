import bg32 from 'assets/phoenix/img/bg/bg-32.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar, { Size } from 'components/base/Avatar';
import Button from 'components/base/Button';
import FeatherIcon from 'feather-icons-react';
import { Dropdown, Nav } from 'react-bootstrap';
import { Member } from 'data/users';

interface AvatarDropdownInterface {
  user: Member;
  size: Size;
}

const AvatarDropdown = ({ user, size }: AvatarDropdownInterface) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" className="dropdown-caret-none p-0">
        <Avatar src={user.avatar} size={size} />
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="avatar-dropdown-menu p-0 overflow-hidden"
        popperConfig={{ strategy: 'fixed' }}
        renderOnMount
      >
        <div className="position-relative">
          <div
            className="bg-holder z-index--1"
            style={{
              backgroundImage: `url(${bg32})`,
              backgroundSize: 'auto'
            }}
          />
          {/*/.bg-holder*/}
          <div className="p-3">
            <div className="text-end">
              <button className="btn p-0 me-2">
                <FontAwesomeIcon
                  icon="user-plus"
                  className="text-white light"
                />
              </button>
              <button className="btn p-0">
                <FontAwesomeIcon icon="ellipsis" className="text-white light" />
              </button>
            </div>
            <div className="text-center">
              <Avatar
                src={user.avatar}
                size="xl"
                status="online"
                className="border border-white rounded-circle mx-auto mb-2"
              />
              <h6 className="text-white light">{user.name}</h6>
              <p className="text-600 fw-semi-bold fs-10 mb-2">
                @{user.username}
              </p>
              <div className="d-flex flex-center mb-3">
                <h6 className="text-white light mb-0">
                  {user.connections}{' '}
                  <span className="fw-normal text-300">connections</span>
                </h6>
                <FontAwesomeIcon
                  icon="circle"
                  className="text-700 mx-1 fs-9"
                  transform="shrink-10 up-2"
                />
                <h6 className="text-white light mb-0">
                  {user.mutual}{' '}
                  <span className="fw-normal text-300">mutual</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="p-3 border-bottom">
            <div className="d-flex gap-2">
              <Button
                variant="phoenix-secondary"
                className="btn-icon btn-icon-lg"
              >
                <FontAwesomeIcon icon="phone" />
              </Button>
              <Button
                variant="phoenix-secondary"
                className="btn-icon btn-icon-lg"
              >
                <FontAwesomeIcon icon="message" />
              </Button>
              <Button
                variant="phoenix-secondary"
                className="btn-icon btn-icon-lg"
              >
                <FontAwesomeIcon icon="video" />
              </Button>
              <Button
                variant="phoenix-primary"
                startIcon={<FontAwesomeIcon icon="envelope" className="me-2" />}
                className="ms-auto"
              >
                Send Email
              </Button>
            </div>
          </div>
          <Nav className="flex-column py-3 border-bottom">
            <Nav.Link className="">
              <FeatherIcon
                icon="clipboard"
                size={16}
                className="me-2 text-900 d-inline-block"
              />
              <span className="text-1000 flex-1">Assigned Projects</span>
              <FontAwesomeIcon icon="chevron-right" className="fs-11" />
            </Nav.Link>
            <Nav.Link className="">
              <FeatherIcon
                icon="pie-chart"
                size={16}
                className="me-2 text-900 d-inline-block"
              />
              <span className="text-1000 flex-1">View activiy</span>
              <FontAwesomeIcon icon="chevron-right" className="fs-11" />
            </Nav.Link>
          </Nav>

          <div className="p-3 d-flex justify-content-between">
            <Button variant="link" className="p-0 text-decoration-none">
              Details
            </Button>
            <Button
              variant="link"
              className="p-0 text-decoration-none text-danger"
            >
              Unassign
            </Button>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AvatarDropdown;
