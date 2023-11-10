import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useState } from 'react';
import { Button } from 'react-bootstrap';
import generic43 from 'assets/phoenix/img/generic/43.webp';

const CoverImage = ({ handleClose }: { handleClose: () => void }) => {
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };
  return (
    <>
      <input
        type="file"
        id="projectCoverInput"
        className="d-none"
        onChange={handleChange}
      />
      <label
        className="position-absolute top-0 start-0"
        htmlFor="projectCoverInput"
      >
        <span className="project-modal-btn d-inline-block bg-white dark__text-white rounded-2 py-2 px-3 fs-9 fw-bolder mt-3 ms-3 cursor-pointer">
          <FontAwesomeIcon icon="image" className="me-1" />
          Change
        </span>
      </label>

      <Button
        variant="circle"
        className="project-modal-btn position-absolute end-0 top-0 mt-3 me-3 bg-white"
        onClick={handleClose}
      >
        <FontAwesomeIcon icon="xmark" />
      </Button>
      <img
        src={image ? URL.createObjectURL(image) : generic43}
        alt="cover"
        className="w-100"
        style={{ minHeight: 150, maxHeight: 280 }}
      />
    </>
  );
};

export default CoverImage;
