import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import React, { memo } from 'react';
import { HeaderLeftSection } from './header-left-section';
import { HeaderRightSection } from './header-right-section';
import { useAppHeaderStyles } from './use-app-header-styles';

export const AppHeader = memo(() => {
  const classes = useAppHeaderStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <HeaderLeftSection />
          <HeaderRightSection />
        </Toolbar>
      </Container>
    </AppBar>
  );
});
