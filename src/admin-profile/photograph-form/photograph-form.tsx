import React, { memo } from 'react';
import { AppForm, AppFormField } from '../../components/app-form';
import { usePhotographFormLogic } from './use-photograph-form-logic';
import { AppSubmitButton } from '../../components/app-button/app-submit-button';
import { usePhotographFormStyles } from './use-photograph-form-styles';
import { globalMessages } from '../../app-global.messages';
import { Photograph } from '../../api';
import { getInitialPhotograph } from '../admin-profile.constants';
import { useIntl } from 'react-intl';

type PhotographFormProps = {
  defaultValues?: Photograph;
};

export const PhotographForm = memo(
  ({ defaultValues = getInitialPhotograph() }: PhotographFormProps) => {
    const { onSubmit } = usePhotographFormLogic();
    const { formatMessage } = useIntl();
    const classes = usePhotographFormStyles();

    const formConfig = {
      defaultValues,
    };

    return (
      <AppForm
        onSubmit={onSubmit}
        className={classes.form}
        formConfig={formConfig as any}
      >
        <AppFormField
          name='name'
          type='text'
          required
          label={formatMessage(globalMessages.name)}
        />
        <AppSubmitButton
          color='primary'
          text={formatMessage(globalMessages.create)}
        />
      </AppForm>
    );
  },
);
