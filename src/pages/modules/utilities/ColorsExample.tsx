import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<>
  <p className="text-primary">text-primary</p>
  <p className="text-secondary">text-secondary</p>
  <p className="text-success">text-success</p>
  <p className="text-info">text-info</p>
  <p className="text-warning">text-warning</p>
  <p className="text-danger">text-danger</p>
</>`;

const howItWorksCode = `
    .text-primary {
        --bs-text-opacity: 1;
        color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
    }  
`;

const opacityCode = `
<>
  <div className="text-primary mb-1"> This is default primary text </div>
  <div
      className="text-primary mb-1"
      style={{ '--phoenix-text-opacity': 0.5 }}
  >
      This is 50% opacity primary text using inline css
  </div>
  <div className="text-primary text-opacity-75 mb-1">
      This is 75% opacity primary text using utility class
  </div>
  <div className="text-primary text-opacity-50 mb-1">
      This is 50% opacity primary text using utility class
  </div>
  <div className="text-primary text-opacity-25 mb-1">
     This is 25% opacity primary text using utility class
  </div>
</>
`;

const ColorsExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Color"
        description="Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Colors" />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <DocPageHeader title="Opacity" className="mb-5">
          <p className="mb-0">
            Color opacity allows for real-time color changes without compilation
            and dynamic alpha transparency changes.
          </p>
        </DocPageHeader>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="How it works" noPreview>
            <p className="text-700 mb-0">
              Consider our default <code>.text-primary </code>utility.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={howItWorksCode} hidePreview />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Opacity Example" />

          <PhoenixDocCard.Body code={opacityCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default ColorsExample;
