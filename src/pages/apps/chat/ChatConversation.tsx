import ChatContent from 'components/modules/chat/chat-content';
import ChatSidebar from 'components/modules/chat/ChatSidebar';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { useChatContext } from 'providers/ChatProvider';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChatConversation = () => {
  const { userId } = useParams();

  const { chatDispatch, conversations } = useChatContext();

  const { breakpoints } = useBreakpoints();
  useEffect(() => {
    chatDispatch({
      type: 'SET_CURRENT_CONVERSATION',
      payload: {
        userId
      }
    });
  }, [userId, conversations]);

  return (
    <>
      {breakpoints.up('sm') && <ChatSidebar />}
      <ChatContent />
    </>
  );
};

export default ChatConversation;
