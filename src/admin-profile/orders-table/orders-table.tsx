import { format } from 'date-fns';
import { useAutoMemo } from 'hooks.macro';
import React, { memo, useState, ChangeEvent } from 'react';
import { useIntl } from 'react-intl';
import {
  Order,
  OrderStatus,
  PhotographPrice,
  useGetOrderList,
  User,
  ORDER_STATUS_SELECT_LIST,
} from '../../api';
import { useAutoCallback } from 'hooks.macro';
import { globalMessages } from '../../app-global.messages';
import { DATE_MASK } from '../../app.constants';
import { AppTable } from '../../components/app-table';
import { useBooleanState } from '../../hooks/use-boolean-state';
import { EditOrderModal } from './edit-order-modal';
import { OrdersTableActionFormatter } from './orders-table-action-formatter';

import { AppSelect } from '../../components/app-form';

export const OrdersTable = memo(() => {
  const { formatMessage } = useIntl();
  const [status, setStatus] = useState(OrderStatus.payed);
  const { orders, ordersLoading } = useGetOrderList({ status });
  const [orderToEdit, setOrderToEdit] = useState<null | Order>(null);
  const [editModalOpened, openEditModal, closeEditModal] = useBooleanState(
    false,
  );

  const onSelectChange = useAutoCallback(
    ({ target: { value } }: ChangeEvent<{ name?: string; value: unknown }>) => {
      setStatus(value as OrderStatus);
    },
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
      formatter: ({ price, fee, photoType }: PhotographPrice) =>
        `${price} - ${fee}, ${photoType} `,
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
      <AppSelect
        label={formatMessage(globalMessages.status)}
        options={ORDER_STATUS_SELECT_LIST}
        onChange={onSelectChange}
        value={status}
        name='status'
      />
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
