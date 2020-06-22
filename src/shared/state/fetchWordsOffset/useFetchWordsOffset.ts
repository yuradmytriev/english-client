import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'shared/interfaces/IState';
import { fetchWordsOffsetRequestAction } from './actions';

export const useFetchWordsOffset = () => {
  const dispatch = useDispatch();

  const wordsOffset = useSelector((state: IState) => state.wordsOffset);

  const fetchWordsOffset = (offset: number): void => {
    dispatch(fetchWordsOffsetRequestAction(offset));
  };

  return { fetchWordsOffset, wordsOffset };
};
