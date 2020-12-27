import React, { memo } from 'react';
import { AppContainer } from '../components/app-container';
import { useStartPageStyles } from './use-start-page-styles';
import { StartPageDesktopSlider } from './desktop-slider/start-page-desktop-slider';

export const StartPage = memo(() => {
  const classes = useStartPageStyles();

  return (
    <AppContainer
      showFooter={false}
      containerClass={classes.startPageContainer}
    >
      <StartPageDesktopSlider />
    </AppContainer>
  );
});
