import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <div className="float-start">Float left on all viewport sizes</div>
  <br />
  <div className="float-end">Float right on all viewport sizes</div>
  <br />
  <div className="float-none">Don't float on all viewport sizes</div>
</>
`;

const responsiveCode = `
<>
  <div className="float-sm-start">Float start on viewports sized SM (small) or wider</div>
  <br />
  <div className="float-md-start">Float start on viewports sized MD (medium) or wider</div>
  <br />
  <div className="float-lg-start">Float start on viewports sized LG (large) or wider</div>
  <br />
  <div className="float-xl-start">Float start on viewports sized XL (extra-large) or wider</div>
  <br />
</>
`;

const FloatExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Float"
        description="Toggle floats on any element, across any breakpoint, using our responsive float utilities"
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Overview">
            <p className="mb-0 text-800">
              These utility classes float an element to the left or right, or
              disable floating, based on the current viewport size using the
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">
                CSS <code>float</code> property
              </a>
              . <code>!important</code> is included to avoid specificity issues.
              These use the same viewport breakpoints as our grid system. Please
              be aware float utilities have no effect on flex items.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Responsive">
            <p className="mb-0 text-800">
              Responsive variations also exist for each <code>float</code> value
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={responsiveCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FloatExample;
