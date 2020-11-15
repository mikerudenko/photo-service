import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { jssPreset, StylesProvider } from '@material-ui/styles';
import { create } from 'jss';
import jssTemplate from 'jss-plugin-template';
import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppTheme } from './app.constants';
import { AppQueryCacheProvider } from './components/query-cache-provider';
import { Root } from './root';

const jss = create({
  plugins: [jssTemplate(), ...jssPreset().plugins],
});
// @ts-ignore
const theme = createMuiTheme(AppTheme);

export const App = memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <AppQueryCacheProvider>
          <BrowserRouter>
            <Root />
          </BrowserRouter>
        </AppQueryCacheProvider>
      </StylesProvider>
    </ThemeProvider>
  );
});
