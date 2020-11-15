import { LOCALE } from '../app.constants';

export const getLocale = () => {
  try {
    return (window.localStorage.getItem('locale') as LOCALE) || LOCALE.ru;
  } catch (error) {
    return LOCALE.ru as LOCALE;
  }
};

export const setLocale = (locale: string) => {
  try {
    window.localStorage.setItem('locale', locale);
  } catch (error) {}
};
