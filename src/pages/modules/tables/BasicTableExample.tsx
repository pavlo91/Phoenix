import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </Table>
`;

const smTableCode = `
  <Table bordered hover size='sm' >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </Table>
`;

const darkTableCode = `
  <Table bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </Table>
`;

const stripedColumnTableCode = `
  <Table striped='columns'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </Table>
`;

const alwaysResponsiveTableCode = `
  <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </Table>
`;

const breakpointSpecificTableCode = `
  <Table responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
  </Table>
`;

const BasicTableExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Tables"
        description="Documentation and examples for opt-in styling of tables with React Bootstrap."
        link={{
          text: 'Tables on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/components/table/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              Use the <code>striped</code>, <code>bordered</code> and{' '}
              <code>hover</code> props to customise the table.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Small Table">
            <p className="mb-0">
              Use <code>size="sm"</code> to make tables compact by cutting cell
              padding in half.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={smTableCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Dark Table">
            <p className="mb-0">
              Use <code>variant="dark"</code> to invert the colors of the table
              and get light text on a dark background.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={darkTableCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-5">
          <PhoenixDocCard.Header title="Striped columns">
            <p className="mb-0">
              Use <code>striped="columns"</code> to add zebra-striping to any
              table column.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={stripedColumnTableCode} />
        </PhoenixDocCard>

        <DocPageHeader
          title="Responsive Tables"
          description="Responsive tables allow tables to be scrolled horizontally with ease."
          className="mb-5"
        />

        <PhoenixDocCard className="mb-5">
          <PhoenixDocCard.Header title="Always responsive">
            <p className="mb-0">
              Across every breakpoint, use <code>responsive</code> for
              horizontally scrolling tables. Responsive tables are wrapped
              automatically in a <code>div</code>. The following example has 12
              columns that are scrollable horizontally.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={alwaysResponsiveTableCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-5">
          <PhoenixDocCard.Header title="Breakpoint specific">
            <p className="mb-0">
              Use <code>responsive="sm"</code>, <code>responsive="md"</code>,{' '}
              <code>responsive="lg"</code>, or <code>responsive="xl"</code>
              as needed to create responsive tables up to a particular
              breakpoint. From that breakpoint and up, the table will behave
              normally and not scroll horizontally.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={breakpointSpecificTableCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BasicTableExample;
