import React, { memo } from 'react';
import c from 'classnames';

import { useAppSpinnerStyles } from './use-app-spinner-styles';

export type AppSpinnerProps = {
  width?: number;
  height?: number;
  className?: string;
  absoluteCentered?: boolean;
};

export const AppSpinner = memo(
  ({
    width = 50,
    height = 50,
    className = '',
    absoluteCentered,
  }: AppSpinnerProps) => {
    const classes = useAppSpinnerStyles({ width, height });

    return (
      <svg
        className={c(classes.spinner, className, {
          [classes.absoluteCentered]: absoluteCentered,
        })}
        viewBox='0 0 66 66'
      >
        <circle
          className={classes.spinnerCircle}
          fill='none'
          strokeWidth='6'
          strokeLinecap='round'
          cx='33'
          cy='33'
          r='30'
        />
      </svg>
    );
  },
);
