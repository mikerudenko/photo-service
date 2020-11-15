import React, { memo } from 'react';
import { useIOFormFieldErrorStyles } from './use-app-form-field-error-styles';
import { P } from '../../app-typography';
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
    const classes = useIOFormFieldErrorStyles();
    const { formatMessage } = useIntl();
    return showError && error ? (
      <P className={c(classes.error, className)}>
        {typeof error === 'string' ? error : formatMessage(error)}
      </P>
    ) : (
      <span className={classes.stub} />
    );
  },
);
