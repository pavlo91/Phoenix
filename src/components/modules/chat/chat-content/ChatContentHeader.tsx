import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Card, Dropdown } from 'react-bootstrap';
import { useChatContext } from 'providers/ChatProvider';
import classNames from 'classnames';
import { useMemo } from 'react';

const ChatContentHeader = () => {
  const {
    currentConversation,
    setShowConversationDetails,
    setShowUserListOffcanvas
  } = useChatContext();

  const firstName = useMemo(() => {
    return currentConversation?.user.name.split(' ')[0] || '';
  }, [currentConversation]);

  return (
    <>
      {currentConversation && (
        <>
          <Card.Header className="p-3 p-md-4 d-flex flex-between-center">
            <div className="d-flex align-items-center">
              <Button
                className="ps-0 pe-2 text-700 d-sm-none"
                onClick={() => setShowUserListOffcanvas(true)}
              >
                <FontAwesomeIcon icon="chevron-left" />
              </Button>
              <div className="d-flex flex-column flex-md-row align-items-md-center">
                <Button
                  className="fs-7 fw-semi-bold text-1100 d-flex align-items-center p-0 me-3 text-start"
                  onClick={() => setShowConversationDetails(true)}
                >
                  <span>{firstName}</span>
                  <FontAwesomeIcon icon="chevron-down" className="ms-2 fs-10" />
                </Button>
                <p className="fs-9 mb-0 me-2">
                  <FontAwesomeIcon
                    icon="circle"
                    className={classNames('fs-11 me-2', {
                      'text-success':
                        currentConversation.user.status === 'online',
                      'text-300': currentConversation.user.status === 'offline'
                    })}
                  />
                  {currentConversation.user.status === 'online'
                    ? 'Active now'
                    : 'Offline'}
                </p>
              </div>
            </div>
            <div className="d-flex">
              <Button variant="primary" className="btn-icon me-1">
                <FontAwesomeIcon icon="phone" />
              </Button>
              <Button variant="primary" className="btn-icon me-1">
                <FontAwesomeIcon icon="video" />
              </Button>

              <Dropdown>
                <Dropdown.Toggle
                  variant="phoenix-primary"
                  className="btn-icon dropdown-caret-none"
                >
                  <FontAwesomeIcon icon="ellipsis-vertical" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="py-2">
                  <Dropdown.Item href="#/action-1">
                    Add to favourites
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">View profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Report</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Manage notifications
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Card.Header>
        </>
      )}
    </>
  );
};

export default ChatContentHeader;
