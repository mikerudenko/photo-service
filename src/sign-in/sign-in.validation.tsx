import {
  createValidationResolver,
  VALIDATION_STRATEGIES,
} from '../services/validation-service';

export type SignInValues = {
  email: string;
  password: string;
};

export const validationResolver = createValidationResolver({
  email: VALIDATION_STRATEGIES.email,
  password: VALIDATION_STRATEGIES.password,
});
