import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Card } from 'react-bootstrap';

const exampleCode = `
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button>Click me to see</Button>
  </OverlayTrigger>
);

render(<Example />);`;

const placementCode = `
<>
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={'popover-positioned-' + placement}>
          <Popover.Body>
          {'Popover ' + placement}
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="phoenix-secondary" className='me-1 mb-1'>Popover on {placement}</Button>
    </OverlayTrigger>
  ))}
</>
`;

const disableElCode = `
<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
  <span className="d-inline-block">
    <Button variant='primary' style={{ pointerEvents: 'none' }} disabled>
      Disabled button
    </Button>
  </span>
</OverlayTrigger>
`;

const changingContainersCode = `
() => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Holy guacamole!</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Popover bottom</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
`;

const dynamicPositionCode = `
const UpdatingPopover = forwardRef(
  ({ popper, children, show: _, ...props }, ref) => {
    useEffect(() => {
      console.log('updating!');
      popper.scheduleUpdate();
    }, [children, popper]);

    return (
      <Popover ref={ref} body {...props}>
        {children}
      </Popover>
    );
  },
);

const longContent = 'Very long Multiline content that is engaging and what-not';

const shortContent = 'Short and sweet!';

function Example() {
  const [content, setContent] = useState(shortContent);

  useEffect(() => {
    const timerId = setInterval(() => {
      setContent(content === shortContent ? longContent : shortContent);
    }, 3000);

    return () => clearInterval(timerId);
  });

  return (
    <OverlayTrigger
      trigger="click"
      overlay={
        <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
      }
    >
      <Button>Holy guacamole!</Button>
    </OverlayTrigger>
  );
}

render(<Example />);
`;

const PopoversExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Popovers"
        description="A popover component, like those found in iOS."
        link={{
          text: 'Popovers on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/overlays/#popovers`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Overview" noPreview />
          <Card.Body>
            <p>
              The <code>&lt;Popover&gt;</code> component do not position
              themselves. Instead the <code>&lt;Overlay&gt;</code> (or{' '}
              <code>&lt;OverlayTrigger&gt;</code>) components, inject{' '}
              <code>ref</code> and <code>style</code> props.
            </p>
          </Card.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body code={exampleCode} noInline />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Placement">
            <p className="mb-0">
              As with <code>&lt;Tooltip&gt;</code>s, you can control the
              placement of the Popover.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={placementCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Disabled elements">
            <p className="mb-0">
              Elements with the <code>disabled</code> attribute aren’t
              interactive, meaning users cannot hover or click them to trigger a
              popover (or tooltip). As a workaround, you’ll want to trigger the
              overlay from a wrapper <code>&lt;div&gt;</code> or{' '}
              <code>&lt;span&gt;</code> and override the{' '}
              <code>pointer-events</code> on the disabled element.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={disableElCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Changing containers">
            <p className="mb-0">
              You can specify a <code>container</code> to control the DOM
              element the overlay is appended to. This is especially useful when
              styles conflict with your Overlays.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={changingContainersCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Updating position dynamically">
            <p>
              Since we can't know every time your overlay changes size, to
              reposition it, you need to take manual action if you want to
              update the position of an Overlay in response to a change.
            </p>
            <p className="mb-0">
              For this, the Overlay component also injects a a{' '}
              <code>popper</code>
              prop with a <code>scheduleUpdate()</code> method that an overlay
              component can use to reposition itself.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={dynamicPositionCode} noInline />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default PopoversExample;
