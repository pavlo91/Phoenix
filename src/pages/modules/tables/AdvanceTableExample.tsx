import { ColumnDef, Row } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Badge from 'components/base/Badge';
import PhoenixDocCard from 'components/base/PhoenixDocCard';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import SearchBox from 'components/common/SearchBox';
import DocPageHeader from 'components/docs/DocPageHeader';
import PhoenixLiveEditor from 'components/docs/PhoenixLiveEditor';
import { Project, projects, tableDocData } from 'data/doc/table';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent, useMemo } from 'react';
import { Link } from 'react-router-dom';

const basicImportString = `
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router-dom';
`;

const basicDataString = `
type Data = {
  name: string;
  email: string;
  age: number;
};

const data: Data[] = [
  {
    name: 'Anna',
    email: 'anna@example.com',
    age: 18
  },
  {
    name: 'Homer',
    email: 'homer@example.com',
    age: 35
  },
  {
    name: 'Oscar',
    email: 'oscar@example.com',
    age: 52
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    age: 30
  },
  {
    name: 'Jara',
    email: 'jara@example.com',
    age: 25
  },
  {
    name: 'Clark',
    email: 'clark@example.com',
    age: 39
  }
];
`;

const paginationDataString = `
type Data = {
  name: string;
  email: string;
  age: number;
};

const data: Data[] = [
  {
    name: 'Anna',
    email: 'anna@example.com',
    age: 18
  },
  {
    name: 'Homer',
    email: 'homer@example.com',
    age: 35
  },
  {
    name: 'Oscar',
    email: 'oscar@example.com',
    age: 52
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    age: 30
  },
  {
    name: 'Jara',
    email: 'jara@example.com',
    age: 25
  },
  {
    name: 'Clark',
    email: 'clark@example.com',
    age: 39
  },
  {
    name: 'Jennifer',
    email: 'jennifer@example.com',
    age: 52
  },
  {
    name: 'Tony',
    email: 'tony@example.com',
    age: 30
  },
  {
    name: 'Tom',
    email: 'tom@example.com',
    age: 25
  },
  {
    name: 'Michael',
    email: 'michael@example.com',
    age: 39
  },
  {
    name: 'Antony',
    email: 'antony@example.com',
    age: 39
  },
  {
    name: 'Raymond',
    email: 'raymond@example.com',
    age: 52
  },
  {
    name: 'Marie',
    email: 'marie@example.com',
    age: 30
  },
  {
    name: 'Cohen',
    email: 'cohen@example.com',
    age: 25
  },
  {
    name: 'Rowen',
    email: 'rowen@example.com',
    age: 39
  },
  {
    name: 'John',
    email: 'john@example.com',
    age: 25
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    age: 31
  },
  {
    name: 'Alice',
    email: 'alice@example.com',
    age: 42
  },
  {
    name: 'David',
    email: 'david@example.com',
    age: 29
  },
  {
    name: 'Sullivan Benton',
    email: 'sullivan@example.com',
    age: 23
  },
  {
    name: 'Uriah Nunez',
    email: 'uriah@example.com',
    age: 32
  },
  {
    name: 'Terry Lynch',
    email: 'terry@example.com',
    age: 45
  },
  {
    name: 'Lailah Green',
    email: 'lailah@example.com',
    age: 25
  },
  {
    name: 'Phillip Mack',
    email: 'phillip@example.com',
    age: 21
  },
  {
    name: 'Whitney Sawyer',
    email: 'whitney@example.com',
    age: 12
  },
  {
    name: 'Jaliyah Ritter',
    email: 'jaliyah@example.com',
    age: 12
  },
  {
    name: 'Clayton Arnold',
    email: 'clayton@example.com',
    age: 52
  },
  {
    name: 'Jett Donovan',
    email: 'jett@example.com',
    age: 31
  },
  {
    name: 'Javion Christensen',
    email: 'javion@example.com',
    age: 25
  },
  {
    name: 'Brittany Griffin',
    email: 'brittany@example.com',
    age: 41
  },
  {
    name: 'Dustin Middleton',
    email: 'dustin@example.com',
    age: 45
  },
  {
    name: 'Janessa Mann',
    email: 'janessa@example.com',
    age: 65
  },
  {
    name: 'Evangeline Santos',
    email: 'evangeline@example.com',
    age: 32
  },
  {
    name: 'Parker Todd',
    email: 'parker@example.com',
    age: 41
  },
  {
    name: 'Jaxson Gill',
    email: 'jaxson@example.com',
    age: 33
  },
  {
    name: 'Lucille',
    email: 'lucille@example.com',
    age: 34
  },
  {
    name: 'Terrell',
    email: 'terrell@example.com',
    age: 35
  },
  {
    name: 'Shayna',
    email: 'shayna@example.com',
    age: 36
  },
  {
    name: 'Alvaro',
    email: 'alvaro@example.com',
    age: 37
  },
  {
    name: 'Clay',
    email: 'clay@example.com',
    age: 37
  },
  {
    name: 'Oscar',
    email: 'oscar@example.com',
    age: 37
  },
  {
    name: 'Tabitha',
    email: 'tabitha@example.com',
    age: 37
  },
  {
    name: 'Jordon',
    email: 'jordon@example.com',
    age: 37
  }
];
`;

const basicColumnString = `
const columns: ColumnDef<Data>[] = [
  {
    accessorKey: 'name'
  },
  {
    accessorKey: 'email',
    cell: ({ row: { original } }) => (
      <Link to={\`mailto:\${original.email}\`}>{original.email}</Link>
    )
  },
  {
    accessorKey: 'age'
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
      headerProps: { style: { width: '7%' } },
      cellProps: { className: 'text-end' }
    }
  }
];
`;

const exampleCode = `
${basicImportString}
${basicDataString}
${basicColumnString}
const Example = () => {
  const table = useAdvanceTable({
    data: data,
    columns,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
    </AdvanceTableProvider>
  );
};
`;

const paginationExampleCode = `
${basicImportString}
${paginationDataString}
${basicColumnString}
const PaginationExample = () => {
  const table = useAdvanceTable({
    data: data,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter pagination />
    </AdvanceTableProvider>
  );
};
`;

const searchExampleCode = `
${basicImportString}
import { ChangeEvent } from 'react';
import SearchBox from 'components/common/SearchBox';

${basicDataString}
${basicColumnString}
const SearchExample = () => {
  const table = useAdvanceTable({
    data: data,
    columns,
    pageSize: 5,
    pagination:true,
    selection: true,
    sortable: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <AdvanceTableProvider {...table}>
      <SearchBox
        placeholder="Search..."
        size="sm"
        onChange={handleSearchInputChange}
        className="mx-auto mb-4"
      />
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};
`;

const filterExampleCode = `
${basicImportString}
import Badge, { BadgeBg } from 'components/base/Badge';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import { useMemo } from 'react';

type Project = {
  id: number;
  name: string;
  start: string;
  task: number;
  status: {
    label: string;
    type: BadgeBg;
  };
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Making the Butterflies shoot each other dead',
    start: 'Dec 12, 2018',
    task: 287,
    status: {
      label: 'completed',
      type: 'success'
    }
  },
  {
    id: 2,
    name: 'Project Doughnut Dungeon',
    start: 'Jan 9, 2019',
    task: 125,
    status: {
      label: 'inactive',
      type: 'warning'
    }
  },
  {
    id: 3,
    name: 'The Chewing Gum Attack',
    start: 'Sep 4, 2019',
    task: 72,
    status: {
      label: 'ongoing',
      type: 'primary'
    }
  },
  {
    id: 4,
    name: 'Execution of Micky the foul mouse',
    start: 'Nov 1, 2019',
    task: 91,
    status: {
      label: 'critical',
      type: 'danger'
    }
  },
  {
    id: 5,
    name: 'Harnessing stupidity from Jerry',
    start: 'Dec 28, 2019',
    task: 134,
    status: {
      label: 'ongoing',
      type: 'primary'
    }
  },
  {
    id: 6,
    name: 'Water resistant mosquito killer gun',
    start: 'Feb 24, 2020',
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    }
  },
  {
    id: 7,
    name: 'Olga Dies Dreaming by Xóchitl González',
    start: 'Feb 24, 2020',
    task: 24,
    status: {
      label: 'cancelled',
      type: 'secondary'
    }
  }
];

const projectListTableColumns: ColumnDef<Project>[] = [
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
      cellProps: { className: 'white-space-nowrap py-4' }
    }
  },

  {
    header: 'Start date',
    accessorKey: 'start',
    meta: {
      cellProps: { className: 'ps-3 fs-9 text-900 white-space-nowrap py-4' },
      headerProps: { className: 'ps-3' }
    }
  },

  {
    accessorKey: 'task',
    header: 'Task',
    meta: {
      cellProps: { className: 'ps-3 text-900 py-4' },
      headerProps: { className: 'ps-3' }
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
      headerProps: { className: 'ps-8' }
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

const FilterByColumnExample = () => {
  const table = useAdvanceTable({
    data: projects,
    columns: projectListTableColumns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const { getColumn, getPrePaginationRowModel } = table;

  const handleFilterItemClick = (columnId: string, value: string) => {
    const column = getColumn(columnId);
    column?.setFilterValue(value === 'all' ? '' : value);
  };

  const tabItems: FilterTabItem[] = useMemo(() => {
    const getDataCount = (label: string) =>
      getPrePaginationRowModel().rows.filter(
        ({ original: { status } }: any) => status.label === label
      ).length;

    return [
      {
        label: 'All',
        value: 'all',
        onClick: () => handleFilterItemClick('status', 'all'),
        count: getPrePaginationRowModel().rows.length
      },
      {
        label: 'Ongoing',
        value: 'ongoing',
        onClick: () => handleFilterItemClick('status', 'ongoing'),
        count: getDataCount('ongoing')
      },
      {
        label: 'Cancelled',
        value: 'cancelled',
        onClick: () => handleFilterItemClick('status', 'cancelled'),
        count: getDataCount('cancelled')
      },
      {
        label: 'Completed',
        value: 'completed',
        onClick: () => handleFilterItemClick('status', 'completed'),
        count: getDataCount('completed')
      },
      {
        label: 'Critical',
        value: 'critical',
        onClick: () => handleFilterItemClick('status', 'critical'),
        count: getDataCount('critical')
      }
    ];
  }, [getPrePaginationRowModel]);

  return (
    <AdvanceTableProvider {...table}>
      <FilterTab tabItems={tabItems} className="mb-3" />
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};
`;

const advanceTableProviderCode = `
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';

const YourTableComponent = () => {

  const table = useAdvanceTable({
    data = [...], // Your array of data objects
    columns = [...], // Your array of column definitions
    selection = true, // Enable selection column
    sortable = true, // Enable sorting,
    pagination = true, // Enable pagination
    pageSize = 10 // Number of rows per page
  });

  return (
    // Now pass the table variable to the AdvanceTableProvider to make it available in all nested components
    <AdvanceTableProvider {...table}> 
    {/* Your application components */}
    </AdvanceTableProvider>
  );
};
`;

const advanceTableFooterCode = `
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import AdvanceTable from 'components/base/AdvanceTable';

const YourComponent = () => {
  const table = useAdvanceTableContext();

  return (
    <>
      <AdvanceTable
        headerClassName="your-header-class"
        bodyClassName="your-body-class"
        rowClassName="your-row-class"
        tableProps={{
          striped: true,
          bordered: true,
          size: 'sm',
          // other react-bootstrap table props
        }}
      />
      <AdvanceTableFooter
        className="table-footer"
        pagination={true}
        navBtn={true}
      />
    </>

  );
};
`;

const AdvanceTableExample = () => {
  return (
    <div>
      <DocPageHeader
        title="Advance Tables"
        link={{
          text: 'Tanstack table documentation',
          url: 'https://tanstack.com/table/v8'
        }}
      >
        <div>
          {`${process.env.REACT_APP_TITLE || ''}`}-React uses{' '}
          <strong>TanStack Table</strong> for advance features of table.{' '}
          <strong>TanStack Table</strong> is a headless UI for building powerful
          tables & datagrids. <strong>TanStack Table's</strong> API and engine
          are highly modular and framework-independent while still prioritizing
          ergonomics.
        </div>
      </DocPageHeader>

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="How to use" noPreview />
        <PhoenixDocCard.Body>
          <div className="mb-5">
            <p className="mb-2">
              The <strong>Advance Table</strong> components consist of two main
              parts. These components work together to enable you to easily
              integrate complex table features into your application.
            </p>
            <ul className="mb-3">
              <li className="mb-1">
                <strong>useAdvanceTable :</strong> A custom hook that
                initializes the table with provided data, columns, and options.
                The <code>useAdvanceTable</code> hook is used to set up the
                table with your data and configuration options. It returns a{' '}
                <code>table</code> object containing various methods and
                properties to interact with the table's functionality.
              </li>
              <li>
                <strong>AdvanceTableProvider :</strong> A context provider that
                encapsulates the state and functionality of the table. The{' '}
                <code>AdvanceTableProvider</code> makes the context for the
                table available to all nested components. It takes care of
                initializing the table and its functionality.
              </li>
            </ul>
            <div className="ms-3">
              <p>Here's how you can use this two together: </p>
              <PhoenixLiveEditor code={advanceTableProviderCode} />
            </div>
          </div>
          <div className="mb-5">
            <h5 className="mb-2">UI Components</h5>
            <p className="mb-2">
              To simplify the process of rendering complex tables while
              providing a smooth integration with the{' '}
              <code>AdvanceTableProvider</code> we created two UI components:{' '}
              <code>AdvanceTable</code> and <code>AdvanceTableFooter</code>
            </p>
            <ul className="mb-3">
              <li className="mb-1">
                <strong>AdvanceTable :</strong> The <code>AdvanceTable</code>{' '}
                component is a flexible and customizable table UI component
                designed to work seamlessly with the{' '}
                <code>AdvanceTableProvider</code>. The AdvanceTable component
                accepts the following props:
                <ul className="mb-2">
                  <li>
                    <code>headerClassName</code>: Custom class name for the{' '}
                    <code>thead</code> element.
                  </li>
                  <li>
                    <code>bodyClassName</code>: Custom class name for the{' '}
                    <code>tbody</code> element.
                  </li>
                  <li>
                    <code>rowClassName</code>: Custom class name for the rows
                    (tr elements).
                  </li>
                  <li>
                    <code>tableProps</code>: Props to be passed to the
                    underlying <code>Table</code>
                    component from <code>react-bootstrap.</code>
                  </li>
                </ul>
              </li>
              <li className="mb-1">
                <strong>AdvanceTableFooter :</strong> The{' '}
                <code>AdvanceTableFooter</code> component is designed to enhance
                the footer of the advanced table by providing various pagination
                controls and information about the current page and item counts.
                The AdvanceTableFooter component accepts the following props:
                <ul>
                  <li>
                    <code>className</code> : Custom class name for the footer
                    container.
                  </li>
                  <li>
                    <code>pagination</code> : Boolean indicating whether to
                    display the pagination
                  </li>
                  <li>
                    <code>navBtn</code> : Boolean indicating whether to display
                    the previous and next navigation buttons.
                  </li>
                </ul>
              </li>
            </ul>
            <div className="ms-3">
              <p>Here's how you can use these components: </p>
              <PhoenixLiveEditor code={advanceTableFooterCode} />
            </div>
          </div>
          <div>
            <h5 className="mb-2">Column definition</h5>
            <p>
              For <strong>Advance Table's</strong> column definition visit{' '}
              <strong>tanstack react table's</strong>{' '}
              <a
                href="https://tanstack.com/table/v8/docs/api/core/column-def"
                target="_blank"
                rel="noreferrer"
              >
                Official documentation
              </a>
              <br />
              In addition to the standard properties for defining columns in a
              table, you can add <code>cellProps</code> and{' '}
              <code>headerProps</code> within the <code>meta</code> property of
              your column definitions.
              <ul>
                <li>
                  <code>cellProps</code> : when placed within the{' '}
                  <code>meta</code> object of a column definition, allows you to
                  add specific HTML attributes to the data cells within the
                  column. This enables you to apply styling, classes, or event
                  handlers to cells as needed.
                </li>
                <li>
                  <code>headerProps</code> : when placed within the meta object
                  is used to apply HTML attributes to the header cell of the
                  column. This allows you to add attributes like classes or
                  event handlers to the column headers.
                </li>
              </ul>
            </p>
          </div>
        </PhoenixDocCard.Body>
      </PhoenixDocCard>

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Example" />
        <PhoenixDocCard.Body code={exampleCode} hidePreview>
          <Example />
        </PhoenixDocCard.Body>
      </PhoenixDocCard>

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Pagination Example" />
        <PhoenixDocCard.Body code={paginationExampleCode} hidePreview>
          <PaginationExample />
        </PhoenixDocCard.Body>
      </PhoenixDocCard>

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Search Example" />
        <PhoenixDocCard.Body code={searchExampleCode} hidePreview>
          <SearchExample />
        </PhoenixDocCard.Body>
      </PhoenixDocCard>

      <PhoenixDocCard className="mb-4">
        <PhoenixDocCard.Header title="Column filter example" />
        <PhoenixDocCard.Body code={filterExampleCode} hidePreview>
          <FilterByColumnExample />
        </PhoenixDocCard.Body>
      </PhoenixDocCard>
    </div>
  );
};

type Data = {
  name: string;
  email: string;
  age: number;
};

const data: Data[] = [
  {
    name: 'Anna',
    email: 'anna@example.com',
    age: 18
  },
  {
    name: 'Homer',
    email: 'homer@example.com',
    age: 35
  },
  {
    name: 'Oscar',
    email: 'oscar@example.com',
    age: 52
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    age: 30
  },
  {
    name: 'Jara',
    email: 'jara@example.com',
    age: 25
  },
  {
    name: 'Clark',
    email: 'clark@example.com',
    age: 39
  }
];

const columns: ColumnDef<Data>[] = [
  {
    accessorKey: 'name'
  },
  {
    accessorKey: 'email',
    cell: ({ row: { original } }) => (
      <Link to={`mailto:${original.email}`}>{original.email}</Link>
    )
  },
  {
    accessorKey: 'age'
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
      headerProps: { style: { width: '7%' } },
      cellProps: { className: 'text-end' }
    }
  }
];

const Example = () => {
  const table = useAdvanceTable({
    data: data,
    columns,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
    </AdvanceTableProvider>
  );
};

const PaginationExample = () => {
  const table = useAdvanceTable({
    data: tableDocData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  return (
    <AdvanceTableProvider {...table}>
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter pagination />
    </AdvanceTableProvider>
  );
};

const SearchExample = () => {
  const table = useAdvanceTable({
    data: tableDocData,
    columns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <AdvanceTableProvider {...table}>
      <SearchBox
        placeholder="Search..."
        size="sm"
        onChange={handleSearchInputChange}
        className="mx-auto mb-4"
      />
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};

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
      cellProps: { className: 'white-space-nowrap py-4' }
    }
  },

  {
    header: 'Start date',
    accessorKey: 'start',
    meta: {
      cellProps: { className: 'ps-3 fs-9 text-900 white-space-nowrap py-4' },
      headerProps: { className: 'ps-3' }
    }
  },

  {
    accessorKey: 'task',
    header: 'Task',
    meta: {
      cellProps: { className: 'ps-3 text-900 py-4' },
      headerProps: { className: 'ps-3' }
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
      headerProps: { className: 'ps-8' }
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

const FilterByColumnExample = () => {
  const table = useAdvanceTable({
    data: projects,
    columns: projectListTableColumns,
    pageSize: 6,
    pagination: true,
    selection: true,
    sortable: true
  });

  const { getColumn, getPrePaginationRowModel } = table;

  const handleFilterItemClick = (columnId: string, value: string) => {
    const column = getColumn(columnId);
    column?.setFilterValue(value === 'all' ? '' : value);
  };

  const tabItems: FilterTabItem[] = useMemo(() => {
    const getDataCount = (label: string) =>
      getPrePaginationRowModel().rows.filter(
        ({ original: { status } }: Row<Project>) => status.label === label
      ).length;

    return [
      {
        label: 'All',
        value: 'all',
        onClick: () => handleFilterItemClick('status', 'all'),
        count: getPrePaginationRowModel().rows.length
      },
      {
        label: 'Ongoing',
        value: 'ongoing',
        onClick: () => handleFilterItemClick('status', 'ongoing'),
        count: getDataCount('ongoing')
      },
      {
        label: 'Cancelled',
        value: 'cancelled',
        onClick: () => handleFilterItemClick('status', 'cancelled'),
        count: getDataCount('cancelled')
      },
      {
        label: 'Completed',
        value: 'completed',
        onClick: () => handleFilterItemClick('status', 'completed'),
        count: getDataCount('completed')
      },
      {
        label: 'Critical',
        value: 'critical',
        onClick: () => handleFilterItemClick('status', 'critical'),
        count: getDataCount('critical')
      }
    ];
  }, [getPrePaginationRowModel]);

  return (
    <AdvanceTableProvider {...table}>
      <FilterTab tabItems={tabItems} className="mb-3" />
      <AdvanceTable
        tableProps={{
          size: 'sm',
          className: 'phoenix-table fs-9 mb-0 border-top border-200'
        }}
        rowClassName="hover-actions-trigger btn-reveal-trigger position-static"
      />
      <AdvanceTableFooter navBtn />
    </AdvanceTableProvider>
  );
};

export default AdvanceTableExample;
