import { IWord } from 'components/Word/IWord';

import { FETCH_WORD, START_WORD_FETCHING } from './types';

export interface IFetchWord {
  type: typeof FETCH_WORD;
  word: IWord;
}

export const fetchWordAction = (word: IWord): IFetchWord => ({
  type: FETCH_WORD,
  word,
});

export const fetchWordByIdAction = (id: string) => ({
  type: START_WORD_FETCHING,
  id,
});
