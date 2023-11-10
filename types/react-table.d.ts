import { RowData } from '@tanstack/react-table';
import { TdHTMLAttributes, ThHTMLAttributes } from 'react';

declare module '@tanstack/react-table' {
  export interface ColumnMeta<TData extends RowData, TValue> {
    cellProps?: TdHTMLAttributes<HTMLTableDataCellElement>;
    headerProps?: ThHTMLAttributes<HTMLTableHeaderCellElement>;
  }
}
