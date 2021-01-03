import Grid from '@material-ui/core/Grid';
import { useAutoCallback } from 'hooks.macro';
import React, { memo } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import type { Photo } from '../../api';
import { AppAddButton } from '../../components/app-button';
import { AppTypography } from '../../components/app-typography';
import { INITIAL_PHOTO } from '../admin-profile.constants';
import { PhotoRow } from './photo-row';

export const PhotosArray = memo(() => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'photos',
  });

  const renderPhotoRow = useAutoCallback(
    (photo: Photo & any, index: number) => (
      <PhotoRow
        key={index}
        {...{
          index,
          photo,
          remove,
        }}
      />
    ),
  );

  const addPhotoRow = useAutoCallback(() => append(INITIAL_PHOTO));

  return (
    <fieldset>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppTypography variant='body'>Photos</AppTypography>
        </Grid>

        {fields.map(renderPhotoRow)}
        <AppAddButton onClick={addPhotoRow} />
      </Grid>
    </fieldset>
  );
});
