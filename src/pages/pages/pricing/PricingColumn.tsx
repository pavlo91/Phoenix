import PageBreadcrumb from 'components/common/PageBreadcrumb';
import PricingColumnItem from 'components/pricing-items/PricingColumnItem';
import { pricingBreadcrumbItems, pricingItems } from 'data/pricing';
import { Row } from 'react-bootstrap';

const PricingColumn = () => {
  return (
    <>
      <PageBreadcrumb items={pricingBreadcrumbItems} />
      <h2 className="mb-7">Pricing</h2>
      <Row className="g-7 g-lg-11 mb-7">
        {pricingItems.map(item => (
          <PricingColumnItem key={item.id} pricing={item} />
        ))}
      </Row>
    </>
  );
};

export default PricingColumn;
