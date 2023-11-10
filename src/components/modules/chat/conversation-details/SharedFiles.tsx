import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import AttachmentPreview from 'components/common/AttachmentPreview';
import { files } from 'data/chat';

const SharedFiles = () => {
  return (
    <div className="d-flex gap-3 my-3">
      <FontAwesomeIcon icon="folder" className="fs-9" />
      <div className="flex-1">
        <h6 className="fw-semi-bold mb-2">Shared Files</h6>
        <div className="mb-2">
          {files.map((file, index) => (
            <div
              key={index}
              className={classNames(
                'border-bottom d-flex align-items-center justify-content-between py-3 gap-2',
                {
                  'border-top': index === 0
                }
              )}
            >
              <AttachmentPreview attachment={file} />

              <button className="btn p-0">
                <FontAwesomeIcon
                  icon={['far', 'arrow-alt-circle-down']}
                  className="fs-0 text-700"
                />
              </button>
            </div>
          ))}
        </div>
        <Button
          variant="link"
          className="p-0 fs-10"
          endIcon={<FontAwesomeIcon icon="chevron-down" />}
        >
          See 19 more
        </Button>
      </div>
    </div>
  );
};

export default SharedFiles;
