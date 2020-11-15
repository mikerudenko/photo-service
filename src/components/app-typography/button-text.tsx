import type { ReactNode } from 'react';
import React, { memo } from 'react';
import { useAppTypographyStyles } from './use-app-typography-styles';

export type ButtonTextProps = {
  children: ReactNode;
};

//! font-size = 96px

export const ButtonText = memo(({ children }: ButtonTextProps) => {
  const classes = useAppTypographyStyles();

  return <span className={classes.buttonText}>{children}</span>;
});
