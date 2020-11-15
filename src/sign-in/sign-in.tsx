import React, { memo } from 'react';
import { ROUTES } from '../app.constants';
import { AppAuthButton } from '../components/app-auth-button';
import { AppSubmitButton } from '../components/app-button/app-submit-button';
import { AppTile } from '../components/app-tile';
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
    <AppTile className={classes.formWrapper}>
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
          placeholder={formatMessage(globalMessages.email)}
        />
        <AppFormField
          name='password'
          type='password'
          required
          placeholder={formatMessage(globalMessages.password)}
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
        <AppLink to={ROUTES.resetPassword} className={classes.signInLink}>
          {formatMessage(signInMessages.forgotPassword)}
        </AppLink>
        <AppLink to={ROUTES.signUp}>
          {formatMessage(signInMessages.signUpLink)}
        </AppLink>
      </div>
      <AppCopyright className={classes.copy} />
    </AppTile>
  );
});
