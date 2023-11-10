import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import CommentField from 'components/modules/social/CommentField';
import PostComments from 'components/modules/social/PostComments';
import PostGallery from 'components/image-gallery/PostGallery';
import { Post } from 'data/social/postsData';
import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="mb-5">
      <Card className="mb-4 overflow-hidden">
        <Card.Body className="p-3 p-sm-4">
          <div className="border-bottom mb-3">
            <div className="d-flex align-items-center mb-3">
              <Link to="/apps/social/profile" style={{ lineHeight: 0 }}>
                <Avatar size="xl" src={post.author.avatar} className="me-2" />
              </Link>
              <div className="flex-1">
                <Link
                  to="/apps/social/profile"
                  className="fw-bold mb-0 text-black"
                >
                  {post.author.name}
                </Link>
                <p className="fs-10 mb-0 text-600 fw-semi-bold">
                  {post.time}
                  {post.location && (
                    <>
                      <FontAwesomeIcon
                        icon="circle"
                        className="text-300"
                        transform="shrink-10 down-2"
                      />
                      {post.location}
                      <FontAwesomeIcon
                        icon="circle"
                        className="text-300"
                        transform="shrink-10 down-2"
                      />
                      <FontAwesomeIcon
                        icon="earth-americas"
                        className="text-900"
                      />
                    </>
                  )}
                </p>
              </div>
              <RevealDropdownTrigger>
                <RevealDropdown>
                  <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                  <Dropdown.Item eventKey="2" className="text-danger">
                    Delete
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2">Download</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Report abuse</Dropdown.Item>
                </RevealDropdown>
              </RevealDropdownTrigger>
            </div>
            <p className="text-800">{post.caption}</p>
            {post.images && <PostGallery images={post.images} />}
          </div>
          <div className="d-flex">
            <Button
              variant="link"
              startIcon={<FontAwesomeIcon icon="heart" />}
              className="p-0 me-3 fs-10 fw-bolder"
            >
              {post.interactions.likes} Likes
            </Button>
            <Button
              variant="link"
              startIcon={<FontAwesomeIcon icon="comment" />}
              className="p-0 me-3 fs-10 fw-bolder text-900"
            >
              {post.interactions.comments} Comments
            </Button>
            <Button
              variant="link"
              startIcon={<FontAwesomeIcon icon="share" />}
              className="p-0 me-3 fs-10 fw-bolder text-900"
            >
              {post.interactions.shares} Shares
            </Button>
          </div>
        </Card.Body>
        <div className="bg-100 border-top p-3 p-sm-4">
          {post.comments && <PostComments comments={post.comments} />}
          <CommentField />
        </div>
      </Card>
    </div>
  );
};

export default PostCard;
