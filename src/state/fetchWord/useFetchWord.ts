import { useDispatch, useSelector } from 'react-redux';
import { IWord } from 'components/Word/IWord';

import { fetchWordByIdAction } from './actions';

interface IUseFetchWord {
  fetchWordById: (id: string) => void;
  word: IWord;
}

export const useFetchWord = (): IUseFetchWord => {
  const dispatch = useDispatch();

  const word: IWord = useSelector(({ word }: { word: IWord }) => word);

  const fetchWordById = (id: string): void => {
    dispatch(fetchWordByIdAction(id));
  };

  return { fetchWordById, word };
};
