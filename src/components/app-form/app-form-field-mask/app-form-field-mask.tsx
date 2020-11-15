import React, { memo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';

import { useAppPhoneFieldStyles } from './use-app-form-field-mask-styles';
import { hasError } from '../../../services/form-service';
import { useFormContext, Controller } from 'react-hook-form';
import { AppFormFieldError } from '../app-form-field-error';
import { MaskMap } from './app-form-field-mask.constants';

export type AppFormFieldMaskProps = {
  label: string;
  required?: boolean;
  mask: 'phone' | 'card';
  name: string;
};

export const AppFormFieldMask = memo(
  ({ label, mask, name }: AppFormFieldMaskProps) => {
    const classes = useAppPhoneFieldStyles();
    const {
      errors,
      control,
      register,
      formState: { isDirty },
    } = useFormContext();
    const { showError, error } = hasError({ errors, name, isDirty });
    return (
      <FormControl error={showError} className={classes.wrapper}>
        <Controller
          control={control}
          name={name}
          as={
            <InputMask mask={MaskMap[mask]}>
              {(inputProps: any) => (
                <TextField
                  {...inputProps}
                  ref={register}
                  {...{
                    label,
                  }}
                  variant='outlined'
                  error={showError}
                  className={classes.input}
                />
              )}
            </InputMask>
          }
        />
        <AppFormFieldError {...{ name, showError, error }} />
      </FormControl>
    );
  },
);
