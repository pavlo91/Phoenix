import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Col, Row } from 'react-bootstrap';

const exampleCode = `
  <ProgressBar now={60} style={{ height:'15px' }} />
`;

const labelCode = `
  <ProgressBar now={60} label='60%' style={{ height:'15px' }} />;
`;
const heightCode = `
  <>
    <ProgressBar now={60} style={{ height:'1px' }} className='mb-3' />
    <ProgressBar now={60} style={{ height:'10px' }} className='mb-3' />
    <ProgressBar now={60} style={{ height:'20px' }} className='mb-3' />
  </>
`;
const bgCode = `
  <>
    <ProgressBar variant="success" now={30} className='mb-3' style={{ height:'15px' }} />
    <ProgressBar variant="info" now={40} className='mb-3' style={{ height:'15px' }} />
    <ProgressBar variant="warning" now={50} className='mb-3' style={{ height:'15px' }} />
    <ProgressBar variant="danger" now={60} className='mb-3' style={{ height:'15px' }} />
  </>
`;
const stripedCode = `
  <>
    <ProgressBar striped  variant="success" now={30} className='mb-3' style={{ height:'15px' }} />
    <ProgressBar striped  variant="info" now={40} className='mb-3' style={{ height:'15px' }} />
    <ProgressBar striped  variant="warning" now={50} className='mb-3' style={{ height:'15px' }} />
    <ProgressBar striped  variant="danger" now={60} className='mb-3' style={{ height:'15px' }} />
  </>
`;
const stackedCode = `
  <ProgressBar style={{ height:'15px' }}>
    <ProgressBar variant="primary" now={35} key={1} />
    <ProgressBar variant="success" now={20} key={2} />
    <ProgressBar variant="info" now={10} key={3} />
  </ProgressBar>
`;
const animatedCode = `
() => {
  const [animated, setAnimated] = useState(true);
  return (
    <>
      <ProgressBar animated={animated} now={45}  style={{ height:'15px' }}/>
      <Button variant="secondary" onClick={() => setAnimated(!animated)} className="mt-2">
        Toggle Animation
      </Button>
    </>
  );
}`;

const ProgressbarExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Progress"
        description="Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars."
        link={{
          text: 'Progress on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/progress/`
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
              <PhoenixDocCard.Header title="With Label" />
              <PhoenixDocCard.Body code={labelCode} />
            </PhoenixDocCard>
          </Col>
        </Row>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Height" />
          <PhoenixDocCard.Body code={heightCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Contextual alternatives"
            description="Progress bars use some of the same button and alert classes for consistent styles."
          />
          <PhoenixDocCard.Body code={bgCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Striped"
            description="Uses a gradient to create a striped effect."
          />
          <PhoenixDocCard.Body code={stripedCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Stacked">
            <p className="mb-0">
              Nest <code>&lt;ProgressBar /&gt;</code>s to stack them.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stripedCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Animated">
            <p className="mb-0">
              Add <code>animated</code> prop to animate the stripes right to
              left.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={animatedCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Stacked">
            <p className="mb-0">
              Nest <code>&lt;ProgressBar /&gt;</code>s to stack them.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stackedCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ProgressbarExample;
