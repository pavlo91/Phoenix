import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { Link } from 'react-router-dom';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import { Project } from 'data/project-management/projects';
import Avatar from 'components/base/Avatar';
import { ProgressBar } from 'react-bootstrap';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import Badge from 'components/base/Badge';

export const projectListTableColumns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: 'Project Name',
    cell: ({ row: { original } }) => {
      const { name } = original;
      return (
        <Link to="#!" className="text-decoration-none fw-bold fs-8">
          {name}
        </Link>
      );
    },
    meta: {
      cellProps: { className: 'white-space-nowrap py-4' },
      headerProps: { style: { width: '30%' } }
    }
  },
  {
    id: 'assigness',
    header: 'assigness',
    cell: ({ row: { original } }) => {
      const { assigness } = original;
      return (
        <Avatar.Group total={assigness.length} size="s">
          {assigness.slice(0, 4).map(assigne => (
            <Avatar
              key={assigne.id}
              src={assigne.avatar ? assigne.avatar : undefined}
              variant={assigne.avatar ? 'image' : 'name'}
              size="s"
            >
              {!assigne.avatar && assigne.name[0]}
            </Avatar>
          ))}
        </Avatar.Group>
      );
    },
    meta: {
      cellProps: { className: 'ps-3 py-4' },
      headerProps: { style: { width: '10%' }, className: 'ps-3' }
    }
  },
  {
    header: 'Start date',
    accessorKey: 'start',
    meta: {
      cellProps: { className: 'ps-3 fs-9 text-900 white-space-nowrap py-4' },
      headerProps: { style: { width: '10%' }, className: 'ps-3' }
    }
  },
  {
    header: 'Deadline',
    accessorKey: 'deadline',
    meta: {
      cellProps: { className: 'ps-3 fs-9 text-900 white-space-nowrap py-4' },
      headerProps: { style: { width: '15%' }, className: 'ps-3' }
    }
  },
  {
    accessorKey: 'task',
    header: 'Task',
    meta: {
      cellProps: { className: 'ps-3 text-900 py-4' },
      headerProps: { style: { width: '12%' }, className: 'ps-3' }
    }
  },
  {
    id: 'progress',
    header: 'Progress',
    cell: ({ row: { original } }) => {
      const { progress } = original;

      return (
        <>
          <p className="text-800 fs-10 mb-0">
            {progress.min} / {progress.max}
          </p>
          <ProgressBar
            now={(progress.min / progress.max) * 100}
            style={{ height: 3 }}
            variant="success"
          />
        </>
      );
    },
    meta: {
      cellProps: { className: 'ps-3 py-4' },
      headerProps: { style: { width: '5%' }, className: 'ps-3' }
    }
  },
  {
    id: 'status',
    header: 'Status',
    accessorFn: ({ status }) => status.label,
    cell: ({ row: { original } }) => {
      const { status } = original;
      return (
        <Badge variant="phoenix" bg={status.type}>
          {status.label}
        </Badge>
      );
    },
    meta: {
      cellProps: { className: 'ps-8 py-4' },
      headerProps: { style: { width: '10%' }, className: 'ps-8' }
    }
  },
  {
    id: 'action',
    cell: () => (
      <RevealDropdownTrigger>
        <RevealDropdown>
          <ActionDropdownItems />
        </RevealDropdown>
      </RevealDropdownTrigger>
    ),
    meta: {
      headerProps: { style: { width: '10%' }, className: 'text-end' },
      cellProps: { className: 'text-end' }
    }
  }
];

const ProjectListTable = () => {
  return (
    <div className="border-bottom">
      <AdvanceTable
        tableProps={{ className: 'phoenix-table border-top border-200 fs-9' }}
      />
      <AdvanceTableFooter pagination className="py-3" />
    </div>
  );
};

export default ProjectListTable;
