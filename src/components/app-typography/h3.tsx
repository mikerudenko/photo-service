import type { ReactNode } from 'react';
import React, { memo } from 'react';
import { useAppTypographyStyles } from './use-app-typography-styles';

export type H3Props = {
  children: ReactNode;
};

export const H3 = memo(({ children }: H3Props) => {
  const classes = useAppTypographyStyles();
  return <h3 className={classes.h3}>{children}</h3>;
});
