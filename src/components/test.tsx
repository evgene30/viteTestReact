import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestAsync } from 'redux-query';

// Хук для отслеживания предыдущего значения
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

const MyComponent = () => {
  const dispatch = useDispatch();
  const selector1Value = useSelector(mySelector1);
  const selector2Value = useSelector(mySelector2);

  const prevSelector1Value = usePrevious(selector1Value);
  const prevSelector2Value = usePrevious(selector2Value);

  useEffect(() => {
    // Проверяем, изменились ли значения селекторов
    if (
      prevSelector1Value !== selector1Value ||
      prevSelector2Value !== selector2Value
    ) {
      // Выполняем запрос, если значения селекторов изменились
      dispatch(
        requestAsync({
          url: '/my-api-endpoint',
          body: {
            param1: selector1Value,
            param2: selector2Value,
          },
          options: {
            method: 'POST',
          },
          // Дополнительные параметры запроса
        }),
      );
    }
  }, [
    selector1Value,
    selector2Value,
    prevSelector1Value,
    prevSelector2Value,
    dispatch,
  ]);

  // Отображаем ваш компонент...
  return <div>{/* Компонент здесь */}</div>;
};

export default MyComponent;
