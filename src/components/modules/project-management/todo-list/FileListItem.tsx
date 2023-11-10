import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { Dropdown } from 'react-bootstrap';
import { Attachment } from 'data/project-management/todoListData';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface FileListItemProps {
  attachment: Attachment;
  className?: string;
}

const FileListItem = ({ attachment, className }: FileListItemProps) => {
  return (
    <div className={classNames(className, 'border-bottom border-300 py-4')}>
      <div>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <div className="d-flex align-items-center mb-1">
              <FontAwesomeIcon
                icon={
                  classNames({
                    image: attachment.mimeType === 'image',
                    'file-zipper': attachment.mimeType === 'zip',
                    'file-lines': attachment.mimeType === 'txt'
                  }) as IconProp
                }
                className="me-2 fs-9 text-700"
              />
              <p className="text-1000 mb-0 lh-1">{attachment.name}</p>
            </div>
            <div
              className={classNames('d-flex fs-9 text-700 flex-wrap', {
                'mb-3': attachment.thumbnail
              })}
            >
              <span>{attachment.size}</span>
              <span className="text-400 mx-1">| </span>
              <a href="#!">{attachment.user}</a>
              <span className="text-400 mx-1">| </span>
              <span className="text-nowrap">{attachment.date}</span>
            </div>
            {attachment.thumbnail && (
              <img
                src={attachment.thumbnail}
                alt={attachment.name}
                className="rounded-2 img-fluid"
              />
            )}
          </div>
          <RevealDropdownTrigger>
            <RevealDropdown>
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
              <Dropdown.Item>Download</Dropdown.Item>
              <Dropdown.Item>Report abuse</Dropdown.Item>
            </RevealDropdown>
          </RevealDropdownTrigger>
        </div>
      </div>
    </div>
  );
};

export default FileListItem;
