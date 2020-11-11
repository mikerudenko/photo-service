import React, { memo } from 'react';
import { AppTableTheadCell } from '../app-table-thead-cell';
import { IOTableColumn } from '../app-table.types';
import { useAutoCallback } from 'hooks.macro';

type AppTableTheadProps = {
  columns: IOTableColumn<any>[];
};

export const AppTableThead = memo(({ columns }: AppTableTheadProps) => {
  const renderCell = useAutoCallback((column, index) => (
    <AppTableTheadCell key={index} column={column} />
  ));

  return (
    <thead>
      <tr>{columns.map(renderCell)}</tr>
    </thead>
  );
});
