import React, { memo } from 'react';
import { useStartPageStyles } from 'start-page/use-start-page-styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';
import { AppTypography } from '../../components/app-typography';
import { useIntl } from 'react-intl';
import { PhotoType } from '../../api';
import { PHOTO_TYPE_MESSAGE_MAP } from '../../app.constants';
import { useAutoCallback } from 'hooks.macro';

type MobileSliderNavigationProps = {
  activePhotoType: PhotoType;
  setActivePhotoType(photoType: PhotoType): void;
};

export const MobileSliderNavigation = memo(
  ({ activePhotoType, setActivePhotoType }: MobileSliderNavigationProps) => {
    const classes = useStartPageStyles();
    const { formatMessage } = useIntl();
    const photoTypes = Object.values(PhotoType);
    const activeIndex = photoTypes.findIndex(
      (type) => type === activePhotoType,
    );

    const onBackClick = useAutoCallback(() => {
      const newIndex =
        activeIndex - 1 < 0 ? photoTypes.length - 1 : activeIndex - 1;

      setActivePhotoType(photoTypes[newIndex]);
    });

    const onForwardClickClick = useAutoCallback(() => {
      const newIndex =
        activeIndex + 1 >= photoTypes.length ? 0 : activeIndex + 1;

      setActivePhotoType(photoTypes[newIndex]);
    });

    return (
      <div className={classes.mobileNavigationContainer}>
        <IconButton onClick={onBackClick}>
          <ArrowBackIosIcon />
        </IconButton>
        <AppTypography variant='body2'>
          {formatMessage(PHOTO_TYPE_MESSAGE_MAP[activePhotoType])}
        </AppTypography>
        <IconButton onClick={onForwardClickClick}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    );
  },
);
