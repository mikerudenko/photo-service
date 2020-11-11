import Typography from '@material-ui/core/Typography';
import React, { memo } from 'react';
import type { ReactNode } from 'react';
import noop from 'lodash/noop';

export type PProps = {
  children: ReactNode;
  onClick?(event: any): void;
  className?: string;
};

export const P = memo(({ children, onClick = noop, className }: PProps) => {
  return (
    <Typography variant='subtitle1' onClick={onClick} className={className}>
      {children}
    </Typography>
  );
});
