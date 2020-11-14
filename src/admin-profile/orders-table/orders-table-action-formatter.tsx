import React from 'react';
import { Order } from '../../api';
import { AppActionMenu } from '../../components/app-action-menu';
import { globalMessages } from '../../app-global.messages';
import { useAutoMemo, useAutoCallback } from 'hooks.macro';
import { useIntl } from 'react-intl';

type OrdersTableActionFormatterProps = {
  order: Order;
  openEditModal(): void;
  setOrderToEdit(order: Order): void;
};

export const OrdersTableActionFormatter = ({
  order,
  openEditModal,
  setOrderToEdit,
}: OrdersTableActionFormatterProps) => {
  const { formatMessage } = useIntl();

  const onEditClick = useAutoCallback(() => {
    setOrderToEdit(order);
    openEditModal();
  });

  const actions = useAutoMemo(() => [
    {
      label: formatMessage(globalMessages.edit),
      onClick: onEditClick,
    },
  ]);
  return <AppActionMenu items={actions} />;
};
