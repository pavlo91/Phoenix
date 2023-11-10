import Button from 'components/base/Button';
import Dropzone from 'components/base/Dropzone';
import TinymceEditor from 'components/base/TinymceEditor';
import OrganizeFormCard from 'components/cards/OrganizeFormCard';
import VariantFormCard from 'components/cards/VariantFormCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import InventoryTab from 'components/tabs/InventoryTab';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Form, Row } from 'react-bootstrap';

const AddProduct = () => {
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <form className="mb-9">
        <div className="d-flex flex-wrap gap-3 flex-between-end mb-5">
          <div>
            <h2 className="mb-2">Add a product</h2>
            <h5 className="text-700 fw-semi-bold">
              Orders placed across your store
            </h5>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <Button variant="phoenix-secondary" type="button">
              Discard
            </Button>
            <Button variant="phoenix-primary" type="button">
              Save draft
            </Button>
            <Button variant="primary" type="submit">
              Publish product
            </Button>
          </div>
        </div>
        <Row className="g-5">
          <Col xs={12} xl={8}>
            <h4 className="mb-3">Product Title</h4>
            <Form.Control placeholder="Write title here..." className="mb-5" />
            <div className="mb-6">
              <h4 className="mb-3">Product Description</h4>
              <TinymceEditor
                options={{
                  height: '15rem',
                  placeholder: 'Write a description here...'
                }}
              />
            </div>
            <div className="mb-5">
              <h4 className="mb-3">Display images</h4>
              <Dropzone
                className="mb-3"
                accept={{
                  'image/*': ['.png', '.gif', '.jpeg', '.jpg']
                }}
              />
            </div>
            <div>
              <h4 className="mb-3">Inventory</h4>
              <InventoryTab />
            </div>
          </Col>
          <Col xs={12} xl={4}>
            <Row className="g-2">
              <Col xs={12} xl={12}>
                <OrganizeFormCard className="mb-3" />
              </Col>
              <Col xs={12} xl={12}>
                <VariantFormCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AddProduct;
