import React, { useMemo } from 'react';
import { IOFormFieldType } from '../io-form.constants';

export const useIOFormPasswordVisibility = () => {

  const [showPassword, setShowPassword] = React.useState(false);
  const iconName = showPassword ? 'visibility-off' : 'visibility';
  const inputType: IOFormFieldType = showPassword ? 'text': 'password';
  const onClick = () => setShowPassword(!showPassword);
  return useMemo(() => ({
      inputType,
      iconName,
      onClick,
  }), [showPassword]);
}
