import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import PhoenixDocProvider from 'providers/PhoenixDocProvider';

const flexCode = `
<>
  <div className="d-flex p-2 bg-200 mb-2">Flexbox container!</div>
  <div className="d-inline-flex p-2 bg-200">
    Inline flexbox container!
  </div>
</>`;

const flexDirectionRowCode = `<>
  <div className="d-flex p-2 bg-200 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item 1</div>
    <div className="p-2 bg-200 border border-400">Flex item 2</div>
    <div className="p-2 bg-200 border border-400">Flex item 3</div>
  </div>
  <div className="d-flex flex-row-reverse p-2 bg-200 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item 1</div>
    <div className="p-2 bg-200 border border-400">Flex item 2</div>
    <div className="p-2 bg-200 border border-400">Flex item 3</div>
  </div>
  <div className="d-flex flex-lg-row-reverse p-2 bg-200 mb-2">  
    <div className="p-2 bg-200 border border-400">
      Flex Item (<code>flex-direction:row-reverse</code> in <code>lg</code> screen )
    </div>
  </div>
</>`;

const flexDirectionColumnCode = `<>
  <div className="d-flex flex-column p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item 1</div>
    <div className="p-2 bg-200 border border-400">Flex item 2</div>
    <div className="p-2 bg-200 border border-400">Flex item 3</div>
  </div>
  <div className="d-flex flex-column-reverse p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item 1</div>
    <div className="p-2 bg-200 border border-400">Flex item 2</div>
    <div className="p-2 bg-200 border border-400">Flex item 3</div>
  </div>
  <div className="d-flex flex-column flex-lg-column-reverse p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item 1 (<code>column-reverse</code> in <code>lg</code> screen )</div>
    <div className="p-2 bg-200 border border-400">Flex item 2 (<code>column-reverse</code> in <code>lg</code> screen )</div>
    <div className="p-2 bg-200 border border-400">Flex item 3 (<code>column-reverse</code> in <code>lg</code> screen )</div>
  </div>
</>`;

const justifyCode = `
<>
  <div justifyContent='start' className="d-flex justify-content-start bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div justifyContent='end' className="d-flex justify-content-end bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div justifyContent='center' className="d-flex justify-content-center bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div justifyContent='between' className="d-flex justify-content-between bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div justifyContent='around' className="d-flex justify-content-around bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div justifyContent='lg-center' className="d-flex justify-content-lg-center bg-200 p-2 mb-2">  
    <div className="p-2 bg-200 border border-400">Flex item (<code>justify-content:center</code> in <code>lg</code> screen)</div>
  </div>
</>`;

const alignItemsCode = `<>
  <div className="d-flex align-items-start bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex align-items-end bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex align-items-center bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex align-items-baseline bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex align-items-stretch bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex align-items-lg-center bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="p-2 bg-200 border border-400">Flex item (<code>align-items:center</code> in <code>lg</code> screen)</div>
  </div>
</>`;

const alignSelfCode = `<>
  <div className="d-flex bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-200">Flex Item</div>
    <div className="border border-400 p-2 bg-200 align-self-start">Align self start</div>
    <div className="border border-400 p-2 bg-200">Flex Item</div>
  </div>
  <div className="d-flex bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-200">Flex Item</div>
    <div className="border border-400 p-2 bg-200 align-self-end">Align self end</div>
    <div className="border border-400 p-2 bg-200">Flex Item</div>
  </div>
  <div className="d-flex bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-200">Flex Item</div>
    <div className="border border-400 p-2 bg-200 align-self-center">Align self center</div>
    <div className="border border-400 p-2 bg-200">Flex Item</div>
  </div>
  <div className="d-flex bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-200">Flex Item</div>
    <div className="border border-400 p-2 bg-200 align-self-baseline">Align self baseline</div>
    <div className="border border-400 p-2 bg-200">Flex Item</div>
  </div>
  <div className="d-flex bg-200 mb-2" style={{height:'5rem'}}>  
    <div className="border border-400 p-2 bg-200">Flex Item</div>
    <div className="border border-400 p-2 bg-200 align-self-stretch">Align self stretch</div>
    <div className="border border-400 p-2 bg-200">Flex Item</div>
  </div>
</>`;

const fillCode = `<>
  <div className="d-flex bg-200">
    <div className="p-2 flex-fill bg-200 border border-400">Flex item with a lot of content</div>
    <div className="p-2 flex-fill bg-200 border border-400">Flex item</div>
    <div className="p-2 flex-fill bg-200 border border-400">Flex item</div>
  </div>
</>`;

const growCode = `
  <div className="d-flex bg-200">
    <div className="p-2 flex-grow-1 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Third flex item</div>
  </div>
`;

const shrinkCode = `
  <div className="d-flex bg-200">
    <div className="p-2 w-100 bg-200 border border-400">Flex item</div>
    <div className="p-2 flex-shrink-1 bg-200 border border-400">Flex item</div>
  </div>
`;

const autoMarginCode = `
<>
  <div className="d-flex bg-200 mb-2">
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex bg-200 mb-2">
    <div className="me-auto p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex bg-200 mb-2">
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="ms-auto p-2 bg-200 border border-400">Flex item</div>
  </div>
</>
`;

const autoMarginWithAlignItemsCode = `
<>
  <div className="d-flex flex-column bg-200 mb-3 align-items-start" style={{height: '200px'}}>
    <div className="mb-auto p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex flex-column bg-200 mb-3 align-items-end" style={{height: '200px'}}>
    <div className="mb-auto p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
</>
`;

const wrapCode = `<>
  <div className="d-flex flex-nowrap mb-3 bg-200 border border-300 py-3" style={{width: '8rem'}}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex flex-wrap mb-3 bg-200 border border-300">
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex flex-wrap-reverse mb-3 bg-200 border border-300">
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
</>`;

const orderCode = `
  <div className="d-flex bg-200 p-2 mb-2">  
    <div className="order-3 p-2 bg-200 border border-400">First flex item</div>
    <div className="order-2 p-2 bg-200 border border-400">Second flex item</div>
    <div className="order-1 p-2 bg-200 border border-400">Third flex item</div>
  </div>
`;

const responsiveOrderCode = `
  <div className="d-flex bg-200 p-2 mb-2">  
    <div className="order-sm-3 p-2 bg-200 border border-400">
      First flex item (<code>order:3</code> in <code>sm</code> screen)</div>
    <div className="order-md-2 p-2 bg-200 border border-400">
      Second flex item (<code>order:2</code> in <code>md</code> screen)
    </div>
    <div className="order-lg-1 p-2 bg-200 border border-400">
      Third flex item (<code>order:1</code> in <code>lg</code> screen)
    </div>
  </div>
`;

const alignContentCode = `<>
  <div className="d-flex flex-wrap bg-200 mb-3 align-content-start" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex flex-wrap bg-200 mb-3 align-content-end" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex flex-wrap bg-200 mb-3 align-content-center" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex flex-wrap bg-200 mb-3 align-content-between" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex flex-wrap bg-200 mb-3 align-content-around" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
  <div className="d-flex flex-wrap bg-200 mb-3 align-content-stretch" style={{ height: '300px' }}>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
    <div className="p-2 bg-200 border border-400">Flex item</div>
  </div>
</>`;

const FlexExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Flex"
        description="Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary."
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Flex Behaviors">
            <p className="mb-0">
              Apply <code> display </code> utilities to create a flexbox
              container and transform direct children elements into flex items.
              Flex containers and items are able to be modified further with
              additional flex properties.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Direction Row">
            <p className="mb-0 text-800">
              Use <code> .flex-row </code> to set a horizontal direction (the
              browser default), or .flex-row-reverse to start the horizontal
              direction from the opposite side.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexDirectionRowCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Direction Row">
            <p className="mb-0 text-800">
              Use <code> .flex-row </code> to set a horizontal direction (the
              browser default), or .flex-row-reverse to start the horizontal
              direction from the opposite side.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexDirectionRowCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Direction Column">
            <p className="mb-0 text-800">
              Use
              <code> .flex-column </code>
              to set a vertical direction, or
              <code> .flex-column-reverse </code>
              to start the vertical direction from the opposite side
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={flexDirectionColumnCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Justify Content">
            <p className="mb-0">
              Use <code>justifyContent</code> prop to change the alignment of
              flex items on the main axis (the x-axis to start, y-axis if{' '}
              <code>flex-direction: column</code>). Choose from{' '}
              <code>start</code> (browser default), <code>end</code>,{' '}
              <code>center</code>, <code>between</code>, <code>around</code>, or{' '}
              <code>evenly</code>. Set <code>justifyContent</code> with{' '}
              <code>{`{xxl | xl | lg | md | sm}`}</code> prefix for
              responsiveness.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={justifyCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Align items">
            <p className="mb-0 text-800">
              Use <code>align-items </code>utilities on flexbox containers to
              change the alignment of flex items on the cross axis (the y-axis
              to start, x-axis if <code>flex-direction: column </code>). Choose
              from <code>start </code>,<code>end </code>,<code>center </code>,
              <code>baseline </code>, or{' '}
              <code>stretch (browser default). </code>
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={alignItemsCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Align self">
            <p className="mb-0 text-800">
              Use <code>align-self </code>utilities on flexbox items to
              individually change their alignment on the cross axis (the y-axis
              to start, x-axis if <code>flex-direction: column </code>). Choose
              from the same options as <code>align-items: start, </code>
              <code>end </code>,<code>center </code>,<code>baseline </code>, or{' '}
              <code>stretch (browser default).</code>
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={alignSelfCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Fill">
            <p className="mb-0 text-800">
              Use the <code>.flex-fill</code> class on a series of sibling
              elements to force them into widths equal to their content (or
              equal widths if their content does not surpass their border-boxes)
              while taking up all available horizontal space.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={fillCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Flex Grow">
            <p className="mb-0 text-800">
              Use <code>.flex-grow-* </code>utilities to toggle a flex item’s
              ability to grow to fill available space. In the example below, the
              <code>.flex-grow-1 </code>elements uses all available space it
              can, while allowing the remaining two flex items their necessary
              space.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={growCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Flex Shrink">
            <p className="mb-0 text-800">
              Use <code>.flex-shrink-*</code> utilities to toggle a flex item’s
              ability to shrink if necessary. In the example below, the second
              flex item with <code>.flex-shrink-1</code> is forced to wrap its
              contents to a new line, “shrinking” to allow more space for the
              previous flex item with <code>.w-100</code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={shrinkCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Auto margins">
              <p className="mb-0 text-800">
                Flexbox can do some pretty awesome things when you mix flex
                alignments with auto margins. Shown below are three examples of
                controlling flex items via auto margins: default (no auto
                margin), pushing two items to the right ( <code>.me-auto </code>
                ), and pushing two items to the left (<code>.ms-auto </code>).
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={autoMarginCode} />
          </PhoenixDocProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header
              title="With align-items"
              className="border-bottom-0"
            >
              <p className="mb-0 text-800">
                Vertically move one flex item to the top or bottom of a
                container by mixing <code>align-items</code>,{' '}
                <code>flex-direction: column</code>, and{' '}
                <code>margin-top: auto</code> or{' '}
                <code>margin-bottom: auto</code>.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={autoMarginWithAlignItemsCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Wrap">
            <p className="mb-0 text-800">
              Change how flex items wrap in a flex container. Choose from no
              wrapping at all (the browser default) with{' '}
              <code>.flex-nowrap </code>, wrapping with
              <code>.flex-wrap </code>, or reverse wrapping with
              <code>.flex-wrap-reverse </code>.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={wrapCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4" noProvider>
          <PhoenixDocProvider>
            <PhoenixDocCard.Header title="Order">
              <p className="mb-0 text-800">
                Change the <em>visual</em> order of specific flex items with a
                handful of <code>order</code> utilities. We only provide options
                for making an item first or last, as well as a reset to use the
                DOM order. As <code>order</code> takes any integer value from 0
                to 5, add custom CSS for any additional values needed.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={orderCode} />
          </PhoenixDocProvider>

          <PhoenixDocProvider>
            <PhoenixDocCard.Header className="border-bottom-0">
              <p className="mb-0 text-800">
                Responsive variations also exist for <code>order</code>. Use{' '}
                <code>
                  order-{`{breakpoint}`}-{`{value}`}
                </code>{' '}
                classes for responsive behaviors.
              </p>
            </PhoenixDocCard.Header>
            <PhoenixDocCard.Body code={responsiveOrderCode} />
          </PhoenixDocProvider>
        </PhoenixDocCard>

        <PhoenixDocCard>
          <PhoenixDocCard.Header
            title="Align content"
            className="border-bottom-0"
          >
            <p className="mb-0 text-800">
              Use <code>align-content</code> utilities on flexbox containers to
              align flex items <em>together</em> on the cross axis. Choose from{' '}
              <code>start</code> (browser default), <code>end</code>,{' '}
              <code>center</code>, <code>between</code>, <code>around</code>, or{' '}
              <code>stretch</code>. To demonstrate these utilities, we’ve
              enforced <code>flex-wrap: wrap</code> and increased the number of
              flex items.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={alignContentCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default FlexExample;
