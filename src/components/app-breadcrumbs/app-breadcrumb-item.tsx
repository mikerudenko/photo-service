import React, { memo, useCallback } from 'react';
import { BreadcrumbType } from './app-breadcrumbs.types';
import { P } from '../app-typography';
import { useAppBreadcrumbsStyles } from './use-app-breadcrumbs-styles';

export const AppBreadcrumbItem = memo(
  ({ name, onClick, id }: BreadcrumbType) => {
    const classes = useAppBreadcrumbsStyles();
    const onBreadcrumbClick = useCallback(() => {
      onClick(id);
    }, [id, onClick]);

    return (
      <P onClick={onBreadcrumbClick} className={classes.breadcrumb}>
        {name}
      </P>
    );
  },
);
