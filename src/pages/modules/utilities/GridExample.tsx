import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import PhoenixDocProvider from 'providers/PhoenixDocProvider';

const containerCode = `
<Container>
    <Row className="p-2 bg-200 border border-300">
        <Col>1 of 1</Col>
    </Row>
</Container>
`;

const fluidCode = `
<Container fluid>
    <Row className="p-2 bg-200 border border-300">
        <Col>1 of 1</Col>
    </Row>
</Container>
`;

const fluidBreakpointsCode = `
<Container fluid='md'>
    <Row className="p-2 bg-200 border border-300">
        <Col>1 of 1</Col>
    </Row>
</Container>
`;

const responsiveGridsCode = `
<Container>
  <Row className="p-2 mb-2">
    <Col sm={8} className="p-2 bg-200 border border-300">sm=8</Col>
    <Col sm={4} className="p-2 bg-200 border border-300">sm=4</Col>
  </Row>
  <Row className="p-2">
    <Col sm className="p-2 bg-200 border border-300">sm=true</Col>
    <Col sm className="p-2 bg-200 border border-300">sm=true</Col>
    <Col sm className="p-2 bg-200 border border-300">sm=true</Col>
  </Row>
</Container>`;

const columnWidthCode = `
<Container>
    <Row className="p-2 mb-1">
        <Col className="p-2 bg-200 border border-300">
          1 of 3
        </Col>
        <Col className="p-2 bg-200 border border-300">
          2 of 3
        </Col>
        <Col className="p-2 bg-200 border border-300">
          3 of 3
        </Col>
    </Row>

    <Row className="p-2 mb-1">
        <Col xs={3} className="p-2 bg-200 border border-300">
          xs=3
        </Col>
        <Col xs={4} className="p-2 bg-200 border border-300">
          xs=4
        </Col>
        <Col xs={5} className="p-2 bg-200 border border-300">
          xs=5
        </Col>
    </Row>

    <Row className="p-2">
        <Col className="p-2 bg-200 border border-300">1 of 3</Col>
        <Col xs={5} className="p-2 bg-200 border border-300">2 of 3 (wider)</Col>
        <Col className="p-2 bg-200 border border-300">3 of 3</Col>
    </Row>
</Container>
`;

const responsiveGridsMixCode = `
<Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row className="p-2 mb-1">
    <Col xs={12} md={8} className="p-2 bg-200 border border-300">
      xs=12 md=8
    </Col>
    <Col xs={6} md={4} className="p-2 bg-200 border border-300">
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row className="p-2 mb-1">
    <Col xs={6} md={4} className="p-2 bg-200 border border-300">
      xs=6 md=4
    </Col>
    <Col xs={6} md={4} className="p-2 bg-200 border border-300">
      xs=6 md=4
    </Col>
    <Col xs={6} md={4} className="p-2 bg-200 border border-300">
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row className="p-2">
    <Col xs={6} className="p-2 bg-200 border border-300">xs=6</Col>
    <Col xs={6} className="p-2 bg-200 border border-300">xs=6</Col>
  </Row>
</Container>
`;

const orderCode = `
<Container>
  <Row className="p-2">
    <Col xs className="p-2 bg-200 border border-300">First, but unordered</Col>
    <Col xs={{ order: 12 }} className="p-2 bg-200 border border-300">Second, but last</Col>
    <Col xs={{ order: 1 }} className="p-2 bg-200 border border-300">Third, but second</Col>
  </Row>
</Container>`;

const offsetCode = `
<Container>
  <Row className="p-2">
    <Col md={4} className="p-2 bg-200 border border-300">md=4</Col>
    <Col md={{ span: 4, offset: 4 }} className="p-2 bg-200 border border-300">{"md={{ span: 4, offset: 4 }}"}</Col>
  </Row>
  <Row className="p-2">
    <Col md={{ span: 3, offset: 3 }} className="p-2 bg-200 border border-300">{"md={{ span: 3, offset: 3 }}"}</Col>
    <Col md={{ span: 3, offset: 3 }} className="p-2 bg-200 border border-300">{"md={{ span: 3, offset: 3 }}"}</Col>
  </Row>
  <Row className="p-2">
    <Col md={{ span: 6, offset: 3 }} className="p-2 bg-200 border border-300">{"md={{ span: 6, offset: 3 }}"}</Col>
  </Row>
</Container>`;

const columnWidthInRowCode = `<Container>
  <Row xs={2} md={4} lg={6} className="p-2">
    <Col className="p-2 bg-200 border border-300">1 of 2</Col>
    <Col className="p-2 bg-200 border border-300">2 of 2</Col>
  </Row>
  <Row xs={1} md={2} className="p-2">
    <Col className="p-2 bg-200 border border-300">1 of 3</Col>
    <Col className="p-2 bg-200 border border-300">2 of 3</Col>
    <Col className="p-2 bg-200 border border-300">3 of 3</Col>
  </Row>
  <Row xs="auto" className="p-2">
    <Col className="p-2 bg-200 border border-300">1 of 3</Col>
    <Col className="p-2 bg-200 border border-300">2 of 3</Col>
    <Col className="p-2 bg-200 border border-300">3 of 3</Col>
  </Row>
</Container>`;

const widthAutoCode = `
  <Container>
      <Row className="justify-content-md-center p-2">
          <Col xs lg="2" className="p-2 bg-200 border border-300">
            1 of 3
          </Col>
          <Col md="auto" className="p-2 bg-200 border border-300">auto width content</Col>
          <Col xs lg="2" className="p-2 bg-200 border border-300">
            3 of 3
          </Col>
      </Row>
      <Row>
          <Col className="p-2 bg-200 border border-300">1 of 3</Col>
          <Col md="auto" className="p-2 bg-200 border border-300">auto width content</Col>
          <Col xs lg="2" className="p-2 bg-200 border border-300">
            3 of 3
          </Col>
      </Row>
  </Container>
`;

const GridExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Grid system"
        description="Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together."
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Container">
            <p className="mb-0 text-800">
              Containers provide a means to center and horizontally pad your
              site’s contents. Use <code>Container</code> for a responsive pixel
              width.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={containerCode} />
        </PhoenixDocCard>

        <PhoenixDocCard noProvider className="mb-4">
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Fluid Container">
              <p className="mb-0 text-800">
                You can use <code>&lt;Container fluid /&gt;</code> for width:
                100% across all viewport and device sizes.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={fluidCode} />
          </PhoenixDocProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header className="border-bottom-0">
              <p className="mb-0 text-800">
                You can set breakpoints for the <code>fluid</code> prop. Setting
                it to a breakpoint (<code>sm, md, lg, xl, xxl</code>) will set
                the
                <code>Container</code> as fluid until the specified breakpoint.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={fluidBreakpointsCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard noProvider className="mb-4">
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Column Width">
              <p className="mb-0 text-800">
                When no column widths are specified the <code>Col</code>{' '}
                component will render equal width columns.you can set the width
                of columns and have the sibling columns automatically resize
                around it.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={columnWidthCode} />
          </PhoenixDocProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header className="border-bottom-0">
              <p className="mb-0 text-800">
                Set the column value (for any breakpoint size) to{' '}
                <code>"auto"</code> to size columns based on the natural width
                of their content.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={widthAutoCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard noProvider className="mb-4">
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Responsive grids">
              <p className="mb-0 text-800">
                The <code>Col</code> lets you specify column widths across 6
                breakpoint sizes (<code>xs, sm, md, lg, xl and xxl</code>). For
                every breakpoint, you can specify the amount of columns to span,
                or set the prop to <code>&lt;Col lg={true} /&gt;</code> for auto
                layout widths.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={responsiveGridsCode} />
          </PhoenixDocProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header
              className="border-bottom-0"
              description="You can also mix and match breakpoints to create different grids depending on the screen size."
            />
            <PhoenixDocCard.Body code={responsiveGridsMixCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Order">
            <p className="mb-0 text-800">
              You can use the <code>order</code> property to control the visual
              order of your content.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={orderCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Offset">
            <p className="mb-0 text-800">
              For offsetting grid columns you can set an <code>offset</code>{' '}
              value or for a more general layout, use the margin class
              utilities.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={offsetCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Setting column widths in Row">
            <p className="mb-0 text-800">
              The <code>Row</code> lets you specify column widths across 5
              breakpoint sizes (<code>xs, sm, md, lg, xl and xxl</code>). For
              every breakpoint, you can specify the amount of columns that will
              fit next to each other. You can also specify <code>auto</code> to
              set the columns to their natural widths.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={columnWidthInRowCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default GridExample;
