import React, { FC } from 'react';
import styles from './Table.module.scss';

import { Column, ColumnProps } from 'primereact/column';
import { DataTable, DataTableValueArray } from 'primereact/datatable';
import { map } from 'lodash';
import classNames from 'classnames';

export type TableProps = {
  columns: ColumnProps[];
  data: DataTableValueArray | undefined;
  className?: string;
};

export const Table: FC<TableProps> = ({ data, columns, className }) => {
  return (
    <DataTable
      value={data}
      responsiveLayout='scroll'
      className={classNames(styles.root, className)}
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
