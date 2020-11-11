import React, { memo } from 'react';
import IconButton from '@material-ui/core/IconButton';

type AppIconButtonProps = {
  size: 'small' | 'medium';
  onClick(): void;
  className?: string;
  children: any;
};

export const AppIconButton = memo(
  ({ size, onClick, className = '', children }: AppIconButtonProps) => {
    return (
      <IconButton size={size} onClick={onClick} className={className}>
        {children}
      </IconButton>
    );
  },
);
