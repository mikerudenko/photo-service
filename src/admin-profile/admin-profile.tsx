import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { Route, Switch } from 'react-router-dom';
import { globalMessages } from '../app-global.messages';
import { ROUTES } from '../app.constants';
import { AppContainer } from '../components/app-container';
import { AppRouterTabs } from '../components/app-tabs';
import { useAdminGuard } from '../hooks/use-admin-guard';
import { EditPhotograph } from './edit-photograph';
import { OrdersTable } from './orders-table';
import { PhotographForm } from './photograph-form';
import { PhotographsTable } from './photographs-table';
import { useAdminProfileStyles } from './use-admin-profile-styles';

export const AdminProfile = memo(() => {
  const classes = useAdminProfileStyles();
  const { formatMessage } = useIntl();

  const tabs = [
    {
      label: formatMessage(globalMessages.orders),
      to: `${ROUTES.profile}${ROUTES.orders}`,
      exact: true,
      component: OrdersTable,
    },
    {
      label: formatMessage(globalMessages.photographs),
      to: `${ROUTES.profile}${ROUTES.photographs}`,
      exact: true,
      component: PhotographsTable,
    },
    {
      label: formatMessage(globalMessages.createPhotograph),
      to: `${ROUTES.profile}${ROUTES.photographs}${ROUTES.create}`,
      exact: true,
      component: PhotographForm,
    },
  ];

  useAdminGuard();

  return (
    <AppContainer>
      <div className={classes.container}>
        <Switch>
          <Route
            path={`${ROUTES.profile}${ROUTES.photographs}${ROUTES.edit}/:id`}
            exact
            component={EditPhotograph}
          />
          <Route
            path={`${ROUTES.profile}`}
            render={() => <AppRouterTabs tabs={tabs} />}
          />
        </Switch>
      </div>
    </AppContainer>
  );
});
