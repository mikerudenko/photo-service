import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import React, { memo } from 'react';
import { jssPreset, StylesProvider } from '@material-ui/styles';
import { create } from 'jss';
import jssTemplate from 'jss-plugin-template';
import { AppQueryCacheProvider } from './components/query-cache-provider';
import { AppTheme } from './app.constants';
import { TranslationsProvider } from './translation-provider';
import { Root } from './root';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';

const jss = create({
  plugins: [jssTemplate(), ...jssPreset().plugins],
});
const theme = createMuiTheme(AppTheme);

export const App = memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <AppQueryCacheProvider>
          <TranslationsProvider>
            <BrowserRouter>
              <Root />
            </BrowserRouter>
          </TranslationsProvider>
        </AppQueryCacheProvider>
      </StylesProvider>
    </ThemeProvider>
  );
});
