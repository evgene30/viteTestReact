import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PaginationComponent } from '@/components/pagination/Pagination';

describe('PaginationComponent', () => {
  it('renders the pagination component', () => {
    const setPage = jest.fn();

    const { getByTestId } = render(
      <PaginationComponent page={1} setPage={setPage} count={5} />,
    );

    const paginationComponent = getByTestId('pagination-component');
    expect(paginationComponent).not.toBeNull();
  });

  it('calls setPage function when page is changed', () => {
    const setPage = jest.fn();
    const { getByText } = render(
      <PaginationComponent page={1} setPage={setPage} count={5} />,
    );

    const page2Button = getByText('2');
    fireEvent.click(page2Button);

    expect(setPage).toHaveBeenCalled();
  });
});
