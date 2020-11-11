import React, { memo } from 'react';
import { IntlProvider } from 'react-intl';
import { getLocale } from '../services/intl-service';
import { LOCALE, translationDictionary } from '../app.constants';

export const TranslationsProvider = memo(({ children }) => {
  const locale = getLocale() as LOCALE;
  return (
    <IntlProvider
      {...{
        key: locale,
        locale: locale,
        messages: translationDictionary[locale],
      }}
    >
      {children}
    </IntlProvider>
  );
});
