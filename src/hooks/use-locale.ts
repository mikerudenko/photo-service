import { setLocale as saveLocale, getLocale } from '../services/intl-service';
import { useState } from 'react';
import { useAutoCallback } from 'hooks.macro';

export const useLocale = () => {
  const [locale, setLocale] = useState(getLocale());

  return {
    locale,
    setLocale: useAutoCallback((locale) => {
      setLocale(locale);
      saveLocale(locale);
    }),
  };
};
