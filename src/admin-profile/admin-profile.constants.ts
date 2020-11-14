import { v4 as uuidv4 } from 'uuid';
import { LOCALE } from '../app.constants';
import { Photograph } from '../api';

export const getInitialPhotograph = (): Photograph => ({
  id: uuidv4(),
  avatar: null,
  photos: null,
  sex: 'man',
  prices: [],
  translations: [
    {
      language: LOCALE.En,
      name: '',
      description: '',
    },
    {
      language: LOCALE.Ua,
      name: '',
      description: '',
    },
    {
      language: LOCALE.Ru,
      name: '',
      description: '',
    },
  ],
});
