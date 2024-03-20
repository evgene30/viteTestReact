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
): Array<string> | undefined | string => {
  const [state] = useState(text?.length || data);
  if (typeof state === 'string') {
    return `${text} ${state as unknown as string}`;
  }

  if (Array.isArray(state)) {
    return sort(state as Array<string>, config);
  }

  return undefined;
};
