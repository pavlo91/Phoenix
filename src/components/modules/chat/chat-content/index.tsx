import { useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { useChatContext } from "providers/ChatProvider";
import PhoenixOffcanvas, {
  PhoenixOffcanvasContainer,
} from "components/base/PhoenixOffcanvas";
import ConversationDetails from "../conversation-details";
import ChatSidebar from "../ChatSidebar";
import { useBreakpoints } from "providers/BreakpointsProvider";
import ChatContentHeader from "./ChatContentHeader";
import ConversationStarter from "./ConversationStarter";
import ChatContentFooter from "./ChatContentFooter";
import Message from "../message";
import Scrollbar from "components/base/Scrollbar";

const ChatContent = () => {
  const {
    currentConversation,
    chatDispatch,
    showConversationDetails,
    showUserListOffcanvas,
    setShowConversationDetails,
  } = useChatContext();

  const messageEndRef = useRef<null | HTMLSpanElement>(null);

  const { breakpoints } = useBreakpoints();

  useEffect(() => {
    chatDispatch({
      type: "SET_CHAT_STATE",
      payload: {
        showConversationDetails: false,
        showUserListOffcanvas: false,
      },
    });

    messageEndRef.current?.scrollIntoView();
  }, [currentConversation]);

  if (currentConversation) {
    return (
      <Card as={PhoenixOffcanvasContainer} className="h-100 w-100">
        <ChatContentHeader />
        <Card.Body className="p-3 p-sm-4 scrollbar d-flex flex-column gap-2">
          {currentConversation.messages.length === 0 && <ConversationStarter />}
          {currentConversation.messages.map((message) => (
            <Message
              message={message}
              user={currentConversation.user}
              key={message.id}
            />
          ))}
          <span ref={messageEndRef} />
        </Card.Body>

        <ChatContentFooter />

        <PhoenixOffcanvas
          open={showConversationDetails}
          placement="top"
          noBackdrop
          className="bg-white w-100 z-index-0 "
        >
          <Scrollbar>
            <ConversationDetails
              conversation={currentConversation}
              handleClose={() => setShowConversationDetails(false)}
            />
          </Scrollbar>
        </PhoenixOffcanvas>

        {breakpoints.down("sm") && (
          <PhoenixOffcanvas
            open={showUserListOffcanvas}
            placement="start"
            noBackdrop
            className="w-100 z-index-0"
          >
            <ChatSidebar className="border-0 h-100" />
          </PhoenixOffcanvas>
        )}
      </Card>
    );
  } else {
    return <></>;
  }
};

export default ChatContent;
