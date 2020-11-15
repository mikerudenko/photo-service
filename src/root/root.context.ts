import { createContext, useContext } from 'react';
import { LOCALE } from '../app.constants';

type RootContextType = {
  locale: LOCALE;
  setLocale(locale: LOCALE): void;
};

export const RootContext = createContext<RootContextType>({} as never);
export const useRootContext = () => useContext(RootContext);
