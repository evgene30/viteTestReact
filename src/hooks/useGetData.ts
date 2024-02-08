import { useState } from 'react';

type TuesCustomHook = {
  value: string;
  someFunction: (data: string) => void;
};
const itemsData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 100, name: 'Item 100' },
];
function paginate(
  items: string | unknown[],
  currentPage: number,
  pageSize: number,
) {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  return items.slice(start, end);
}

export function useCustomHook(init: string): TuesCustomHook {
  const [value] = useState(init);

  const someFunction = () => {
    const pageItems = paginate(itemsData, 1, 3); // текущая страница, кол-во элементов на странице

    console.log(pageItems);
  };

  return { value, someFunction };
}
