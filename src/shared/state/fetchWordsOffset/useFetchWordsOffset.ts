import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'shared/interfaces/IState';
import {
  deleteWordsOffsetAction,
  fetchWordsOffsetRequestAction,
} from './actions';

export const useFetchWordsOffset = () => {
  const dispatch = useDispatch();

  const wordsOffset = useSelector((state: IState) => state.wordsOffset);

  const fetchWordsOffset = (offset: number): void => {
    dispatch(fetchWordsOffsetRequestAction(offset));
  };

  const deleteWordsOffset = (id: number): void => {
    dispatch(deleteWordsOffsetAction(id));
  };

  return { wordsOffset, fetchWordsOffset, deleteWordsOffset };
};
