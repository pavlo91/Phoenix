/* eslint-disable @typescript-eslint/no-explicit-any */
import IndeterminateCheckbox from 'components/base/IndeterminateCheckbox';
import { PropsWithChildren } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef
} from '@tanstack/react-table';
interface UseAdvanceTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  selection?: boolean;
  sortable?: boolean;
  pagination?: boolean;
  pageSize?: number;
  selectionColumnWidth?: number | string;
}

const selectionColumn = {
  id: 'select',
  accessorKey: '',
  header: ({ table }: any) => (
    <IndeterminateCheckbox
      {...{
        checked: table.getIsAllRowsSelected(),
        indeterminate: table.getIsSomeRowsSelected(),
        onChange: table.getToggleAllRowsSelectedHandler()
      }}
    />
  ),
  cell: ({ row }: any) => (
    <IndeterminateCheckbox
      {...{
        checked: row.getIsSelected(),
        disabled: !row.getCanSelect(),
        indeterminate: row.getIsSomeSelected(),
        onChange: row.getToggleSelectedHandler()
      }}
    />
  ),
  meta: {
    headerProps: { style: { width: '30px' } }
  }
};

const useAdvanceTable = <T,>({
  columns,
  data,
  selection,
  sortable,
  pagination,
  pageSize
}: PropsWithChildren<UseAdvanceTableProps<T>>) => {
  const table = useReactTable<T>({
    data,
    columns: selection ? [selectionColumn, ...columns] : columns,
    enableSorting: sortable,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: pagination ? pageSize : data.length }
    }
  });

  return table;
};

export default useAdvanceTable;
