import c from 'classnames';
import React, { memo } from 'react';
import { P } from '../../app-typography';
import { IOTableColumn } from '../app-table.types';
import { useIOTableStyles } from '../use-app-table-styles';

type AppTableTheadCellProps = {
  column: IOTableColumn<any>;
};

export const AppTableTheadCell = memo(
  ({
    column: { dataField, label, sortable, headerClasses },
  }: AppTableTheadCellProps) => {
    const classes = useIOTableStyles();

    return (
      <th key={dataField} className={c(headerClasses, classes.th)}>
        <P className={classes.theadCellLabel}>{label}</P>
      </th>
    );
  },
);
