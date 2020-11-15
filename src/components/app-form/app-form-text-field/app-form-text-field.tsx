import TextField from '@material-ui/core/TextField';
import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { hasError } from '../../../services/form-service';
import { AppFormFieldError } from '../app-form-field-error';
import { useAppFormTextFieldStyles } from './use-app-form-text-field-styles';
import FormControl from '@material-ui/core/FormControl';
import c from 'classnames';

export type AppFieldTextProps = {
  label: string;
  name: string;
  required?: boolean;
  type?: 'text' | 'password' | 'email';
  multiline?: boolean;
  rows?: number;
};

export const AppFormTextField = memo(
  ({ name, type, label, multiline, rows }: AppFieldTextProps) => {
    const { register, errors, formState } = useFormContext();
    const { isDirty } = formState;
    const classes = useAppFormTextFieldStyles();
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
          variant='outlined'
          error={showError}
          className={classes.input}
        />
        <AppFormFieldError {...{ name, showError, error }} />
      </FormControl>
    );
  },
);
