import { Conversation } from 'data/chat';
import React, {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer
} from 'react';
import { ACTIONTYPE, chatReducer } from 'reducers/ChatReducer';

export type ConversationFilterType = 'all' | 'read' | 'unread';
interface ChatProviderInterface {
  conversations: Conversation[];
}

export interface ChatState {
  conversations: Conversation[];
  currentConversation: null | Conversation;
  filterBy: ConversationFilterType;
  showConversationDetails: boolean;
  showUserListOffcanvas: boolean;
}

interface ChatContextInterface extends ChatState {
  // chatState: ChatState;
  chatDispatch: Dispatch<ACTIONTYPE>;
  setShowConversationDetails: (value: boolean) => void;
  setShowUserListOffcanvas: (value: boolean) => void;
}

export const ChatContext = createContext({} as ChatContextInterface);

const ChatProvider = ({
  children,
  conversations
}: PropsWithChildren<ChatProviderInterface>) => {
  const initState: ChatState = {
    conversations: conversations,
    currentConversation: null,
    filterBy: 'all',
    showUserListOffcanvas: false,
    showConversationDetails: false
  };

  const [chatState, chatDispatch] = useReducer(chatReducer, initState);

  const setShowConversationDetails = (value: boolean) => {
    chatDispatch({
      type: 'SET_CHAT_STATE',
      payload: { showConversationDetails: value }
    });
  };

  const setShowUserListOffcanvas = (value: boolean) => {
    chatDispatch({
      type: 'SET_CHAT_STATE',
      payload: { showUserListOffcanvas: value }
    });
  };

  return (
    <ChatContext.Provider
      value={{
        ...chatState,
        chatDispatch,
        setShowConversationDetails,
        setShowUserListOffcanvas
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);

export default ChatProvider;
