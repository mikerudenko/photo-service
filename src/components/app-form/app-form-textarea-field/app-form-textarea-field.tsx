import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { hasError } from '../../../services/form-service';
import { AppFormFieldError } from '../app-form-field-error';
import { useAppFormTextareaFieldStyles } from './use-app-form-textarea-field-styles';
import c from 'classnames';

export type AppFormTextareaFieldProps = {
  placeholder: string;
  name: string;
  required?: boolean;
  className?: string;
};

export const AppFormTextareaField = memo(
  ({ name, placeholder, required, className }: AppFormTextareaFieldProps) => {
    const { register, errors, formState } = useFormContext();
    const { isDirty } = formState;
    const classes = useAppFormTextareaFieldStyles();
    const { showError, error } = hasError({ errors, name, isDirty });

    return (
      <>
        <textarea
          {...{
            ref: register,
            name,
            placeholder: `${placeholder} ${required ? '*' : ''}`,
          }}
          className={c(
            classes.textarea,
            {
              [classes.textareaError]: showError,
            },
            className,
          )}
        />
        <AppFormFieldError {...{ name, showError, error }} />
      </>
    );
  },
);
