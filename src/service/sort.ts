import { TDataArray } from '@/components/buttons/ActionButton';
import { config as conf } from '@/hooks/useCustomHook';

export const sort = (arr: TDataArray, config: typeof conf) =>
  arr.sort((a, b) => {
    for (let i = 0; i < config.length; i += 1) {
      const { value, direction } = config[i];
      if (a[value as never] < b[value as never]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[value as never] > b[value as never]) {
        return direction === 'desc' ? -1 : 1;
      }
    }

    return 0;
  });
