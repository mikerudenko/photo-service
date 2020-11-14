import noop from 'lodash/noop';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { Order } from '../../api';
import { globalMessages } from '../../app-global.messages';
import { AppSubmitButton } from '../../components/app-button/app-submit-button';
import { AppForm } from '../../components/app-form';
import { AppModal } from '../../components/app-modal';

type EditOrderModalProps = {
  closeEditModal(): void;
  editModalOpened: boolean;
  order: Order | null;
};

export const EditOrderModal = memo(
  ({ closeEditModal, editModalOpened }: EditOrderModalProps) => {
    const { formatMessage } = useIntl();

    const formConfig: any = {};

    return (
      <AppModal
        onClose={closeEditModal}
        open={editModalOpened}
        content={
          <AppForm onSubmit={noop} formConfig={formConfig}>
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
