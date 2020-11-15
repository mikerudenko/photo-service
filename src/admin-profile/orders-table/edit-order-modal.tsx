import { useAutoCallback } from 'hooks.macro';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import {
  Order,
  OrderStatus,
  useUpdateOrder,
  ORDER_STATUS_SELECT_LIST,
} from '../../api';
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
              options={ORDER_STATUS_SELECT_LIST}
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
