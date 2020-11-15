import { ChangeEvent, ReactNode } from 'react';
import { MessageDescriptor } from 'react-intl';

export type AppSelectOptionType = {
  value: string;
  label: string | MessageDescriptor;
};

export type AppSelectProps = {
  name: string;
  label: string | MessageDescriptor;
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
  multiple?: boolean;
};
