import React, { useMemo } from 'react';
import { SECURITY_LEVEL_PATTERN } from './io-form-security-level.constants';

export const useIOFormSecurityLevel = () => {
  const [password, setPassword] = React.useState<string>('');
  const onChange = (e) => setPassword(e.currentTarget.value);
  const passwordStrength = useIOFormPasswordStrength(password);

  return useMemo(() => ({
     passwordStrength,
     onChange
   }), [password]);
}

export const useIOFormPasswordStrength = (password: string) => {

  const matchCount = SECURITY_LEVEL_PATTERN.reduce(((strength: number, pattern: RegExp) =>
    new RegExp(pattern).test(password) ? strength + 1 : strength
  ), 0);

  return (matchCount * 100) / SECURITY_LEVEL_PATTERN.length;
};
