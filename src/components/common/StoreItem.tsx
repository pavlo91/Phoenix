import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'components/base/Rating';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import { StoreItem as StoreItemType } from 'data/e-commerce/stores';
import { Link } from 'react-router-dom';
import ActionDropdownItems from './ActionDropdownItems';

const StoreItem = ({ store }: { store: StoreItemType }) => {
  return (
    <RevealDropdownTrigger className="hover-actions-trigger">
      <div
        className="border d-flex flex-center rounded-3 mb-3 p-4"
        style={{ height: 180 }}
      >
        <img className="mw-100" src={store.logo} alt={store.name} />
      </div>
      <h5 className="mb-2">{store.name}</h5>
      <div className="mb-1 fs-9">
        <Rating initialValue={store.rating} readonly />
      </div>
      <p className="text-500 fs-9 mb-2 fw-semi-bold">
        ({store.rated} people rated)
      </p>
      <Link className="p-0 fs-9 fw-bold" to="#!">
        Visit Store
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs-10" />
      </Link>

      <RevealDropdown
        className="hover-actions top-0 end-0 mt-2 me-2"
        btnClassName="btn-icon"
      >
        <ActionDropdownItems />
      </RevealDropdown>
    </RevealDropdownTrigger>
  );
};

export default StoreItem;
