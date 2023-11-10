import { Button, Form, InputGroup } from 'react-bootstrap';
import { UilTimes } from '@iconscout/react-unicons';
import FormCollapse from 'components/common/FormCollapse';
import {
  availabiltyOptions,
  brandsOptions,
  campaignOptions,
  certificationOptions,
  colorFamilyOptions,
  deliveryOptions,
  displyOptions,
  warrantyOptions,
  warrantyTypeOptions
} from 'data/e-commerce/filterOptions';
import CheckboxItem from 'components/common/CheckboxItem';
import Rating from 'components/base/Rating';

const ProductFilterItems = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Filters</h3>
        <button className="btn p-0 d-lg-none" onClick={handleClose}>
          <UilTimes size={16} />
        </button>
      </div>
      <FormCollapse title="Availability">
        {availabiltyOptions.map(item => (
          <CheckboxItem
            name={item.name}
            value={item.value}
            label={item.label}
            key={item.value}
          />
        ))}
      </FormCollapse>

      <FormCollapse title="Color family">
        {colorFamilyOptions.map(item => (
          <CheckboxItem
            name={item.name}
            value={item.value}
            label={item.label}
            key={item.value}
          />
        ))}
      </FormCollapse>

      <FormCollapse title="Brands">
        {brandsOptions.map(item => (
          <CheckboxItem
            name={item.name}
            value={item.value}
            label={item.label}
            key={item.value}
          />
        ))}
      </FormCollapse>

      <FormCollapse title="Price range">
        <div className="d-flex gap-2">
          <InputGroup>
            <Form.Control placeholder="Min" />
            <Form.Control placeholder="Max" />
          </InputGroup>
          <Button variant="phoenix-primary px-3" size="sm">
            Go
          </Button>
        </div>
      </FormCollapse>

      <FormCollapse title="Rating">
        {[5, 4, 3, 2, 1].map(rating => (
          <CheckboxItem
            type="radio"
            value={rating}
            key={rating}
            name="rating"
            label={
              <div className="d-flex align-items-center ms-1">
                <Rating
                  style={{ color: 'red' }}
                  initialValue={rating}
                  readonly
                  iconClass="fs-9 me-1"
                />
                {rating < 5 && <p className="ms-1 mt-1 mb-0">&amp; above</p>}
              </div>
            }
          />
        ))}
      </FormCollapse>

      <FormCollapse title="Display type">
        {displyOptions.map(item => (
          <CheckboxItem
            name={item.name}
            value={item.value}
            label={item.label}
            key={item.value}
          />
        ))}
      </FormCollapse>

      <FormCollapse title="Delivery">
        {deliveryOptions.map(item => (
          <CheckboxItem
            name={item.name}
            value={item.value}
            label={item.label}
            key={item.value}
          />
        ))}
      </FormCollapse>

      <FormCollapse title="Campaign">
        {campaignOptions.map(item => (
          <CheckboxItem
            name={item.name}
            value={item.value}
            label={item.label}
            key={item.value}
          />
        ))}
      </FormCollapse>

      <FormCollapse title="Warranty">
        {warrantyOptions.map(item => (
          <CheckboxItem
            name={item.name}
            value={item.value}
            label={item.label}
            key={item.value}
          />
        ))}
      </FormCollapse>

      <FormCollapse title="Warranty Type">
        {warrantyTypeOptions.map(item => (
          <CheckboxItem
            name={item.name}
            value={item.value}
            label={item.label}
            key={item.value}
          />
        ))}
      </FormCollapse>

      <FormCollapse title="Certification">
        {certificationOptions.map(item => (
          <CheckboxItem
            name={item.name}
            value={item.value}
            label={item.label}
            key={item.value}
          />
        ))}
      </FormCollapse>
    </>
  );
};

export default ProductFilterItems;
