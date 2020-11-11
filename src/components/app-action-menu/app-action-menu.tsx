import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import React, { memo, useCallback } from 'react';
import { useBooleanState } from '../../hooks';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AppIconButton } from '../app-icon-button';
import { useIOActionMenuStyles } from './use-io-action-menu-styles';

type IOActionMenuItem = {
  label: string;
  onClick(): void;
};

type IOActionMenuProps = {
  items: IOActionMenuItem[];
  initialState?: boolean;
};

export const IOActionMenu = memo(
  ({ items, initialState = false }: IOActionMenuProps) => {
    const classes = useIOActionMenuStyles();
    const [openedMenu, setMenuOpen, closeMenu] = useBooleanState(initialState);

    const renderActionMenuItem = useCallback(
      ({ label, onClick }, index) => (
        <span onClick={onClick} key={index} className={classes.actionMenuItem}>
          {label}
        </span>
      ),

      [classes.actionMenuItem],
    );

    return (
      <ClickAwayListener onClickAway={closeMenu}>
        <div className={classes.actionMenuWrapper}>
          <AppIconButton
            size='medium'
            onClick={setMenuOpen}
            className={classes.actionMenuButton}
          >
            <MoreVertIcon />
          </AppIconButton>
          {openedMenu && (
            <div className={classes.actionMenuDropDown}>
              {items.map(renderActionMenuItem)}
            </div>
          )}
        </div>
      </ClickAwayListener>
    );
  },
);
