import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const additiveBorderCode = `
<div className='border-component'>
  <span className="border" />
  <span className="border-top" />
  <span className="border-end" />
  <span className="border-bottom" />
  <span className="border-start" />
</div>`;

const subtrativeBorderCode = `
<div className='border-component'>
  <span className="border border-0" />
  <span className="border border-top-0" />
  <span className="border border-right-0" />
  <span className="border border-bottom-0" />
  <span className="border border-left-0" />
</div>`;

const borderColorCode = `
<div className='border-component'>
  <span className="border border-primary"></span>
  <span className="border border-secondary"></span>
  <span className="border border-info"></span>
  <span className="border border-success"></span>
  <span className="border border-warning"></span>
  <span className="border border-danger"></span>
  <div className="w-100"></div>
  <span className="border border-black"></span>
  <span className="border border-dark"></span>
  <span className="border border-1100"></span>
  <span className="border border-1000"></span>
  <span className="border border-900"></span>
  <span className="border border-800"></span>
  <span className="border border-700"></span>
  <span className="border border-600"></span>
  <span className="border border-500"></span>
  <span className="border border-400"></span>
  <span className="border border-300"></span>
  <span className="border border-200"></span>
  <span className="border border-100"></span>
  <span className="border border-light"></span>
  <span className="border border-white"></span>
</div>`;

const borderSizesCode = `
<div className='border-component'>
  <span className="rounded-top"></span>
  <span className="rounded-top-lg"></span>
  <span className="rounded-end"></span>
  <span className="rounded-end-lg"></span>
  <span className="rounded-bottom"></span>
  <span className="rounded-bottom-lg"></span>
  <span className="rounded-start"></span>
  <span className="rounded-start-lg"></span>
</div>
`;

const borderRadiusCode = `
<div className='border-component'>
  <span className="rounded-0"></span>
  <span className="rounded-1"></span>
  <span className="rounded-2"></span>
  <span className="rounded-3"></span>
  <span className="rounded-circle"></span>
  <span className="rounded-pill" style={{ height:'75px',width:'150px' }}></span>
</div>`;

const borderStyleCode = `
<div className='border-component'>
  <span className="border border-dashed"></span>
  <span className="border-dashed border-top"></span>
  <span className="border-dashed border-end"></span>
  <span className="border-dashed border-bottom"></span>
  <span className="border-dashed border-left"></span>
</div>
`;

const borderWidthCode = `
<div className='border-component'>
  <span className="border border-1"></span>
  <span className="border border-2"></span>
  <span className="border border-3"></span>
  <span className="border border-4"></span>
  <span className="border border-5"></span>
</div>
`;

const BorderExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Borders"
        description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Border" noPreview />
          <PhoenixDocCard.Body>
            <p>
              The classes are named using the format{' '}
              <code>border-{`{side}`}</code> for <code>xs</code> and{' '}
              <code>
                border-{`{side}`}-{`{breakpoint}`}
              </code>{' '}
              for <code>sm</code>, <code>md</code>, <code>lg</code>,{' '}
              <code>xl</code>, and <code>xxl</code>.
            </p>
            <p>
              Where<em> side</em> is one of:
            </p>
            <ul>
              <li>
                <code>top</code> - for classes that set style for{' '}
                <code>border-top</code>
              </li>
              <li>
                <code>bottom</code> - for classes that set style for{' '}
                <code>border-bottom</code>
              </li>
              <li>
                <code>left</code> - for classes that set style for{' '}
                <code>border-start</code>
              </li>
              <li>
                <code>right</code> - for classes that set style for{' '}
                <code>border-right</code>
              </li>
              <li>
                <code>x</code> - for classes that set both<code>*-left</code>{' '}
                and <code>*-right</code>
              </li>
              <li>
                <code>y</code> - for classes that set both<code>*-top</code> and{' '}
                <code>*-bottom</code>
              </li>
              <li>
                blank - for classes that set the<code>border</code> style on all
                4 side of the element.
              </li>
            </ul>
            <p className="mb-0">
              Use border utilities to quickly style the<code>border </code> of
              an element. Great for images, buttons, or any other element.
            </p>
          </PhoenixDocCard.Body>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Additive" />
          <PhoenixDocCard.Body code={additiveBorderCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Subtractive" />
          <PhoenixDocCard.Body code={subtrativeBorderCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Border Color"
            description="Change the border color using utilities built on our theme colors."
          />
          <PhoenixDocCard.Body code={borderColorCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Border Width" />
          <PhoenixDocCard.Body code={borderWidthCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Border Radius"
            description="Add classes to an element to easily round its corners."
          />
          <PhoenixDocCard.Body code={borderRadiusCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Border Sizes"
            description="Use the scaling classes for larger or smaller rounded corners. Sizes range from 0 to 3, and can be configured by modifying the utilities API."
          />
          <PhoenixDocCard.Body code={borderSizesCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Border Dashed" />
          <PhoenixDocCard.Body code={borderStyleCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BorderExample;
