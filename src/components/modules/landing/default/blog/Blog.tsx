import Button from 'components/base/Button';
import { blogs } from 'data/landing/default-landing-data';
import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BlogItem from './BlogItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blog = () => {
  return (
    <section id="blog">
      <div className="container-small px-lg-7 px-xxl-3">
        <Row className="row">
          <Col xs={12} className="mb-4 text-center text-sm-start">
            <h4 className="text-primary fw-bolder mb-3">Blog</h4>
            <h2>Latest articles</h2>
          </Col>
          <Col lg={6} className="text-center text-sm-start">
            <p>
              See the latest articles we published with this dashboard. Your
              customers will be happy to find all the latest posts in one place.
              This menu efficiently shows all related topics from search filters
              and provides the customers with what they need.
            </p>
          </Col>
          <Col lg={6} className="text-center text-sm-start">
            <p>
              Also, you can just educate your customers about everything they
              need to know and follow to avail a service with you. This menu is
              the one to show them that.
            </p>
          </Col>
        </Row>
        <Row className="h-100 g-3 justify-content-center">
          {blogs.map(blog => (
            <Col sm={6} lg={3} key={blog.id}>
              <BlogItem blog={blog} />
            </Col>
          ))}
        </Row>
        <div className="text-center mt-6">
          <Button
            as={Link}
            variant="outline-primary"
            to="#!"
            endIcon={<FontAwesomeIcon icon="angle-right" className="ms-2" />}
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
