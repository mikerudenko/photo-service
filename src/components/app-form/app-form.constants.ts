import { AppFormTextField } from './app-form-text-field';
import { AppFormFieldDate } from './app-form-field-date';
import { AppFormSelect } from './app-form-select';

export type AppFormFieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'chips'
  | 'date'
  | 'select';

export const AppFormFields = {
  text: AppFormTextField,
  email: AppFormTextField,
  password: AppFormTextField,
  date: AppFormFieldDate,
  select: AppFormSelect,
};
