import { useEffect, useMemo, useState } from 'react';
import { Tab } from 'react-bootstrap';
import UserList from './UserList';
import { ConversationFilterType, useChatContext } from 'providers/ChatProvider';
import { Conversation } from 'data/chat';
import PhoenixNav from 'components/base/PhoenixNav';

const ChatFilterTab = () => {
  const { conversations } = useChatContext();
  const [filteredConversations, setFilteredConversations] = useState<
    Conversation[]
  >([]);

  const filterConversations = (type: ConversationFilterType) => {
    setFilteredConversations(
      conversations.filter(conversation => {
        const hasUnreadMessages = conversation.messages.some(
          message => message.type === 'received' && !message.readAt
        );
        return type === 'read'
          ? !hasUnreadMessages
          : type === 'unread'
          ? hasUnreadMessages
          : true;
      })
    );
  };
  const filterItems = useMemo(
    () => [
      {
        label: 'All',
        eventKey: 'all',
        onClick() {
          filterConversations('all');
        }
      },
      {
        label: 'Read',
        eventKey: 'read',
        onClick() {
          filterConversations('read');
        }
      },
      {
        label: 'Unread',
        eventKey: 'unread',
        onClick() {
          filterConversations('unread');
        }
      }
    ],
    [filteredConversations]
  );

  useEffect(() => {
    filterConversations('all');
  }, [conversations]);

  return (
    <Tab.Container defaultActiveKey="all">
      <PhoenixNav navItems={filterItems} />
      <UserList conversations={filteredConversations} />
    </Tab.Container>
  );
};

export default ChatFilterTab;
