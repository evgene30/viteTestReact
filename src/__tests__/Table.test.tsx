import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TableComponent } from '@/components/Table';

// Мок window.matchMedia
window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

describe('TableComponent', () => {
  const initialOptions = [
    { label: 'Option 1', field: 'Field 1', link: 'Link 1' },
    { label: 'Option 2', field: 'Field 2', link: 'Link 2' },
  ];

  it('renders without crashing', () => {
    render(
      <TableComponent
        options={initialOptions}
        data={[]}
        setOptions={() => {}}
      />,
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('can delete an option', () => {
    const setOptionsMock = jest.fn();
    const { container } = render(
      <TableComponent
        options={initialOptions}
        data={[]}
        setOptions={setOptionsMock}
      />,
    );

    const deleteIcon = container.querySelector('svg[data-icon="delete"]');
    expect(deleteIcon).toBeInTheDocument();
  });
});
