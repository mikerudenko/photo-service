import { useAutoCallback, useAutoMemo } from 'hooks.macro';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { Order, OrderStatus, useUpdateOrder } from '../../api';
import { globalMessages } from '../../app-global.messages';
import { AppSubmitButton } from '../../components/app-button/app-submit-button';
import { AppForm, AppFormField } from '../../components/app-form';
import { AppModal } from '../../components/app-modal';

type EditOrderModalProps = {
  closeEditModal(): void;
  editModalOpened: boolean;
  order: Order;
  status: OrderStatus;
};

export const EditOrderModal = memo(
  ({
    closeEditModal,
    editModalOpened,
    order: { id, status, date },
  }: EditOrderModalProps) => {
    const { formatMessage } = useIntl();
    const updateOrder = useUpdateOrder();

    const formConfig: any = {
      defaultValues: { status, date },
    };

    const onSubmit = useAutoCallback(async (order: Order) => {
      await updateOrder({ ...order, id });
      closeEditModal();
    });

    const orderStatusOptions = useAutoMemo(() => [
      {
        value: OrderStatus.payed,
        label: formatMessage(globalMessages.payed),
      },
      {
        value: OrderStatus.verified,
        label: formatMessage(globalMessages.verified),
      },
      {
        value: OrderStatus.completed,
        label: formatMessage(globalMessages.completed),
      },
      {
        value: OrderStatus.rejected,
        label: formatMessage(globalMessages.rejected),
      },
    ]);

    return (
      <AppModal
        onClose={closeEditModal}
        open={editModalOpened}
        content={
          <AppForm onSubmit={onSubmit} formConfig={formConfig}>
            <AppFormField
              name='date'
              type='date'
              required
              label={formatMessage(globalMessages.date)}
            />
            <AppFormField
              name='status'
              type='select'
              required
              options={orderStatusOptions}
              label={formatMessage(globalMessages.status)}
            />
            <AppSubmitButton
              color='primary'
              text={formatMessage(globalMessages.update)}
            />
          </AppForm>
        }
      />
    );
  },
);
