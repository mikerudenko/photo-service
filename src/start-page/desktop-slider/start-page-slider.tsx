import { useAutoCallback, useAutoMemo } from 'hooks.macro';
import React, { memo, useState, useRef } from 'react';
import { PhotoType } from '../../api';
import { DesktopSliderNavigation } from './desktop-slider-navigation';
import { StartPageDesktopSlide } from './start-page-slide';
import { MobileSliderNavigation } from './mobile-slider-navigation';
import Slider from 'react-slick';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const StartPageSlider = memo(() => {
  const theme = useTheme();
  const isPhoneResolution = useMediaQuery(theme.breakpoints.down('sm'));
  const slider = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderSettings = {
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    afterChange: setActiveIndex,
  };
  const setActivePhotoType = useAutoCallback((photoType: PhotoType) => {
    if (slider.current) {
      const index = Object.values(PhotoType).findIndex(
        (type) => type === photoType,
      );
      slider.current.slickGoTo(index);
      setActiveIndex(index);
    }
  });

  const renderSlide = useAutoCallback((photoType: PhotoType) => {
    return <StartPageDesktopSlide {...{ photoType }} />;
  });

  const activePhotoType = useAutoMemo(
    () => Object.values(PhotoType)[activeIndex],
  );

  return (
    <>
      <Slider {...sliderSettings} ref={slider}>
        {Object.values(PhotoType).map(renderSlide)}
      </Slider>
      {isPhoneResolution && (
        <MobileSliderNavigation {...{ activePhotoType, setActivePhotoType }} />
      )}
      {!isPhoneResolution && (
        <DesktopSliderNavigation {...{ activePhotoType, setActivePhotoType }} />
      )}
    </>
  );
});
