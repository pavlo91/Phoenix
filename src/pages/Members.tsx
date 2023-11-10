import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { memberBreadcrumbItems, members } from 'data/members';
import MembersTable, {
  membersTablecolumns
} from 'components/tables/MembersTable';

const Members = () => {
  const table = useAdvanceTable({
    data: members,
    columns: membersTablecolumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div>
      <PageBreadcrumb items={memberBreadcrumbItems} />
      <div className="mb-9">
        <h2 className="mb-5">Members</h2>

        <AdvanceTableProvider {...table}>
          <div className="mb-4">
            <Row className="g-3">
              <Col xs="auto">
                <SearchBox
                  placeholder="Search members"
                  onChange={handleSearchInputChange}
                />
              </Col>
              <Col
                xs="auto"
                className="scrollbar overflow-hidden-y flex-grow-1"
              ></Col>
              <Col xs="auto">
                <Button variant="link" className="text-900 me-4 px-0">
                  <FontAwesomeIcon icon="file-export" className="fs-9 me-2" />
                  Export
                </Button>
                <Button variant="primary">
                  <FontAwesomeIcon icon="plus" className="me-2" />
                  Add member
                </Button>
              </Col>
            </Row>
          </div>

          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-white border-top border-bottom border-200 position-relative top-1">
            <MembersTable />
          </div>
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Members;
