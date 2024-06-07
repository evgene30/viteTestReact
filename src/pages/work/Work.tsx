import { Box, Button } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import { workStyle } from './style';
import { CustomSnackbar } from '@/components/snackbar/CustomSnackbar';

export const Work = () => {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    // нажатие вне кнопки
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useLayoutEffect(() => {
    const savedStatus = localStorage.getItem('buttonStatus');
    if (savedStatus) {
      setButtonStatus(JSON.parse(savedStatus) as boolean);
    }
  }, []);

  const handleButtonClick = () => {
    const newStatus = !buttonStatus;
    setButtonStatus(newStatus);
    localStorage.setItem('buttonStatus', JSON.stringify(newStatus));
    setOpen(false);
  };

  const handleCheckStatusAndRerender = (): void => {
    const savedStatus = JSON.parse(localStorage.getItem('buttonStatus') || '');
    if (savedStatus) {
      const one = [
        { id: 12 },
        { id: 13, children: [{ id: 14, rule: false }] },
        {
          id: 15,
          rule: false,
          children: [
            {
              id: 16,
              rule: false,
              children: [
                { id: 19, rule: false, children: [{ id: 1988, rule: true }] },
              ],
            },
          ],
        },
        { id: 199, rule: false, children: [{ id: 998, rule: true }] },
      ];
      // алгоритм обхода по уровням breadth-first search
      const findFirstWithRuleTrueByLevels = (array: any) => {
        const queue = [...array]; // Инициализируем очередь с первым уровнем элементов
        while (queue.length > 0) {
          const item = queue.shift(); // Извлекаем первый элемент из очереди
          if (item.rule === true) {
            return item.id as string; // Возвращаем id, если найден элемент с rule: true
          }
          if (item.children) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            queue.push(...item.children); // Добавляем дочерние элементы в очередь
          }
        }

        return undefined; // Если ничего не найдено
      };

      console.log(findFirstWithRuleTrueByLevels(one));
    }
    setOpen(true);
  };

  return (
    <>
      <Box sx={workStyle}>
        <Button
          variant="contained"
          color={buttonStatus ? 'success' : 'warning'}
          onClick={handleButtonClick}
        >
          {buttonStatus ? 'Статус: true' : 'Статус: false'}
        </Button>
        <Button variant="contained" onClick={handleCheckStatusAndRerender}>
          Check status
        </Button>
      </Box>
      <CustomSnackbar
        openBar={open}
        handleClose={handleClose}
        loadStatus={buttonStatus}
      />
    </>
  );
};
