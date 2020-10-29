import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'shared/interfaces/IState';
import {
  deleteWordsOffsetAction,
  appendWordToListAction,
  fetchWordsOffsetRequestAction,
} from './actions';

export const useFetchWordsOffset = () => {
  const dispatch = useDispatch();

  const wordsOffset = useSelector((state: IState) => state.wordsOffset);

  const fetchWordsOffset = (offset: number, order: string): void => {
    dispatch(fetchWordsOffsetRequestAction({ offset, order }));
  };

  const deleteWordsOffset = (id: number): void => {
    dispatch(deleteWordsOffsetAction(id));
  };

  const appendWordToList = (word): void => {
    console.log('appendWordToList');
    dispatch(appendWordToListAction(word));
  };

  return { wordsOffset, fetchWordsOffset, deleteWordsOffset, appendWordToList };
};
