import React, { lazy, Suspense } from 'react';
import { AppSpinner } from '../app-spinner';

export const IOLoadable = (importFunc: any) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={<AppSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
