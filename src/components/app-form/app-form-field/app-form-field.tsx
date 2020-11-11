import React, { memo } from 'react';
import { AppFormFields } from '../app-form.constants';
import { AppFormFieldProps } from '../app-form.types';

export const AppFormField = memo(({ type, ...rest }: AppFormFieldProps) => {
  // @ts-ignore
  const Field = AppFormFields[type];
  return <Field type={type} {...rest} />;
});
