import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</>
`;

const sizingCode = `
<>
  <Form.Control size="lg" type="text" placeholder="Large text" />
  <br />
  <Form.Control type="text" placeholder="Normal text" />
  <br />
  <Form.Control size="sm" type="text" placeholder="Small text" />
</>
`;

const readOnlyCode = `
<Form.Control type="text" placeholder="Readonly input here..." readOnly />
`;

const readOnlyTextCode = `
<>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      Email
    </Form.Label>
    <Col sm="10">
      <Form.Control plaintext readOnly defaultValue="email@example.com" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
</>
`;

const fileInputCode = `
<>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Group controlId="formFileDisabled" className="mb-3">
    <Form.Label>Disabled file input example</Form.Label>
    <Form.Control type="file" disabled />
  </Form.Group>
  <Form.Group controlId="formFileMultiple" className="mb-3">
    <Form.Label>Multiple files input example</Form.Label>
    <Form.Control type="file" multiple />
  </Form.Group>
</>`;

const fileInputSizingCode = `
<>
  <Form.Group controlId="formFileSm" className="mb-3">
    <Form.Label>Small file input example</Form.Label>
    <Form.Control type="file" size="sm" />
  </Form.Group>
  <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label>Large file input example</Form.Label>
    <Form.Control type="file" size="lg" />
  </Form.Group>
</>
`;

const datalistCode = `
<Form.Group className="mb-3">
    <Form.Label>
      Choose your browser from the list:
    </Form.Label>
    <Form.Control size='sm' id="customDatalist" list="browsers" name="browser" />
    <datalist id="browsers">
      <option value="Edge"> </option>
      <option value="Firefox"> </option>
      <option value="Chrome"> </option>
      <option value="Opera"> </option>
      <option value="Safari"></option>
    </datalist>
</Form.Group>
`;

const FormControlExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Form Control"
        description="Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS."
        link={{
          text: 'Form Control on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/forms/form-control`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              The <code>&lt;FormControl&gt;</code> component renders a form
              control with Bootstrap styling. The <code>&lt;FormGroup&gt;</code>{' '}
              component wraps a form control with proper spacing, along with
              support for a label, help text, and validation state. To ensure
              accessibility, set <code>controlId</code> on{' '}
              <code>&lt;FormGroup&gt;</code>, and use{' '}
              <code>&lt;FormLabel&gt;</code> for the label.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizing">
            <p className="mb-0">
              Use <code>size</code> on <code>&lt;FormControl&gt;</code> to
              change the size of the input.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Readonly">
            <p className="mb-0">
              Add the <code>readOnly</code> prop on an input to prevent
              modification of the input's value. Read-only inputs appear lighter
              (just like disabled inputs), but retain the standard cursor.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={readOnlyCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Readonly plain text">
            <p className="mb-0">
              Use <code>size</code> on <code>&lt;FormControl&gt;</code> to
              change the size of the input.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={readOnlyTextCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="File Input" />
          <PhoenixDocCard.Body code={fileInputCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="File Input Sizing" />
          <PhoenixDocCard.Body code={fileInputSizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Datalist" />
          <PhoenixDocCard.Body code={datalistCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FormControlExample;
