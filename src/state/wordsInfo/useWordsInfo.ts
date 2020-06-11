import { useDispatch, useSelector } from 'react-redux';
import { toggleWordsInfoAction } from './actions';

export const useWordsInfo = () => {
  const dispatch = useDispatch();

  const showWordsInfo = useSelector((state: any) => state.wordsInfo);

  const toggleWordsInfo = (): void => {
    dispatch(toggleWordsInfoAction());
  };

  return { toggleWordsInfo, showWordsInfo };
};
