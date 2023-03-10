import React, { FC, useEffect, useMemo } from 'react';
import styles from './Home.module.scss';
import { Skeleton } from 'primereact/skeleton';
import { Table } from '@components/Table';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMonthDataReducer,
  getMonthDataResult,
} from '@redux/monthData/selectors';
import { monthDataActions } from '@redux/monthData/actions';

export type HomeProps = {};

export const Home: FC<HomeProps> = () => {
  const { loading } = useSelector(getMonthDataReducer);
  const data = useSelector(getMonthDataResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(monthDataActions.fetchMonthDataAsync());
  }, []);

  const columns = useMemo(
    () => [
      {
        header: 'Дата',
        field: 'date',
        sortable: true,
      },
      {
        header: 'Добыча нефти, т/сут',
        field: 'petroleum',
        sortable: true,
      },
      {
        header: 'Добыча жидкости, м3/сут',
        field: 'liquid',
        sortable: true,
      },
    ],
    [],
  );

  return (
    <div className={styles.root}>
      {loading ? (
        <Skeleton className={styles.skeleton} />
      ) : (
        <Table
          columns={columns}
          paginator
          removableSort
          data={data}
          className={styles.table}
        />
      )}
    </div>
  );
};
