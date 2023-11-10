import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}`;

const placementCode = `
const OffCanvasExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Example = () => {
  return (
    <>
      {['start', 'end', 'bottom', 'top'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
render(<Example />)`;

const backdropCode = `
const options = [
  {
    name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: true,
  },
  {
    name: 'Disable backdrop',
    scroll: false,
    backdrop: false,
  },
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
  },
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 mb-1">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

render(<Example />);
`;

const staticBackdropCode = `
() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

`;

const OffcanvasExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Offcanvas"
        description="Build hidden sidebars into your project for navigation, shopping carts, and more."
        link={{
          text: 'Offcanvas on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/offcanvas/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Placement">
            <p>Offcanvas supports a few different placements:</p>
            <ul className="mb-0">
              <li>
                <code>start</code> places offcanvas on the left of the viewport
              </li>
              <li>
                <code>end</code> places offcanvas on the right of the viewport
              </li>
              <li>
                <code>top</code> places offcanvas on the top of the viewport
              </li>
              <li>
                <code>bottom</code> places offcanvas on the bottom of the
                viewport
              </li>
            </ul>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={placementCode} noInline />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Backdrop">
            <p className="mb-0">
              Scrolling the <code>&lt;body&gt;</code> element is disabled when
              an offcanvas and its backdrop are visible. Use the{' '}
              <code>scroll</code> prop to toggle <code>&lt;body&gt;</code>{' '}
              scrolling and the <code>backdrop</code> prop to toggle the
              backdrop.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={backdropCode} noInline />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Static backdrop">
            <p className="mb-0">
              When <code>backdrop</code> is set to <code>static</code>, the
              offcanvas will not close when clicking outside of it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={staticBackdropCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default OffcanvasExample;
