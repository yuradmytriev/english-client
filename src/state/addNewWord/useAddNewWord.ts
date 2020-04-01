import { useDispatch } from 'react-redux';
import { IWord } from 'components/Word/IWord';
import { addNewWordAction } from './actions';

export const useAddNewWord = () => {
  const dispatch = useDispatch();

  const addNewWord = (values: IWord): void => {
    dispatch(addNewWordAction());
  };

  return { addNewWord };
};
