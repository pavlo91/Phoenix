import { CSSProperties, ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CoverUploadProps {
  src: string;
  gradient?: CSSProperties;
  onChange?: () => void;
}

const CoverUpload = ({ src, gradient, onChange }: CoverUploadProps) => {
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      if (onChange) {
        onChange();
      }
    }
  };
  return (
    <div
      className="bg-holder rounded-top hover-actions-trigger position-absolute"
      style={{
        backgroundImage: `${gradient ? gradient + ',' : ''}url(${
          image ? URL.createObjectURL(image) : src
        })`
      }}
    >
      <input
        className="d-none"
        id="coverFile"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      <label className="cover-image-file-input" htmlFor="coverFile"></label>
      <div className="hover-actions end-0 bottom-0 pe-1 pb-2 text-white">
        <FontAwesomeIcon icon="camera" className="me-2 overlay-icon" />
      </div>
    </div>
  );
};

export default CoverUpload;
