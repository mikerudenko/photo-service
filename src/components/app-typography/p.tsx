import noop from 'lodash/noop';
import type { ReactNode } from 'react';
import c from 'classnames';
import React, { memo } from 'react';
import { useAppTypographyStyles } from './use-app-typography-styles';

export type PProps = {
  children: ReactNode;
  onClick?(event: any): void;
  className?: string;
};

export const P = memo(({ children, onClick = noop, className }: PProps) => {
  const classes = useAppTypographyStyles();

  return (
    <p onClick={onClick} className={c(classes.p, className)}>
      {children}
    </p>
  );
});
