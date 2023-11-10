import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Card } from 'react-bootstrap';

const EcoimDefaultAddressCard = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="border-bottom border-dashed border-300 mb-4">
          <h4 className="mb-3 lh-sm lh-xl-1">
            Default Address
            <Button variant="link" className="p-0 ms-3" type="button">
              <FontAwesomeIcon icon="edit" className="text-500" />
            </Button>
          </h4>
        </div>
        <div className="pb-7 pb-lg-4 pb-xl-7 mb-4 border-bottom border-300 border-dashed">
          <div className="d-flex flex-wrap justify-content-between">
            <h5 className="text-1000">Address</h5>
            <p className="text-800">
              Vancouver, British Columbia
              <br />
              Canada
            </p>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between gap-2 mb-3">
            <h5 className="text-1000 mb-0">Email</h5>
            <a className="lh-1" href="mailto:shatinon@jeemail.com">
              shatinon@jeemail.com
            </a>
          </div>
          <div className="d-flex justify-content-between gap-2">
            <h5 className="text-1000 mb-0">Phone</h5>
            <a className="text-800" href="tel:+1234567890">
              +1234567890
            </a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcoimDefaultAddressCard;
