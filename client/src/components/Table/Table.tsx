import React, { FC } from 'react';
import styles from './Table.module.scss';

import { Column, ColumnProps } from 'primereact/column';
import {
  DataTable,
  DataTableProps,
  DataTableValueArray,
} from 'primereact/datatable';
import { map } from 'lodash';
import classNames from 'classnames';
import { Button } from 'primereact/button';

export type TableProps = {
  columns: ColumnProps[];
  data: DataTableValueArray | undefined;
  className?: string;
} & DataTableProps<DataTableValueArray>;

export const Table: FC<TableProps> = ({
  data,
  columns,
  className,
  ...props
}) => {
  return (
    <DataTable
      value={data}
      responsiveLayout='scroll'
      className={classNames(styles.root, className)}
      rows={10}
      {...props}
    >
      {map(columns, (i) => (
        <Column
          key={`${i.header}
        ${i.field}`}
          header={i.header}
          field={i.field}
        ></Column>
      ))}
    </DataTable>
  );
};
