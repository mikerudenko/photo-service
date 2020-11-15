import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { hasError } from '../../../services/form-service';
import { AppFormFieldError } from '../app-form-field-error';
import { useAppFormTextFieldStyles } from './use-app-form-text-field-styles';
import c from 'classnames';

export type AppFieldTextProps = {
  placeholder: string;
  name: string;
  defaultValue?: string | number;
  required?: boolean;
  type?: 'text' | 'password' | 'email' | 'number';
};

export const AppFormTextField = memo(
  ({ name, type, placeholder, required, defaultValue }: AppFieldTextProps) => {
    const { register, errors, formState } = useFormContext();
    const { isDirty } = formState;
    const classes = useAppFormTextFieldStyles();
    const { showError, error } = hasError({ errors, name, isDirty });

    return (
      <>
        <input
          {...{
            ref: register,
            name,
            defaultValue,
            placeholder: `${placeholder} ${required ? '*' : ''}`,
            type,
          }}
          className={c(classes.input, { [classes.inputError]: showError })}
        />
        <AppFormFieldError {...{ name, showError, error }} />
      </>
    );
  },
);
