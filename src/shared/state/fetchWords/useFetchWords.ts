import { useDispatch, useSelector } from 'react-redux';
import { IWord } from 'shared/interfaces/IWord';
import { IState } from 'shared/interfaces/IState';
import { fireFetchWordsAction, fetchWordsOffsetRequestAction } from './actions';

export interface IUseFetchWords {
  words: Array<IWord>;
  fetchWords: () => void;
  fetchWordsOffset: (offset: number) => void;
}

export const useFetchWords = () => {
  const dispatch = useDispatch();

  const offsetWords: Array<IWord> = useSelector(state => state.offsetWords);

  const fetchWords = (): void => {
    dispatch(fireFetchWordsAction());
  };

  const fetchWordsOffset = (offset: number): void => {
    dispatch(fetchWordsOffsetRequestAction(offset));
  };

  return { fetchWordsOffset, fetchWords, offsetWords };
};
