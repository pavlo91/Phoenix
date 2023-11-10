import classNames from 'classnames';
import { Comment as CommentType } from 'data/project-management/comments';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface CommentProps {
  comment: CommentType;
  className?: string;
}

const Comment = ({ comment, className }: CommentProps) => {
  return (
    <Row
      className={classNames(
        className,
        'justify-contnet-between g-0 py-3 align-items-start'
      )}
    >
      <Col xs={12} sm>
        <p
          className={classNames('fs-9 text-800 mb-0', {
            'mb-2': comment.attachment
          })}
        >
          <Link
            to={comment.user.url}
            className={classNames('fw-semi-bold', {
              'text-1000 text-decoration-none': comment.own
            })}
          >
            {comment.own ? 'You' : comment.user.name}
          </Link>{' '}
          {comment.text}
        </p>

        {comment.attachment && (
          <img
            src={comment.attachment}
            alt=""
            width={220}
            className="rounded-2 mb-2"
          />
        )}
      </Col>
      <Col xs={{ span: 12, order: 1 }} sm={{ span: 'auto', order: 0 }}>
        <p className="text-800 fw-semi-bold fs-10 mb-0">Oct 4 at 12:18 pm</p>
      </Col>
      {comment.details && <Col xs={12}>{comment.details}</Col>}
    </Row>
  );
};

export default Comment;
