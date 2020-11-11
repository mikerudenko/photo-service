import { ReactNode } from 'react';

export enum SORT_ORDER {
  asc = 'asc',
  desc = 'desc',
}

export type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export enum DataViewType {
  table = 'table',
  grid = 'grid',
}

export enum TableRowStyleType {
  stripped = 'stripped',
  transparent = 'transparent',
}

export interface IOTableColumn<T> {
  dataField: string;
  label?: string;
  className?: string;
  headerClasses?: string;
  minWidth?: number;
  align?: Align;
  formatter?: (value: any, values: T) => ReactNode;
  sortable?: boolean;
}
