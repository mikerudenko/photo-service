import { IOFormFieldType } from './io-form.constants';
import React, { ReactNode } from 'react';

export interface IOFormFieldProps {
  type: IOFormFieldType;
  name: string;
  label: string;
  required?: boolean;

};

export interface IOFormPasswordFieldProps extends IOFormFieldProps {
  showVisibilityIcon?: boolean;
  showSecurityLevel?: boolean;
  securityLevelLabel?: string;
};

export interface IOFormTextFieldProps extends IOFormFieldProps {
  multiline?: boolean;
  rows?: number;
  endAdornment?: ReactNode;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
};

export type IOFormSelectOptionProps = {
  label: string;
  value: string;
}

export interface IOFormSelectMultipleActionsProps {
  clearLabel?: string;
  confirmLabel?: string;
  onClearClick?(): void;
  onConfirmClick?(): void;
}

export interface IOFormSelectFieldProps extends IOFormFieldProps, IOFormSelectMultipleActionsProps {
  multiple?: boolean;
  options?: IOFormSelectOptionProps[];
}


