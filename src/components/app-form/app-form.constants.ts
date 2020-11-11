import { AppFormTextField } from './app-form-text-field';

export type AppFormFieldType = 'text' | 'email' | 'password' | 'chips';

export const AppFormFields = {
  text: AppFormTextField,
  email: AppFormTextField,
  password: AppFormTextField,
};
