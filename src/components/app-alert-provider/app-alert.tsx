import c from 'classnames';
import React, { forwardRef, ReactNode } from 'react';
import { P } from '../app-typography';
import { AppAlertType } from './app-alert.constants';
import { useIOAlertStyles } from './use-app-alert-styles';

export type AppAlertProps = {
  id: string;
  message: ReactNode | string;
  type: AppAlertType;
};

export const AppAlert = forwardRef(
  ({ message, type }: AppAlertProps, ref: any) => {
    const classes = useIOAlertStyles();

    return (
      <div ref={ref} className={c(classes.alert, classes[type])}>
        <P>{message}</P>
      </div>
    );
  },
);
