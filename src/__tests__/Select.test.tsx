import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import { SelectLabels } from '../components/select';

describe('SelectLabels', () => {
  render(<SelectLabels setData={() => null} />);
  test('snapshot SelectLabels component', () => {
    const defaultValue = '+ Add Filter';
    const selectedValue = screen.getByText(defaultValue);

    expect(selectedValue).toMatchSnapshot();
  });
});
