import { useState } from 'react';

export const useCustomHook = (text: string) => {
  const [state] = useState(51);

  return `${text} ${state}`;
};
