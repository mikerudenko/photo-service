import React, { memo } from 'react';
import type { ReactNode } from 'react';
import { useAppButtonStyles } from './use-app-button-styles';
import c from 'classnames';
import { useBooleanState } from '../../../hooks';

type AppButtonProps = {
  children: ReactNode;
  className?: string;
};

export const AppButton = memo(({ children, className }: AppButtonProps) => {
  const classes = useAppButtonStyles();
  const [hovered, setHover, unsetHover] = useBooleanState(false);
  return (
    <button
      className={c(classes.button, className, { [classes.hovered]: hovered })}
      onMouseEnter={setHover}
      onMouseLeave={unsetHover}
    >
      {children}
    </button>
  );
});
