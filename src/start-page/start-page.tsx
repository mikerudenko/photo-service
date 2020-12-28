import React, { memo } from 'react';
import { AppContainer } from '../components/app-container';
import { useStartPageStyles } from './use-start-page-styles';
import { StartPageSlider } from './desktop-slider/start-page-slider';

export const StartPage = memo(() => {
  const classes = useStartPageStyles();

  return (
    <AppContainer
      showFooter={false}
      containerClass={classes.startPageContainer}
    >
      <StartPageSlider />
    </AppContainer>
  );
});
