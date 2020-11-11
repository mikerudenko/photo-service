import React, { memo } from 'react';
import { useIOFormSelectFieldStyles } from './use-io-form-select-field-styles';
import { IOButton } from '../../io-button';
import { MenuItem } from '@material-ui/core';
import { IOFormSelectMultipleActionsProps } from '../io-form.types';

export const IOFormSelectMultipleActions = memo(
  ({
     clearLabel = '',
     confirmLabel = '' ,
     onClearClick,
     onConfirmClick
   }: IOFormSelectMultipleActionsProps) => {
    const classes = useIOFormSelectFieldStyles();
    return (
      <MenuItem className={classes.multipleActions}>
        <IOButton
          variant='text'
          color='secondary'
          onClick={onClearClick}
        >
          {clearLabel}
        </IOButton>
        <IOButton
          variant='text'
          color='primary'
          onClick={onConfirmClick}
        >
          {confirmLabel}
        </IOButton>
      </MenuItem>
    );
  });
