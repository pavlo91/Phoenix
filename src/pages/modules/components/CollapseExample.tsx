import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant='phoenix-primary'
        className='mb-3'
      >
        Click
      </Button>
      <Collapse in={open}>
        <div>
          <div className="border rounded p-3">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </Collapse>
    </>
  );
}`;

const fadeCode = `function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        variant='phoenix-primary'
        className='mb-3'
      >
        Toggle text
      </Button>
      <Fade in={open}>
        <div>
          <div className="border rounded p-3">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </Fade>
    </>
  );
}`;

const horizontalCode = `function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        variant='phoenix-primary'
        className='mb-3'
      >
        Click
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
}`;

const CollapseExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Collapse"
        description="Toggle the visibility of an element or component with toggle animation."
        link={{
          text: 'Collapse on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/utilities/transitions/#collapse`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Example"
            description="Add a collapse toggle animation to an element or component."
          />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Fade"
            description="Add a fade animation to a child element or component."
          />
          <PhoenixDocCard.Body code={fadeCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Horizontal"
            description="Add a collapse toggle animation to an element or component to transition the width instead of height."
          />
          <PhoenixDocCard.Body code={horizontalCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default CollapseExample;
