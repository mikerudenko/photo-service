import React, { memo, useCallback } from 'react';
import { useAppBreadcrumbsStyles } from './use-app-breadcrumbs-styles';

import { BreadcrumbType } from './app-breadcrumbs.types';
import { AppBreadcrumbItem } from './app-breadcrumb-item';

type AppBreadcrumbsProps = {
  breadcrumbs: BreadcrumbType[];
};

export const AppBreadcrumbs = memo(({ breadcrumbs }: AppBreadcrumbsProps) => {
  const classes = useAppBreadcrumbsStyles();

  const renderBreadcrumb = useCallback(
    (breadcrumb, index) => (
      <AppBreadcrumbItem
        {...breadcrumb}
        key={index}
        active={index === breadcrumbs.length - 1}
      />
    ),
    [breadcrumbs.length],
  );

  return (
    <div className={classes.breadcrumbsContainer}>
      {breadcrumbs.map(renderBreadcrumb)}
    </div>
  );
});
