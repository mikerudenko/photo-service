import { useAutoCallback, useAutoMemo } from 'hooks.macro';
import React, { memo, useState, useRef } from 'react';
import { PhotoType } from '../../api';
import { DesktopSliderNavigation } from './desktop-slider-navigation';
import { StartPageDesktopSlide } from './start-page-desktop-slide';
import Slider from 'react-slick';

export const StartPageDesktopSlider = memo(() => {
  const slider = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderSettings = {
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    afterChange: setActiveIndex,
  };
  const setActivePhotoType = useAutoCallback((photoType: PhotoType) => {
    if (slider.current) {
      debugger;
      const index = Object.values(PhotoType).findIndex(
        (type) => type === photoType,
      );
      slider.current.slickGoTo(index);
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
      <DesktopSliderNavigation {...{ activePhotoType, setActivePhotoType }} />
    </>
  );
});
