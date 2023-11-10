import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scrollbar from 'components/base/Scrollbar';
import Button from 'components/base/Button';
import { notifications as notificationData } from 'data/notifications';
import NotificationItem from 'components/common/NotificationItem';
import classNames from 'classnames';
import { useState } from 'react';

const NotificationDropdownMenu = ({ className }: { className?: string }) => {
  const [notifications] = useState(notificationData.slice(0, 6));
  return (
    <Dropdown.Menu
      align="end"
      className={classNames(
        className,
        'navbar-dropdown-caret py-0 notification-dropdown-menu shadow border border-300'
      )}
    >
      <Card className="position-relative border-0">
        <Card.Header className="p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-black mb-0">Notifications</h5>
            <Button variant="link" className="p-0 fs-9 fw-normal">
              Mark all as read
            </Button>
          </div>
        </Card.Header>
        <Card.Body className="p-0" style={{ height: '27rem' }}>
          <Scrollbar>
            {notifications.map((notification, index) => (
              <NotificationItem
                notification={notification}
                type="dropdownItem"
                className={classNames({
                  'border-bottom': index !== notifications.length - 1
                })}
                key={notification.id}
              />
            ))}
          </Scrollbar>
        </Card.Body>
        <Card.Footer className="p-0 border-top">
          <div className="my-2 text-center fw-bold fs-10 text-600">
            <Link to="/pages/notifications" className="fw-bolder">
              Notification history
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Dropdown.Menu>
  );
};

export default NotificationDropdownMenu;
