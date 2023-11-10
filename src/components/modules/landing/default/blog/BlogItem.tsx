import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import { Blog } from 'data/landing/default-landing-data';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <Card className="text-white h-100">
      <Card.Img
        variant="top"
        src={blog.image}
        alt="..."
        className="rounded-top h-100 fit-cover"
      />
      <Card.Body className="rounded-top">
        <div className="d-flex align-items-center mb-3">
          <div className="d-flex align-items-center me-3">
            <Link
              to="#!"
              className="btn-link text-decoration-none d-flex align-items-center"
            >
              <FontAwesomeIcon icon="eye" className="text-500 me-1" />
              <span className="text-900 fs-10 lh-1">{blog.views}</span>
            </Link>
          </div>
          <div className="d-flex align-items-center me-3">
            <Link
              to="#!"
              className="btn-link text-decoration-none d-flex align-items-center"
            >
              <FontAwesomeIcon icon="heart" className="text-500 me-1" />
              <span className="text-900 fs-10 lh-1">{blog.likes}</span>
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <Link
              to="#!"
              className="btn-link text-decoration-none d-flex align-items-center"
            >
              <FontAwesomeIcon icon="comment" className="text-500 me-1" />
              <span className="text-900 fs-10 lh-1">{blog.comments}</span>
            </Link>
          </div>
        </div>
        <Badge variant="phoenix" bg="primary" className="mb-2">
          {blog.category}
        </Badge>
        <h4 className="fw-bold mb-3 lh-sm line-clamp-2">{blog.title}</h4>
        <Button as={Link} to="#!" className="p-0" variant="link">
          Read more
          <FontAwesomeIcon icon="angle-right" className="ms-2" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogItem;
