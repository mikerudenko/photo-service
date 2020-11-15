import { useAutoCallback } from 'hooks.macro';
import React, { ChangeEvent, memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { hasError } from '../../../services/form-service';
import {
  AppSelect,
  AppSelectMultiple,
  AppSelectOptionType,
} from '../app-select';

type AppFormSelectProps = {
  name: string;
  label: string;
  options: AppSelectOptionType[];
  className?: string;
  labelValues?: Record<number | string, any>;
  required?: boolean;
  multiple?: boolean;
};

export const AppFormSelect = memo(
  ({ name, multiple, ...rest }: AppFormSelectProps) => {
    const {
      control,
      errors,
      setValue,
      formState,
      getValues,
    } = useFormContext();
    const { isDirty } = formState;
    const { showError, error } = hasError({ errors, name, isDirty });
    const { [name]: value } = getValues();
    const onChangeSingle = useAutoCallback(
      ({
        target: { value },
      }: ChangeEvent<{ name?: string; value: unknown }>) => {
        setValue(name, value);
      },
    );

    const onChangeMultipleSelect = useAutoCallback(([, data]: any) => {
      debugger;
      setValue(name, data);
    });

    const Select = multiple ? AppSelectMultiple : AppSelect;
    const onChange = multiple ? onChangeSingle : onChangeMultipleSelect;

    return (
      <Select
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
  },
);
