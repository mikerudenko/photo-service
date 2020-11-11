import { IOFormTextField } from './io-form-text-field';
import { IOFormPasswordField } from './io-form-password-field';
import { IOFormSelectField } from './io-form-select-field';

export type IOFormFieldType = 'text' | 'email' | 'password' | 'select';

export const IOFormFields = {
  text: IOFormTextField,
  email: IOFormTextField,
  password: IOFormPasswordField,
  select: IOFormSelectField
};
