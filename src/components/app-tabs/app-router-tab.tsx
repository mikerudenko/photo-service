import Tab from '@material-ui/core/Tab';
import c from 'classnames';
import { useAutoCallback } from 'hooks.macro';
import React, { memo } from 'react';
import { useHistory } from 'react-router';
import { AppTypography } from '../app-typography';
import { useAppTabsStyles } from './use-app-tabs-styles';

type AppRouterTabProps = {
  to: string;
  label: string;
  isActive: boolean;
};

export const AppRouterTab = memo(
  ({ to, label, isActive }: AppRouterTabProps) => {
    const classes = useAppTabsStyles();
    const history = useHistory();

    const onClick = useAutoCallback(() => {
      history.push(to);
    });

    return (
      <Tab
        disableRipple
        {...{ to, onClick }}
        {...{
          label: (
            <AppTypography
              variant='p'
              className={c(classes.tabText, {
                [classes.activeTabText]: isActive,
              })}
            >
              {label}
            </AppTypography>
          ),
        }}
        classes={{
          root: classes.tabRoot,
        }}
      />
    );
  },
);
