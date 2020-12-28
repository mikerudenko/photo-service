import { PhotoType } from 'api/api-photograph';
import Drone from './assets/drone.jpeg';
import PortraitMan from './assets/portait-man.jpeg';
import { startPageMessages } from './start-page.messages';

export const PHOTO_TYPE_INFO_MAP = {
  [PhotoType.portrait]: {
    description: startPageMessages.descriptionPortraitType,
    photo: PortraitMan,
  },
  [PhotoType.animal]: {
    description: startPageMessages.descriptionPortraitType,
    photo: PortraitMan,
  },
  [PhotoType.drone]: {
    description: startPageMessages.descriptionPortraitType,
    photo: Drone,
  },
  [PhotoType.interior]: {
    description: startPageMessages.descriptionPortraitType,
    photo: PortraitMan,
  },
  [PhotoType.exterior]: {
    description: startPageMessages.descriptionPortraitType,
    photo: PortraitMan,
  },
  [PhotoType.wedding]: {
    description: startPageMessages.descriptionPortraitType,
    photo: PortraitMan,
  },
};
