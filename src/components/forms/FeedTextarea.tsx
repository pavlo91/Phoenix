import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import React, { useState } from 'react';
import { Card, Dropdown, Form } from 'react-bootstrap';

const FeedTextarea = () => {
  const [privacy, setPrivacy] = useState('Public');
  return (
    <Card className="d-flex flex-column mb-5">
      <form>
        <Form.Control
          as="textarea"
          className="border-200 rounded-bottom-0 border-0 flex-1 fs-8"
          rows={7}
          placeholder="Write something..."
        />
        <Card.Footer className="p-3">
          <div className="d-flex justify-content-between align-items-center">
            <Button className="p-0 me-3">
              <FontAwesomeIcon icon="image" className="fs-8" />
            </Button>
            <Button className="p-0 me-3">
              <FontAwesomeIcon icon="calendar-alt" className="fs-8" />
            </Button>
            <Button className="p-0 me-3">
              <FontAwesomeIcon icon="map-marker-alt" className="fs-8" />
            </Button>
            <Button className="p-0 me-3">
              <FontAwesomeIcon icon="tag" className="fs-8" />
            </Button>
            <Dropdown className="me-3 flex-1">
              <Dropdown.Toggle
                variant=""
                className="p-0 dropdown-caret-none d-flex align-items-center"
              >
                <FontAwesomeIcon icon="globe-asia" className="fs-8 me-1" />
                <span className="me-1 lh-base d-none d-sm-block">
                  {privacy}
                </span>
                <FontAwesomeIcon icon="caret-down" className="fs-10 text-500" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setPrivacy('Public')}>
                  Public
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPrivacy('Private')}>
                  Private
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setPrivacy('Draft')}>
                  Draft
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button
              variant="primary"
              type="submit"
              size="sm"
              className="px-6 px-sm-8"
            >
              Post
            </Button>
          </div>
        </Card.Footer>
      </form>
    </Card>
  );
};

export default FeedTextarea;
