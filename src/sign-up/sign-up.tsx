import React, { memo } from 'react';
import { ROUTES } from '../app.constants';
import { AppAuthButton } from '../components/app-auth-button';
import { AppSubmitButton } from '../components/app-button/app-submit-button';
import { AppCopyright } from '../components/app-copyright';
import { AppForm } from '../components/app-form/app-form';
import { AppLink } from '../components/app-link';
import { AppLogo } from '../components/app-logo';
import { AppFormField } from '../components/app-form/app-form-field';
import { globalMessages } from '../app-global.messages';
import { signUpMessages } from './sign-up.messages';
import { useSignUpLogic, validationResolver } from './use-sign-up-logic';
import { useSignUpStyles } from './use-sign-up-styles';
import { useIntl } from 'react-intl';

export const SignUp = memo(() => {
  const {
    onSubmit,
    onSignUpWithGoogleClick,
    onSignUpWithFacebookClick,
  } = useSignUpLogic();
  const classes = useSignUpStyles();
  const { formatMessage } = useIntl();
  return (
    <div className={classes.formWrapper}>
      <AppLogo />
      <AppForm
        onSubmit={onSubmit}
        className={classes.form}
        formConfig={{ resolver: validationResolver }}
      >
        <AppFormField
          name='email'
          type='email'
          required
          label={formatMessage(globalMessages.email)}
        />
        <AppFormField
          name='password'
          type='password'
          required
          label={formatMessage(globalMessages.password)}
        />
        <AppFormField
          name='confirmPassword'
          type='password'
          required
          label={formatMessage(globalMessages.confirmPassword)}
        />
        <AppSubmitButton
          color='primary'
          text={formatMessage(globalMessages.signUp)}
        />
      </AppForm>
      <div className={classes.socialButtons}>
        <AppAuthButton onClick={onSignUpWithGoogleClick} type='google' />
        <AppAuthButton onClick={onSignUpWithFacebookClick} type='facebook' />
      </div>
      <div className={classes.links}>
        <AppLink
          variant='body2'
          to={ROUTES.signIn}
          text={signUpMessages.signInLink}
        />
      </div>
      <AppCopyright className={classes.copy} />
    </div>
  );
});
