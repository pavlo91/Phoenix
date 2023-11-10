import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Col, Row } from 'react-bootstrap';
import generic66 from 'assets/phoenix/img/generic/66.jpg';
import generic44 from 'assets/phoenix/img/generic/44.png';
import generic45 from 'assets/phoenix/img/generic/45.png';
import generic46 from 'assets/phoenix/img/generic/46.png';
import generic54 from 'assets/phoenix/img/generic/54.png';
import generic36 from 'assets/phoenix/img/generic/36.png';

const exampleCode = `
  <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={generic66} />
    <Card.Body>
      <Card.Title>Title goes here</Card.Title>
      <Card.Text>
        Here is the example of the Multiple Container Sortable feature of the
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
`;

const imageOverlaysCode = `
  <Card style={{ width: '30rem' }} className="text-white overflow-hidden">
    <Card.Img variant="top" src={generic46} />
    <Card.ImgOverlay className="d-flex align-items-end">
      <div>
        <Card.Title as="h4" className="text-white">
          Card title
        </Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </div>
    </Card.ImgOverlay>
  </Card>
`;

const horizontalCode = `
  <Card style={{ maxWidth: '32rem' }}>
    <Row className="g-0">
      <Col md={4}>
        <img className="img-fluid h-100 rounded-start" src={generic36} alt="..." />
      </Col>
      <Col md={8}>
        <Card.Body>
          <Card.Title as="h4">Card Title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Card>
`;

const cardGroupCode = `
() => {
  const [items] = useState([generic54, generic44, generic46, generic45]);
  return (
    <CardGroup>
      {items.map(item => (
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={item} />
          <Card.Body>
            <Card.Title as="h4">Title goes here</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 45 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  );
};`;

const backgroundStylesCode = `
() => {
  const [variants] = useState([
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark'
  ]);
  return (
    <Row className="g-4">
      {variants.map(variant => (
        <Col sm={6} md={4} lg={3}>
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          >
            <Card.Body>
              <Card.Title 
                as="h4"
                className={variant.toLowerCase() === 'light' ? 'text-dark' : 'text-white'} 
              >
                {variant} Card
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
`;

const borderCode = `
() => {
  const [variants] = useState([
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark'
  ]);
  return (
    <Row className="g-4">
      {variants.map(variant => (
        <Col sm={6} md={4} lg={3}>
          <Card key={variant} className={'border border-' + variant.toLowerCase()}>
            <Card.Body>
              <Card.Title as="h4">{variant} Border Card</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
`;

const CardExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Cards"
        description="Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options."
        link={{
          text: 'Cards on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/components/cards/`
        }}
      />

      <DocPagesLayout>
        <Row>
          <Col lg={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Basic Example" />
              <PhoenixDocCard.Body code={exampleCode} scope={{ generic66 }} />
            </PhoenixDocCard>
          </Col>
          <Col lg={6}></Col>
        </Row>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Image overlays" />
          <PhoenixDocCard.Body code={imageOverlaysCode} scope={{ generic46 }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal" />
          <PhoenixDocCard.Body code={horizontalCode} scope={{ generic36 }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Card Groups" />
          <PhoenixDocCard.Body
            code={cardGroupCode}
            scope={{ generic54, generic44, generic46, generic45 }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Card Background Styles" />
          <PhoenixDocCard.Body code={backgroundStylesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Card Border Styles" />
          <PhoenixDocCard.Body code={borderCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default CardExample;
