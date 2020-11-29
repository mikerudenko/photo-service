import FormControl from '@material-ui/core/FormControl';
import { KeyboardDatePicker } from '@material-ui/pickers';
import c from 'classnames';
import { useAutoCallback, useAutoEffect } from 'hooks.macro';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { hasError } from '../../../services/form-service';
import { AppFormFieldError } from '../app-form-field-error';
import { useFormFieldDateStyles } from './use-app-form-field-date-styles';
import { DATE_MASK } from '../../../app.constants';

type FormFieldDateProps = {
  label: string;
  name: string;
};

export const AppFormFieldDate = ({ label, name }: FormFieldDateProps) => {
  const classes = useFormFieldDateStyles();
  const {
    register,
    errors,
    getValues,
    setValue,
    formState: { isDirty },
  } = useFormContext();
  const { showError, error } = hasError({ errors, name, isDirty });
  const date = getValues()[name];
  const selectedDate = date && new Date(date);

  useAutoEffect(() => {
    register({ name });
  });

  const onChange = useAutoCallback((value) => {
    setValue(name, value);
  });

  return (
    <FormControl error={showError} className={c(classes.formControl)}>
      <KeyboardDatePicker
        label={label}
        autoOk
        onChange={onChange}
        format={DATE_MASK}
        value={selectedDate}
        inputVariant='outlined'
      />

      <AppFormFieldError {...{ name, showError, error }} />
    </FormControl>
  );
};
