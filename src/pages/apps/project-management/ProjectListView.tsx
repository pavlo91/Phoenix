import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import ProjectsTopSection from 'components/modules/project-management/ProjectsTopSection';
import ProjectListTable, {
  projectListTableColumns
} from 'components/tables/ProjectListTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { projects } from 'data/project-management/projects';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';

const ProjectListView = () => {
  const table = useAdvanceTable({
    data: projects,
    columns: projectListTableColumns,
    pageSize: 6,
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
          <Link className="btn btn-primary px-5" to="/">
            <FontAwesomeIcon icon="plus" className="me-2" />
            Add new project
          </Link>
        </div>
        <ProjectsTopSection activeView="list" />
        <ProjectListTable />
      </AdvanceTableProvider>
    </div>
  );
};

export default ProjectListView;
