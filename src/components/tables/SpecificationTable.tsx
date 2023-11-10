import classNames from 'classnames';
import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';

export interface TableRowData {
  key: string;
  value: string | number | string[];
}

export interface SpecificationTableProps {
  title: string;
  data: TableRowData[];
}

const SpecificationTable = ({ title, data }: SpecificationTableProps) => {
  return (
    <>
      <h3 className="mb-0 ms-4 fw-bold">{title}</h3>
      <Table>
        <thead>
          <tr>
            <th style={{ width: '40%' }}></th>
            <th style={{ width: '60%' }}></th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.key}>
              <td
                className={classNames('bg-100', {
                  'align-middle': !Array.isArray(item.value)
                })}
              >
                <h6
                  className={classNames(
                    'mb-0 text-900 text-uppercase fw-bolder px-4 fs--1 lh-sm',
                    {
                      'mt-1': Array.isArray(item.value)
                    }
                  )}
                >
                  {item.key}
                </h6>
              </td>
              <td className="px-5 mb-0">
                {Array.isArray(item.value)
                  ? item.value.map(val => (
                      <Fragment key={val}>
                        {val} <br />
                      </Fragment>
                    ))
                  : item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SpecificationTable;
