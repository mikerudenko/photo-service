import React, { memo } from 'react';
import { AppForm, AppFormField } from '../../components/app-form';
import { usePhotographFormLogic } from './use-photograph-form-logic';
import { AppSubmitButton } from '../../components/app-button/app-submit-button';
import { usePhotographFormStyles } from './use-photograph-form-styles';
import { globalMessages } from '../../app-global.messages';
import {
  Photograph,
  PHOTO_TYPE_SELECT_LIST,
  SEX_SELECT_OPTIONS,
  PHOTOGRAPH_TYPE_SELECT_OPTIONS,
} from '../../api';
import { getInitialPhotograph } from '../admin-profile.constants';
import { useIntl } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import { H3 } from '../../components/app-typography';
import { LOCALE } from '../../app.constants';
import { PhotographFormPrices } from './photograph-form-prices';

type PhotographFormProps = {
  defaultValues?: Photograph;
};

export const PhotographForm = memo(
  ({ defaultValues = getInitialPhotograph() }: PhotographFormProps) => {
    const { onSubmit } = usePhotographFormLogic(defaultValues.id);
    const { formatMessage } = useIntl();
    const classes = usePhotographFormStyles();

    const formConfig = {
      defaultValues,
    };

    const renderTranslation = (locale: string, index: number) => (
      <React.Fragment key={index}>
        <Grid item xs={12} md={4}>
          <H3>{locale}</H3>
          <AppFormField
            name={`translations[${index}].name`}
            type='text'
            placeholder={formatMessage(globalMessages.name)}
          />
          <AppFormField
            name={`translations[${index}].description`}
            type='textarea'
            placeholder={formatMessage(globalMessages.description)}
          />
        </Grid>
      </React.Fragment>
    );

    return (
      <AppForm
        onSubmit={onSubmit}
        className={classes.form}
        formConfig={formConfig as any}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {Object.keys(LOCALE).map(renderTranslation)}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <AppFormField
              name='sex'
              type='select'
              options={SEX_SELECT_OPTIONS}
              label={formatMessage(globalMessages.sex)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppFormField
              name='photographType'
              type='select'
              options={PHOTOGRAPH_TYPE_SELECT_OPTIONS}
              label={formatMessage(globalMessages.photographType)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppFormField
              name='videoBackground'
              type='text'
              placeholder={formatMessage(globalMessages.videoBackgroundLink)}
            />
          </Grid>
          <Grid item xs={12}>
            <AppFormField
              name='photoTypes'
              type='select'
              multiple
              options={PHOTO_TYPE_SELECT_LIST}
              placeholder={formatMessage(globalMessages.photoType)}
            />
          </Grid>
          <Grid item xs={12}>
            <PhotographFormPrices />
          </Grid>
          <Grid item xs={12} md={6}>
            <AppFormField
              name='avatar'
              type='image'
              label={formatMessage(globalMessages.avatar)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <AppFormField
              name='backgroundImage'
              type='image'
              label={formatMessage(globalMessages.backgroundImage)}
            />
          </Grid>
          <Grid item xs={12}>
            <AppFormField
              name='photos'
              type='image'
              label={formatMessage(globalMessages.photos)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppSubmitButton
              color='primary'
              text={formatMessage(globalMessages.create)}
            />
          </Grid>
        </Grid>
      </AppForm>
    );
  },
);
