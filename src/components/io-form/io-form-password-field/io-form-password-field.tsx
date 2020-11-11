import React, { memo } from 'react';
import { IOFormTextField } from '../io-form-text-field';
import { useIOFormPasswordFieldStyles } from './use-io-form-password-field-styles';
import { IOFormPasswordVisibility } from '../io-form-password-visibility';
import { useIOFormPasswordVisibility } from '../io-form-password-visibility';
import { IOFormSecurityLevel } from '../io-form-security-level';
import { useIOFormSecurityLevel } from '../io-form-security-level';
import { IOFormPasswordFieldProps } from '../io-form.types';

export const IOFormPasswordField = memo(
  ({
    showVisibilityIcon = false,
    showSecurityLevel = false,
    securityLevelLabel = '',
    ...props
  }: IOFormPasswordFieldProps) => {
    const classes = useIOFormPasswordFieldStyles();
    const { inputType, iconName, onClick } = useIOFormPasswordVisibility();
    const { onChange, passwordStrength } = useIOFormSecurityLevel();
    const adornment = showVisibilityIcon && (
      <IOFormPasswordVisibility iconName={iconName} onClick={onClick}/>
    );
    const securityLevel = showSecurityLevel && (
      <div className={classes.securityLevel}>
        <IOFormSecurityLevel
          label={securityLevelLabel}
          progress={passwordStrength}
        />
      </div>
    );

    return (
      <div className={classes.root}>
        {securityLevel}
        <IOFormTextField
          {...props}
          type={inputType}
          onChange={onChange}
          endAdornment={adornment}
        />
      </div>
    );
  },
);
