import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DialogSelect } from '@/components/dialog/Dialog';
import { ModalProvider } from '@/components/modal/ModalContext';
import { Modal } from '@/components/modal/Modal';

const component = () => (
  <ModalProvider>
    <DialogSelect />
    <Modal />
  </ModalProvider>
);

describe('DialogSelect', () => {
  test('renders the open modal button', () => {
    render(component());
    const openModalButton = screen.getByRole('button', { name: /open modal/i });
    expect(openModalButton).toBeInTheDocument();
  });

  test('opens the dialog when the open modal button is clicked', () => {
    render(component());
    const openModalButton = screen.getByRole('button', { name: /open modal/i });
    fireEvent.click(openModalButton);
    const dialogTitle = screen.getByText(/open modal title/i);
    expect(dialogTitle).toBeInTheDocument();
  });

  test('closes the dialog when the cancel button is clicked', () => {
    render(component());
    const openModalButton = screen.getByRole('button', { name: /open modal/i });
    fireEvent.click(openModalButton);
    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(cancelButton).toBeInTheDocument();
  });
});
