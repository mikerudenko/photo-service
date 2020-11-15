import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useAutoCallback } from 'hooks.macro';
import React, { memo } from 'react';
import { Controller } from 'react-hook-form';
import { AppFormFieldError } from '../app-form-field-error';
import { useIntl } from 'react-intl';
import { AppSelectOptionType, AppSelectProps } from './app-select.types';
import { useAppSelectStyles } from './use-app-select-styles';

export const AppSelectMultiple = memo(
  ({
    onChange,
    options,
    showError = false,
    error,
    label,
    name,
    value,
    control,
  }: AppSelectProps) => {
    const { formatMessage } = useIntl();
    const classes = useAppSelectStyles();
    const getOptionTitle = useAutoCallback(({ label }: AppSelectOptionType) => {
      if (label) {
        return typeof label === 'string' ? label : formatMessage(label);
      }
    });

    const selectedValue = options.filter(({ value: v }) => {
      return (value as string[])?.includes(v) || false;
    });

    return (
      <FormControl error={showError} className={classes.formControl}>
        <Controller
          control={control}
          name={name}
          defaultValue={selectedValue}
          onChange={onChange}
          render={({ onChange, ...props }: any) => (
            <Autocomplete
              {...({ name, options, ...props } as any)}
              multiple
              onChange={(e, data) => {
                onChange(data);
              }}
              // value={value}
              filterSelectedOptions
              getOptionLabel={getOptionTitle}
              className={classes.multiSelect}
              label={label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant='outlined'
                  label={label}
                  fullWidth
                />
              )}
            />
          )}
        />
        <AppFormFieldError {...{ showError, error }} />
      </FormControl>
    );
  },
);
