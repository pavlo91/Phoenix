import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
    .visible
    .invisible
`;

const VisibilityExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Visibility"
        description="Control the visibility, without modifying the display, of elements with visibility utilities."
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example" noPreview>
            <p className="mb-0 text-800">
              Set the <code>visibility </code>of elements with our visibility
              utilities. These utility classes do not modify the display value
              at all and do not affect layout – .invisible elements still take
              up space in the page. Content will be hidden both visually and for
              assistive technology/screen reader users
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} hidePreview />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default VisibilityExample;
