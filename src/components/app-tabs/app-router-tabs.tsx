import Tabs from '@material-ui/core/Tabs';
import c from 'classnames';
import { useAutoCallback, useAutoLayoutEffect } from 'hooks.macro';
import React, { Component, FC, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { AppRouterTab } from './app-router-tab';
import { useAppTabsStyles } from './use-app-tabs-styles';

export type AppRouterTabItem = {
  label: string;
  to: string;
  component: Component<any> | FC<any>;
  componentProps?: Record<string, any>;
};

export type AppRouterTabsProps = {
  tabs: AppRouterTabItem[];
  wrapperClassName?: string;
  contentClassName?: string;
};

export const AppRouterTabs = ({
  tabs,
  wrapperClassName = '',
  contentClassName = '',
}: AppRouterTabsProps) => {
  const classes = useAppTabsStyles();
  const { pathname } = useLocation();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(0);

  useAutoLayoutEffect(() => {
    let tabIndex = tabs.findIndex(({ to }) => pathname.startsWith(to));
    if (tabIndex === -1) {
      tabIndex = 0;
    }
    history.push(tabs[tabIndex].to);
    setActiveTab(tabIndex);
  });

  const renderRoute = useAutoCallback(
    ({ to, component: Component, componentProps }, index) => (
      <Route
        path={to}
        component={() => <Component {...componentProps} />}
        key={index}
      />
    ),
  );

  const renderTab = useAutoCallback(({ label, to }, index) => (
    <AppRouterTab
      {...{ label, to }}
      key={index}
      isActive={activeTab === index}
    />
  ));

  return (
    <div className={c(classes.wrapper, wrapperClassName)}>
      <Tabs
        value={activeTab}
        variant='scrollable'
        scrollButtons='auto'
        textColor='primary'
        indicatorColor='primary'
        classes={{
          indicator: classes.indicator,
          root: classes.tabsRoot,
        }}
      >
        {tabs.map(renderTab)}
      </Tabs>
      <div className={c(contentClassName, classes.tabContent)}>
        <Switch>{tabs.map(renderRoute)}</Switch>
      </div>
    </div>
  );
};
