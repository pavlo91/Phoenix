import { Message } from 'data/chat';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ChatState } from 'providers/ChatProvider';

dayjs.extend(relativeTime);

export type ACTIONTYPE =
  | { type: 'SET_CHAT_STATE'; payload: Partial<ChatState> }
  | {
      type: 'SENT_MESSAGE';
      payload: {
        conversationId: number;
        message?: string;
        attachments?: string[];
      };
    }
  | { type: 'SET_CURRENT_CONVERSATION'; payload: { userId?: number | string } }
  | { type: 'FILTER_CONVERSION_LIST'; payload: 'read' | 'unread' | 'all' }
  | { type: 'MARKED_AS_READ'; payload: { conversationId: number } }
  | { type: 'RESET' };

export const chatReducer = (state: ChatState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_CHAT_STATE': {
      const { payload } = action;
      return {
        ...state,
        ...payload
      };
    }
    case 'SENT_MESSAGE': {
      const { payload } = action;
      const conversations = state.conversations.map(conversation =>
        conversation.id === payload.conversationId
          ? {
              ...conversation,
              messages: [
                ...conversation.messages,
                {
                  id: 3,
                  type: 'sent',
                  time: dayjs().toNow(),
                  readAt: null,
                  message: payload.message,
                  attachments: payload.attachments
                } as Message
              ]
            }
          : conversation
      );
      return {
        ...state,
        conversations
      };
    }
    case 'SET_CURRENT_CONVERSATION': {
      const { payload } = action;
      const conversation = state.conversations.find(
        conversation => conversation.user.id === Number(payload.userId)
      );
      return {
        ...state,
        currentConversation: conversation || null
      };
    }
    case 'FILTER_CONVERSION_LIST': {
      const { payload } = action;
      const conversations = state.conversations.filter(conversation => {
        const hasUnreadMeassages = conversation.messages.some(
          message => !message.readAt
        );
        return payload === 'read'
          ? !hasUnreadMeassages
          : payload === 'unread'
          ? hasUnreadMeassages
          : true;
      });
      return {
        ...state,
        conversations
      };
    }
    case 'MARKED_AS_READ': {
      const { payload } = action;
      const conversations = state.conversations.map(conversation => {
        if (conversation.id === payload.conversationId) {
          return {
            ...conversation,
            messages: conversation.messages.map(message => ({
              ...message,
              readAt: new Date()
            }))
          };
        } else {
          return conversation;
        }
      });
      return {
        ...state,
        conversations: conversations
      };
    }
    case 'RESET':
      return {
        ...state
      };
    default:
      return state;
  }
};
