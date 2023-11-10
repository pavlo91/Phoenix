import { useEffect } from 'react';
import useAdvanceTable from './useAdvanceTable';
import { ColumnDef } from '@tanstack/react-table';

export interface SearchFieldDef<T> {
  accessorKey?: string;
  accessorFn?: (item: T) => string;
}

const useSearchHook = <T,>(
  data: T[],
  searchFields: ColumnDef<T>[],
  searchValue: string
) => {
  const table = useAdvanceTable<T>({
    data,
    columns: searchFields
  });

  useEffect(() => {
    table.setGlobalFilter(searchValue);
  }, [searchValue]);

  return table.getRowModel().rows.map(row => row.original);
};

export default useSearchHook;
