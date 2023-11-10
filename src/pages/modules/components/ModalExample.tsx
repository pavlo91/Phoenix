import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
function DemoModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch demo modal
      </Button>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

`;
const focusCode = `
() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
`;
const staticBackdropCode = `
function StaticBackdropModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}`;

const fullscreenCode = `
function Example() {
  const values: ModalProps['fullscreen'][] = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState<ModalProps['fullscreen']>(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint: ModalProps['fullscreen']) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-1" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && 'below ' + v.split('-')[0] }
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Modal</Modal.Title>
          <CloseButton
          className="btn btn-circle btn-sm transition-base p-0"
          onClick={() => setShow(false)}
        />
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}`;

const sizeCode = `
function Example() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
          <CloseButton onClick={() => setSmShow(false)}/>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
          <CloseButton onClick={() => setLgShow(false)}/>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}`;

const ModalExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Modals"
        description="Add dialogs to your site for lightboxes, user notifications, or completely custom content."
        link={{
          text: 'Modals on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/components/modal/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic Modal" />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Static backdrop"
            description="When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it."
          />
          <PhoenixDocCard.Body code={staticBackdropCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Focus on specific element">
            <p className="mb-0">
              You can focus on an element inside the modal using{' '}
              <code>autoFocus</code> attribute on the element.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={focusCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Optional Sizes">
            <p className="mb-0">
              You can specify a Bootstrap large or small modal by using the
              <code> size </code> prop.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizeCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Fullscreen Modal">
            <p className="mb-0">
              You can use the <code>fullscreen</code> prop to make the modal
              fullscreen. Specifying a breakpoint will only set the modal as
              fullscreen <strong>below</strong> the breakpoint size.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={fullscreenCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ModalExample;
