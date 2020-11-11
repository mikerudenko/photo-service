import get from 'lodash/get';
import React, { memo, useCallback } from 'react';
import { AppSpinner } from '../../app-spinner';
import { AppTableRow } from '../app-table-row';
import { IOTableColumn, TableRowStyleType } from '../app-table.types';
import { useIOTableStyles } from '../use-app-table-styles';

type AppTableBodyProps = {
  columns: IOTableColumn<any>[];
  loading?: boolean;
  data: Array<Record<string, any>> | null;
  keyField?: string;
  rowStyle: TableRowStyleType;
  tableBodyRowClassName?: string;
};

export const AppTableTbody = memo(
  ({
    columns,
    keyField,
    data,
    loading,
    rowStyle,
    tableBodyRowClassName,
  }: AppTableBodyProps) => {
    const classes = useIOTableStyles();

    const renderRow = useCallback(
      (rowData, rowIndex) => {
        const rowKeyField = keyField
          ? get(rowData, keyField, rowIndex)
          : rowIndex;

        return (
          <AppTableRow
            key={rowKeyField}
            {...{ columns, rowStyle, tableBodyRowClassName }}
            data={rowData}
          />
        );
      },
      [columns, keyField, rowStyle, tableBodyRowClassName],
    );

    const renderPlaceholderRow = useCallback(
      (content) => (
        <tr>
          <td colSpan={columns.length} className={classes.emptyCell}>
            {content}
          </td>
        </tr>
      ),
      [classes.emptyCell, columns.length],
    );

    const renderData = useCallback(() => {
      if (loading) {
        return renderPlaceholderRow(<AppSpinner absoluteCentered />);
      }
      return data?.map(renderRow);
    }, [data, loading, renderPlaceholderRow, renderRow]);

    return <tbody>{renderData()}</tbody>;
  },
);
