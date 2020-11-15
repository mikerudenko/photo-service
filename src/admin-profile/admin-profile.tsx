import { OrderStatus } from 'api';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { globalMessages } from '../app-global.messages';
import { ROUTES } from '../app.constants';
import { AppContainer } from '../components/app-container';
import { AppRouterTabs } from '../components/app-tabs';
import { useAdminGuard } from '../hooks/use-admin-guard';
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
      to: `${ROUTES.profile}${ROUTES.orders}${ROUTES.payed}`,
      component: OrdersTable,
      componentProps: {
        status: OrderStatus.payed,
      },
    },
    {
      label: formatMessage(globalMessages.verifiedOrders),
      to: `${ROUTES.profile}${ROUTES.orders}${ROUTES.verified}`,
      component: OrdersTable,
      componentProps: {
        status: OrderStatus.verified,
      },
    },
    {
      label: formatMessage(globalMessages.archive),
      to: `${ROUTES.profile}${ROUTES.orders}${ROUTES.completed}`,
      component: OrdersTable,
      componentProps: {
        status: OrderStatus.completed,
      },
    },
    {
      label: formatMessage(globalMessages.rejectedOrders),
      to: `${ROUTES.profile}${ROUTES.orders}`,
      component: OrdersTable,
      componentProps: {
        status: OrderStatus.rejected,
      },
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

  useAdminGuard();

  return (
    <AppContainer>
      <div className={classes.container}>
        <AppRouterTabs tabs={tabs} />
      </div>
    </AppContainer>
  );
});
