import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<div className='opacity-docs'>
  <div className="opacity-100 text-white">100%</div>
  <div className="opacity-75 text-white">75%</div>
  <div className="opacity-50 text-white">50%</div>
  <div className="opacity-25 text-white">25%</div>
</div>`;

const OpacityExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Opacity"
        description="Control the opacity of elements."
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0 text-800">
              The opacity property sets the opacity level for an element. The
              opacity level describes the transparency level, where 1 is not
              transparent at all, .5 is 50% visible, and 0 is completely
              transparent. <br />
              Set the opacity of an element using .opacity-{`{value}`}{' '}
              utilities.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default OpacityExample;
