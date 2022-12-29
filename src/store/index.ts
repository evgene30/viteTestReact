import create from 'zustand';
import { devtools } from 'zustand/middleware';

import type { Option } from '@/components/select';

type TDayStore = {
  select: Option[];
  addSelect: (newSelect: Option[]) => void;
};

export const useSelect = create<TDayStore>()(
  devtools(
    (set) => ({
      select: [],
      addSelect: (newSelect) =>
        set(() => ({ select: newSelect }), false, 'createSelect'),
    }),
    {
      name: 'selectStorage',
    },
  ),
);
