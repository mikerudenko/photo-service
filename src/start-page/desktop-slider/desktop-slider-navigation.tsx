import { useAutoCallback } from 'hooks.macro';
import React, { memo } from 'react';
import { PhotoType } from '../../api';
import { useStartPageStyles } from '../use-start-page-styles';
import { DesktopSliderNavigationItem } from './desktop-slider-navigation-item';

type DesktopSliderNavigationProps = {
  activePhotoType: PhotoType;
  setActivePhotoType(photoType: PhotoType): void;
};

export const DesktopSliderNavigation = memo(
  ({ activePhotoType, setActivePhotoType }: DesktopSliderNavigationProps) => {
    const classes = useStartPageStyles();

    const renderSliderNavigationItem = useAutoCallback(
      (photoType: PhotoType, index: number) => {
        const isActive = photoType === activePhotoType;

        return (
          <DesktopSliderNavigationItem
            key={index}
            {...{ isActive, photoType, setActivePhotoType }}
          />
        );
      },
    );

    return (
      <div className={classes.desktopSliderNavigationContainer}>
        {Object.values(PhotoType).map(renderSliderNavigationItem)}
      </div>
    );
  },
);
