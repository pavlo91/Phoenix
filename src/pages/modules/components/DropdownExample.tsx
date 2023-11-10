import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { Col, Row } from 'react-bootstrap';

const exampleCode = `
<Dropdown>
    <Dropdown.Toggle variant="phoenix-primary">
      Dropdown
    </Dropdown.Toggle>
    <Dropdown.Menu className='py-2'>
        <Dropdown.Item href="#/action-1">
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          Another action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          Something else
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">
          Separated link
        </Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
`;
const dropdownBtnCode = `
<DropdownButton id="dropdown-basic-button" title="Dropdown button" variant='phoenix-primary'>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
</DropdownButton>
`;

const btnVariantCode = `
<>
  {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
    (variant) => (
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={'dropdown-variants-' + variant}
        variant={variant.toLowerCase()}
        title={variant}
        className='me-2 mb-2'
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ),
  )}
</>
`;

const splitBtnCode = `
<>
  {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
    (variant) => (
      <SplitButton
        as={ButtonGroup}
        key={variant}
        id={'dropdown-variants-' + variant}
        variant={variant.toLowerCase()}
        title={variant}
        className='me-2 mb-2'
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
    ),
  )}
</>
`;

const sizingCode = `
<>
  <div className="mb-2">
    <DropdownButton
      as={ButtonGroup}
      size='lg'
      title="Large Button"
      className='me-2 mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>

    <DropdownButton
      as={ButtonGroup}
      title="Regular Button"
      className='me-2 mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>

    <DropdownButton
      as={ButtonGroup}
      size='sm'
      title="Small Button"
      className='mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>
  </div>
  <hr/>
  <div className="mb-2">
    <SplitButton
      as={ButtonGroup}
      size='lg'
      title="Large Split Button"
      className='me-2 mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>

    <SplitButton
      as={ButtonGroup}
      title="Regular Split Button"
      className='me-2 mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>

    <SplitButton
      as={ButtonGroup}
      size='sm'
      title="Small Split Button"
      className='mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>
  </div>
</>
`;

const directionCode = `
<>
  <div className="mb-2">
    {['up', 'down', 'start', 'end'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        drop={direction}
        title={'Drop' + direction }
        className='me-2 mb-1'
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ))}
  </div>
  <hr />
  <div>
    {['up', 'down', 'start', 'end'].map((direction) => (
      <SplitButton
        key={direction}
        drop={direction}
        title={'Drop' + direction }
        className='me-2 mb-1'
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
    ))}
  </div>
</>
`;

const dropdownItemsCode = `
<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
`;

const menuAlignMentCode = `
<DropdownButton
  align="end"
  title="Right-aligned menu"
  id="dropdown-menu-align-right"
>
  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
</DropdownButton>
`;

const headerCode = `
<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.Header>Dropdown Header</Dropdown.Header>
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
`;
const dividerCode = `
<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
`;

const responsiveAlignmentCode = `
<>
  <div>
    <DropdownButton
      as={ButtonGroup}
      align={{ lg: 'end' }}
      title="Left-aligned but right aligned when large screen"
      id="dropdown-menu-align-responsive-1"
    >
      <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
      <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
    </DropdownButton>
  </div>
  <div className="mt-2">
    <SplitButton
      align={{ lg: 'start' }}
      title="Right-aligned but left aligned when large screen"
      id="dropdown-menu-align-responsive-2"
    >
      <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
      <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
    </SplitButton>
  </div>
</>
`;

const autoCloseCode = `
<>
  <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true">
      Default Dropdown
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className="d-inline mx-2" autoClose="inside">
    <Dropdown.Toggle id="dropdown-autoclose-inside">
      Clickable Outside
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className="d-inline mx-2" autoClose="outside">
    <Dropdown.Toggle id="dropdown-autoclose-outside">
      Clickable Inside
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className="d-inline mx-2" autoClose={false}>
    <Dropdown.Toggle id="dropdown-autoclose-false">
      Manual Close
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</>

`;

const DropdownExample = () => {
  return (
    <div className="mb-9">
      <DocPageHeader
        title="Dropdowns"
        description="Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin"
        link={{
          text: 'Dropdowns on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/dropdowns/`
        }}
      />

      <DocPagesLayout>
        <Row className="g-3">
          <Col md>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Example" />
              <PhoenixDocCard.Body code={exampleCode} />
            </PhoenixDocCard>
          </Col>
          <Col md>
            <PhoenixDocCard className="mb-4">
              <PhoenixDocCard.Header title="Dropwdown Button" />
              <PhoenixDocCard.Body code={dropdownBtnCode} />
            </PhoenixDocCard>
          </Col>
        </Row>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button Variant" />
          <PhoenixDocCard.Body code={btnVariantCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Button Split" />
          <PhoenixDocCard.Body code={splitBtnCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Sizing" />
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Directions" />
          <PhoenixDocCard.Body code={directionCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Dropdown items">
            <p>
              Historically dropdown menu contents had to be links, but that’s no
              longer the case with v4. Now you can optionally use
              <code>&lt;button&gt;</code> elements in your dropdowns instead of
              just <code>&lt;a&gt;</code>s.
            </p>
            <p className="mb-0">
              You can also create non-interactive dropdown items with{' '}
              <code>&lt;Dropdown.ItemText&gt;</code>. Feel free to style further
              with custom CSS or text utilities.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={dropdownItemsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Menu alignment">
            <p className="mb-0">
              By default, a dropdown menu is aligned to the left, but you can
              switch it by passing <code>align="end"</code> to a{' '}
              <code>&lt;Dropdown&gt;</code>, <code>&lt;DropdownButton&gt;</code>
              , or <code>&lt;SplitButton&gt;</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={menuAlignMentCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Responsive alignment">
            <p className="mb-0">
              If you want to use responsive menu alignment, pass an object
              containing a breakpoint to the
              <code>align</code> prop on the <code>&lt;DropdownMenu&gt;</code>,{' '}
              <code>&lt;DropdownButton&gt;</code>, or{' '}
              <code>&lt;SplitButton&gt;</code>. You can specify{' '}
              <code>start</code> or <code>end</code> for the various
              breakpoints.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={responsiveAlignmentCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Auto Close">
            <p>
              By default, the dropdown menu is closed when selecting a menu item
              or clicking outside of the dropdown menu. This behaviour can be
              changed by using the <code>autoClose</code> property.
            </p>
            <p>
              By default, <code>autoClose</code> is set to the default value{' '}
              <code>true</code> and behaves like expected. By choosing{' '}
              <code>false</code>, the dropdown menu can only be toggled by
              clicking on the dropdown button. <code>inside</code> makes the
              dropdown disappear <strong>only</strong>
              by choosing a menu item and <code>outside</code> closes the
              dropdown menu <strong>only</strong> by clicking outside.
            </p>
            <p className="mb-0">
              <strong>Notice</strong> how the dropdown is toggled in each
              scenario by clicking on the button.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={autoCloseCode} />
        </PhoenixDocCard>

        <Row className="g-3">
          <Col md>
            <PhoenixDocCard className="overflow-visible">
              <PhoenixDocCard.Header title="Dropwdown Headers" />
              <PhoenixDocCard.Body code={headerCode} />
            </PhoenixDocCard>
          </Col>
          <Col md>
            <PhoenixDocCard className="overflow-visible">
              <PhoenixDocCard.Header title="Dropwdown Divider" />
              <PhoenixDocCard.Body code={dividerCode} />
            </PhoenixDocCard>
          </Col>
        </Row>
      </DocPagesLayout>
    </div>
  );
};

export default DropdownExample;
