import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { PaginationComponent } from '@/components/pagination/Pagination';

const setPage = jest.fn();

describe('PaginationComponent', () => {
  it('handleChange is called with the correct value when Pagination triggers onChange event', () => {
    const { getByTestId } = render(
      <PaginationComponent page={1} setPage={setPage} />,
    );
    fireEvent.change(getByTestId('pagination-component'), {
      target: { value: 2 },
    });
    expect(setPage).toHaveBeenCalledWith(2);
  });

  it('Pagination component renders with the correct props', () => {
    const { getByTestId } = render(
      <PaginationComponent page={1} setPage={jest.fn()} />,
    );
    const paginationComponent = getByTestId('pagination-component');
    expect(paginationComponent).toHaveAttribute('count', '7');
    expect(paginationComponent).toHaveAttribute('variant', 'outlined');
    expect(paginationComponent).toHaveAttribute('shape', 'rounded');
    expect(paginationComponent).toHaveAttribute('page', '1');
  });
});
