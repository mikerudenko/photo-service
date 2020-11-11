import React, { memo } from 'react';
import { IOTypography } from '../../io-typography';
import { useIOFormSecurityLevelStyles } from './use-io-form-security-level-styles';
import { SECURITY_LEVEL_COLOR } from './io-form-security-level.constants';

export type IOFormSecurityLevelProps = {
  label: string;
  progress: number;
};

export const IOFormSecurityLevel = memo(
  ({ label, progress }: IOFormSecurityLevelProps) => {
    const color = SECURITY_LEVEL_COLOR[progress];
    const classes = useIOFormSecurityLevelStyles({...{ progress, color }});

    return (
      <div className={classes.root}>
        <IOTypography variant='body4' className={classes.label}>
          {label}
        </IOTypography>
        <div className={classes.progress}>
          <div className={classes.indicator} />
        </div>
      </div>
    );
  },
);
