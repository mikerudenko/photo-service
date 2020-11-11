import Modal from '@material-ui/core/Modal';
import c from 'classnames';
import React, { memo } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { useAppModalStyles } from './use-app-modal-styles';

type AppModalProps = {
  onClose(): void;
  open: boolean;
  content: any;
  className?: string;
};

export const AppModal = memo(
  ({ onClose, open, content, className = '' }: AppModalProps) => {
    const classes = useAppModalStyles();

    return (
      <Modal open={open} onClose={onClose} disableBackdropClick>
        <div className={c(classes.modal, className)}>
          <span onClick={onClose} className={classes.close}>
            <CloseIcon />
          </span>
          {content}
        </div>
      </Modal>
    );
  },
);
