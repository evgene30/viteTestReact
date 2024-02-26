import { useState } from 'react';
import { TDataArray } from '@/components/buttons/ActionButton';
import { sort } from '@/service/sort';

export const config = [
  { value: 'id', direction: 'desc' },
  { value: 'title', direction: 'desc' },
  { value: 'label', direction: 'asc' },
];

export const useCustomHook = (
  text?: string,
  data?: TDataArray,
): string | undefined | TDataArray => {
  const [state] = useState(text?.length || data);
  if (typeof state === 'string') {
    return `${text} ${state as string}`;
  }

  if (typeof state === 'object') {
    return sort(state, config);
  }

  return undefined;
};
