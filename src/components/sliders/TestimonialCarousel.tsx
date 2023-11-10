import Rating from 'components/base/Rating';
import { Testimonial, testimonials } from 'data/landing/testimonial';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import bg2 from 'assets/phoenix/img/bg/bg-2.png';

const TestimonialItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Row className="g-1 g-lg-0 g-xl-1 pb-lg-3 pb-xl-0 ps-lg-1 ps-xl-0">
      <Col lg={6} xl={5} className="text-center">
        <div className="testimonial-avatar-container d-inline-block position-relative">
          <div
            className="bg-holder"
            style={{
              backgroundImage: `url(${bg2})`,
              backgroundSize: 'contain'
            }}
          />

          <img
            src={testimonial.avatar}
            alt=""
            height={153}
            width={153}
            className="rounded-3 mb-lg-0 opacity-100 position-relative"
          />
        </div>
      </Col>
      <Col lg={6} xl={7} className="text-center text-lg-start">
        <div className="mb-4 light">
          <Rating
            readonly
            initialValue={testimonial.rating}
            fillIconColor="primary"
            emptyIconColor="primary-300"
          />
        </div>
        <h3 className="fs-7 fs-xl-6 mb-5 lh-sm me-md-7 me-lg-0">
          {testimonial.comment}
        </h3>
        <h6>{testimonial.name}</h6>
        <h6 className="fw-normal">{testimonial.occupation}</h6>
      </Col>
    </Row>
  );
};

const TestimonialCarousel = () => {
  return (
    <Carousel controls={false} indicators={false} interval={3000}>
      {testimonials.map(testimonial => (
        <Carousel.Item key={testimonial.id}>
          <TestimonialItem testimonial={testimonial} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
