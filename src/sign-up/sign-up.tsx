import React, { memo } from 'react';
import { ROUTES } from '../app.constants';
import { AppAuthButton } from '../components/app-auth-button';
import { AppSubmitButton } from '../components/app-button/app-submit-button';
import { AppCopyright } from '../components/app-copyright';
import { AppForm } from '../components/app-form/app-form';
import { AppLink } from '../components/app-link';
import { AppLogo } from '../components/app-logo';
import { AppTile } from '../components/app-tile';
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
        <AppFormField
          name='confirmPassword'
          type='password'
          required
          placeholder={formatMessage(globalMessages.confirmPassword)}
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
        <AppLink to={ROUTES.signIn}>
          {formatMessage(signUpMessages.signInLink)}
        </AppLink>
      </div>
      <AppCopyright className={classes.copy} />
    </AppTile>
  );
});
