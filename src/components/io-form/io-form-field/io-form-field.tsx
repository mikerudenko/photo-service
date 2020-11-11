import React, { memo } from 'react';
import { IOFormFields } from '../io-form.constants';
import {
  IOFormFieldProps,
  IOFormPasswordFieldProps,
  IOFormSelectFieldProps,
  IOFormTextFieldProps,
} from '../io-form.types';

export const IOFormField = memo(
  ({ type, ...rest }: IOFormFieldProps
    & IOFormTextFieldProps
    & IOFormPasswordFieldProps
    & IOFormSelectFieldProps
  ) => {
  const Field = IOFormFields[type];
  return <Field type={type} {...rest} />;
});
