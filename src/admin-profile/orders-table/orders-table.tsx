import { useAutoMemo } from 'hooks.macro';
import React, { memo, useState } from 'react';
import { useIntl } from 'react-intl';
import { Order, useGetOrderList } from '../../api';
import { globalMessages } from '../../app-global.messages';
import { AppTable } from '../../components/app-table';
import { useBooleanState } from '../../hooks/use-boolean-state';
import { EditOrderModal } from './edit-order-modal';
import { OrdersTableActionFormatter } from './orders-table-action-formatter';

export const OrdersTable = memo(() => {
  const { formatMessage } = useIntl();
  const { orders, ordersLoading } = useGetOrderList();
  const [orderToEdit, setOrderToEdit] = useState<null | Order>(null);
  const [editModalOpened, openEditModal, closeEditModal] = useBooleanState(
    false,
  );

  const columns = useAutoMemo(() => [
    {
      dataField: 'id',
      label: formatMessage(globalMessages.id),
    },
    {
      dataField: 'photograph.name',
      label: formatMessage(globalMessages.photograph),
    },
    {
      dataField: 'price.price',
      label: formatMessage(globalMessages.price),
    },
    {
      dataField: 'price.fee',
      label: formatMessage(globalMessages.fee),
    },
    {
      dataField: 'date',
      label: formatMessage(globalMessages.date),
    },
    {
      dataField: 'actions',
      label: '',
      formatter: (_: any, order: Order) => (
        <OrdersTableActionFormatter
          {...{ order, setOrderToEdit, openEditModal }}
        />
      ),
    },
  ]);

  return (
    <>
      <AppTable
        {...{
          columns,
          data: orders,
          id: 'photographs',
          loading: ordersLoading,
        }}
      />
      <EditOrderModal
        {...{ editModalOpened, closeEditModal, order: orderToEdit }}
      />
    </>
  );
});
