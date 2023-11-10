import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { MessageActionType } from 'data/chat';

interface MessageActionButtonsProps {
  actions: MessageActionType[];
  variant: 'sent' | 'received';
}

const MessageActionButtons = ({
  actions,
  variant
}: MessageActionButtonsProps) => {
  return (
    <>
      <div className="d-sm-none hover-actions align-self-center me-2 start-0">
        <div className="bg-white rounded-pill d-flex align-items-center border border-300 px-2 actions">
          {actions.map(action => (
            <Button key={action.label} className="btn p-2" type="button">
              <FontAwesomeIcon
                icon={action.icon as IconProp}
                className={classNames({
                  'text-primary': variant === 'sent'
                })}
              />
            </Button>
          ))}
        </div>
      </div>
      <div className="d-none d-sm-flex">
        <div className="hover-actions position-relative align-self-center">
          {actions.map(action => (
            <Button key={action.label} className="fs-10 p-2" type="button">
              <FontAwesomeIcon
                icon={action.icon as IconProp}
                className={classNames({
                  'text-primary': variant === 'sent'
                })}
              />
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MessageActionButtons;
