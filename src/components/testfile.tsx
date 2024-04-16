import { useEffect, useRef } from 'react';
// Остальные импорты...

const YourComponent = () => {
  const [triggerQuery, { data, isLoading, error }] = useYourReduxQueryMutation();
  const documentBody = useAppSelector(selectDocumentBody);
  const anotherValue = useAppSelector(selectAnotherValue);
  // Используем useRef для отслеживания первого рендеринга
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      // Помечаем, что первый рендер прошёл
      isInitialRender.current = false;
    } else {
      // Запрос выполняется только если это не первый рендер
      if (documentBody && anotherValue) {
        triggerQuery({ body: documentBody });
      }
    }
  }, [documentBody, anotherValue, triggerQuery]);

  // Остальная часть вашего компонента...

  return (
    // Ваш JSX...
  );
};

export default YourComponent;