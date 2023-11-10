import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const lightCode = `
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className="me-auto my-2 my-lg-0">
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
        <div className='py-2 bg-light rounded-3'>
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </div>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Disabled
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="light">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
`;

const darkCode = `
<Navbar bg="dark" variant="dark" expand="lg" className='light'>
  <Navbar.Brand className='text-white' href="#">Navbar</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className="me-auto my-2 my-lg-0">
      <Nav.Link className='text-white' href="#action1">Home</Nav.Link>
      <Nav.Link className='text-white' href="#action2">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="navbarScrollingDropdown" className='text-white'>
        <div className='py-2 bg-light dark__bg-1000 rounded-3'>
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </div>
      </NavDropdown>
      <Nav.Link href="#" className='text-white' disabled>
        Disabled
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="phoenix-primary">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
`;

const NavbarExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Navbars"
        description="A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more."
        link={{
          text: 'Navbar on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/components/navbar/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Navbar Light" />
          <PhoenixDocCard.Body code={lightCode} />
        </PhoenixDocCard>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Navbar Dark" />
          <PhoenixDocCard.Body code={darkCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default NavbarExample;
