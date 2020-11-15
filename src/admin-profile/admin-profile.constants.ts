import { v4 as uuidv4 } from 'uuid';
import { LOCALE } from '../app.constants';
import { Photograph, PhotographType, PhotoType } from '../api';

export const INITIAL_PHOTO_PRICE = {
  photoType: PhotoType.wedding,
  price: 0,
  fee: 0,
};

export const getInitialPhotograph = (): Photograph => ({
  id: uuidv4(),
  avatar: null,
  photos: null,
  backgroundImage: null,
  photoTypes: [],
  sex: 'man',
  prices: [INITIAL_PHOTO_PRICE],
  videoBackground: '',
  photographType: PhotographType.photograph,
  translations: [
    {
      language: LOCALE.en,
      name: '',
      description: '',
    },
    {
      language: LOCALE.ua,
      name: '',
      description: '',
    },
    {
      language: LOCALE.ru,
      name: '',
      description: '',
    },
  ],
});
