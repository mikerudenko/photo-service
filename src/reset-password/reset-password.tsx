import React, { memo } from 'react';
import { globalMessages } from '../app-global.messages';
import { ROUTES } from '../app.constants';
import { AppSubmitButton } from '../components/app-button/app-submit-button';
import { AppCopyright } from '../components/app-copyright';
import { AppFormField } from '../components/app-form';
import { AppForm } from '../components/app-form/app-form';
import { AppLink } from '../components/app-link';
import { AppLogo } from '../components/app-logo';
import { resetPasswordMessages } from './reset-password.messages';
import {
  useResetPasswordLogic,
  validationResolver,
} from './use-reset-password-logic';
import { useResetPasswordStyles } from './use-reset-password-styles';
import { useIntl } from 'react-intl';

export const ResetPassword = memo(() => {
  const classes = useResetPasswordStyles();
  const { onSubmit } = useResetPasswordLogic();
  const { formatMessage } = useIntl();

  return (
    <div className={classes.formWrapper}>
      <AppLogo />
      <AppForm
        onSubmit={onSubmit}
        formConfig={{ resolver: validationResolver }}
        className={classes.form}
      >
        <AppFormField
          name='email'
          type='email'
          required
          label={formatMessage(globalMessages.email)}
        />
        <AppSubmitButton
          color='primary'
          text={formatMessage(resetPasswordMessages.resetPassword)}
        />
      </AppForm>

      <AppLink
        variant='body2'
        to={ROUTES.signIn}
        className={classes.resetLink}
        text={formatMessage(resetPasswordMessages.backToSignIn)}
      />
      <AppCopyright />
    </div>
  );
});
