import { useDispatch, useSelector } from 'react-redux';
import { IWord } from 'shared/interfaces/IWord';
import { IState } from 'shared/interfaces/IState';
import { fireFetchWordsListAction } from './actions';

export interface IUseFetchWordsList {
  fetchWordsList: () => void;
  words: Array<IWord>;
}

export const useFetchWordsList = (): IUseFetchWordsList => {
  const dispatch = useDispatch();

  const words: Array<IWord> = useSelector((state: IState) => state.words);

  const fetchWordsList = (): void => {
    dispatch(fireFetchWordsListAction());
  };

  return { fetchWordsList, words };
};
