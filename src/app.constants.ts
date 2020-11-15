import { globalMessages } from './app-global.messages';
import enMessages from './translations/en.json';
import ruMessages from './translations/ru.json';
import uaMessages from './translations/ua.json';

export enum CURRENCY {
  uah = 'uah',
}

export enum LOCALE {
  En = 'en',
  Ua = 'ua',
  Ru = 'ru',
}

export enum ROUTES {
  // Auth routes
  signIn = '/sign-in',
  signUp = '/sign-up',
  resetPassword = '/reset-password',
  all = '/all',

  // User profile routers
  profile = '/profile',
  settings = '/settings',

  photographs = '/photographs',
  notFound = '/not-found',
  orders = '/orders',
  search = '/search',
  orderDetails = '/order-details',

  // Information routes
  meetUs = '/meet-us',
  faq = '/faq',
  payment = '/payment',
  partners = '/partners',
  root = '/',
  edit = '/edit',
  create = '/create',
  payed = '/payed',
  completed = '/completed',
  verified = '/verified',
  rejected = '/rejected',
}

export const FLEX_CENTER_BETWEEN = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const FLEX_CENTER_START = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

export const AppTheme = {
  palette: {
    primary: {
      main: '#2690A8',
    },
    secondary: {
      main: '#FF6927',
    },
  },
  alert: {
    error: {
      color: '#EF4545',
      background: 'rgba(239, 69, 69, 0.16)',
    },
    info: {
      color: '#2FA6F8',
      background: 'rgba(47, 166, 248, 0.16)',
    },
    success: {
      color: '#5AD66E',
      background: 'rgba(90, 214, 110, 0.16)',
    },
  },
};

export const LOCALE_SELECT_LIST = [
  {
    value: LOCALE.En,
    label: globalMessages.englishLanguage,
  },
  {
    value: LOCALE.Ua,
    label: globalMessages.ukrainianLanguage,
  },
  {
    value: LOCALE.Ru,
    label: globalMessages.russianLanguage,
  },
];

export type TranslationMessages = Record<string, string>;

export const translationDictionary = {
  [LOCALE.En]: prepareMessages(enMessages),
  [LOCALE.Ua]: prepareMessages(uaMessages),
  [LOCALE.Ru]: prepareMessages(ruMessages),
};

function prepareMessages(
  messages: TranslationMessages,
  fallbackMessages: TranslationMessages = enMessages,
): TranslationMessages {
  return {
    ...fallbackMessages,
    ...messages,
  };
}

export const DATE_MASK = 'dd/MM/yyyy';
