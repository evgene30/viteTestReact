import React, { FC, useCallback } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useModal } from './ModalContext';

export const Modal: FC = () => {
  const { isOpen, closeModal, modalContent } = useModal();

  const actionsButton = useCallback(() => {
    if (modalContent?.actions) {
      return modalContent.actions;
    }

    if (modalContent?.actions === null) {
      return null;
    }

    return (
      <>
        <Button variant="contained" color="error" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="contained" color="success" onClick={() => null}>
          Ok
        </Button>
      </>
    );
  }, [closeModal, modalContent?.actions]);

  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <DialogTitle sx={{ fontSize: '15px', fontWeight: 'bold' }}>
        {modalContent?.title || ''}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={closeModal}
        sx={{
          position: 'absolute',
          right: 15,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>{modalContent?.component}</DialogContent>
      <DialogActions sx={{ gap: '10px', padding: '0 15px 15px 15px' }}>
        {actionsButton()}
      </DialogActions>
    </Dialog>
  );
};
