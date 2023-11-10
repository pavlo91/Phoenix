import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
`;

const horizontalCenteringcode = `
  <div className="mx-auto bg-100" style={{ width: '200px' }}>Centered element</div>
`;

const negativeMargincode = `
  .mt-n1 {
    margin-top: -0.25rem !important;
  }
`;

const gapCode = `
  <div className="d-grid gap-3">
    <div className="p-2 bg-light border">Grid item 1</div>
    <div className="p-2 bg-light border">Grid item 2</div>
    <div className="p-2 bg-light border">Grid item 3</div>
  </div>
`;

const SpacingExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Spacing"
        description="Bootstrap includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element’s appearance."
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Margin and padding" noPreview />
          <PhoenixDocCard.Body hidePreview>
            <p className="mb-0">
              Assign responsive-friendly margin or padding values to an element
              or a subset of its sides with shorthand classes. Includes support
              for individual properties, all properties, and vertical and
              horizontal properties. Classes are built from a default Sass map
              ranging from .25rem to 3rem.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Notations" noPreview />
          <PhoenixDocCard.Body>
            <p>
              The classes are named using the format{' '}
              <code>
                {'{property}'}
                {'{sides}'}-{'{size}'}
              </code>{' '}
              for <code>xs</code> and{' '}
              <code>
                {'{property}'}
                {'{sides}'}-{'{breakpoint}'}-{'{size}'}
              </code>{' '}
              for <code>sm</code>, <code>md</code>, <code>lg</code>,{' '}
              <code>xl</code> and <code>xxl</code>.
            </p>
            <p className="mb-2">
              Where<em> property </em> is one of:
            </p>
            <ul>
              <li>
                <code>m</code> - for classes that set <code>margin</code>
              </li>
              <li>
                <code>p</code> - for classes that set <code>padding</code>
              </li>
            </ul>
            <p className="mb-2">
              Where<em> sides </em> is one of:
            </p>
            <ul>
              <li>
                <code>t</code> - for classes that set <code>margin-top</code> or{' '}
                <code>padding-top</code>
              </li>
              <li>
                <code>b</code> - for classes that set <code>margin-bottom</code>{' '}
                or <code>padding-bottom</code>
              </li>
              <li>
                <code>s</code> - for classes that set <code>margin-left</code>{' '}
                or <code>padding-left</code>
              </li>
              <li>
                <code>e</code> - for classes that set <code>margin-right</code>{' '}
                or <code>padding-right</code>
              </li>
              <li>
                <code>x</code> - for classes that set both <code>*-left</code>{' '}
                and <code>*-right</code>
              </li>
              <li>
                <code>y</code> - for classes that set both <code>*-top</code>{' '}
                and <code>*-bottom</code>
              </li>
              <li>
                blank - for classes that set a <code>margin</code> or{' '}
                <code>padding</code> on all 4 sides of the element
              </li>
            </ul>
            <p>
              Where<em> size </em> is one of: <code>0</code>, <code>1</code>,{' '}
              <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>,{' '}
              <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>,{' '}
              <code>10</code>, <code>11</code>, <code>12</code>, <code>13</code>
              , <code>14</code>, <code>15</code> &amp; <code>auto</code>
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Examples"
            noPreview
            description="Here are some representative examples of these classes:"
          />
          <PhoenixDocCard.Body hidePreview code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Horizontal centering">
            <p className="mb-0 text-800">
              Additionally, Bootstrap also includes an <code>.mx-auto</code>{' '}
              class for horizontally centering fixed-width block level
              content—that is, content that has <code>display: block</code> and{' '}
              <code>a width</code> set—by setting the horizontal margins to{' '}
              <code>auto</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={horizontalCenteringcode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header noPreview title="Negative margins">
            <p className="mb-0 text-800">
              In CSS, <code>margin </code>properties can utilize negative values
              (<code>padding </code>cannot). These negative margins are{' '}
              <strong>disabled </strong>by default, but can be enabled in Sass
              by setting <code>$enable-negative-margins: true</code>. The syntax
              is nearly the same as the default, positive margin utilities, but
              with the addition of <code>n </code>before the requested size.
              Here’s an example class that’s the opposite of <code>.mt-1</code>:
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={negativeMargincode} hidePreview />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Gap">
            <p className="mb-0 text-800">
              When using <code>display: grid</code>, you can make use of{' '}
              <code>gap</code> utilities on the parent grid container. This can
              save on having to add margin utilities to individual grid items
              (children of a <code>display: grid</code> container). Gap
              utilities are responsive by default, and are generated via our
              utilities API, based on the <code>$spacers</code> Sass map.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={gapCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default SpacingExample;
