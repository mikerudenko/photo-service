import React, { ReactNode } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

export const AppQueryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: Infinity,
    },
  },
});

type AppQueryCacheProviderProps = {
  children: ReactNode;
};

export const AppQueryCacheProvider = ({
  children,
}: AppQueryCacheProviderProps) => {
  return (
    <ReactQueryCacheProvider queryCache={AppQueryCache}>
      {children}
    </ReactQueryCacheProvider>
  );
};
