import { setDeleteSearchText, setSearchText } from '../searchSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getSearchText } from '../selector';

export const useSearchActions = () => {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector(getSearchText);

  const setSearchTextAction = (text: string) => {
    dispatch(setSearchText(text));
  };

  const setDeleteSearchTextAction = () => {
    dispatch(setDeleteSearchText());
  };

  return { setSearchTextAction, setDeleteSearchTextAction, searchText };
};
