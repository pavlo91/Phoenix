import Avatar from 'components/base/Avatar';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Col, Row } from 'react-bootstrap';
import team30 from 'assets/phoenix/img/team/30.webp';
import team57 from 'assets/phoenix/img/team/57.webp';
import team25 from 'assets/phoenix/img/team/25.webp';
import team8 from 'assets/phoenix/img/team/8.webp';
import team58 from 'assets/phoenix/img/team/58.webp';

const circularCode = `
import Avatar from 'components/base/Avatar';

  <Avatar src={team30} size="xl" />
`;

const squareCode = `
import Avatar from 'components/base/Avatar';

  <Avatar src={team30} size="xl" rounded='square' />
`;

const softCode = `
import Avatar from 'components/base/Avatar';

  <Avatar src={team30} size="xl" rounded='soft' />
`;

const contentCode = `
import Avatar from 'components/base/Avatar';

  <Avatar size="xl" variant="name">+2</Avatar>
`;

const nameCode = `
import Avatar from 'components/base/Avatar';

  <Avatar size="xl" variant="name">A</Avatar>
`;

const emojiCode = `
import Avatar from 'components/base/Avatar';

  <Avatar size="xl" variant="emoji">🎁</Avatar>
`;

const statusCode = `
import Avatar from 'components/base/Avatar';

  <div className="d-flex gap-4">
    <Avatar src={team30} size="xl" status="online" />
    <Avatar src={team30} size="xl" status="offline" />
    <Avatar src={team30} size="xl" status="away" />
    <Avatar src={team30} size="xl" status="do-not-disturb" />
  </div>
`;
const sizesCode = `
import Avatar from 'components/base/Avatar';

  <div className="d-flex gap-2 flex-wrap">
    <Avatar src={team30} size="5xl" />
    <Avatar src={team30} size="4xl" />
    <Avatar src={team30} size="3xl" />
    <Avatar src={team30} size="2xl" />
    <Avatar src={team30} size="xl" />
    <Avatar src={team30} size="l" />
    <Avatar src={team30} size="m" />
    <Avatar src={team30} size="s" />
  </div>
`;
const avatarGroupCode = `
import Avatar from 'components/base/Avatar';

() => {
  const [sizes] = useState(['5xl', '4xl', '3xl', '2xl', 'xl', 'l', 'm', 's']);
  return (
    <div className="d-flex flex-column gap-4">
      {sizes.map(size => (
        <Avatar.Group key={size}>
          <Avatar src={team30} size={size} />
          <Avatar src={team57} size={size} />
          <Avatar src={team25} size={size} />
          <Avatar src={team8} size={size} />
          <Avatar src={team58} size={size} />
          <Avatar size={size} variant="name">
            +3
          </Avatar>
        </Avatar.Group>
      ))}
    </div>
  );
};
`;

const AvatarExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Avatars"
        description="Use avater of different shapes and sizes with a single component."
      />

      <DocPagesLayout>
        <Row>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Circular" />
              <PhoenixDocCard.Body
                code={circularCode}
                scope={{ Avatar, team30 }}
              />
            </PhoenixDocCard>
          </Col>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Square" />
              <PhoenixDocCard.Body
                code={squareCode}
                scope={{ Avatar, team30 }}
              />
            </PhoenixDocCard>
          </Col>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Soft" />
              <PhoenixDocCard.Body code={softCode} scope={{ Avatar, team30 }} />
            </PhoenixDocCard>
          </Col>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Content" />
              <PhoenixDocCard.Body code={contentCode} scope={{ Avatar }} />
            </PhoenixDocCard>
          </Col>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Name" />
              <PhoenixDocCard.Body code={nameCode} scope={{ Avatar }} />
            </PhoenixDocCard>
          </Col>
          <Col md={4} sm={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Emoji" />
              <PhoenixDocCard.Body code={emojiCode} scope={{ Avatar }} />
            </PhoenixDocCard>
          </Col>
          <Col lg={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Status" />
              <PhoenixDocCard.Body
                code={statusCode}
                scope={{ Avatar, team30 }}
              />
            </PhoenixDocCard>
          </Col>
          <Col lg={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Sizes" />
              <PhoenixDocCard.Body
                code={sizesCode}
                scope={{ Avatar, team30 }}
              />
            </PhoenixDocCard>
          </Col>
          <Col xs={12}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Avatar Group" />
              <PhoenixDocCard.Body
                code={avatarGroupCode}
                scope={{ Avatar, team30, team57, team25, team8, team58 }}
              />
            </PhoenixDocCard>
          </Col>
        </Row>
      </DocPagesLayout>
    </div>
  );
};

export default AvatarExample;
