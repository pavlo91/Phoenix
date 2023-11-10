import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const basicFormCode = `
<Form>
  <Form.Group className="mb-3" controlId="formGroupName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupBod">
    <Form.Label>Date of Birth</Form.Label>
    <Form.Control type="date" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGroupGender">
    <Form.Label>Gender</Form.Label>
    <Form.Select>
      <option value=''>Select your gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </Form.Select>
  </Form.Group>

  <Form.Group className="mb-1" controlId="personalAccount">
    <Form.Check
      inline
      type="radio"
      name="accountType"
      id="personalAccount"
      className="me-2"
      defaultChecked
    />
    <Form.Label className="mb-0">Personal Account</Form.Label>
  </Form.Group>

  <Form.Group className="mb-3" controlId="businessAccount">
    <Form.Check
      inline
      type="radio"
      name="accountType"
      id="businessAccount"
      className="me-2"
    />
    <Form.Label className="mb-0">Business Account</Form.Label>
  </Form.Group>

  <Form.Group controlId="imageUpload" className="mb-3">
    <Form.Label>Upload Image</Form.Label>
    <Form.Control type="file" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="description">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Description" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="rememberMe">
    <Form.Check type="checkbox" id="rememberMe" label="Remember Me" name="remember" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
`;

const horizontalFormCode = `
<Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  
  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="second radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="third radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
`;

const formGridLayout = `
<Form>
  <Row className="mb-3 g-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3 g-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
`;

const horizontalSizingCode = `
<>
  <Row  className='g-3'>
    <Form.Label column="sm" lg={2}>
      Email
    </Form.Label>
    <Col>
      <Form.Control size="sm" type="email" placeholder="Small text" />
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column lg={2}>
      Email
    </Form.Label>
    <Col>
      <Form.Control type="email" placeholder="Normal text" />
    </Col>
  </Row>
  <br />
  <Row>
    <Form.Label column="lg" lg={2}>
      Email
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="email" placeholder="Large text" />
    </Col>
  </Row>
  
</>
`;

const columnSizingCode = `
<Form>
  <Row className='g-3'>
    <Col xs={7}>
      <Form.Control placeholder="City" />
    </Col>
    <Col>
      <Form.Control placeholder="State" />
    </Col>
    <Col>
      <Form.Control placeholder="Zip" />
    </Col>
  </Row>
</Form>
`;

const autoSizingCode = `
<Form>
  <Row className="align-items-center g-3">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Jane Doe"
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Text>@</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Form.Select className="mb-2">
        <option value=''>Choose...</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Form.Select>
    </Col>
    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-0"
        label="Remember me"
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Row>
</Form>
`;

const guttersCode = `
<Form>
  <Row className="align-items-center g-3">
    <Col>
      <Form.Label htmlFor="firstName" visuallyHidden>
        First name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="firstName"
        placeholder="First Name"
      />
    </Col>
    <Col>
      <Form.Label htmlFor="lastName" visuallyHidden>
        Last Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="lastName"
        placeholder="Last Name"
      />
    </Col>
  </Row>
</Form>
`;

const FormLayoutExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Layout"
        description="Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS."
        link={{
          text: 'Forms layout on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/forms/layout/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic form" />
          <PhoenixDocCard.Body code={basicFormCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal form" />
          <PhoenixDocCard.Body code={horizontalFormCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal form label sizing" />
          <PhoenixDocCard.Body code={horizontalSizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Form Grid Layout" />
          <PhoenixDocCard.Body code={formGridLayout} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Grid - Column Sizing" />
          <PhoenixDocCard.Body code={columnSizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Grid - Auto Sizing" />
          <PhoenixDocCard.Body code={autoSizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Gutters" />
          <PhoenixDocCard.Body code={guttersCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FormLayoutExample;
