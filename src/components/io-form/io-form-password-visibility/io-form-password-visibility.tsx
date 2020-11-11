import React, { memo } from 'react';
import { InputAdornment } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Icon from '../../Icon';
import { useIOFormPasswordVisibility } from './use-io-form-password-visibility';

export type IOFormPasswordVisibilityProps = {
  iconName: string;
  onClick(): void;
};

export const IOFormPasswordVisibility = memo(({ iconName, onClick}: IOFormPasswordVisibilityProps) => {
    return (
      <InputAdornment position='end'>
        <IconButton onClick={onClick}>
          <Icon name={iconName} size={{ width: 24, height: 24}} />
        </IconButton>
      </InputAdornment>
    );
  },
);
