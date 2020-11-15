import React, { memo, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';

import { AppSelectProps, AppSelectOptionType } from './app-select.types';
import { useAppSelectStyles } from './use-app-select-styles';
import { AppFormFieldError } from '../app-form-field-error';

export const AppSelectMultiple = memo(
  ({
    onChange,
    options,
    showError = false,
    error,
    label,
    labelValues,
    name,
    value,
  }: AppSelectProps) => {
    const classes = useAppSelectStyles();

    const getOptionTitle = useCallback(
      ({ label }: AppSelectOptionType) => label,
      [],
    );

    const selectedValue = options.filter(({ value: v }) =>
      (value as string[]).includes(v),
    ) as any;

    return (
      <FormControl error={showError} className={classes.formControl}>
        <Autocomplete
          {...({ onChange, name, options } as any)}
          multiple
          value={selectedValue as any}
          filterSelectedOptions
          getOptionLabel={getOptionTitle}
          className={classes.multiSelect}
          renderInput={(params) => (
            <TextField {...params} variant='outlined' label={label} fullWidth />
          )}
        />
        <AppFormFieldError {...{ showError, error }} />
      </FormControl>
    );
  },
);
