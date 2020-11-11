import React, { memo, FC } from 'react';
import { useForm, FormProvider, UseFormOptions } from 'react-hook-form';

export type AppFormProps = {
  onSubmit(values: any, e: any): void;
  className?: string;
  formConfig?: UseFormOptions<any>;
};

const defaultFormConfig = {
  // mode: 'onChange' as const,
  // reValidateMode: 'onSubmit' as const,
  // defaultValues: {},
  // validateCriteriaMode: 'all' as const,
  // submitFocusError: true,
  // nativeValidation: false,
};

export const AppForm: FC<AppFormProps> = memo(
  ({ children, className, formConfig, onSubmit }) => {
    const methods = useForm({ ...defaultFormConfig, ...formConfig });

    return (
      <FormProvider {...methods}>
        <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </form>
      </FormProvider>
    );
  },
);
