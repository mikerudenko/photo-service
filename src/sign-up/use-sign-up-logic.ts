import { useAutoCallback } from 'hooks.macro';
import {
  VALIDATION_STRATEGIES,
  createValidationResolver,
} from '../services/validation-service';
import { signUpWithCredentials } from '../api';
import { useAuthLogic } from '../hooks/use-auth-logic';
import { useHistory } from 'react-router';
import { ROUTES } from '../app.constants';

export interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const useSignUpLogic = () => {
  const { onAuthWithGoogleClick, onAuthWithFacebookClick } = useAuthLogic();
  const history = useHistory();

  const onSubmit = useAutoCallback(async (payload: SignUpValues) => {
    try {
      await signUpWithCredentials(payload);
      history.push(ROUTES.root);
    } catch (error) {}
  });

  return {
    onSubmit,
    onSignUpWithGoogleClick: onAuthWithGoogleClick,
    onSignUpWithFacebookClick: onAuthWithFacebookClick,
  };
};

export const validationResolver = createValidationResolver({
  email: VALIDATION_STRATEGIES.email,
  password: VALIDATION_STRATEGIES.password,
  confirmPassword: VALIDATION_STRATEGIES.confirmPassword,
});
