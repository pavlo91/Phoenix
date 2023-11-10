import Button from 'components/base/Button';
import Rating from 'components/base/Rating';
import { Form, Modal } from 'react-bootstrap';
import Dropzone from 'components/base/Dropzone';
interface ReviewModalProps {
  show: boolean;
  handleClose: () => void;
}

const ReviewModal = ({ show, handleClose }: ReviewModalProps) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className="p-4">
        <div className="d-flex flex-between-center mb-3">
          <h5 className="fs-8 mb-0">Your rating</h5>
          <button className="btn p-0 fs-10" onClick={handleClose}>
            Clear
          </button>
        </div>
        <Rating iconClass="fs-5" className="mb-3" />
        <div className="mb-3">
          <h5 className="text-1000 mb-3">Your review</h5>
          <Form.Control as="textarea" rows={5} />
        </div>
        <Dropzone
          className="mb-3"
          size="sm"
          accept={{
            'image/*': ['.png', '.gif', '.jpeg', '.jpg']
          }}
        />
        <div className="d-flex flex-between-center">
          <Form.Check type="checkbox" id="confirmCheck" className="flex-1">
            <Form.Check.Input type="checkbox" />
            <Form.Check.Label className="text-1100">
              Review anonymously
            </Form.Check.Label>
          </Form.Check>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
          <Button className="rounded-pill">Submit</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModal;
