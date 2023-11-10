import EcommerceFooter from 'components/footers/EcommerceFooter';
import Footer from 'components/footers/Footer';
import EcommerceTopbar from 'components/navbars/ecommerce/EcommerceTopbar';
import EcommerceNavbar from 'components/navbars/ecommerce/EcommerceNavbar';
import { Outlet } from 'react-router-dom';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';

const EcommerceLayout = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });
  return (
    <>
      <EcommerceTopbar />
      <div className="position-relative">
        <EcommerceNavbar />
        <Outlet />
      </div>
      <EcommerceFooter />
      <Footer />
    </>
  );
};

export default EcommerceLayout;
