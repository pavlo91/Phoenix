import classNames from 'classnames';
import { useAdvanceTableContext } from 'providers/AdvanceTableProvider';
import { Table, TableProps } from 'react-bootstrap';
import { flexRender } from '@tanstack/react-table';

interface AdvanceTableProps {
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
  tableProps?: TableProps;
}

const AdvanceTable = ({
  headerClassName,
  bodyClassName,
  rowClassName,
  tableProps
}: AdvanceTableProps) => {
  const table = useAdvanceTableContext();
  const { getRowModel, getFlatHeaders } = table;

  return (
    <div className="scrollbar ms-n1 ps-1">
      <Table {...tableProps}>
        <thead className={headerClassName}>
          <tr>
            {getFlatHeaders().map(header => {
              return (
                <th
                  key={header.id}
                  {...header.column.columnDef.meta?.headerProps}
                  className={classNames(
                    header.column.columnDef.meta?.headerProps?.className,
                    {
                      sort: header.column.getCanSort(),
                      desc: header.column.getIsSorted() === 'desc',
                      asc: header.column.getIsSorted() === 'asc'
                    }
                  )}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={bodyClassName}>
          {getRowModel().rows.map(row => (
            <tr key={row.id} className={rowClassName}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} {...cell.column.columnDef.meta?.cellProps}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdvanceTable;
