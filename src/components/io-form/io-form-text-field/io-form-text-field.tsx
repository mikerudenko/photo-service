import TextField from '@material-ui/core/TextField';
import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { hasError } from '../../services/form-service';
import { IOFormFieldError } from '../io-form-field-error';
import { useIOFormTextFieldStyles } from './use-io-form-text-field-styles';
import FormControl from '@material-ui/core/FormControl';
import c from 'classnames';
import { IOFormTextFieldProps } from '../io-form.types';

export const IOFormTextField = memo(
  ({
    name,
    type,
    label,
    multiline,
    rows,
    endAdornment,
    onChange,
  }: IOFormTextFieldProps) => {
    const {
      register,
      errors,
      formState: { isDirty },
    } = useFormContext();
    const classes = useIOFormTextFieldStyles();
    const { showError, error } = hasError({ errors, name, isDirty });

    return (
      <FormControl error={showError} className={c(classes.formControl)}>
        <TextField
          {...{
            inputRef: register,
            name,
            label,
            type,
            multiline,
            rows,
          }}
          onChange={onChange}
          InputProps={{ endAdornment }}
          error={showError}
          className={classes.root}
        />
        <IOFormFieldError {...{ name, showError, error }} />
      </FormControl>
    );
  },
);
