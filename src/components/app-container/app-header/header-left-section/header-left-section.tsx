import { useAutoCallback } from 'hooks.macro';
import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../../app.constants';
import { AppLogo } from '../../../app-logo';
import { HeaderAside } from '../header-aside';
import { useHeaderLeftSectionStyles } from './use-header-left-section-styles';

export const HeaderLeftSection = memo(() => {
  const classes = useHeaderLeftSectionStyles();
  const history = useHistory();

  const onHeaderClick = useAutoCallback(() => {
    history.push(ROUTES.root);
  });

  return (
    <div className={classes.leftHeaderPart}>
      <HeaderAside />
      <AppLogo onClick={onHeaderClick} />
    </div>
  );
});
