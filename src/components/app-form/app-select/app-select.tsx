import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import c from 'classnames';
import React, { memo, useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { AppFormFieldError } from '../app-form-field-error';
import { AppSelectProps } from './app-select.types';
import { useAppSelectStyles } from './use-app-select-styles';
import { useIntl } from 'react-intl';

const MenuProps = {
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom' as const,
    horizontal: 'left' as const,
  },
};

export const AppSelect = memo(
  ({
    control,
    onChange,
    options,
    showError = false,
    error,
    className,
    label,
    name,
    value,
  }: AppSelectProps) => {
    const [labelWidth, setLabelWidth] = useState(0);
    const inputLabel = useRef<HTMLLabelElement>(null);
    const classes = useAppSelectStyles();
    const { formatMessage } = useIntl();

    useEffect(() => {
      setLabelWidth(inputLabel.current?.offsetWidth || 100);
    }, []);

    const select = (
      <Select
        {...{
          onChange,
          MenuProps,
          value: control || value,
        }}
        labelWidth={labelWidth}
      >
        {options.map(({ label, value }, key) => (
          <MenuItem value={value} key={key}>
            {typeof label === 'string' ? label : formatMessage(label)}
          </MenuItem>
        ))}
      </Select>
    );

    return (
      <FormControl
        variant='outlined'
        error={showError}
        className={c(classes.formControl, className)}
      >
        <InputLabel ref={inputLabel}>{label}</InputLabel>
        {control ? (
          <Controller
            control={control}
            name={name}
            defaultValue={value}
            as={select}
          />
        ) : (
          select
        )}

        <AppFormFieldError
          {...{ showError, error }}
          className={classes.errorLabel}
        />
      </FormControl>
    );
  },
);
