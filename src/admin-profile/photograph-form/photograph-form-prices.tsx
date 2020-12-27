import Grid from '@material-ui/core/Grid';
import { useAutoCallback } from 'hooks.macro';
import React, { memo } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { PhotographPrice } from '../../api';
import { AppAddButton } from '../../components/app-button';
import { INITIAL_PHOTO_PRICE } from '../admin-profile.constants';
import { PhotographFormPriceRow } from './photograph-form-price-row';
import { AppTypography } from '../../components/app-typography';

export const PhotographFormPrices = memo(() => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'prices',
  });

  const renderPriceListRow = useAutoCallback(
    (price: PhotographPrice & any, index) => (
      <PhotographFormPriceRow
        key={index}
        {...{
          index,
          price,
          remove,
        }}
      />
    ),
  );

  const addPriceRow = useAutoCallback(() => append(INITIAL_PHOTO_PRICE));

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <AppTypography variant='body'>Prices</AppTypography>
      </Grid>

      {fields.map(renderPriceListRow)}
      <AppAddButton onClick={addPriceRow} />
    </Grid>
  );
});
