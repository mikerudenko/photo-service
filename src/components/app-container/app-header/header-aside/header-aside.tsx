import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CloseIcon from '@material-ui/icons/Close';
import c from 'classnames';
import { useAutoMemo } from 'hooks.macro';
import noop from 'lodash/noop';
import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { globalMessages } from '../../../../app-global.messages';
import { ROUTES } from '../../../../app.constants';
import { AppLogo } from '../../../app-logo/app-logo';
import { SocialSection } from '../../../social-section';
import { LanguageTaleList } from '../language-tale-list';
import { useHeaderAsideStyles } from './use-header-aside-styles';
import { useBooleanState } from '../../../../hooks';
import { AppTypography } from '../../../../components/app-typography';

const sidebarMenuLis = [
  {
    message: globalMessages.profileSettings,
    to: ROUTES.profile + ROUTES.settings,
  },
  {
    message: globalMessages.meetUs,
    to: ROUTES.meetUs,
  },
  {
    message: globalMessages.faq,
    to: ROUTES.faq,
  },
  {
    message: globalMessages.payment,
    to: ROUTES.payment,
  },
  {
    message: globalMessages.partners,
    to: ROUTES.partners,
  },
];

export const HeaderAside = memo(() => {
  const classes = useHeaderAsideStyles();
  const { formatMessage } = useIntl();
  const [sidebarOpened, _, closeSidebar, toggleAside] = useBooleanState(false);

  const sidebarContent = useAutoMemo(() => (
    <div className={classes.sidebarContent}>
      <div className={classes.topAside}>
        <AppLogo />
        <IconButton
          onClick={closeSidebar}
          aria-label='close'
          className={classes.closeAsideButton}
          size='small'
        >
          <CloseIcon />
        </IconButton>
      </div>
      <LanguageTaleList />

      <div className={classes.sidebarLinks}>
        {sidebarMenuLis.map(({ message, to }, key) => (
          <NavLink
            {...{ to, key }}
            className={classes.sidebarLink}
            activeClassName={classes.activeLink}
          >
            <AppTypography variant='p'>{formatMessage(message)}</AppTypography>
          </NavLink>
        ))}
      </div>
      <SocialSection />
    </div>
  ));

  return (
    <div>
      <div className={classes.asideButton} onClick={toggleAside}>
        <div className={classes.hyphen}></div>
        <div className={c(classes.hyphen, classes.centralHyphen)}></div>
        <div className={classes.hyphen}></div>
      </div>
      <SwipeableDrawer
        open={sidebarOpened}
        onClose={closeSidebar}
        onOpen={noop}
        classes={{ paper: classes.sidebar }}
      >
        {sidebarContent}
      </SwipeableDrawer>
    </div>
  );
});
