import React, { memo, useCallback } from 'react';
import { Select, InputLabel, MenuItem, useTheme } from '@material-ui/core';
import { useIOFormSelectFieldStyles } from './use-io-form-select-field-styles';
import { useIOFormSelect } from './use-io-form-select';
import { IOTypography } from '../../io-typography';
import Icon from '../../Icon';
import { IOFormSelectMultipleActions } from './io-form-select-multiple-action';
import noop from 'lodash/noop';
import { ArrowDownIcon } from '../../Icon/arrow-down-icon';
import { IOFormSelectFieldProps, IOFormSelectOptionProps } from '../io-form.types';
import { SELECT_MENU_PROPS } from './io-form-select.constants';

export const IOFormSelect = memo(
  ({
     name,
     label,
     multiple = false,
     options = [],
     clearLabel = '',
     confirmLabel = '',
     onClearClick = noop,
     ...other
   }: IOFormSelectFieldProps) => {
    const theme = useTheme();
    const classes = useIOFormSelectFieldStyles();
    const labelId = `select-label-${name}`;
    const {
      open,
      handleOpen,
      handleClose,
      renderValue,
    } = useIOFormSelect(options);

    const renderMenuItem = useCallback(
      ( { label, value }: IOFormSelectOptionProps, i: number) => {
        return (
          <MenuItem
            key={i}
            value={value}
            className={classes.menuItem}
          >
            <IOTypography variant='body3'>{label}</IOTypography>
            <Icon name='check-icon' color={theme.palette.primary.main} />
          </MenuItem>
        );
      }, [options]);

    const handleClear = useCallback(() => {
      handleClose();
      onClearClick();
    }, []);

    return (
      <>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          {...{
            name,
            labelId,
            multiple,
            renderValue,
            open,
            ...other
          }}
          MenuProps={{
            className: classes.popover,
            ...SELECT_MENU_PROPS,
          }}
          className={classes.select}
          onOpen={handleOpen}
          onClose={handleClose}
          IconComponent={ArrowDownIcon}
        >
          {options.map(renderMenuItem)}
          {multiple && (
            <IOFormSelectMultipleActions
              {...{clearLabel, confirmLabel}}
              onClearClick={handleClear}
              onConfirmClick={handleClose}
            />
          )}
        </Select>
      </>
    );
  });
