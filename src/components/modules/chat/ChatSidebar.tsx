import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Card, Dropdown, Form, Modal } from 'react-bootstrap';
import classNames from 'classnames';
import ChatFilterTab from './ChatFilterTab';
import DropdownSearchBox from 'components/common/DropdownSearchBox';
import { useState } from 'react';

const ChatSidebar = ({ className }: { className?: string }) => {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  return (
    <>
      <Card className={classNames(className, 'chat-sidebar p-3 p-xl-1')}>
        <Button
          className="d-none d-sm-block d-xl-none mb-2"
          onClick={() => setOpenSearchModal(true)}
        >
          <FontAwesomeIcon icon="magnifying-glass" className="text-600 fs-7" />
        </Button>
        <Dropdown className="d-none d-sm-block d-xl-none mb-5">
          <Dropdown.Toggle
            variant=""
            size="sm"
            className="w-100 mx-auto dropdown-caret-none"
          >
            <FontAwesomeIcon icon="bars" className="fs-7 text-600" />
          </Dropdown.Toggle>
          <Dropdown.Menu align="start" className="p-0" style={{ zIndex: 1020 }}>
            <Dropdown.Item eventKey="1">All</Dropdown.Item>
            <Dropdown.Item eventKey="2">Read</Dropdown.Item>
            <Dropdown.Item eventKey="3">Unread</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form.Group className="form-icon-container mb-4 d-sm-none d-xl-block">
          <Form.Control
            type="text"
            placeholder="People, Groups and Messages"
            className="form-icon-input"
          />
          <FontAwesomeIcon icon="user" className="text-900 fs-9 form-icon" />
        </Form.Group>
        <ChatFilterTab />
      </Card>
      <Modal
        show={openSearchModal}
        onHide={() => setOpenSearchModal(false)}
        className="search-box-modal mt-15"
      >
        <Modal.Body className="p-0 bg-transparent">
          <DropdownSearchBox
            placeholder="Search People, Groups and Messages"
            size="lg"
            style={{ width: 'auto' }}
            autoFocus
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChatSidebar;
