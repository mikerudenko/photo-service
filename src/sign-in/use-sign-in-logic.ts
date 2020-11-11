import { useAutoCallback } from 'hooks.macro';
import { useHistory } from 'react-router-dom';
import { signInWithCredentials } from '../api';
import { authMessages } from '../api/api-auth/api-auth.messages';
import { ROUTES } from '../app.constants';
import { useAuthLogic } from '../hooks';
import { SignInValues } from './sign-in.validation';

export const useSignInLogic = () => {
  const { onAuthWithGoogleClick, onAuthWithFacebookClick } = useAuthLogic();
  const history = useHistory();

  const onSubmit = useAutoCallback(
    async (payload: SignInValues, _: any, setError) => {
      try {
        await signInWithCredentials(payload);
        history.push(ROUTES.profile);
      } catch (error) {
        setError('password', authMessages.wrongPassword);
      }
    },
  );

  return {
    onSubmit,
    onSignInWithGoogleClick: onAuthWithGoogleClick,
    onSignInWithFacebookClick: onAuthWithFacebookClick,
  };
};
