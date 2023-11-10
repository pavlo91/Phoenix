import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <Form.Label>Example Range</Form.Label>
  <Form.Range />
</>
`;

const minmaxCode = `
<>
  <Form.Label>Range min and max</Form.Label>
  <Form.Range 
    min='0'
    max='5'
  />
</>
`;

const stepsCode = `
<>
  <Form.Label>Range Step</Form.Label>
  <Form.Range 
    min='0'
    max='5'
    step="0.5"
  />
</>
`;

const RangeExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Range"
        description="Use our custom range inputs for consistent cross-browser styling and built-in customization."
        link={{
          text: 'Range on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/forms/range/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Overview">
            <p className="mb-0">
              Create custom <code> &lt;input type="range"&gt;</code> controls
              with <code>&lt;FormRange&gt;</code>. The track (the background)
              and thumb (the value) are both styled to appear the same across
              browsers. As only Firefox supports “filling” their track from the
              left or right of the thumb as a means to visually indicate
              progress, we do not currently support it.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Min and max">
            <p className="mb-0">
              Range inputs have implicit values for <code>min</code> and{' '}
              <code>max</code>—<code>0</code> and <code>100</code>,
              respectively. You may specify new values for those using the{' '}
              <code>min</code> and <code>max</code> attributes.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={minmaxCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Steps" />
          <PhoenixDocCard.Body code={stepsCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default RangeExample;
