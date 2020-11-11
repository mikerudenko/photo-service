import { useAutoCallback } from 'hooks.macro';
import {
  VALIDATION_STRATEGIES,
  createValidationResolver,
} from '../services/validation-service';
import { signUpWithCredentials } from '../api';
import { useAuthLogic } from '../hooks/use-auth-logic';

export interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const useSignUpLogic = () => {
  const { onAuthWithGoogleClick, onAuthWithFacebookClick } = useAuthLogic();

  const onSubmit = useAutoCallback(async (payload: SignUpValues) => {
    try {
      return signUpWithCredentials(payload);
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
