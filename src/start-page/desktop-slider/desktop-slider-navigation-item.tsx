import { PHOTO_TYPE_MESSAGE_MAP } from 'app.constants';
import { AppTypography } from 'components/app-typography';
import { useAutoCallback } from 'hooks.macro';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { useStartPageStyles } from 'start-page/use-start-page-styles';
import { PhotoType } from '../../api';

type DesktopSliderNavigationItemProps = {
  isActive: boolean;
  photoType: PhotoType;
  setActivePhotoType(photoType: PhotoType): void;
};

export const DesktopSliderNavigationItem = memo(
  ({
    isActive,
    photoType,
    setActivePhotoType,
  }: DesktopSliderNavigationItemProps) => {
    const classes = useStartPageStyles();
    const { formatMessage } = useIntl();
    const variant = isActive ? 'body2' : 'p';

    const onItemCLick = useAutoCallback(() => {
      setActivePhotoType(photoType);
    });

    return (
      <AppTypography
        {...{ variant, onClick: onItemCLick }}
        className={classes.desktopSliderNavigationItem}
      >
        {formatMessage(PHOTO_TYPE_MESSAGE_MAP[photoType])}
      </AppTypography>
    );
  },
);
