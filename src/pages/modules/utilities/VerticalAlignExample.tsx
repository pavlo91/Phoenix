import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<div className='d-flex gap-2'>
  <span className="align-baseline">baseline</span>
  <span className="align-top">top</span>
  <span className="align-middle">middle</span>
  <span className="align-bottom">bottom</span>
  <span className="align-text-top">text-top</span>
  <span className="align-text-bottom">text-bottom</span>
</div>
`;

const verticalAlignCode = `
<div className="table-responsive scrollbar">
  <table className="table table-bordered" style={{ height: '100px' }}>
    <tbody>
      <tr>
        <td className="align-baseline">baseline</td>
        <td className="align-top">top</td>
        <td className="align-middle">middle</td>
        <td className="align-bottom">bottom</td>
        <td className="align-text-top">text-top</td>
        <td className="align-text-bottom">text-bottom</td>
      </tr>
    </tbody>
  </table>
</div>
`;

const VerticalAlignExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Vertical Align"
        description="Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements."
      />
      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example">
            <p className="mb-0">
              Change the alignment of elements with the vertical-alignment
              utilities. Please note that vertical-align only affects inline,
              inline-block, inline-table, and table cell elements.
              <br /> Choose from <code>.align-baseline,</code>{' '}
              <code>.align-top,</code> <code>.align-middle,</code>{' '}
              <code>.align-bottom,</code> <code>.align-text-bottom,</code> and{' '}
              <code>.align-text-top</code> as needed.
              <br />
              Multiple links and tap targets are not recommended with stretched
              links. However, some <code>position </code>and{' '}
              <code>z-index </code>styles can help should this be required.
            </p>
          </PhoenixDocCard.Header>
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Vertical Alignment With Table Cells" />
          <PhoenixDocCard.Body code={verticalAlignCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default VerticalAlignExample;
