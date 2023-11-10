import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
  </InputGroup>

  <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      https://example.com/users/
    </InputGroup.Text>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
  </InputGroup>

  <InputGroup>
    <InputGroup.Text>With textarea</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
</>
`;

const sizingCode = `
<>
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <InputGroup size="lg">
    <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
</>
`;

const checkboxesCode = `
<>
  <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup>
  <InputGroup>
    <InputGroup.Radio aria-label="Radio button for following text input" />
    <FormControl aria-label="Text input with radio button" />
  </InputGroup>
</>
`;

const multipleInputCode = `
<InputGroup>
  <InputGroup.Text>First and last name</InputGroup.Text>
  <FormControl aria-label="First name" />
  <FormControl aria-label="Last name" />
</InputGroup>
`;
const multipleAddonsCode = `
<>
  <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
    <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
  </InputGroup>
  <InputGroup>
    <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
  </InputGroup>
</>
`;
const buttonAddOnsCode = `
<>
  <InputGroup className="mb-3">
    <Button variant="phoenix-secondary" id="button-addon1">
      Button
    </Button>
    <FormControl
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="phoenix-secondary" id="button-addon2">
      Button
    </Button>
  </InputGroup>

  <InputGroup className="mb-3">
    <Button variant="phoenix-secondary">Button</Button>
    <Button variant="phoenix-secondary">Button</Button>
    <FormControl aria-label="Example text with two button addons" />
  </InputGroup>

  <InputGroup>
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username with two button addons"
    />
    <Button variant="phoenix-secondary">Button</Button>
    <Button variant="phoenix-secondary">Button</Button>
  </InputGroup>
</>
`;

const buttonsWithDropdowsCode = `
<>
  <InputGroup className="mb-3">
    <DropdownButton
      variant="phoenix-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-label="Text input with dropdown button" />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" />

    <DropdownButton
      variant="phoenix-secondary"
      title="Dropdown"
      id="input-group-dropdown-2"
      align="end"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
</>
`;

const segmentedButtonsCode = `
<>
  <InputGroup className="mb-3">
    <SplitButton
      variant="phoenix-secondary"
      title="Action"
      id="segmented-button-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </SplitButton>
    <FormControl aria-label="Text input with dropdown button" />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" />
    <SplitButton
      variant="phoenix-secondary"
      title="Action"
      id="segmented-button-dropdown-2"
      alignRight
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </SplitButton>
  </InputGroup>
</>
`;

const InputGroupExample = () => {
  return (
    <div>
      <DocPageHeader
        title="InputGroup"
        description="Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs."
        link={{
          text: 'InputGroup on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/forms/input-group/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizing">
            <p className="mb-0">
              Add the relative form sizing classes to the{' '}
              <code>InputGroup</code> and contents within will automatically
              resize—no need for repeating the form control size classes on each
              element.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Checkboxes and radios">
            <p className="mb-0">
              Use the <code>InputGroup.Radio</code> or
              <code>InputGroup.Checkbox</code> to add options to an input group.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={checkboxesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Multiple inputs"
            description="While multiple inputs are supported visually, validation styles are only available for input groups with a single input."
          />
          <PhoenixDocCard.Body code={multipleInputCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Multiple addons"
            description="Multiple add-ons are supported and can be mixed with checkbox and radio input versions."
          />
          <PhoenixDocCard.Body code={multipleAddonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button addons" />
          <PhoenixDocCard.Body code={buttonAddOnsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4 overflow-visible">
          <PhoenixDocCard.Header title="Buttons with Dropdowns" />
          <PhoenixDocCard.Body code={buttonsWithDropdowsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Segmented buttons" />
          <PhoenixDocCard.Body code={segmentedButtonsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default InputGroupExample;
