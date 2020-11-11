import { AppFormFieldType } from './app-form.constants';

export interface AppFormFieldProps {
  type: AppFormFieldType;
  name: string;
  label: string;
  required?: boolean;
}
