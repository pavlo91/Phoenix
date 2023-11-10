import Section from 'components/base/Section';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import EcomWishlistTable from 'components/tables/EcomWishlistTable';
import { defaultBreadcrumbItems } from 'data/commonData';

const Wishlist = () => {
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-5">
          Wishlist
          <span className="text-700 fw-normal ms-2">(43)</span>
        </h2>
        <EcomWishlistTable />
      </Section>
    </div>
  );
};

export default Wishlist;
