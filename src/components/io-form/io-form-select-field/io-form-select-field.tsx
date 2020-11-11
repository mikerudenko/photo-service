import React, { memo, useCallback } from 'react';
import { FormControl } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';
import { hasError } from '../../services/form-service';
import { IOFormFieldError } from '../io-form-field-error';
import { IOFormSelect } from './io-form-select';
import { useIOFormSelectFieldStyles } from './use-io-form-select-field-styles';
import { IOFormSelectFieldProps } from '../io-form.types';

export const IOFormSelectField = memo(
  ({
    name,
    label,
    multiple = false,
    options = [],
    confirmLabel = '',
    clearLabel = '',
    ...other
  }: IOFormSelectFieldProps) => {
    const {
      control,
      errors,
      formState: { isDirty },
      reset,
    } = useFormContext();
    const classes = useIOFormSelectFieldStyles();
    const { showError, error } = hasError({ errors, name, isDirty });
    const defaultValue = multiple ? [] : undefined;
    // @ts-ignore
    const onClearClick = useCallback(() => reset({ [name]: '' }), [
      reset,
      name,
    ]);
    const SelectField = (
      <IOFormSelect
        {...{
          name,
          label,
          multiple,
          options,
          clearLabel,
          confirmLabel,
          onClearClick,
          ...other,
        }}
      />
    );

    return (
      <FormControl fullWidth error={showError} className={classes.formControl}>
        <Controller as={SelectField} {...{ name, control, defaultValue }} />
        <IOFormFieldError {...{ name, showError, error }} />
      </FormControl>
    );
  },
);
