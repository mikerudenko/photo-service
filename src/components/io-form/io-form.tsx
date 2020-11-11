import React, { memo, FC } from 'react';
import { useForm, FormProvider, UseFormOptions } from 'react-hook-form';

export type IOFormProps = {
  onSubmit(values: any, e: any): void;
  className?: string;
  formConfig?: UseFormOptions<any>;
};

const defaultFormConfig = {
  mode: 'onChange' as const,
  reValidateMode: 'onChange' as const,
  defaultValues: {},
  validateCriteriaMode: 'firstError' as const,
  submitFocusError: true,
  nativeValidation: false,
};

export const IOForm: FC<IOFormProps> = memo(
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
