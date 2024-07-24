import React from 'react';
import Button from '@mui/material/Button';
import { SelectLabels } from '../select';
import { useModal } from '../modal/ModalContext';

export const DialogSelect = () => {
  const { openModal, closeModal } = useModal();
  const component = <SelectLabels closeModal={closeModal} />;

  const handleOpenModal = () => {
    openModal({ component, title: 'Open modal title' });
  };

  return (
    <Button variant="contained" onClick={handleOpenModal}>
      Open modal
    </Button>
  );
};
