import Badge from 'components/base/Badge';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import PhoenixDocProvider from 'providers/PhoenixDocProvider';
import { Link } from 'react-router-dom';

const alignmentCode = `
<>
  <p className="text-start">Start aligned text on all viewport sizes.</p>
  <p className="text-center">Center aligned text on all viewport sizes.</p>
  <p className="text-end">End aligned text on all viewport sizes.</p>
  <p className="text-sm-start">Start aligned text on viewports sized SM (small) or wider.</p>
  <p className="text-md-start">Start aligned text on viewports sized MD (medium) or wider.</p>
  <p className="text-lg-start">Start aligned text on viewports sized LG (large) or wider.</p>
  <p className="text-xl-start">Start aligned text on viewports sized XL (extra-large) or wider.</p>
</>`;

const textWrappingCode = `
<>
  <Badge bg="primary" className="text-wrap mb-3" style={{ width: '6rem' }}>
      This text should wrap.
  </Badge>
  <div className="text-nowrap bg-300" style={{ width: '8rem' }}>
      This text should overflow the parent.
  </div>
</>
`;

const textBreakCode = `
<p className="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
`;

const textTransformCode = `
<>
  <p className="text-lowercase">Lowercased text.</p>
  <p className="text-uppercase">Uppercased text.</p>
  <p className="text-capitalize">CapiTaliZed text.</p>
</>
`;

const fontSizeCode = `
<>
  <p className="fs-1">.fs-1</p>
  <p className="fs-2">.fs-2</p>
  <p className="fs-3">.fs-3</p>
  <p className="fs-4">.fs-4</p>
  <p className="fs-5">.fs-5</p>
  <p className="fs-6">.fs-6</p>
  <p className="fs-7">.fs-7</p>
  <p className="fs-8">.fs-8</p>
  <p className="fs-9">.fs-9</p>
  <p className="fs-10">.fs-10</p>
  <p className="fs-11">.fs-11</p>
</>
`;

const responsiveFontSizeCode = `
<>
  <h6 className="fs-sm-1">.fs-sm-0</h6>
  <h6 className="fs-md-2">.fs-md-1</h6>
  <h6 className="fs-lg-3">.fs-lg-2</h6>
  <h6 className="fs-xl-4">.fs-xl-3</h6>
</>
`;

const lineHeightCode = `
<>
  <p className="lh-1">
    This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.
  </p>
  <p className="lh-sm">
    This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
  <p className="lh-base">
    This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
  <p className="lh-lg">
    This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
</>
`;

const fontFamilyCode = `<>
  <div className="text-sans-serif">Poppins</div>
  <div className="text-base">Open Sans</div>
  <code className="text-monospace">Monospace</code>
</>`;

const headingCode = `<>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
</>`;

const headingWithClassesCode = `<>
  <p className="h1">h1. Heading</p>
  <p className="h2">h2. Heading</p>
  <p className="h3">h3. Heading</p>
  <p className="h4">h4. Heading</p>
  <p className="h5">h5. Heading</p>
  <p className="h6">h6. Heading</p>
</>`;

const fontWeightCode = `<>
  <div className="fw-light">Hello World 300</div>
  <div className="fw-normal">Hello World 400</div>
  <div className="fw-medium">Hello World 500</div>
  <div className="fw-semi-bold">Hello World 600</div>
  <div className="fw-bold">Hello World 700</div>
  <div className="fw-bolder">Hello World 800</div>
  <div className="fw-black">Hello World 900</div>
</>`;

const displayCode = `<>
  <h1 className="display-1 mb-3">Display 1</h1>
  <h1 className="display-2 mb-3">Display 2</h1>
  <h1 className="display-3 mb-3">Display 3</h1>
  <h1 className="display-4 mb-3">Display 4</h1>
  <h1 className="display-5 mb-3">Display 5</h1>
  <h1 className="display-6 mb-3">Display 6</h1>
</>`;

const resetCode = `
<p className="text-muted">
  Muted text with a <a href="#!" className="text-reset">reset link</a>.
</p>
`;
const textDecorationCode = `
<>
  <p className="text-decoration-underline">This text has a line underneath it.</p>
  <p className="text-decoration-line-through">This text has a line going through it.</p>
  <Link className="text-decoration-none" href="#!">This link has its text decoration removed</Link>
</>
`;

const TypographyExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Typography"
        description="Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Text alignment"
            description="Easily realign text to components with text alignment classes. For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system."
          />
          <PhoenixDocCard.Body code={alignmentCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Text wrapping and overflow">
            <p className="mb-0 text-800">
              Wrap text with a <code>.text-wrap</code> class. Prevent text from
              wrapping with a <code>.text-nowrap</code> class.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={textWrappingCode} scope={{ Badge }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Word break">
            <p className="mb-0 text-800">
              Prevent long strings of text from breaking your component's layout
              by using <code>.text-break</code> to set{' '}
              <code>word-wrap: break-word</code> and{' '}
              <code>word-break: break-word</code>. We use <code>word-wrap</code>{' '}
              instead of the more common <code>overflow-wrap</code> for wider
              browser support, and add the deprecated{' '}
              <code>word-break: break-word</code> to avoid issues with flex
              containers.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={textBreakCode} />
        </PhoenixDocCard>

        <PhoenixDocCard noProvider className="mb-4">
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Font size">
              <p className="mb-0 text-800">
                Quickly change the <code>font-size</code> of text. While our
                heading classes (e.g., <code>.h1</code>–<code>.h6</code>) apply{' '}
                <code>font-size</code>, <code>font-weight</code>, and{' '}
                <code>line-height</code>, these utilities <em>only</em> apply{' '}
                <code>font-size</code>. Sizing for these utilities matches
                HTML’s heading elements, so as the number increases, their size
                decreases.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={fontSizeCode} />
          </PhoenixDocProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header className="border-bottom-0">
              <p className="mb-0 text-800">
                Use{' '}
                <code>
                  fs-{`{breakpoint}`}-{`{value}`}
                </code>{' '}
                classes for responsive font classes.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={responsiveFontSizeCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Font weight">
            <p className="mb-0 text-800">
              Quickly change the <code>font-weight</code> or{' '}
              <code>font-style</code> of text with these utilities.{' '}
              <code>font-style</code> utilities are abbreviated as{' '}
              <code>.fst-*</code> and <code>font-weight</code> utilities are
              abbreviated as <code>.fw-*</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={fontWeightCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Line height">
            <p className="mb-0 text-800">
              Change the line height with <code>.lh-*</code> utilities.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={lineHeightCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Heading" />
          <PhoenixDocCard.Body code={headingCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Heading classes" />
          <PhoenixDocCard.Body code={headingWithClassesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Display" />
          <PhoenixDocCard.Body code={displayCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Font family"
            description="You have three font-family helper classes available to use."
          />
          <PhoenixDocCard.Body code={fontFamilyCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Reset color">
            <p className="mb-0 text-800">
              Reset a text or link's color with <code>.text-reset</code>, so
              that it inherits the color from its parent.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={resetCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Text transform"
            description="Transform text in components with text capitalization classes."
          />
          <PhoenixDocCard.Body code={textTransformCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Text decoration"
            description="Decorate text in components with text decoration classes."
          />
          <PhoenixDocCard.Body code={textDecorationCode} scope={{ Link }} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default TypographyExample;
