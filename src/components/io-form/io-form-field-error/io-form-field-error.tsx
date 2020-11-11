import React, { memo } from 'react';
import { useIOFormFieldErrorStyles } from './use-io-form-field-error-styles';
import { IOTypography } from '../../io-typography';
import c from 'classnames';

export type IOFormFieldErrorProps = {
  showError: boolean;
  error?: string;
  className?: string;
};

export const IOFormFieldError = memo(
  ({ showError, error, className }: IOFormFieldErrorProps) => {
    const classes = useIOFormFieldErrorStyles();
    return showError && error ? (
      <IOTypography variant='body4' className={c(classes.error, className)}>
        {error}
      </IOTypography>
    ) : (
      <span className={classes.stub} />
    );
  },
);
