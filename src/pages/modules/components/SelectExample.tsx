import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';

const exampleCode = `
<Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
`;
const sizingCode = `
<>
  <Form.Select size="lg" className='mb-3'>
    <option>Large select</option>
  </Form.Select>
  <Form.Select className='mb-3'>
    <option>Default select</option>
  </Form.Select>
  <Form.Select size="sm">
    <option>Small select</option>
  </Form.Select>
</>
`;

const SelectExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Select"
        description="Customize the native <select> with custom CSS that changes the element’s initial appearance."
        link={{
          text: 'Select on react-bootstrap',
          url: `${process.env.REACT_APP_RB_URL_PREFIX || ''}/forms/select/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Example" />
          <PhoenixDocCard.Body code={exampleCode} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="Sizing"
            description="You may also choose from small and large custom selects to match our similarly sized text inputs."
          />
          <PhoenixDocCard.Body code={sizingCode} />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default SelectExample;
