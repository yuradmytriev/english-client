import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'shared/interfaces/IState';
import { fetchWordsOffsetRequestAction, deleteWordsOffsetRequestAction } from './actions';

export const useFetchWordsOffset = () => {
  const dispatch = useDispatch();

  const wordsOffset = useSelector((state: IState) => state.wordsOffset);

  const fetchWordsOffset = (offset: number): void => {
    dispatch(fetchWordsOffsetRequestAction(offset));
  };

  const deleteWordsOffset = (id: number): void => {
    dispatch(deleteWordsOffsetRequestAction(id));
  };

  return { fetchWordsOffset, wordsOffset, deleteWordsOffset };
};
