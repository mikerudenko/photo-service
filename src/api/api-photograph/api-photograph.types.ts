import { LOCALE, CURRENCY } from '../../app.constants';

export enum PhotoType {
  wedding = 'wedding',
  animal = 'animal',
  portrait = 'portrait',
  interior = 'interior',
  exterior = 'exterior',
  drone = 'drop',
}

export type PhotographTranslation = {
  language: LOCALE;
  name: string;
  description: string;
};

export type PhotographPrice = {
  type: PhotoType;
  price: number;
  fee: number;
  currency: CURRENCY;
};

export type Photograph = {
  id: string;
  avatar: string | File | null;
  photos: string[] | File[] | null;
  sex: 'man' | 'women';
  translations: PhotographTranslation[];
  prices: PhotographPrice[];
};
