import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Col, Row } from 'react-bootstrap';

const exampleCode = `
<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
`;

const growingCode = `
<Spinner animation="grow" />
`;

const variantsCode = `
<>
  <Spinner animation="border" variant="primary" />
  <Spinner animation="border" variant="secondary" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
  <Spinner animation="border" variant="light" />
  <Spinner animation="border" variant="dark" />
  <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" />
</>
`;
const SizingCode = `
<>
  <Spinner animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
</>
`;

const buttonsCode = `
<>
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span className="visually-hidden">Loading...</span>
  </Button>{' '}
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
</>
`;

const SpinnerExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Spinners"
        description="Spinners can be used to show the loading state in your projects."
        link={{
          text: 'Spinners on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/spinners/`
        }}
      />

      <DocPagesLayout>
        <Row>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Example" />
              <PhoenixDocCard.Body code={exampleCode} />
            </PhoenixDocCard>
          </Col>
          <Col md={6}>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Growing spinner" />
              <PhoenixDocCard.Body code={growingCode} />
            </PhoenixDocCard>
          </Col>
        </Row>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Variants">
            <p className="mb-0">
              All standard visual variants are available for both animation
              styles by setting the <code>variant</code> property. Alternatively
              spinners can be custom sized with the <code>style</code> property,
              or custom CSS classes.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={variantsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizing">
            <p className="mb-0">
              In addition to the standard size, a smaller additional
              preconfigured size is available by configuring the{' '}
              <code>size</code> property to <code>sm</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={SizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Buttons">
            <p className="mb-0">
              Like the original Bootstrap spinners, these can also be used with
              buttons. To use this component out-of-the-box it is recommended
              you change the element type to <code>span</code> by configuring
              the <code>as</code> property when using spinners inside buttons.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={buttonsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default SpinnerExample;
