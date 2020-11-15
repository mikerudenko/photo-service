import { format } from 'date-fns';
import { useAutoMemo } from 'hooks.macro';
import React, { memo, useState } from 'react';
import { useIntl } from 'react-intl';
import {
  Order,
  OrderStatus,
  PhotographPrice,
  useGetOrderList,
  User,
} from '../../api';
import { globalMessages } from '../../app-global.messages';
import { DATE_MASK } from '../../app.constants';
import { AppTable } from '../../components/app-table';
import { useBooleanState } from '../../hooks/use-boolean-state';
import { EditOrderModal } from './edit-order-modal';
import { OrdersTableActionFormatter } from './orders-table-action-formatter';

type OrdersTableProps = {
  status: OrderStatus;
};

export const OrdersTable = memo(({ status }: OrdersTableProps) => {
  const { formatMessage } = useIntl();
  const { orders, ordersLoading } = useGetOrderList({ status });
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
      dataField: 'price',
      label: `${formatMessage(globalMessages.price)} - ${formatMessage(
        globalMessages.fee,
      )}`,
      formatter: ({ price, fee, currency, type }: PhotographPrice) =>
        `${price}${currency} - ${fee}${currency}, ${type} `,
    },
    {
      dataField: 'date',
      label: formatMessage(globalMessages.date),
      formatter: (date: string) => format(new Date(date), DATE_MASK),
    },
    {
      dataField: 'user',
      label: formatMessage(globalMessages.user),
      formatter: ({ email, phone }: User) => (
        <>
          {email} <br />
          {phone}
        </>
      ),
    },
    {
      dataField: 'status',
      label: formatMessage(globalMessages.status),
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
      {orderToEdit && (
        <EditOrderModal
          {...{ editModalOpened, closeEditModal, order: orderToEdit, status }}
        />
      )}
    </>
  );
});
