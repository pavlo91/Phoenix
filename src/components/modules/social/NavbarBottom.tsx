import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface NavbarBottomProps {
  active: string;
  className?: string;
}

const NavbarBottom = ({ active, className }: NavbarBottomProps) => {
  return (
    <div className={classNames(className, 'navbar-bottom')}>
      <Nav>
        <Nav.Link
          as={Link}
          to="/apps/social/feed"
          className={classNames({ active: active === 'home' })}
        >
          <FontAwesomeIcon icon="home" className="nav-icon" />
          <span className="nav-label">Home</span>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/apps/social/profile"
          className={classNames({ active: active === 'profile' })}
        >
          <FontAwesomeIcon icon="user" className="nav-icon" />
          <span className="nav-label">Profile</span>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="#!"
          className={classNames({ active: active === 'photos' })}
        >
          <FontAwesomeIcon icon="image" className="nav-icon" />
          <span className="nav-label">Photos</span>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/apps/chat"
          className={classNames({ active: active === 'messages' })}
        >
          <FontAwesomeIcon icon="message" className="nav-icon" />
          <span className="nav-label">Messages</span>
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/apps/events/event-detail"
          className={classNames({ active: active === 'events' })}
        >
          <FontAwesomeIcon icon="calendar-days" className="nav-icon" />
          <span className="nav-label">Events</span>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default NavbarBottom;
