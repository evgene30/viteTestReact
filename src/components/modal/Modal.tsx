import React, { FC } from 'react';
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

  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <DialogTitle sx={{ fontSize: '14px', fontWeight: 'bold' }}>
        Tested form
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
      <DialogContent>{modalContent}</DialogContent>
      <DialogActions sx={{ gap: '10px' }}>
        <Button variant="contained" color="error" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="contained" color="success" onClick={() => null}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
