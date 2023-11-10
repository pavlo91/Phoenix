import PhoenixDocCard from 'components/base/PhoenixDocCard';
import DocPageHeader from 'components/docs/DocPageHeader';
import DocPagesLayout from 'layouts/DocPagesLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const exampleCode = `
<Pagination className='mb-0 justify-content-center'>
  <Pagination.Prev>
    <FontAwesomeIcon icon="chevron-left" />
  </Pagination.Prev>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item active>4</Pagination.Item>
  <Pagination.Item>5</Pagination.Item>
  <Pagination.Next>
    <FontAwesomeIcon icon="chevron-right" />
  </Pagination.Next>
</Pagination>
`;

const moreOptionsCode = `
  <Pagination>
    <Pagination.First>
      <FontAwesomeIcon icon="angles-left" />
    </Pagination.First>

    <Pagination.Prev>
      <FontAwesomeIcon icon="angle-left" />
    </Pagination.Prev>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Ellipsis />

    <Pagination.Item>{10}</Pagination.Item>
    <Pagination.Item>{11}</Pagination.Item>
    <Pagination.Item active>{12}</Pagination.Item>
    <Pagination.Item>{13}</Pagination.Item>
    <Pagination.Item disabled>{14}</Pagination.Item>

    <Pagination.Ellipsis />
    <Pagination.Item>{20}</Pagination.Item>
    <Pagination.Next>
      <FontAwesomeIcon icon="angle-right" />
    </Pagination.Next>
    <Pagination.Last>
      <FontAwesomeIcon icon="angles-right" />
    </Pagination.Last>
  </Pagination>

`;

const PaginationExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Pagination"
        description="A set of presentational components for building pagination UI."
        link={{
          text: 'Pagination on react-bootstrap',
          url: `${
            process.env.REACT_APP_RB_URL_PREFIX || ''
          }/components/pagination/`
        }}
      />

      <DocPagesLayout>
        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header title="Pagination Example" />
          <PhoenixDocCard.Body code={exampleCode} scope={{ FontAwesomeIcon }} />
        </PhoenixDocCard>

        <PhoenixDocCard className="mb-4">
          <PhoenixDocCard.Header
            title="More options"
            description='For building more complex pagination UI, there are few convenient sub-components for adding "First", "Previous", "Next", and "Last" buttons, as well as an "Ellipsis" item for indicating previous or continuing results.'
          />
          <PhoenixDocCard.Body
            code={moreOptionsCode}
            scope={{ FontAwesomeIcon }}
          />
        </PhoenixDocCard>
      </DocPagesLayout>
    </div>
  );
};

export default PaginationExample;
