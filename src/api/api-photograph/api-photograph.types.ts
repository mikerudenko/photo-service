import { LOCALE } from '../../app.constants';
import { globalMessages } from '../../app-global.messages';

export enum PhotoType {
  wedding = 'wedding',
  animal = 'animal',
  portrait = 'portrait',
  interior = 'interior',
  exterior = 'exterior',
  drone = 'drone',
}

export enum PhotographType {
  photograph = 'photograph',
  videoOperator = 'videoOperator',
}

export type PhotographTranslation = {
  language: LOCALE;
  name: string;
  description: string;
};

export type PhotographPrice = {
  photoType: PhotoType;
  price: number;
  fee: number;
};

export type Photograph = {
  id: string;
  avatar: string | File[] | null;
  photos: string[] | File[] | null;
  backgroundImage: string | File[] | null;
  sex: 'man' | 'women';
  photoTypes: PhotoType[];
  videoBackground: string;
  photographType: PhotographType;
  translations: PhotographTranslation[];
  prices: PhotographPrice[];
};

export const PHOTO_TYPE_SELECT_LIST = [
  {
    label: globalMessages.wedding,
    value: PhotoType.wedding,
  },
  {
    label: globalMessages.animal,
    value: PhotoType.animal,
  },
  {
    label: globalMessages.portrait,
    value: PhotoType.portrait,
  },
  {
    label: globalMessages.interior,
    value: PhotoType.interior,
  },
  {
    label: globalMessages.exterior,
    value: PhotoType.exterior,
  },
  {
    label: globalMessages.drone,
    value: PhotoType.drone,
  },
];

export const SEX_SELECT_OPTIONS = [
  {
    label: globalMessages.man,
    value: 'man',
  },
  {
    label: globalMessages.women,
    value: 'women',
  },
];

export const PHOTOGRAPH_TYPE_SELECT_OPTIONS = [
  {
    label: globalMessages.photograph,
    value: PhotographType.photograph,
  },
  {
    label: globalMessages.videoOperator,
    value: PhotographType.videoOperator,
  },
];
