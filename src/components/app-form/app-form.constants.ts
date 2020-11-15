import { AppFormTextField } from './app-form-text-field';
import { AppFormFieldDate } from './app-form-field-date';
import { AppFormSelect } from './app-form-select';
import { AppFormImageDropzone } from './app-form-image-dropzone';
import { AppFormTextareaField } from './app-form-textarea-field';

export type AppFormFieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'chips'
  | 'number'
  | 'date'
  | 'image'
  | 'textarea'
  | 'select';

export const AppFormFields = {
  text: AppFormTextField,
  email: AppFormTextField,
  password: AppFormTextField,
  date: AppFormFieldDate,
  select: AppFormSelect,
  image: AppFormImageDropzone,
  textarea: AppFormTextareaField,
  number: AppFormTextField,
};
