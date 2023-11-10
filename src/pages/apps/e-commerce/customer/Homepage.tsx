import EcomCategoryNavs from 'components/navs/EcomCategoryNavs';
import { Col, Container, Row } from 'react-bootstrap';
import EcomWhopingBanner from 'components/banners/EcomWhopingBanner';
import EcomGiftItemsBanner from 'components/banners/EcomGiftItemsBanner';
import EcomBestInMarketBanner from 'components/banners/EcomBestInMarketBanner';
import {
  bestOfferProducts,
  topDealsProducts,
  topElectronicProducts
} from 'data/e-commerce/products';
import ecom4 from 'assets/phoenix/img/e-commerce/4.png';
import EcomTopDeals from 'components/sliders/EcomTopDeals';
import EcomTopElectronics from 'components/sliders/EcomTopElectronics';
import EcomBestOffers from 'components/sliders/EcomBestOffers';
import EcomBecomeMember from 'components/cta/EcomBecomeMember';

const Homepage = () => {
  return (
    <div className="ecommerce-homepage pt-5 mb-9">
      <section className="py-0">
        <div className="container-small">
          <div className="scrollbar">
            <EcomCategoryNavs />
          </div>
        </div>
      </section>
      <section className="py-0 px-xl-3">
        <Container className="px-xl-0 px-xxl-3">
          <Row className="g-3 mb-9">
            <Col xs={12}>
              <EcomWhopingBanner />
            </Col>
            <Col xs={12} xl={6}>
              <EcomGiftItemsBanner />
            </Col>
            <Col xs={12} xl={6}>
              <EcomBestInMarketBanner />
            </Col>
          </Row>
          <Row className="g-4 mb-6">
            <Col xs={12} lg={9} xxl={10}>
              <EcomTopDeals products={topDealsProducts} />
            </Col>
            <Col lg={3} xxl={2} className="d-none d-lg-block">
              <div className="h-100 position-relative rounded-3 overflow-hidden">
                <div
                  className="bg-holder product-bg"
                  style={{
                    backgroundImage: `url(${ecom4})`
                  }}
                />
              </div>
            </Col>
          </Row>
          <div className="mb-6">
            <EcomTopElectronics products={topElectronicProducts} />
          </div>
          <div className="mb-6">
            <EcomBestOffers products={bestOfferProducts} />
          </div>
          <EcomBecomeMember />
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
