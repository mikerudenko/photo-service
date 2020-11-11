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
import { signInMessages } from './sign-in.messages';
import { validationResolver } from './sign-in.validation';
import { useSignInLogic } from './use-sign-in-logic';
import { useSignInStyles } from './use-sign-in-styles';
import { useIntl } from 'react-intl';

export const SignIn = memo(() => {
  const {
    onSubmit,
    onSignInWithGoogleClick,
    onSignInWithFacebookClick,
  } = useSignInLogic();
  const classes = useSignInStyles();
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
        <AppSubmitButton
          color='primary'
          text={formatMessage(globalMessages.signIn)}
        />
      </AppForm>

      <div className={classes.socialButtons}>
        <AppAuthButton onClick={onSignInWithGoogleClick} type='google' />
        <AppAuthButton onClick={onSignInWithFacebookClick} type='facebook' />
      </div>
      <div className={classes.links}>
        <AppLink
          variant='body2'
          to={ROUTES.resetPassword}
          text={signInMessages.forgotPassword}
        />
        <AppLink
          variant='body2'
          to={ROUTES.signUp}
          text={signInMessages.signUpLink}
        />
      </div>
      <AppCopyright className={classes.copy} />
    </div>
  );
});
