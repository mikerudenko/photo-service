import Grid from '@material-ui/core/Grid';
import { useAutoCallback } from 'hooks.macro';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { Photo, PHOTO_TYPE_SELECT_LIST } from '../../api';
import { globalMessages } from '../../app-global.messages';
import { AppRemoveButton } from '../../components/app-button';
import { AppFormField } from '../../components/app-form';
import { usePhotographFormStyles } from './use-photograph-form-styles';

type PhotoRowProps = {
  photo: Photo;
  index: number;
  remove(index: number): void;
};

export const PhotoRow = memo(({ photo, index, remove }: PhotoRowProps) => {
  const { formatMessage } = useIntl();
  const classes = usePhotographFormStyles();

  const onRemoveClick = useAutoCallback(() => {
    remove(index);
  });

  return (
    <Grid item xs={12}>
      <Grid container spacing={3} className={classes.photoRow}>
        <Grid item xs={12} md={3}>
          <AppFormField
            name={`photos[${index}].photoType`}
            type='select'
            options={PHOTO_TYPE_SELECT_LIST}
            label={formatMessage(globalMessages.photoType)}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <AppFormField
            name={`photos[${index}].src`}
            type='image'
            label={formatMessage(globalMessages.photos)}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <AppRemoveButton onClick={onRemoveClick} />
        </Grid>
      </Grid>
    </Grid>
  );
});
