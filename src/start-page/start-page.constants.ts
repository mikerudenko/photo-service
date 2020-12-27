import { globalMessages } from './../app-global.messages';
import { PhotoType } from 'api/api-photograph';
import { startPageMessages } from './start-page.messages';
import PortraitMan from './assets/portait-man.jpeg';
import Drone from './assets/drone.jpeg';

export const PHOTO_TYPE_INFO_MAP = {
  [PhotoType.portrait]: {
    quote: startPageMessages.quotePortraitType,
    description: startPageMessages.descriptionPortraitType,
    type: globalMessages.portraitPhotography,
    photo: PortraitMan,
  },
  [PhotoType.animal]: {
    quote: startPageMessages.quotePortraitType,
    description: startPageMessages.descriptionPortraitType,
    type: globalMessages.portraitPhotography,
    photo: PortraitMan,
  },
  [PhotoType.drone]: {
    quote: startPageMessages.quotePortraitType,
    description: startPageMessages.descriptionPortraitType,
    type: globalMessages.portraitPhotography,
    photo: Drone,
  },
  [PhotoType.interior]: {
    quote: startPageMessages.quotePortraitType,
    description: startPageMessages.descriptionPortraitType,
    type: globalMessages.portraitPhotography,
    photo: PortraitMan,
  },
  [PhotoType.exterior]: {
    quote: startPageMessages.quotePortraitType,
    description: startPageMessages.descriptionPortraitType,
    type: globalMessages.portraitPhotography,
    photo: PortraitMan,
  },
  [PhotoType.wedding]: {
    quote: startPageMessages.quotePortraitType,
    description: startPageMessages.descriptionPortraitType,
    type: globalMessages.portraitPhotography,
    photo: PortraitMan,
  },
};
