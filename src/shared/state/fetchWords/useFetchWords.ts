import { useDispatch, useSelector } from 'react-redux';
import { IWord } from 'shared/interfaces/IWord';
import { IState } from 'shared/interfaces/IState';
import { fireFetchWordsAction } from './actions';

export interface IUseFetchWords {
  fetchWords: () => void;
  words: Array<IWord>;
}

export const useFetchWords = (): IUseFetchWords => {
  const dispatch = useDispatch();

  const words: Array<IWord> = useSelector((state: IState) => state.words);

  const fetchWords = (): void => {
    dispatch(fireFetchWordsAction());
  };

  return { fetchWords, words };
};
