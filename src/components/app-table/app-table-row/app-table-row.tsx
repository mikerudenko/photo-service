import c from 'classnames';
import get from 'lodash/get';
import React, { memo, useCallback } from 'react';
import { IOTableColumn, TableRowStyleType } from '../app-table.types';
import { useIOTableStyles } from '../use-app-table-styles';

export type AppTableRowProps = {
  columns: IOTableColumn<any>[];
  data: unknown;
  rowStyle: TableRowStyleType;
  tableBodyRowClassName?: string;
};

export const AppTableRow = memo(
  ({ columns, data, rowStyle, tableBodyRowClassName }: AppTableRowProps) => {
    const classes = useIOTableStyles();

    const renderCell = useCallback(
      ({ dataField, formatter, align, className, formatterType }, index) => {
        const cellValue = get(data, dataField);
        const content = formatter
          ? formatter(cellValue, data, index)
          : cellValue;

        return (
          <td className={c(className, classes.td)} key={dataField}>
            {content}
          </td>
        );
      },
      [classes.td, data],
    );

    return (
      <tr
        tabIndex={-1}
        className={c(classes.bodyTr, tableBodyRowClassName, {
          [classes.strippedRow]: rowStyle === TableRowStyleType.stripped,
        })}
      >
        {columns.map(renderCell)}
      </tr>
    );
  },
);
