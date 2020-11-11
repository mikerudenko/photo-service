import React, { memo } from 'react';
import { AppTabItem } from './app-tabs';
import c from 'classnames';
import { useAppTabsStyles } from './use-app-tabs-styles';

interface AppTabContentProps {
  tab: AppTabItem;
  contentClassName?: string;
}

export const AppTabContent = memo(
  ({
    contentClassName,
    tab: { component: Component, componentProps },
  }: AppTabContentProps) => {
    const classes = useAppTabsStyles();
    return (
      <div className={c(contentClassName, classes.tabContent)}>
        <Component {...componentProps} />
      </div>
    );
  },
);
