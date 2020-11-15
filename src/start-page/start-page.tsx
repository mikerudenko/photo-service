import React, { memo } from 'react';
import { AppContainer } from '../components/app-container';

export const StartPage = memo(() => {
  return <AppContainer showFooter={false}>Start page</AppContainer>;
});
