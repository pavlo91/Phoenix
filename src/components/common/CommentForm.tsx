import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const CommentForm = () => {
  return (
    <>
      <Form.Group className="mb-3" controlId="commentForm">
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div className="d-flex align-items-center gap-3">
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon="image" className="fs-8 text-600" />
        </Button>
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon="calendar-days" className="fs-8 text-600" />
        </Button>
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon="location-dot" className="fs-8 text-600" />
        </Button>
        <Button size="sm" className="p-0">
          <FontAwesomeIcon icon="tag" className="fs-8 text-600" />
        </Button>
        <Button variant="primary" className="px-6 ms-auto">
          Comment
        </Button>
      </div>
    </>
  );
};

export default CommentForm;
