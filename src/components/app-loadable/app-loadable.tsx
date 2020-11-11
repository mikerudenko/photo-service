import React, { lazy, Suspense } from 'react';
import { AppSpinner } from '../app-spinner';

export const AppLoadable = (importFunc: any) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={<AppSpinner absoluteCentered />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
