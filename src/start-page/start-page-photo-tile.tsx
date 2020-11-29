import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { useAutoCallback } from 'hooks.macro';
import { PhotoType, PHOTO_TYPE_SELECT_LIST } from '../api';
import { useStartPageStyles } from './use-start-page-styles';

type StartPagePhotoTileProps = {
  photoType: PhotoType;
};

export const StartPagePhotoTile = memo(
  ({ photoType }: StartPagePhotoTileProps) => {
    const { formatMessage } = useIntl();
    const classes = useStartPageStyles();
    const onTileClick = useAutoCallback(() => {
      console.log(photoType);
    });

    return <div onClick={onTileClick} className={classes.tile}></div>;
  },
);
