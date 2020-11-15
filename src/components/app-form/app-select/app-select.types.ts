import { ChangeEvent, ReactNode } from 'react';

export type AppSelectOptionType = {
  value: string;
  label: string;
};

export type AppSelectProps = {
  name: string;
  label: string;
  options: AppSelectOptionType[];
  labelValues?: Record<number | string, any>;
  required?: boolean;
  className?: string;
  onChange: (
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>,
    child: ReactNode,
  ) => void;
  showError?: boolean;
  error?: string;
  register?: any;
  value?: string | number | string[];
  control?: any;
};
