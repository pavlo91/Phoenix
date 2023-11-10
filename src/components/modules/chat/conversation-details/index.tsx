import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { Conversation } from 'data/chat';
import { Dropdown } from 'react-bootstrap';
import SharedMedia from './SharedMedia';
import SharedFiles from './SharedFiles';
import ActionButton from './ActionButton';

interface ConversationDetailsProps {
  conversation: Conversation;
  handleClose: () => void;
}

const ConversationDetails = ({
  conversation,
  handleClose
}: ConversationDetailsProps) => {
  return (
    <>
      <div className="border-bottom p-4">
        <div className="d-flex flex-between-center">
          <Button className="p-0" onClick={handleClose}>
            <FontAwesomeIcon icon="chevron-left" className="text-700" />
          </Button>
          <Dropdown align="end">
            <Dropdown.Toggle
              variant=""
              size="sm"
              className="p-0 btn-reveal dropdown-toggle dropdown-caret-none transition-none"
            >
              <FontAwesomeIcon icon="ellipsis-v" className="text-700" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="py-2">
              <ActionDropdownItems />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex flex-column align-items-center text-center">
          <Avatar src={conversation.user.avatar} size="4xl" className="mb-2" />
          <h4 className="fw-semi-bold mb-3">{conversation.user.name}</h4>
          <div className="d-flex gap-1">
            <Button variant="primary" className="btn-icon fs-10">
              <FontAwesomeIcon icon="phone" />
            </Button>
            <Button variant="primary" className="btn-icon fs-10">
              <FontAwesomeIcon icon="video" />
            </Button>
            <Button variant="phoenix-primary" className="btn-icon fs-10">
              <FontAwesomeIcon icon="search" />
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4 px-sm-5 d-flex flex-column gap-3 scrollbar">
        <ActionButton icon="user-pen">Nickname</ActionButton>
        <ActionButton icon="palette">Change Color</ActionButton>
        <ActionButton icon="user-plus">Create Group Chat</ActionButton>

        <SharedMedia />

        <SharedFiles />

        <ActionButton icon="bell-slash">Mute Conversation</ActionButton>
        <ActionButton icon="gear">Manage Settings</ActionButton>
        <ActionButton icon="hand-holding-heart">Get help</ActionButton>
        <ActionButton icon="flag">Report Account</ActionButton>
        <ActionButton icon="ban">Block Account</ActionButton>
      </div>
    </>
  );
};

export default ConversationDetails;
