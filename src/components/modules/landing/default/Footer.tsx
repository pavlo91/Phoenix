import { Row, Col } from 'react-bootstrap';
import logoWhite from 'assets/phoenix/img/icons/logo-white.png';
import bg19 from 'assets/phoenix/img/bg/bg-19.png';
import bgRight20 from 'assets/phoenix/img/bg/bg-right-20.png';
import bgLeft20 from 'assets/phoenix/img/bg/bg-left-20.png';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import classNames from 'classnames';

const FooterList = ({
  label,
  items,
  className
}: {
  label: string;
  items: string[];
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        className,
        'border-dashed border-start border-primary-300 ps-3'
      )}
      style={{ '--phoenix-border-opacity': '.2' } as CSSProperties}
    >
      <h5 className="lh-lg fw-bolder mb-2 text-light light">{label}</h5>
      <ul className="list-unstyled mb-1">
        {items.map((item, index) => (
          <li className="mb-1" key={index}>
            <Link className="text-500 hover-text-100 light" to="#!">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="position-relative">
      <div
        className="bg-holder footer-bg"
        style={{ backgroundImage: `url(${bg19})`, backgroundSize: 'auto' }}
      />
      <div
        className="bg-holder"
        style={{
          backgroundImage: `url(${bgRight20})`,
          backgroundPosition: 'right',
          backgroundSize: 'auto'
        }}
      />
      <div
        className="bg-holder"
        style={{
          backgroundImage: `url(${bgLeft20})`,
          backgroundPosition: 'left',
          backgroundSize: 'auto'
        }}
      />

      <div className="position-relative">
        <svg
          className="w-100 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1920 368"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1920 0.44L0 367.74V0H1920V0.44Z" fill="currentColor" />
        </svg>
        <section className="footer-default">
          <div className="container-small px-lg-7 px-xxl-3">
            <Row className="position-relative">
              <Col xs={12} lg={5} className="mb-4 order-0 order-sm-0">
                <Link to="#!">
                  <img className="mb-3" src={logoWhite} height="48" alt="" />
                </Link>
                <h3 className="text-white light">Phoenix</h3>
                <p className="text-white opacity-50 light">
                  All over the world. Alice in
                  <br />
                  wonderland and other places.
                </p>
              </Col>
              <Col lg={7}>
                <Row className="justify-content-between">
                  <Col xs={6} sm={4} lg={3} className="mb-3 order-2 order-sm-1">
                    <FooterList
                      label="Help"
                      className="mb-4"
                      items={['About', 'Contact', 'Developers']}
                    />
                    <FooterList
                      label="Follow"
                      items={['Facebook', 'Twitter', 'Linkedin']}
                    />
                  </Col>
                  <Col xs={6} sm={4} lg={3} className="mb-3 order-3 order-sm-2">
                    <FooterList
                      label="Support"
                      items={[
                        'Privacy',
                        'Community',
                        'Contact',
                        'Blog',
                        'FAQ',
                        'Project',
                        'Team'
                      ]}
                    />
                  </Col>
                  <Col xs={6} md={4} lg={3} className="mb-3 order-3 order-sm-2">
                    <FooterList
                      label="Info"
                      items={[
                        'Personal',
                        'NFT System',
                        'Agency',
                        'Contact',
                        'About'
                      ]}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
