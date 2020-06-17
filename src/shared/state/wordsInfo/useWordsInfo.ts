import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'interfaces/IState';
import { toggleWordsInfoAction } from './actions';

export const useWordsInfo = () => {
  const dispatch = useDispatch();

  const showWordsInfo = useSelector((state: IState) => state.wordsInfo);

  const toggleWordsInfo = (): void => {
    dispatch(toggleWordsInfoAction());
  };

  return { toggleWordsInfo, showWordsInfo };
};
