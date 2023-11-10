import classNames from 'classnames';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import { Conversation } from 'data/chat';
import { useChatContext } from 'providers/ChatProvider';
import React, { useMemo } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserListitem = ({ conversation }: { conversation: Conversation }) => {
  const { currentConversation, chatDispatch } = useChatContext();

  const lastMessage = useMemo(
    () => conversation.messages[conversation.messages.length - 1],
    [conversation]
  );
  const unseenMessageCount = useMemo(
    () =>
      conversation.messages.filter(
        message => message.type === 'received' && !message.readAt
      ).length,
    [conversation]
  );

  const markedAsRead = () => {
    chatDispatch({
      type: 'MARKED_AS_READ',
      payload: { conversationId: conversation.id }
    });
  };

  return (
    <Nav.Item
      key={conversation.id}
      className={unseenMessageCount > 0 ? 'read' : 'unread'}
    >
      <Nav.Link
        as={Link}
        to={`/apps/chat/${conversation.user.id}/conversation`}
        onClick={markedAsRead}
        className={classNames(
          'd-flex align-items-center justify-content-center p-2',
          {
            unread: unseenMessageCount > 0,
            active: currentConversation?.user.id === conversation.user.id
          }
        )}
      >
        <div className="position-relative me-2 me-sm-0 me-xl-2">
          <Avatar
            src={conversation.user.avatar}
            size="xl"
            // status="online"
            className="d-block"
            imageClassName="border border-2 border-white"
          />
          {unseenMessageCount > 0 && (
            <span
              className="bg-primary rounded-circle top-0 end-0 position-absolute text-white d-flex flex-center fs-10 fw-semi-bold d-none d-sm-flex d-xl-none lh-1"
              style={{ height: '1rem', width: '1rem' }}
            >
              {unseenMessageCount}
            </span>
          )}
        </div>
        <div className="flex-1 d-sm-none d-xl-block">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-900 fw-normal name text-nowrap">
              {conversation.user.name}
            </h5>
            <p className="fs-10 text-600 mb-0 text-nowrap">
              {lastMessage.time}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fs-9 mb-0 line-clamp-1 text-600 message">
              {lastMessage.message}
            </p>
            {unseenMessageCount > 0 && (
              <Badge
                variant="phoenix"
                bg="primary"
                className="px-1 unread-badge ms-1"
              >
                {unseenMessageCount}
              </Badge>
            )}
          </div>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
};

const UserList = ({ conversations }: { conversations: Conversation[] }) => {
  return (
    <div className="scrollbar">
      <Nav className="chat-conversation-tab flex-column">
        {conversations.map(conversation => (
          <UserListitem conversation={conversation} key={conversation.id} />
        ))}
      </Nav>
    </div>
  );
};

export default UserList;
