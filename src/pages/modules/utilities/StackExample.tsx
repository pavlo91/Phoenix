import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const flexCode = `<>
  <Stack className="p-2 bg-200 mb-2">Flexbox container!</Stack>
  <Stack className="d-inline-flex p-2 bg-200">
    Inline flexbox container!
  </Stack>
</>`;

const verticalCode = `
<>    
  <Stack gap={3}>
      <div className="bg-light border">First item</div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
  </Stack>
</>`;

const horizontalCode = `
<>    
  <Stack direction="horizontal" gap={3}>
      <div className="bg-light border">First item</div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
  </Stack>
</>`;

const buttonCode = `
<>    
  <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="phoenix-secondary">Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
  </Stack>
</>`;

const StackExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Stacks"
        description="Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever."
        link={{
          text: 'Stacks on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/layout/stack`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Flex Behaviors">
            <p>
              Stacks are vertical by default and stacked items are full-width by
              default. Use the <code>gap</code>
              prop to add space between items.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Vertical">
            <p className="mb-0">
              Stacks are vertical by default and stacked items are full-width by
              default. Use the <code>gap</code>
              prop to add space between items.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={verticalCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal">
            <p className="mb-0">
              Use <code>direction="horizontal"</code> for horizontal layouts.
              Stacked items are vertically centered by default and only take up
              their necessary width. Use the <code>gap</code> prop to add space
              between items.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={horizontalCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Stack buttons">
            <p className="mb-0">
              Use a vertical <code>Stack</code> to stack buttons and other
              elements:
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={buttonCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default StackExample;
