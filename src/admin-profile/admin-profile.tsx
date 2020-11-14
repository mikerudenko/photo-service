import React, { memo } from 'react';
import { AppContainer } from '../components/app-container';
import { useAdminProfileStyles } from './use-admin-profile-styles';
import { globalMessages } from '../app-global.messages';
import { useGetUser } from '../api';
import { ROUTES } from '../app.constants';
import { OrdersTable } from './orders-table';
import { PhotographsTable } from './photographs-table';
import { AppRouterTabs } from '../components/app-tabs';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { useAutoEffect } from 'hooks.macro';
import { USER_ROLES } from '../api';
import { PhotographForm } from './photograph-form';

export const AdminProfile = memo(() => {
  const classes = useAdminProfileStyles();
  const { formatMessage } = useIntl();
  const user = useGetUser();
  const history = useHistory();

  const tabs = [
    {
      label: formatMessage(globalMessages.orders),
      to: `${ROUTES.profile}${ROUTES.orders}`,
      component: OrdersTable,
    },
    {
      label: formatMessage(globalMessages.photographs),
      to: `${ROUTES.profile}${ROUTES.photographs}${ROUTES.all}`,
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

  useAutoEffect(() => {
    if (user && user.role !== USER_ROLES.admin) {
      history.push(ROUTES.root);
    }
  });

  return (
    <AppContainer>
      <div className={classes.container}>
        <AppRouterTabs tabs={tabs} />
      </div>
    </AppContainer>
  );
});
