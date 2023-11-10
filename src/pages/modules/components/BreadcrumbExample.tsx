import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<Breadcrumb className="mb-0">
    <Breadcrumb.Item href="#!">Item 1</Breadcrumb.Item>
    <Breadcrumb.Item href="#!">Item 2</Breadcrumb.Item>
    <Breadcrumb.Item href="#!">Item 3</Breadcrumb.Item>
    <Breadcrumb.Item href="#!" active>
        Item 4
    </Breadcrumb.Item>
</Breadcrumb>`;

const BreadcrumbExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Breadcrumb"
        description="Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS."
        link={{
          text: 'Breadcrumb on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/breadcrumb/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Breadcrumb Example" />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default BreadcrumbExample;
