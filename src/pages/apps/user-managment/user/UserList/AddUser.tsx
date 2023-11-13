// AddUser component
import React from "react";
import { Button, Modal } from "react-bootstrap";

interface AddUserProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const AddUser: React.FC<AddUserProps> = ({ isOpen, handleClose }) => {
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>

        <Modal.Body>
          <p>Avatar</p>
          <div>
          <label>Full Name</label>
          <input
            type="text"
            className="form-control form-control-solid"
            placeholder=""
            name="card_name"
          />
          </div>
          <div>
          <label>Email</label>
          <input
            type="text"
            className="form-control form-control-solid"
            placeholder=""
            name="card_name"
          />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};
