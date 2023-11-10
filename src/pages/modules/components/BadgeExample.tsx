import Badge from 'components/base/Badge';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import FeatherIcon from 'feather-icons-react';

const phoenixBadgesCode = `
import Badge from 'components/base/Badge';

  <div className="d-flex gap-1">
    <Badge bg="primary" variant="phoenix">
      Primary
    </Badge>
    <Badge bg="secondary" variant="phoenix">
      Secondary
    </Badge>
    <Badge bg="success" variant="phoenix">
      success
    </Badge>
    <Badge bg="info" variant="phoenix">
      info
    </Badge>
    <Badge bg="warning" variant="phoenix">
      warning
    </Badge>
    <Badge bg="danger" variant="phoenix">
      danger
    </Badge>
  </div>
`;

const phoenixBadgesWithIconCode = `
import Badge from 'components/base/Badge';

  <div className="d-flex gap-1">
    <Badge
        bg="primary"
        variant="phoenix"
        iconPosition="end"
        className="fs-10"
        icon={<FeatherIcon icon="package" size={12} className="ms-1" />}
    >
      Primary
    </Badge>
    <Badge
        bg="secondary"
        variant="phoenix"
        iconPosition="end"
        className="fs-10"
        icon={<FeatherIcon icon="plus" size={12} className="ms-1" />}
    >
      secondary
    </Badge>
    <Badge
        bg="success"
        variant="phoenix"
        iconPosition="end"
        className="fs-10"
        icon={<FeatherIcon icon="check" size={12} className="ms-1" />}
    >
      success
    </Badge>
    <Badge
        bg="info"
        variant="phoenix"
        iconPosition="end"
        className="fs-10"
        icon={<FeatherIcon icon="info" size={12} className="ms-1" />}
    >
      info
    </Badge>
    <Badge
        bg="warning"
        variant="phoenix"
        iconPosition="end"
        className="fs-10"
        icon={<FeatherIcon icon="alert-octagon" size={12} className="ms-1" />}
    >
      warning
    </Badge>
    <Badge
        bg="danger"
        variant="phoenix"
        iconPosition="end"
        className="fs-10"
        icon={<FeatherIcon icon="x" size={12} className="ms-1" />}
    >
      danger
    </Badge>
  </div>
`;

const contextualVariationsCode = `
import Badge from 'components/base/Badge';

  <div className="d-flex gap-1">
    <Badge bg="primary"> Primary </Badge>
    <Badge bg="secondary"> Secondary </Badge>
    <Badge bg="success"> Sucess </Badge>
    <Badge bg="info"> Info </Badge>
    <Badge bg="warning"> Warning </Badge>
    <Badge bg="danger"> Danger </Badge>
  </div>
`;

const pillCode = `
import Badge from 'components/base/Badge';

  <div className="d-flex gap-1">
    <Badge pill bg="primary"> Primary </Badge>
    <Badge pill bg="secondary"> Secondary </Badge>
    <Badge pill bg="success"> Sucess </Badge>
    <Badge pill bg="info"> Info </Badge>
    <Badge pill bg="warning"> Warning </Badge>
    <Badge pill bg="danger"> Danger </Badge>
  </div>
`;

const exampleCode = `
import Badge from 'components/base/Badge';

  <div>
    <h1>
      Example heading <Badge bg="secondary">New</Badge>
    </h1>
    <h2>
      Example heading <Badge bg="secondary">New</Badge>
    </h2>
    <h3>
      Example heading <Badge bg="secondary">New</Badge>
    </h3>
    <h4>
      Example heading <Badge bg="secondary">New</Badge>
    </h4>
    <h5>
      Example heading <Badge bg="secondary">New</Badge>
    </h5>
    <h6>
      Example heading <Badge bg="secondary">New</Badge>
    </h6>
  </div>
`;

const BadgeExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Avatars"
        description="Use avater of different shapes and sizes with a single component."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Phoenix Badges" />
          <PhoenixDocCard.Body code={phoenixBadgesCode} scope={{ Badge }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Phoenix Badge with icons" />
          <PhoenixDocCard.Body
            code={phoenixBadgesWithIconCode}
            scope={{ Badge, FeatherIcon }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Contextual variations"
            description="Add any of the below mentioned modifier classes to change the appearance of a badge."
          />
          <PhoenixDocCard.Body
            code={contextualVariationsCode}
            scope={{ Badge }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Pill">
            <p className="mb-0">
              badges Use the <code>pill</code> modifier class to make badges
              more rounded (with a larger <code>border-radius</code>). Useful if
              you miss the badges from v3.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={pillCode} scope={{ Badge }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Examples"
            description="Badges scale to match the size of the immediate parent element by using relative font sizing and em units."
          />
          <PhoenixDocCard.Body code={exampleCode} scope={{ Badge }} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BadgeExample;
