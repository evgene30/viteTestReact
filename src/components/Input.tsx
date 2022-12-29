import React, { FC, useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import './Input.scss';

export const Input: FC = () => {
  const [val, setVal] = useState<number>(0);
  const isDisabled = false;
  console.log(val);

  return (
    <InputNumber
      className="InputDay"
      name="InputForm"
      value={val}
      onChange={(e) => setVal(e.value as number)}
      showButtons
      placeholder="Enter the quantity of days"
      mode="decimal"
      disabled={isDisabled}
      suffix={val > 1 ? ' days' : ' day'}
    />
  );
};
