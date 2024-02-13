import { useState } from 'react';

export const useCustomHook = (text: string) => {
  const [state] = useState(text.length);

  return `${text} ${state}`;
};
