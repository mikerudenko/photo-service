import React, { memo } from 'react';
import { IntlProvider } from 'react-intl';
import { useRootContext } from '../root/root.context';
import { translationDictionary } from '../app.constants';

export const TranslationsProvider = memo(({ children }) => {
  const { locale } = useRootContext();
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
