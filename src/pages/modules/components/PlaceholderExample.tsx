import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import generic53 from 'assets/phoenix/img/generic/53.png';

const exampleCode = `<div className="d-flex justify-content-center">
  <Card style={{width: '20rem'}} className='overflow-hidden'>
    <Card.Img src={generic53} variant='top'/>
    <Card.Body>
      <Card.Title as='h5'>
        Card title
      </Card.Title>
      <Card.Text>
        Some quick example text to build on the card
        title and make up the bulk of the card's
        content.
      </Card.Text>
      <Button color="primary" size="sm">
        Go somewhere
      </Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '20rem' }} className='ms-3 overflow-hidden'>
    <Card.Header variant="top" style={{width: 320,height: 180}} className='p-0'>
      <span className="placeholder w-100 h-100"/>
    </Card.Header>
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow" className='mb-2'>
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> 
        <Placeholder xs={4} /> 
        <Placeholder xs={4} />
        <Placeholder xs={6} /> 
        <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card.Body>
  </Card>
</div>`;

const widthCode = `<>
  <Placeholder xs={6} />
  <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
</>`;

const colorCode = `<>
  <Placeholder xs={12} />
  <Placeholder xs={12} bg="primary" />
  <Placeholder xs={12} bg="secondary" />
  <Placeholder xs={12} bg="success" />
  <Placeholder xs={12} bg="danger" />
  <Placeholder xs={12} bg="warning" />
  <Placeholder xs={12} bg="info" />
  <Placeholder xs={12} bg="light" />
  <Placeholder xs={12} bg="dark" />
</>`;

const sizingCode = `<>
  <Placeholder xs={12} size="lg" />
  <Placeholder xs={12} />
  <Placeholder xs={12} size="sm" />
  <Placeholder xs={12} size="xs" />
</>`;

const animationCode = `<>
  <Placeholder as="p" animation="glow">
    <Placeholder xs={12} />
  </Placeholder>
  <Placeholder as="p" animation="wave">
    <Placeholder xs={12} />
  </Placeholder>
</>`;

const PlaceholderExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Placeholders"
        description="Use loading placeholders for your components or pages to indicate something may still be loading."
        link={{
          text: 'Placeholder on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/placeholder/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Example"
            description="In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the two."
          />
          <PhoenixDocCard.Body code={exampleCode} scope={{ generic53 }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Width">
            <p className="mb-0">
              You can change the <code>width</code> through grid column classes,
              width utilities, or inline styles.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={widthCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Color">
            <p className="mb-0">
              By default, the <code>Placeholder</code> uses{' '}
              <code>currentColor</code>. This can be overridden with a custom
              color or utility class.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={colorCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizing">
            <p className="mb-0">
              The size of <code>Placeholder</code>s are based on the typographic
              style of the parent element. Customize them with sizing props:{' '}
              <code>lg</code>, <code>sm</code>, or <code>xs</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Animation">
            <p className="mb-0">
              Animate placeholders by setting the prop <code>animation</code> to{' '}
              <code>glow</code> or <code>wave</code> to better convey the
              perception of something being <em>actively</em> loaded.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={animationCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default PlaceholderExample;
