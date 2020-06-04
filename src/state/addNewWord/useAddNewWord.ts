import { useDispatch } from 'react-redux';
import { addNewWordAction } from './actions';

export const useAddNewWord = () => {
  const dispatch = useDispatch();

  const addNewWord = (): void => {
    dispatch(addNewWordAction());
  };

  return { addNewWord };
};
