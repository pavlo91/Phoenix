import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { notificationsBreadcrumbItems } from 'data/notifications';
import React from 'react';
import NotificationItem from 'components/common/NotificationItem';
import { notifications } from 'data/notifications';
import classNames from 'classnames';

const Notification = () => {
  return (
    <div>
      <PageBreadcrumb items={notificationsBreadcrumbItems} />
      <h2 className="mb-5">Notifications</h2>
      <h5 className="text-black mb-3 ">Today</h5>
      <div className="mx-n4 mx-lg-n6 mb-5 border-top border-300">
        {notifications.slice(0, 3).map((notification, index) => (
          <NotificationItem
            notification={notification}
            type="pageItem"
            className={classNames({
              'border-bottom': index !== notifications.length - 1
            })}
            key={notification.id}
          />
        ))}
      </div>
      <h5 className="text-black mb-3 ">Yesterday</h5>
      <div className="mx-n4 mx-lg-n6 mb-9 border-top border-300">
        {notifications.slice(3, 7).map((notification, index) => (
          <NotificationItem
            notification={notification}
            type="pageItem"
            className={classNames({
              'border-bottom': index !== notifications.length - 1
            })}
            key={notification.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;
