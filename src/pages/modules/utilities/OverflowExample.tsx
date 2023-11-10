import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<div className="d-flex overflow-docs">
    <div className="overflow-auto">
      This is an example of using <code>.overflow-auto </code>on an element with set width
      and height dimensions. By design, this content will vertically scroll.
    </div>
    <div className="overflow-hidden">
      This is an example of using <code>.overflow-auto </code>on an element with set width
      and height dimensions. By design, this content will vertically scroll.
    </div>
    <div className="overflow-visible">
      This is an example of using <code>.overflow-visible </code>on an element with set
      width and height dimensions. By design, this content will vertically scroll.
    </div>
    <div className="overflow-scroll">
      This is an example of using <code>.overflow-scroll </code>on an element with set width
      and height dimensions. By design, this content will vertically scroll.
    </div>
</div>
`;

const OverflowExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Overflow"
        description="Use these shorthand utilities for quickly configuring how content overflows an element."
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Example"
            description="Adjust the overflow property on the fly with four default values and classes. These classes are not responsive by default."
          />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default OverflowExample;
