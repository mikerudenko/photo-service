import Grid from '@material-ui/core/Grid';
import { useAutoCallback } from 'hooks.macro';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { PhotographPrice, PHOTO_TYPE_SELECT_LIST } from '../../api';
import { globalMessages } from '../../app-global.messages';
import { AppRemoveButton } from '../../components/app-button';
import { AppFormField } from '../../components/app-form';

type PhotographFormPriceRowProps = {
  price: PhotographPrice;
  index: number;
  remove(index: number): void;
};

export const PhotographFormPriceRow = memo(
  ({ price, index, remove }: PhotographFormPriceRowProps) => {
    const { formatMessage } = useIntl();
    const onRemoveClick = useAutoCallback(() => {
      remove(index);
    });

    return (
      <>
        <Grid item xs={12} md={4}>
          <AppFormField
            name={`prices[${index}].price`}
            defaultValue={price.price}
            type='number'
            placeholder={formatMessage(globalMessages.price)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AppFormField
            name={`prices[${index}].fee`}
            type='number'
            defaultValue={price.fee}
            placeholder={formatMessage(globalMessages.fee)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <AppFormField
            name={`prices[${index}].photoType`}
            type='select'
            options={PHOTO_TYPE_SELECT_LIST}
            label={formatMessage(globalMessages.photoType)}
          />
        </Grid>
        <Grid item xs={12} md={1}>
          <AppRemoveButton onClick={onRemoveClick} />
        </Grid>
      </>
    );
  },
);
