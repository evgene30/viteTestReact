import { useLayoutEffect, useState } from 'react';

function getStorageValue(key: string, defaultValue: unknown): unknown {
  const saved = localStorage.getItem(key) as string;
  const initial = JSON.parse(saved) as unknown;

  return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: unknown) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useLayoutEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return { value, setValue };
};
