import { UilTimes } from '@iconscout/react-unicons';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import Button from 'components/base/Button';

const exampleCode = `
() => {
  const [show, setShow] = useState(true);
  return (
    <Toast show={show} onClose={() => setShow(!show)}>
      <Toast.Header closeButton={false}>
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <Button className="ms-2 p-0 " onClick={() => setShow(false)} >
          <UilTimes className="fs-7"/>
        </Button>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
}`;
const transcluentCode = `
() => {
  const [show, setShow] = useState(true);
  return (
    <div className='bg-dark p-3'>
      <Toast show={show} onClose={() => setShow(!show)}>
        <Toast.Header className="text-bg-light" closeButton={false}>
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <Button className="ms-2 p-0 " onClick={() => setShow(false)} >
            <UilTimes className="fs-7"/>
          </Button>
        </Toast.Header>
        <Toast.Body className="text-bg-light">Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
}`;

const stackingCode = `
() => {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  return (
    <ToastContainer className="position-static">
      <Toast show={showA} className="mb-4" onClose={() => setShowA(!showA)}>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
          <Button className="ms-2 p-0 " onClick={() => setShowA(false)} >
            <UilTimes className="fs-7"/>
          </Button>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
      <Toast show={showB} onClose={() => setShowB(!showB)}>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">2 seconds ago</small>
          <Button className="ms-2 p-0 " onClick={() => setShowB(false)} >
            <UilTimes className="fs-7"/>
          </Button>
        </Toast.Header>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}`;

const placementCode = `
() => {
  const [position, setPosition] = useState('top-start');

  return (
    <>
      <div className="mb-3">
        <Form.Select
          id="selectToastPlacement"
          className="mt-2"
          onChange={(e) => setPosition(e.currentTarget.value)}
        >
          {[
            'top-start',
            'top-center',
            'top-end',
            'middle-start',
            'middle-center',
            'middle-end',
            'bottom-start',
            'bottom-center',
            'bottom-end',
          ].map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Form.Select>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="position-relative"
        style={{ minHeight: '240px' }}
      >
        <ToastContainer className="p-3" position={position}>
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
}`;

const autoHideCode = `
() => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>Show Toast</Button>
      <div className="position-fixed bottom-0 end-0 p-3">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <Button className="ms-2 p-0 " onClick={() => setShow(false)} >
              <UilTimes className="fs-7"/>
            </Button>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </div>
    </>
  );
}
`;

const dismissibleCode = `
()=> {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button variant="primary" onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <Button className="ms-2 p-0 " onClick={() => setShowA(false)} >
              <UilTimes className="fs-7"/>
            </Button>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col md={6} className="mb-2">
        <Button variant="primary" onClick={toggleShowB} className="mb-2">
          Toggle Toast <strong>without</strong> Animation
        </Button>
        <Toast onClose={toggleShowB} show={showB} animation={false}>
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <Button className="ms-2 p-0 " onClick={() => setShowB(false)} >
              <UilTimes className="fs-7"/>
            </Button>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
`;

const ToastsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Toasts"
        description="Push notifications to your visitors with a toast, a lightweight and easily customizable alert message."
        link={{
          text: 'Toasts on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/components/toasts/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic Example" />
          <PhoenixDocCard.Body
            code={exampleCode}
            scope={{ UilTimes, Button }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Placement">
            <p className="mb-0">
              Place toasts by setting a <code>position</code> in a{' '}
              <code>ToastContainer</code>. The top right is often used for
              notifications, as is the top middle.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={placementCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Translucent"
            description="Toasts are slightly translucent, too, so they blend over whatever they might appear over."
          />
          <PhoenixDocCard.Body
            code={transcluentCode}
            scope={{ UilTimes, Button }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Stacking"
            description="When you have multiple toasts, we default to vertically stacking them in a readable manner."
          />
          <PhoenixDocCard.Body
            code={stackingCode}
            scope={{ UilTimes, Button }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Dismissible" />
          <PhoenixDocCard.Body
            code={dismissibleCode}
            scope={{ UilTimes, Button }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Autohide">
            <p className="mb-0">
              A Toast can also automatically hide after X milliseconds using the{' '}
              <code>autohide</code> prop with the <code>delay</code> prop to
              specify the delay. To open the toast, manually change the show
              property.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={autoHideCode}
            scope={{ UilTimes, Button }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ToastsExample;
