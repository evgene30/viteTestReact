import React, { ComponentProps, useCallback } from 'react';
import { useCustomHook } from '@/hooks/useCustomHook';
import { Button } from './Button';
import { sortArr } from '@/pages/about/About';

export type TDataArray = typeof sortArr;

interface PropsHandler extends Partial<ComponentProps<typeof Button>> {
  text?: string;
  data?: TDataArray;
}

const composeHandler =
  (
    WrappedComponent: React.ElementType,
    hookFunction: (
      item: string | undefined,
      data: TDataArray | undefined,
    ) => string | undefined | TDataArray,
  ) =>
  (props: PropsHandler) => {
    const { text, data } = props;
    const hookResult = hookFunction(
      text as string,
      data as unknown as TDataArray,
    );
    const handleClick = useCallback(() => {
      console.log(hookResult);
    }, [hookResult]);

    return <WrappedComponent {...props} onClick={handleClick} />;
  };

export const ActionButton = composeHandler(Button, useCustomHook);
