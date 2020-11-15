import React, { ChangeEvent, memo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { hasError } from '../../../services/form-service';
import { AppSelect, AppSelectOptionType } from '../app-select';

type AppFormSelectProps = {
  name: string;
  label: string;
  options: AppSelectOptionType[];
  className?: string;
  labelValues?: Record<number | string, any>;
  required?: boolean;
};

export const AppFormSelect = memo(({ name, ...rest }: AppFormSelectProps) => {
  const { control, errors, setValue, formState, getValues } = useFormContext();
  const { isDirty } = formState;
  const { showError, error } = hasError({ errors, name, isDirty });
  const { [name]: value } = getValues();

  const onChange = useCallback(
    ({ target: { value } }: ChangeEvent<{ name?: string; value: unknown }>) => {
      setValue(name, value);
    },
    [name, setValue],
  );

  return (
    <AppSelect
      {...{
        control,
        name,
        showError,
        error,
        onChange,
        value,
        ...rest,
      }}
    />
  );
});
