import React, { memo } from 'react';
import type { ReactNode } from 'react';
import { useAppTypographyStyles } from './use-app-typography-styles';
import c from 'classnames';

type AppTypographyProps = {
  variant: 'body' | 'h1' | 'p' | 'body2';
  className?: string;
  children: ReactNode;
  onClick?(event: any): void;
};

export const AppTypography = memo(
  ({ variant, className, children, onClick }: AppTypographyProps) => {
    const classes = useAppTypographyStyles();

    return (
      <p className={c(classes[variant], className)} onClick={onClick}>
        {children}
      </p>
    );
  },
);
