import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
    <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
    <div className="shadow-sm p-3 mb-5 bg-light rounded">Small shadow</div>
    <div className="shadow p-3 mb-5 bg-light rounded">Regular shadow</div>
    <div className="shadow-lg p-3 mb-5 bg-light rounded">Larger shadow</div>
</>`;

const ShadowsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Shadows"
        description="Add or remove shadows to elements with box-shadow utilities."
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0 text-800">
              While shadows on components are disabled by default in Bootstrap
              and can be enabled via <code>$enable-shadows</code>, you can also
              quickly add or remove a shadow with our <code>box-shadow</code>{' '}
              utility classes. Includes support for <code>.shadow-none</code>{' '}
              and three default sizes (which have associated variables to
              match).
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ShadowsExample;
