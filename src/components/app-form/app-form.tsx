import React, { memo, FC } from 'react';
import { useForm, FormProvider, UseFormOptions } from 'react-hook-form';

export type AppFormProps = {
  onSubmit(values: any, event: any, setError: any): void;
  className?: string;
  formConfig?: UseFormOptions<any>;
};

export const AppForm: FC<AppFormProps> = memo(
  ({ children, className, formConfig, onSubmit }) => {
    const methods = useForm({ ...formConfig });

    return (
      <FormProvider {...methods}>
        <form
          className={className}
          onSubmit={methods.handleSubmit((payload, event) =>
            onSubmit(payload, event, methods.setError),
          )}
        >
          {children}
        </form>
      </FormProvider>
    );
  },
);
