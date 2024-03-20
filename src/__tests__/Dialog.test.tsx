import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DialogSelect } from '@/components/dialog/Dialog';

describe('DialogSelect', () => {
  test('renders the open modal button', () => {
    render(<DialogSelect />);
    const openModalButton = screen.getByRole('button', { name: /open modal/i });
    expect(openModalButton).toBeInTheDocument();
  });

  test('opens the dialog when the open modal button is clicked', () => {
    render(<DialogSelect />);
    const openModalButton = screen.getByRole('button', { name: /open modal/i });
    fireEvent.click(openModalButton);
    const dialogTitle = screen.getByText(/tested form/i);
    expect(dialogTitle).toBeInTheDocument();
  });

  test('closes the dialog when the cancel button is clicked', () => {
    render(<DialogSelect />);
    const openModalButton = screen.getByRole('button', { name: /open modal/i });
    fireEvent.click(openModalButton);
    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(cancelButton).toBeInTheDocument();
  });
});
