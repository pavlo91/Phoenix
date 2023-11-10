import { useChatContext } from 'providers/ChatProvider';

const ConversationStarter = () => {
  const { currentConversation } = useChatContext();

  return (
    <div className="d-flex align-items-end justify-content-center text-center h-100">
      <div>
        This is the beginning of your private chat with{' '}
        <a href="#!" className="fw-semi-bold">
          {currentConversation?.user.name}
        </a>
        . You have 237 mutual connections.
        <br />
        Say Hi to your new friend now
        <span className="fa-solid fa-paper-plane text-primary ms-1"></span>
      </div>
    </div>
  );
};

export default ConversationStarter;
