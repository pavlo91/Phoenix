import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const tooltipsCode = `
function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 gx-3">
        <Form.Group as={Col} md="4" controlId="tooltipFirstName" className="position-relative">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="tooltipLastName" className="position-relative">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="tooltipUserName" className="position-relative">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3 gx-3">
        <Form.Group as={Col} md="6" controlId="tooltipCity" className="position-relative">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid" tooltip>
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="tooltipState" className="position-relative">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid" tooltip>
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="tooltipZip" className="position-relative">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid" tooltip>
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" className="position-relative">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}`;
const exampleCode = `
function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 gx-3">
        <Form.Group as={Col} md="4" controlId="exampleFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="exampleLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="exampleUserName">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3 gx-3">
        <Form.Group as={Col} md="6" controlId="exampleCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="exampleState">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="exampleZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}`;

const inputGroupValidationCode = `
<InputGroup hasValidation>
  <InputGroup.Text>@</InputGroup.Text>
  <Form.Control type="text" required isInvalid />
  <Form.Control.Feedback type="invalid">
    Please choose a username.
  </Form.Control.Feedback>
</InputGroup>
`;

const FormValidationExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Validation"
        description="Provide valuable, actionable feedback to your users with HTML5 form validation, via browser default behaviors or custom styles and JavaScript."
        link={{
          text: 'Form validation on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/forms/validation/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Tooltips">
            <p className="mb-0">
              If your form layout allows it, you can use the{' '}
              <code>tooltip</code> prop to display validation feedback in a
              styled tooltip. Be sure to have a parent with
              <code>position: relative</code> on it for tooltip positioning. In
              the example below, our column classes have this already, but your
              project may require an alternative setup.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={tooltipsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Input group validation">
            <p className="mb-0">
              To properly show rounded corners in an{' '}
              <code>&lt;InputGroup&gt;</code> with validation, the{' '}
              <code>&lt;InputGroup&gt;</code> requires the{' '}
              <code>hasValidation</code> prop.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={inputGroupValidationCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FormValidationExample;
