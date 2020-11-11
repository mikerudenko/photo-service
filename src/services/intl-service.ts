import { LOCALE } from '../app.constants';

export const getLocale = () => {
  try {
    return window.localStorage.getItem('locale') || LOCALE.Ru;
  } catch (error) {}
};

export const setLocale = (locale: string) => {
  try {
    window.localStorage.setItem('locale', locale);
  } catch (error) {}
};
