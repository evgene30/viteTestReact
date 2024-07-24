import React from 'react';
import Button from '@mui/material/Button';
import { SelectLabels } from '../select';
import { useModal } from '../modal/ModalContext';

export const DialogSelect = () => {
  const { openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    openModal(<SelectLabels closeModal={closeModal} />);
  };

  return (
    <Button variant="contained" onClick={handleOpenModal}>
      Open modal
    </Button>
  );
};
