import React, { memo } from 'react';
import { IntlProvider } from 'react-intl';
import { useLocale } from '../hooks/use-locale';
import { translationDictionary } from '../app.constants';

export const TranslationsProvider = memo(({ children }) => {
  const { locale } = useLocale();
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
