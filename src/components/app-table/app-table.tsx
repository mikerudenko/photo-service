import React from 'react';
import { AppTableTbody } from './app-table-tbody';
import { AppTableThead } from './app-table-thead';
import { IOTableColumn, TableRowStyleType } from './app-table.types';
import { useIOTableStyles } from './use-app-table-styles';

export interface IOTableProps {
  id: string;
  columns: IOTableColumn<any>[];
  data: Array<any> | null;
  loading?: boolean;
  keyField?: string;
  rowStyle?: any;
}

export function IOTable({
  columns,
  keyField,
  loading,
  data,
  rowStyle = TableRowStyleType.stripped,
}: IOTableProps) {
  const classes = useIOTableStyles();

  if (!data || !data?.length) {
    return null;
  }

  return (
    <div className={classes.root}>
      <table className={classes.table}>
        <AppTableThead columns={columns} />
        <AppTableTbody
          {...{
            keyField,
            loading,
            rowStyle,
            columns,
            data,
          }}
        />
      </table>
    </div>
  );
}
