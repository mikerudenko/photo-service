import React, { memo } from 'react';
import { useAppTypographyStyles } from './use-app-typography-styles';
import type { ReactNode } from 'react';
import c from 'classnames';

export type H2Props = {
  children: ReactNode;
  className?: string;
};

export const H2 = memo(({ children, className }: H2Props) => {
  const classes = useAppTypographyStyles();
  return <h2 className={c(classes.h2, className)}>{children}</h2>;
});
