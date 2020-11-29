import React, { memo } from 'react';
import Photoshoot from './photoshoot.svg';
import { AppContainer } from '../components/app-container';
import { useStartPageStyles } from './use-start-page-styles';
import { H1 } from '../components/app-typography';
import { startPageMessages } from './start-page.messages';
import { PhotoType } from '../api';
import { useIntl } from 'react-intl';
import { useAutoCallback } from 'hooks.macro';
import { StartPagePhotoTile } from './start-page-photo-tile';

export const StartPage = memo(() => {
  const { formatMessage } = useIntl();
  const classes = useStartPageStyles();

  const renderPhotoTypeTile = useAutoCallback((photoType: PhotoType, index) => (
    <StartPagePhotoTile key={index} photoType={photoType} />
  ));

  return (
    <AppContainer
      showFooter={false}
      containerClass={classes.startPageContainer}
    >
      <H1 className={classes.title}>
        {formatMessage(startPageMessages.title)}
      </H1>
      {/* @ts-ignore */}
      {Object.keys(PhotoType).map(renderPhotoTypeTile)}
      <img src={Photoshoot} alt='' className={classes.image} />
    </AppContainer>
  );
});
