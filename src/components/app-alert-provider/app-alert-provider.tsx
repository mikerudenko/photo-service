import { useAutoCallback } from 'hooks.macro';
import { SnackbarProvider } from 'notistack';
import React, { memo, ReactNode } from 'react';
import { AppAlert } from './app-alert';
import { AppAlertType } from './app-alert.constants';

type IOAlertProviderProps = {
  children: ReactNode;
};

type IOAlertMessagePayload = {
  message: ReactNode;
  type: AppAlertType;
};

export const IOAlertProvider = memo(({ children }: IOAlertProviderProps) => {
  const renderContent = useAutoCallback(
    (key, { message, type }: IOAlertMessagePayload) => (
      <AppAlert id={key} message={message} type={type} />
    ),
  );

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      content={renderContent}
    >
      {children}
    </SnackbarProvider>
  );
});
