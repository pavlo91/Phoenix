import Avatar from 'components/base/Avatar';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import avatar from 'assets/phoenix/img/team/20.webp';

const CommentField = () => {
  return (
    <div className="d-flex align-items-center">
      <Link to="/apps/social/profile" style={{ lineHeight: 0 }}>
        <Avatar size="m" src={avatar} className="me-2" />
      </Link>
      <div className="flex-1">
        <Form.Control placeholder="Add comment" />
      </div>
    </div>
  );
};

export default CommentField;
