import React, { memo } from 'react';
import { useAppFormFieldErrorStyles } from './use-app-form-field-error-styles';
import { AppTypography } from '../../app-typography';
import c from 'classnames';
import { MessageDescriptor } from 'react-intl';
import { useIntl } from 'react-intl';

export type AppFormFieldErrorProps = {
  showError: boolean;
  error?: MessageDescriptor | string;
  className?: string;
};

export const AppFormFieldError = memo(
  ({ showError, error, className }: AppFormFieldErrorProps) => {
    const classes = useAppFormFieldErrorStyles();
    const { formatMessage } = useIntl();
    return showError && error ? (
      <AppTypography variant='p' className={c(classes.error, className)}>
        {typeof error === 'string' ? error : formatMessage(error)}
      </AppTypography>
    ) : (
      <span className={classes.stub} />
    );
  },
);
