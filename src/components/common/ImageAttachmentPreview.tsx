import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageAttachmentPreview = ({
  image,
  handleClose
}: {
  image: string;
  handleClose: () => void;
}) => {
  return (
    <div className="image-attachment-preview">
      <img src={image} alt="" />
      <button className="btn close-btn" onClick={handleClose}>
        <FontAwesomeIcon icon="xmark" />
      </button>
    </div>
  );
};

export default ImageAttachmentPreview;
