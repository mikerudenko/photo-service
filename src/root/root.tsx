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

import { useRootStyles } from './use-root-styles';
import { StartPage } from '../start-page';

export const Root = memo(() => {
  const location = useLocation();
  const onlineStatus = useOnlineStatus();

  useRootStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!onlineStatus) {
    return <OfflinePage />;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={'ua'}>
      <Switch>
        <Route path={ROUTES.signIn} component={SignIn} />
        <Route path={ROUTES.forgotPassword} component={ResetPassword} />
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
    </MuiPickersUtilsProvider>
  );
});
