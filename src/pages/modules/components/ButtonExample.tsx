import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout, { SideNavItem } from 'layouts/DocPagesLayout';
import FeatherIcon from 'feather-icons-react';

const phoenixButtonsCode = `
import Button from 'components/base/Button';

<div className='d-flex gap-2'>
  <Button variant='phoenix-primary'> Primary </Button>
  <Button variant='phoenix-secondary'> Secondary </Button>
  <Button variant='phoenix-success'> Success </Button>
  <Button variant='phoenix-danger'> Danger </Button>
  <Button variant='phoenix-warning'> Warning </Button>
  <Button variant='phoenix-info'> Info </Button>
</div>
`;

const solidButtonsCode = `
import Button from 'components/base/Button';

<div className='d-flex gap-2'>
  <Button variant='primary'> Primary </Button>
  <Button variant='secondary'> Secondary </Button>
  <Button variant='success'> Success </Button>
  <Button variant='danger'> Danger </Button>
  <Button variant='warning'> Warning </Button>
  <Button variant='info'> Info </Button>
  <Button variant='link'> Link </Button>
</div>
`;

const softButtonsCode = `
import Button from 'components/base/Button';

<div className="d-flex gap-2">
  <Button variant="soft-primary"> Primary </Button>
  <Button variant="soft-secondary"> Secondary </Button>
  <Button variant="soft-success"> Success </Button>
  <Button variant="soft-danger"> Danger </Button>
  <Button variant="soft-warning"> Warning </Button>
  <Button variant="soft-info"> Info </Button>
</div>
`;

const outlineButtonsCode = `
import Button from 'components/base/Button';

<div className="d-flex  gap-2">
  <Button variant="outline-primary"> Primary </Button>
  <Button variant="outline-secondary"> Secondary </Button>
  <Button variant="outline-success"> Success </Button>
  <Button variant="outline-danger"> Danger </Button>
  <Button variant="outline-warning"> Warning </Button>
  <Button variant="outline-info"> Info </Button>
</div>
`;

const buttonSizesCode = `
import Button from 'components/base/Button';

<div className="d-flex align-items-center gap-2">
  <Button variant="primary" size='sm'> Primary </Button>
  <Button variant="primary"> Primary </Button>
  <Button variant="primary" size='lg'> Primary </Button>
</div>
`;

const buttonWithIconCode = `
import Button from 'components/base/Button';

<div className="d-flex align-items-center gap-2">
  <Button variant="primary" startIcon={<FontAwesomeIcon icon="plus" />}>
    Create
  </Button>
  <Button variant="primary" endIcon={<FeatherIcon icon="send" size={14} />}>
    Send
  </Button>
  <Button variant="phoenix-danger">
    <FontAwesomeIcon icon="trash" />
  </Button>
</div>
`;

const disableButtonsCode = `
import Button from 'components/base/Button';

<div className="d-flex gap-2">
  <Button variant="primary" disabled>
    Primary button
  </Button>
  <Button variant="secondary" disabled>
    Button
  </Button>
</div>
`;

const loadingButtonsCode = `
() => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Loading"
        onChange={e => setLoading(e.target.checked)}
      />

      <div className="d-flex align-items-center gap-2 mb-2">
        <Button size="sm" loading={loading} loadingPosition="start">
          Loading
        </Button>
        <Button size="sm" loading={loading} loadingPosition="end">
          Loading
        </Button>
      </div>

      <div className="d-flex align-items-center gap-2 mb-2">
        <Button loading={loading} loadingPosition="start">
          Loading
        </Button>
        <Button loading={loading} loadingPosition="end">
          Loading
        </Button>
      </div>

      <div className="d-flex align-items-center gap-2">
        <Button size="lg" loading={loading} loadingPosition="start">
          Loading
        </Button>
        <Button size="lg" loading={loading} loadingPosition="end">
          Loading
        </Button>
      </div>
    </>
  );
};
`;

const toggleBtnCode = `
() => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];

  return (
    <>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="phoenix-primary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={radio.value}
            id={\`radio-\${idx}\`}
            type="radio"
            variant="phoenix-primary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br />
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
      <br />
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={radio.value}
            id={\`radio-\${idx}\`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}
`;

const unControlledCode = `
<>
  <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
    <ToggleButton id="tbg-check-1" value={1}>
      Checkbox 1 (pre-checked)
    </ToggleButton>
    <ToggleButton id="tbg-check-2" value={2}>
      Checkbox 2
    </ToggleButton>
    <ToggleButton id="tbg-check-3" value={3}>
      Checkbox 3 (pre-checked)
    </ToggleButton>
  </ToggleButtonGroup>
  <br />
  <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
    <ToggleButton id="tbg-radio-1" value={1}>
      Radio 1 (pre-checked)
    </ToggleButton>
    <ToggleButton id="tbg-radio-2" value={2}>
      Radio 2
    </ToggleButton>
    <ToggleButton id="tbg-radio-3" value={3}>
      Radio 3
    </ToggleButton>
  </ToggleButtonGroup>
</>
`;

const controlledCode = `
() => {
  const [value, setValue] = useState([1, 3]);

  /*
   * The second argument that will be passed to
   * 'handleChange' from 'ToggleButtonGroup'
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton value={1} id='one'>Option 1</ToggleButton>
      <ToggleButton value={2} id='two'>Option 2</ToggleButton>
      <ToggleButton value={3} id='three'>Option 3</ToggleButton>
    </ToggleButtonGroup>
  );
}
`;

const buttonGroupExampleCode = `
<ButtonGroup aria-label="Basic example">
<Button variant="phoenix-secondary">Left</Button>
<Button variant="phoenix-secondary">Middle</Button>
<Button variant="phoenix-secondary">Right</Button>
</ButtonGroup>
`;

const btnToolbarCode = `
<ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="me-2 mb-1" aria-label="First group">
    <Button variant="phoenix-secondary">1</Button>
    <Button variant="phoenix-secondary">2</Button>
    <Button variant="phoenix-secondary">3</Button>
    <Button variant="phoenix-secondary">4</Button>
  </ButtonGroup>
  <ButtonGroup className="me-2 mb-1" aria-label="Second group">
    <Button variant="phoenix-secondary">5</Button>
    <Button variant="phoenix-secondary">6</Button>
    <Button variant="phoenix-secondary">7</Button>
  </ButtonGroup>
  <ButtonGroup className="me-2 mb-1" aria-label="Third group">
    <Button variant="phoenix-secondary">8</Button>
  </ButtonGroup>
</ButtonToolbar>
`;

const inputGroupExampleCode = `
<>
  <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
    <ButtonGroup className="me-2 mb-1" aria-label="First group">
      <Button variant="phoenix-secondary">1</Button>{' '}
      <Button variant="phoenix-secondary">2</Button>{' '}
      <Button variant="phoenix-secondary">3</Button>{' '}
      <Button variant="phoenix-secondary">4</Button>
    </ButtonGroup>
    <InputGroup>
      <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>
  </ButtonToolbar>

  <ButtonToolbar
    className="justify-content-between"
    aria-label="Toolbar with Button groups"
  >
    <ButtonGroup aria-label="First group" className='mb-1'>
      <Button variant="phoenix-secondary">1</Button>{' '}
      <Button variant="phoenix-secondary">2</Button>{' '}
      <Button variant="phoenix-secondary">3</Button>{' '}
      <Button variant="phoenix-secondary">4</Button>
    </ButtonGroup>
    <InputGroup>
      <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2"
      />
    </InputGroup>
  </ButtonToolbar>
</>
`;

const nestingCode = `
<ButtonGroup>
  <Button variant="phoenix-secondary">1</Button>
  <Button variant="phoenix-secondary">2</Button>

  <DropdownButton variant="phoenix-secondary" as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
`;

const verticalVariationCode = `
<ButtonGroup vertical>
  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>

  <DropdownButton  variant="primary" as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>

  <Button variant="primary">Button</Button>
  <Button variant="primary">Button</Button>

  <DropdownButton  variant="primary" as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>

  <DropdownButton  variant="primary" as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
`;

const sizingCode = `
<>
  <ButtonGroup size="lg" className="me-2 mb-1">
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
  </ButtonGroup>
  <ButtonGroup className="me-2 mb-1">
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
  </ButtonGroup>
  <ButtonGroup size="sm"  className="me-2 mb-1">
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
  </ButtonGroup>
</>
`;

const sideNavItems: SideNavItem[] = [
  {
    to: 'phoenix_buttons',
    label: 'Phoenix Buttons'
  },
  {
    to: 'solid_buttons',
    label: 'Solid Buttons'
  },
  {
    to: 'soft_buttons',
    label: 'Soft Buttons'
  },
  {
    to: 'outline_buttons',
    label: 'Outline Buttons'
  },
  {
    to: 'button_sizes',
    label: 'Button Sizes'
  },
  {
    to: 'buttons_with_icons_and_label',
    label: 'Buttons with icons and label'
  },
  {
    to: 'disabled_state',
    label: 'Disabled state'
  },
  {
    to: 'button_loading_state',
    label: 'Button loading state'
  },
  {
    to: 'checkbox_radio',
    label: 'Checkbox / Radio'
  },
  {
    to: 'uncontrolled',
    label: 'Uncontrolled'
  },
  {
    to: 'controlled',
    label: 'Controlled'
  },
  {
    to: 'button_group',
    label: 'Button Group',
    subItem: [
      {
        to: 'basic_example',
        label: 'Basic example'
      },
      {
        to: 'button_toolbar',
        label: 'Button toolbar'
      },
      {
        to: 'button_toolbar_with_input_group',
        label: 'Button toolbar with input group'
      },
      {
        to: 'sizing',
        label: 'Sizing'
      },
      {
        to: 'nesting',
        label: 'Nesting'
      },
      {
        to: 'vertical_variation',
        label: 'Vertical variation'
      }
    ]
  }
];

const ButtonExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Buttons"
        description={`Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.`}
        link={{
          text: 'Buttons on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/buttons/`
        }}
      />

      <DocPagesLayout sideNavItems={sideNavItems}>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Phoenix Buttons" />
          <PhoenixDocCard.Body code={phoenixButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Solid Buttons" />
          <PhoenixDocCard.Body code={solidButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Soft Buttons" />
          <PhoenixDocCard.Body code={softButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Outline Buttons" />
          <PhoenixDocCard.Body code={outlineButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button Sizes">
            <p className="mb-0">
              Fancy larger or smaller buttons? Add <code>size="lg"</code>,
              <code>size="sm"</code> for additional sizes.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={buttonSizesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Buttons with icons and label">
            <p className="mb-0">
              Add <code>startIcon</code>, <code>endIcon</code> props to add
              icons in <code>Button</code>
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={buttonWithIconCode}
            scope={{ FontAwesomeIcon, FeatherIcon, Button }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Disabled state">
            <p className="mb-0">
              Make buttons look inactive by adding the <code>disabled</code>{' '}
              prop to.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={disableButtonsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button loading state">
            <p className="mb-1">
              When activating an asynchronous action from a button it is a good
              UX pattern to give the user feedback as to the loading state, this
              can easily be done by updating your <code>&lt;Button /&gt;</code>s
              props from a state change like below.
            </p>
            <p className="mb-0">
              To position loading spinner, use{' '}
              <code>loadingPosition: 'start' | 'end'</code> prop
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={loadingButtonsCode} scope={{ Button }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Checkbox / Radio">
            <p className="mb-0">
              Buttons can also be used to style <code>checkbox</code> and{' '}
              <code>radio</code> form elements. This is helpful when you want a
              toggle button that works neatly inside an HTML form.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={toggleBtnCode} scope={{ Button }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Uncontrolled">
            <p className="mb-0">
              For a nicer experience with checked state management use the
              <code>&lt;ToggleButtonGroup&gt;</code> instead of a{' '}
              <code>&lt;ButtonGroup&gt;</code> component. The group behaves as a
              form component, where the <code>value</code> is an array of the
              selected
              <code>value</code>s for a named checkbox group or the single
              toggled
              <code>value</code> in a similarly named radio group.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={unControlledCode} scope={{ Button }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Controlled" />
          <PhoenixDocCard.Body code={controlledCode} scope={{ Button }} />
        </PhoenixDocCard>

        <DocPageHeader
          title="Button Group"
          id="button_group"
          description="Group a series of buttons together on a single line or stack them in a vertical column."
          link={{
            text: 'Buttons on react-bootstrap',
            url: `${
              process.env.REACT_APP_RB_URL_PREFIX || ''
            }/components/button-group/`
          }}
        />

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Basic example">
            <p className="mb-0">
              Wrap a series of <code>&lt;Button&gt;</code>s in a{' '}
              <code>&lt;ButtonGroup&gt;</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={buttonGroupExampleCode}
            scope={{ Button }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button toolbar">
            <p className="mb-0">
              Combine sets of <code>&lt;ButtonGroup&gt;</code>s into a{' '}
              <code>&lt;ButtonToolbar&gt;</code> for more complex components.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={btnToolbarCode} scope={{ Button }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button toolbar with input group">
            <p className="mb-0">
              Feel free to mix input groups with button groups in your toolbars.
              Similar to the example above, you’ll likely need some utilities
              though to space things properly.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={inputGroupExampleCode}
            scope={{ Button }}
          />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizing">
            <p className="mb-0">
              Instead of applying button sizing props to every button in a
              group, just add <code>size </code> prop to the{' '}
              <code>&lt;ButtonGroup&gt;</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={sizingCode} scope={{ Button }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Nesting">
            <p className="mb-0">
              You can place other button types within the
              <code>&lt;ButtonGroup&gt;</code> like{' '}
              <code>&lt;DropdownButton&gt;</code>s.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={nestingCode} scope={{ Button }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Vertical variation">
            <p className="mb-0">
              Make a set of buttons appear vertically stacked rather than
              horizontally, by adding
              <code>vertical</code> to the <code>&lt;ButtonGroup&gt;</code>.
              <strong> Split button dropdowns are not supported here.</strong>
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body
            code={verticalVariationCode}
            scope={{ Button }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ButtonExample;
