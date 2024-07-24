import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { setDeleteSearchText, setSearchText } from '../searchSlice';
import { useAppSelector } from '../hooks';
import { getSearchText } from '../selector';

export const useSearchActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchText = useAppSelector(getSearchText);

  const setSearchTextAction = (text: string) => {
    dispatch(setSearchText(text));
  };

  const setDeleteSearchTextAction = () => {
    dispatch(setDeleteSearchText());
  };

  return { setSearchTextAction, setDeleteSearchTextAction, searchText };
};
