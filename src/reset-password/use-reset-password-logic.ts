import { useAutoCallback } from 'hooks.macro';
import { sendPasswordResetEmail } from '../api';
import {
  createValidationResolver,
  VALIDATION_STRATEGIES,
} from '../services/validation-service';

export type ResetPasswordValues = {
  email: string;
};

export const useResetPasswordLogic = () => {
  const onSubmit = useAutoCallback(async ({ email }: ResetPasswordValues) => {
    return sendPasswordResetEmail(email);
  });

  return { onSubmit };
};

export const validationResolver = createValidationResolver({
  email: VALIDATION_STRATEGIES.email,
});
