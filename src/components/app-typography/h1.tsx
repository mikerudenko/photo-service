import type { ReactNode } from 'react';
import React, { memo } from 'react';
import { useAppTypographyStyles } from './use-app-typography-styles';
import c from 'classnames';

export type H1Props = {
  children: ReactNode;
  className?: string;
};

//! font-size = 96px

export const H1 = memo(({ children, className = '' }: H1Props) => {
  const classes = useAppTypographyStyles();

  return <h1 className={c(classes.h1, className)}>{children}</h1>;
});
