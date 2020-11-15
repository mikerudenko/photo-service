import { ButtonProps } from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import c from 'classnames';
import React, { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { useAppSubmitButtonStyles } from './use-app-submit-button-styles';
import { ButtonText } from '../../app-typography';

interface AppSubmitButtonProps {
  text: string;
  size?: 'small' | 'medium' | 'large' | undefined;
}

export const AppSubmitButton = memo(
  ({
    text,
    className,
    color,
    onClick,
    size = 'medium' as const,
  }: AppSubmitButtonProps & ButtonProps) => {
    const classes = useAppSubmitButtonStyles();
    const {
      errors,
      formState: { isSubmitting },
    } = useFormContext();

    return (
      <div className={c(classes.wrapper, className)}>
        <button
          type='submit'
          disabled={!!Object.keys(errors).length || isSubmitting}
          {...{
            size,
            className: classes.button,
            onClick,
          }}
        >
          <ButtonText>{text}</ButtonText>
        </button>
        {isSubmitting && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    );
  },
);
