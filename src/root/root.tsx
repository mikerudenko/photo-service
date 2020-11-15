import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { memo, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useLocation } from 'react-router-dom';
import { PhotographsGrid } from '../photographs-grid';
import { ROUTES } from '../app.constants';
import { PhotographDetails } from '../photograph-details';
import { NotFound } from '../not-found';
import { OfflinePage } from '../offline-page';
import { Profile } from '../profile';
import { ResetPassword } from '../reset-password';
import { SignIn } from '../sign-in';
import { SignUp } from '../sign-up';
import { useOnlineStatus } from '../hooks/use-online-status';
import { useLocale } from './use-locale';
import { RootContext } from './root.context';
import { TranslationsProvider } from '../translation-provider';
import uaLocale from 'date-fns/locale/uk';
import enLocale from 'date-fns/locale/en-US';
import ruLocale from 'date-fns/locale/ru';

import { useRootStyles } from './use-root-styles';
import { StartPage } from '../start-page';

const localeMap = {
  en: enLocale,
  ua: uaLocale,
  ru: ruLocale,
};

export const Root = memo(() => {
  const onlineStatus = useOnlineStatus();
  const location = useLocation();
  const { locale, setLocale } = useLocale();

  useRootStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!onlineStatus) {
    return <OfflinePage />;
  }

  return (
    <RootContext.Provider value={{ locale, setLocale }}>
      <TranslationsProvider>
        <MuiPickersUtilsProvider
          utils={DateFnsUtils}
          locale={localeMap[locale]}
        >
          <Switch>
            <Route path={ROUTES.signIn} component={SignIn} />
            <Route path={ROUTES.resetPassword} component={ResetPassword} />
            <Route path={ROUTES.signUp} component={SignUp} />
            <Route path={ROUTES.profile} component={Profile} />
            <Route path={ROUTES.notFound} component={NotFound} />
            <Route path={ROUTES.photographs} component={PhotographsGrid} />
            <Route
              path={`${ROUTES.photographs}/:id`}
              component={PhotographDetails}
            />
            <Route path={ROUTES.root} exact component={StartPage} />
            <Redirect to={ROUTES.notFound} />
          </Switch>
        </MuiPickersUtilsProvider>{' '}
      </TranslationsProvider>
    </RootContext.Provider>
  );
});
