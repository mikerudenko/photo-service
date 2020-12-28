import Grid from '@material-ui/core/Grid';
import { AppTypography } from 'components/app-typography';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { PhotoType } from '../../api';
import { globalMessages } from '../../app-global.messages';
import { PHOTO_TYPE_MESSAGE_MAP } from '../../app.constants';
import { PHOTO_TYPE_INFO_MAP } from '../start-page.constants';
import { startPageMessages } from '../start-page.messages';
import { useStartPageStyles } from '../use-start-page-styles';
import Hidden from '@material-ui/core/Hidden';
import { AppButton } from '../../components/app-button';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

type StartPageDesktopSlideProps = {
  photoType: PhotoType;
};

export const StartPageDesktopSlide = memo(
  ({ photoType }: StartPageDesktopSlideProps) => {
    const { photo } = PHOTO_TYPE_INFO_MAP[photoType];
    const { formatMessage } = useIntl();
    const classes = useStartPageStyles();
    const theme = useTheme();
    const isPhoneResolution = useMediaQuery(theme.breakpoints.down('sm'));

    const selectPhotographButton = (
      <AppButton className={classes.selectPhotographButton}>
        {formatMessage(startPageMessages.selectPhotograph)}
      </AppButton>
    );

    return (
      <Grid container spacing={2} className={classes.desktopSlide}>
        <Grid item sm={12} md={7}>
          <AppTypography variant='h1' className={classes.desktopSlideInfo}>
            {formatMessage(startPageMessages.title)}
          </AppTypography>
          <Hidden smDown>
            <AppTypography variant='italic' className={classes.quote}>
              {formatMessage(startPageMessages.quote)}
            </AppTypography>
            <AppTypography variant='body' className={classes.photoTypeTitle}>
              {formatMessage(PHOTO_TYPE_MESSAGE_MAP[photoType])}{' '}
              {formatMessage(globalMessages.shoot)}
            </AppTypography>
            <AppTypography variant='p'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              perferendis soluta assumenda doloremque! Nobis, amet corporis.
              Necessitatibus, error dignissimos. Assumenda, totam ab. Vitae in
              molestias sed eum labore, quam doloribus!
            </AppTypography>
          </Hidden>
          {!isPhoneResolution && selectPhotographButton}
        </Grid>
        <Grid item sm={12} md={5}>
          <img src={photo} alt='' className={classes.desktopSlideImage} />
          {isPhoneResolution && selectPhotographButton}
        </Grid>
      </Grid>
    );
  },
);
