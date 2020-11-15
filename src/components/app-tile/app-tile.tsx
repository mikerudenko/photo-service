import c from 'classnames';
import React, { memo, ReactNode } from 'react';
import { useAppTileStyles } from './use-app-tile-styles';

export type AppTileProps = {
  children: ReactNode;
  className?: string;
};

export const AppTile = memo(({ className = '', children }: AppTileProps) => {
  const classes = useAppTileStyles();

  return <div className={c(classes.tile, className)}>{children}</div>;
});
