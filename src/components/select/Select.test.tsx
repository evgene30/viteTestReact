import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import { SelectLabels } from '.';

describe('SelectLabels', () => {
  render(<SelectLabels />);
  test('snapshot SelectLabels component', () => {
    const defaultValue = '+ Add Filter';
    const selectedValue = screen.getByText(defaultValue);

    expect(selectedValue).toMatchSnapshot();
  });
});
