import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Card } from 'react-bootstrap';

const exampleCode = `
() => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
`;
const overlayTriggerCode = `
<OverlayTrigger
  overlay={
    <Tooltip id="overlay-trigger-example">
      My Tooltip
    </Tooltip>
  }
>
  <Button>Click me!</Button>
</OverlayTrigger>
`;

const placementCode = `
<>
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip id={'tooltip-'+ placement}>
          Tooltip on <strong>{placement}</strong>.
        </Tooltip>
      }
    >
      <Button variant="phoenix-secondary" className='mb-1 me-2'>Tooltip on {placement}</Button>
    </OverlayTrigger>
  ))}
</>
`;

const TooltipExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Tooltips"
        description="A tooltip component for a more stylish alternative to that anchor tag title attribute."
        link={{
          text: 'Tooltips on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/overlays/#tooltips`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Overview" noPreview />
          <Card.Body>
            <p>
              The <code>&lt;Tooltip&gt;</code> component do not position
              themselves. Instead the <code>&lt;Overlay&gt;</code> (or{' '}
              <code>&lt;OverlayTrigger&gt;</code>) components, inject{' '}
              <code>ref</code> and <code>style</code> props.
            </p>
          </Card.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              You can pass the <code>Overlay</code> injected props directly to
              the Tooltip component.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="OverlayTrigger Example">
            <p className="mb-0">
              You pass a Tooltip element to <code>OverlayTrigger</code> instead.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={overlayTriggerCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Placement">
            <p className="mb-0">
              Use <code>placement</code> prop to set your <code>Tooltip</code>'s
              position.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={placementCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default TooltipExample;
