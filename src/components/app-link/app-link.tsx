import { useAutoCallback } from 'hooks.macro';
import React, { memo, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppLinkStyles } from './use-app-link-styles';
import c from 'classnames';

export type AppLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

export const AppLink = memo(
  ({ to, children, className = '' }: AppLinkProps) => {
    const history = useHistory();
    const classes = useAppLinkStyles();

    const onLinkClick = useAutoCallback(() => {
      history.push(to);
    });

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href='#' onClick={onLinkClick} className={c(classes.link, className)}>
        {children}
      </a>
    );
  },
);
