import Badge from 'components/base/Badge';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const exampleCode = `
<ListGroup>
  <ListGroup.Item>News Feed</ListGroup.Item>
  <ListGroup.Item>Messages</ListGroup.Item>
  <ListGroup.Item>Events</ListGroup.Item>
  <ListGroup.Item>Groups</ListGroup.Item>
  <ListGroup.Item>Pages</ListGroup.Item>
</ListGroup>
`;

const activeExampleCode = `
<ListGroup as="ul">
  <ListGroup.Item as="li" active>
    News Feed
  </ListGroup.Item>
  <ListGroup.Item as="li">Messages</ListGroup.Item>
  <ListGroup.Item as="li" disabled>
    Events
  </ListGroup.Item>
  <ListGroup.Item as="li">Groups</ListGroup.Item>
  <ListGroup.Item as="li">Pages</ListGroup.Item>
</ListGroup>
`;

const actionableCode = `
function ActionableListItems() {
  const alertClicked = () => {
    alert('You clicked the third ListGroup.Item');
  };

  return (
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" disabled>
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
        This one is a button
      </ListGroup.Item>
      <ListGroup.Item action href="#link3">
        Link 3
      </ListGroup.Item>
      <ListGroup.Item action href="#link4">
        Link 4
      </ListGroup.Item>
    </ListGroup>
  );
}
`;

const flushCode = `
<ListGroup variant="flush">
  <ListGroup.Item>News Feed</ListGroup.Item>
  <ListGroup.Item>Messages</ListGroup.Item>
  <ListGroup.Item>Events</ListGroup.Item>
  <ListGroup.Item>Groups</ListGroup.Item>
  <ListGroup.Item>Pages</ListGroup.Item>
</ListGroup>
`;

const badgeCode = `
<ListGroup>
  <ListGroup.Item>
    <div className='d-flex justify-content-between align-items-center'>
      Messages
      <Badge variant="phoenix" bg="primary">14</Badge>
    </div>
  </ListGroup.Item>
  <ListGroup.Item>
    <div className='d-flex justify-content-between align-items-center'>
      Events
      <Badge variant="phoenix" bg="primary">2</Badge>
    </div>
  </ListGroup.Item>
  <ListGroup.Item>
    <div className='d-flex justify-content-between align-items-center'>
      Groups
      <Badge variant="phoenix" bg="primary">1</Badge>
    </div>
  </ListGroup.Item>
  <ListGroup.Item>
    <div className='d-flex justify-content-between align-items-center'>
      Pages
      <Badge variant="phoenix" bg="primary">9</Badge>
    </div>
  </ListGroup.Item>
  <ListGroup.Item>
    <div className='d-flex justify-content-between align-items-center'>
      Notifications
      <Badge variant="phoenix" bg="primary">7</Badge>
    </div>
  </ListGroup.Item>
</ListGroup>
`;

const horizontalCode = `<ListGroup horizontal>
  <ListGroup.Item>This</ListGroup.Item>
  <ListGroup.Item>ListGroup</ListGroup.Item>
  <ListGroup.Item>renders</ListGroup.Item>
  <ListGroup.Item>horizontally!</ListGroup.Item>
</ListGroup>`;

const responsiveHorizontalCode = `
() => {
  return ['sm', 'md', 'lg', 'xl', 'xxl'].map((breakpoint, idx) => (
    <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
      <ListGroup.Item>This ListGroup</ListGroup.Item>
      <ListGroup.Item>renders horizontally</ListGroup.Item>
      <ListGroup.Item>on {breakpoint}</ListGroup.Item>
      <ListGroup.Item>and above!</ListGroup.Item>
    </ListGroup>
  ));
};
`;

const listGroupBackgroundCode = `<ListGroup>
  <ListGroup.Item className='py-3'>Example with background</ListGroup.Item>
  <ListGroup.Item className='py-3' variant="primary">Primary</ListGroup.Item>
  <ListGroup.Item className='py-3' variant="secondary">Secondary</ListGroup.Item>
  <ListGroup.Item className='py-3' variant="success">Success</ListGroup.Item>
  <ListGroup.Item className='py-3' variant="danger">Danger</ListGroup.Item>
  <ListGroup.Item className='py-3' variant="warning">Warning</ListGroup.Item>
  <ListGroup.Item className='py-3' variant="info">Info</ListGroup.Item>
  <ListGroup.Item className='py-3' variant="light">Light</ListGroup.Item>
  <ListGroup.Item className='py-3' variant="dark">Dark</ListGroup.Item>
</ListGroup>`;

const linkCode = `<ListGroup>
  <ListGroup.Item className='p-3 p-sm-4 light' as={Link} to='#!' action active>
    <div className='justify-content-between'>
      <h5 className="mb-1 text-white">List group · Bootstrap</h5>
      
      <small>3 days ago</small>
    </div>
    <p className="mb-1">
      The most basic list group is an unordered list with list items and the proper classes.
      Build upon it with the options that follow, or with your own CSS as needed.{' '}
    </p>
    <small> The most basic list group</small>
  </ListGroup.Item>
  <ListGroup.Item className='p-3 p-sm-4' as={Link} to='#!' action>
    <div className='justify-content-between'>
      <h5 className="mb-1">What is list group?</h5>
      <small className="text-muted">3 days ago</small>
    </div>
    <p className="mb-1">
      Creating List Groups with Bootstrap. The list groups are very useful and flexible
      component for displaying lists of elements in a beautiful manner.
    </p>
    <small className="text-muted">Donec id elit non mi porta.</small>
  </ListGroup.Item>
  <ListGroup.Item className='p-3 p-sm-4' as={Link} to='#!' action>
    <div className='justify-content-between'>
      <h5 className="mb-1">What is ordered list?</h5>
      <small>3 days ago</small>
    </div>
    <p className="mb-1">
      An ordered list typically is a numbered list of items. HTML 3.0 gives you the ability to
      control the sequence number - to continue where the previous list left off, or to start at
      a particular number.
    </p>
    <small className="text-muted">An ordered list</small>
  </ListGroup.Item>
</ListGroup>`;

const ListGroupExample = () => {
  return (
    <div>
      <DocPageHeader
        title="List group"
        description="List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within."
        link={{
          text: 'List groups on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/list-group/`
        }}
      />

      <DocPagesLayout>
        <Row className="g-3">
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Accordion Example" />
              <PhoenixDocCard.Body code={exampleCode} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Active Item" />
              <PhoenixDocCard.Body code={activeExampleCode} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="List group flush" />
              <PhoenixDocCard.Body code={flushCode} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="List group with badge" />
              <PhoenixDocCard.Body code={badgeCode} scope={{ Badge }} />
            </PhoenixDocCard>
          </Col>
        </Row>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Actionable items">
            <p>
              Toggle the <code>action</code> prop to create <em>actionable</em>{' '}
              list group items, with disabled, hover and active styles. List
              item actions will render a <code>&lt;button&gt;</code> or{' '}
              <code>&lt;a&gt;</code> (depending on the presence of an{' '}
              <code>href</code>) by default but can be overridden by setting the{' '}
              <code>as</code> prop as usual.
            </p>
            <p className="mb-0">
              List items <code>actions</code> are distinct from plain items to
              ensure that click or tap affordances aren't applied to
              non-interactive items.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={actionableCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal">
            <p className="mb-0">
              Use the <code>horizontal</code> prop to make the ListGroup render
              horizontally. Currently{' '}
              <strong>
                horizontal list groups cannot be combined with flush list
                groups.
              </strong>
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={horizontalCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Responsive Horizontal">
            <p className="mb-0">
              There are responsive variants to <code>horizontal</code>: setting
              it to <code>sm | md | lg | xl | xxl</code> makes the list group
              horizontal starting at that breakpoint’s <code>min-width</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={responsiveHorizontalCode} />
        </PhoenixDocCard>

        <Row className="g-3">
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="List Group Background" />
              <PhoenixDocCard.Body code={listGroupBackgroundCode} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="List Group With Link" />
              <PhoenixDocCard.Body code={linkCode} scope={{ Link }} />
            </PhoenixDocCard>
          </Col>
        </Row>
      </DocPagesLayout>
    </div>
  );
};

export default ListGroupExample;
