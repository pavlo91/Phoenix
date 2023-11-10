import classNames from 'classnames';
import { Col, ColProps, Row } from 'react-bootstrap';

interface MessageAttachmentsProps {
  attachments: string[];
  openLightbox: (slideIndex: number) => void;
}
const MessageAttachments = ({
  attachments,
  openLightbox
}: MessageAttachmentsProps) => {
  const spans = () => {
    if (attachments.length > 3) {
      return {
        xs: 6,
        md: 4,
        xl: 3
      };
    }
    if (attachments.length === 2) {
      return {
        xs: 6
      };
    }
    if (attachments.length === 1) {
      return {
        xs: 'auto'
      };
    }
  };
  return (
    <Row className={classNames('g-2 mt-0')}>
      {attachments.map((attachment, index) => (
        <Col {...(spans() as ColProps)} key={attachment}>
          <img
            src={attachment}
            alt=""
            className="rounded-2 fit-cover cursor-pointer"
            onClick={() => {
              openLightbox(index + 1);
            }}
          />
        </Col>
      ))}
    </Row>
  );
};

export default MessageAttachments;
