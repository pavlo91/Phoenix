import classNames from "classnames";
import Avatar from "components/base/Avatar";
import Lightbox from "components/base/LightBox";
import { Message as MessageType, User, actions } from "data/chat";
import useLightbox from "hooks/useLightbox";
import MessageActionButtons from "./MessageActionButtons";
import MessageAttachments from "./MessageAttachments";
import Moment from 'react-moment';

interface MessageProps {
  message: MessageType;
  user?: User;
}

const Message = ({ message, user }: MessageProps) => {
  const { lightboxProps, openLightbox } = useLightbox(
    message.attachments || []
  );

  return (
    <div className="d-flex chat-message">
      <div
        className={classNames("d-flex flex-1", {
          "justify-content-end": message.type === "sent",
        })}
      >
        <div className="w-100 w-xxl-75">
          <div
            className={classNames("d-flex hover-actions-trigger", {
              "flex-end-center": message.type === "sent",
            })}
          >
            {message.type === "received" && (
              <Avatar
                src={user?.avatar}
                size="m"
                className="me-3 flex-shrink-0"
              />
            )}

            {message.type === "sent" && (
              <MessageActionButtons actions={actions} variant="sent" />
            )}

            <div
              className={classNames("chat-message-content me-2", {
                received: message.type === "received",
              })}
            >
              <div
                className={classNames("mb-1", {
                  "sent-message-content light": message.type === "sent",
                  "received-message-content border":
                    message.type === "received",
                  attachments: message.attachments && !message.message,
                })}
              >
                {message.message && <p className="mb-0">{message.message}</p>}
                {message.attachments && (
                  <MessageAttachments
                    attachments={message.attachments}
                    openLightbox={openLightbox}
                  />
                )}
              </div>
            </div>
            {message.type === "received" && (
              <MessageActionButtons
                actions={actions.slice(1)}
                variant="received"
              />
            )}
          </div>
          <div
            className={classNames({
              "ms-7": message.type === "received",
              "text-end": message.type === "sent",
            })}
          >
            <p className="mb-0 fs-10 text-600 fw-semi-bold">
              <Moment format="M.D HH:mm">
                {message.time}
              </Moment>
            </p>
          </div>
          <Lightbox {...lightboxProps} />
        </div>
      </div>
    </div>
  );
};

export default Message;
