import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import PhoenixDocProvider from 'providers/PhoenixDocProvider';

const horizontalCode = `
  <Nav onSelect={(selectedKey) => alert('selected ' + selectedKey)}>
    <Nav.Item>
      <Nav.Link>Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
`;

const verticalCode = `
<Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>
`;

const pillsCode = `
<Nav variant="pills" defaultActiveKey="link-1">
  <Nav.Item>
    <Nav.Link  eventKey="link-1">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
`;

const fillsCode = `
<Nav fill variant="pills" defaultActiveKey="link-1">
  <Nav.Item>
    <Nav.Link eventKey="link-1">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
`;

const justifyCode = `
<Nav justify variant="pills" defaultActiveKey="link-1">
  <Nav.Item>
    <Nav.Link eventKey="link-1">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
`;

const dropdownsCode = `
const NavDropdownExample = () => {
  const handleSelect = (eventKey: string | null) => alert('selected' + eventKey);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
render(<NavDropdownExample />)
`;

const NavsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Navs"
        description="Documentation and examples of how to use Bootstrap’s included navigation components."
        link={{
          text: 'Navs on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/components/navs/`
        }}
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal" />
          <PhoenixDocCard.Body code={horizontalCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Vertical" />
          <PhoenixDocCard.Body code={verticalCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Pills" />
          <PhoenixDocCard.Body code={pillsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard noProvider className="mb-4">
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Fill and justify" />
            <PhoenixDocCard.Body code={fillsCode} />
          </PhoenixDocProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header className="border-bottom-0">
              <p className="mb-0">
                If you want each NavItem to be the same size use{' '}
                <code>justify</code>.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={justifyCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Dropdowns" />
          <PhoenixDocCard.Body code={dropdownsCode} noInline />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default NavsExample;
