import { AppFormFieldType } from './app-form.constants';
import { AppSelectProps } from './app-select/app-select.types';

export type AppFormFieldProps = {
  type: AppFormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string | number;
} & Partial<AppSelectProps>;
