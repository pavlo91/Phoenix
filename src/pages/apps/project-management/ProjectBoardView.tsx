import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColumnDef } from '@tanstack/react-table';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ProjectsTopSection from 'components/modules/project-management/ProjectsTopSection';
import BoardViewItem from 'components/modules/project-management/board-view/BoardViewItem';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Project, projects } from 'data/project-management/projects';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<Project>[] = [
  {
    // For filtering and searching projects by status
    id: 'status',
    accessorFn: ({ status }) => status.label
  },
  {
    // For searching projects by name
    accessorKey: 'name'
  }
];

const ProjectBoardView = () => {
  const table = useAdvanceTable<Project>({
    data: projects,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true
  });

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <AdvanceTableProvider {...table}>
        <div className="d-flex flex-wrap mb-4 gap-3 gap-sm-6 align-items-center">
          <h2 className="mb-0">
            <span className="me-3">Projects</span>{' '}
            <span className="fw-normal text-700">({projects.length})</span>
          </h2>
          <Link
            className="btn btn-primary px-5"
            to="/apps/project-management/create-new"
          >
            <FontAwesomeIcon icon="plus" className="me-2" />
            Add new project
          </Link>
        </div>
        <ProjectsTopSection activeView="board" />
        <Row className="g-3 mb-9">
          {table
            .getRowModel()
            .rows.map(row => row.original)
            .map(project => (
              <Col xs={12} sm={6} md={4} xxl={3} key={project.id}>
                <BoardViewItem project={project} />
              </Col>
            ))}
        </Row>
      </AdvanceTableProvider>
    </div>
  );
};

export default ProjectBoardView;
