import { useDispatch, useSelector } from 'react-redux';
import { IWord } from 'interfaces/IWord';
import { fireFetchWordsListAction } from './actions';

export interface IUseFetchWordsList {
  fetchWordsList: () => void;
  words: Array<IWord>;
}

export const useFetchWordsList = (): IUseFetchWordsList => {
  const dispatch = useDispatch();

  const words: Array<IWord> = useSelector((state: any) => state.words);

  const fetchWordsList = (): void => {
    dispatch(fireFetchWordsListAction());
  };

  return { fetchWordsList, words };
};
