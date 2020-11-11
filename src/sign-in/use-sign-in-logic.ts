import { useAutoCallback } from 'hooks.macro';

import { useAuthLogic } from '../hooks';
import { signInWithCredentials } from '../api';
import { SignInValues, resolveServerError } from './sign-in.validation';
import { useForm } from 'react-hook-form';

export const useSignInLogic = () => {
  const { onAuthWithGoogleClick, onAuthWithFacebookClick } = useAuthLogic();
  const { setError } = useForm();

  const onSubmit = useAutoCallback(async (payload: SignInValues) => {
    try {
      await signInWithCredentials(payload);
    } catch (error) {
      // @ts-ignore
      setError(...resolveServerError(error));
    }
  });

  return {
    onSubmit,
    onSignInWithGoogleClick: onAuthWithGoogleClick,
    onSignInWithFacebookClick: onAuthWithFacebookClick,
  };
};
