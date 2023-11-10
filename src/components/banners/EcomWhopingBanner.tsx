import whoopingBannerProduct from 'assets/phoenix/img/e-commerce/whooping_banner_product.png';
import whoopingBannerShape2 from 'assets/phoenix/img/e-commerce/whooping_banner_shape_2.png';
import { Link } from 'react-router-dom';

const EcomWhopingBanner = () => {
  return (
    <div className="whooping-banner w-100 rounded-3 overflow-hidden">
      <div
        className="bg-holder product-bg"
        style={{
          backgroundImage: `url(${whoopingBannerProduct})`,
          backgroundPosition: 'bottom right'
        }}
      />
      <div
        className="bg-holder shape-bg"
        style={{
          backgroundImage: `url(${whoopingBannerShape2})`,
          backgroundPosition: 'bottom left'
        }}
      />

      <div className="position-relative">
        <div className="banner-text light">
          <h2 className="text-warning-300 fw-bolder fs-lg-3 fs-xxl-2">
            Whooping <span className="gradient-text">60%</span> Off
          </h2>
          <h3 className="fw-bolder fs-lg-5 fs-xxl-3 text-white light">
            on everyday items
          </h3>
        </div>
        <Link
          to="#!"
          className="btn btn-lg btn-primary rounded-pill banner-button"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default EcomWhopingBanner;
