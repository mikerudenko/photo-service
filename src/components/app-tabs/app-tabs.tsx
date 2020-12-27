import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import c from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import { AppTabContent } from './app-tab-content';
import { useAppTabsStyles } from './use-app-tabs-styles';
import { AppTypography } from '../app-typography';

export interface AppTabItem {
  label: string;
  component: FC<any>;
  componentProps?: Record<string, any>;
}

export interface AppTabsProps {
  tabs: AppTabItem[];
  contentClassName?: string;
  wrapperClassName?: string;
}

export const AppTabs = ({
  tabs,
  contentClassName,
  wrapperClassName,
}: AppTabsProps) => {
  const classes = useAppTabsStyles();
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = useCallback((event: any, newValue: number) => {
    setActiveTab(newValue);
  }, []);

  return (
    <div className={c(classes.wrapper, wrapperClassName)}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        textColor='primary'
        indicatorColor='primary'
        classes={{
          indicator: classes.indicator,
          root: classes.tabsRoot,
        }}
      >
        {tabs.map(({ label }, index) => (
          <Tab
            disableRipple
            key={index}
            {...{
              label: (
                <AppTypography
                  variant='p'
                  className={c(classes.tabText, {
                    [classes.activeTabText]: activeTab === index,
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
        ))}
      </Tabs>
      <AppTabContent {...{ tab: tabs[activeTab], contentClassName }} />
    </div>
  );
};
