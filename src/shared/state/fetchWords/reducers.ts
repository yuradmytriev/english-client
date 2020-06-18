import { IWord } from 'shared/interfaces/IWord';
import { IFetchWords } from './actions';
import { FETCH_WORDS, FETCH_WORDS_OFFSET } from './types';

const INITIAL_STATE: string[] = [];

export const fetchWordsReducer = (
  stateWords: Array<IWord>,
  { type, words }: IFetchWords,
) => {
  switch (type) {
    case FETCH_WORDS:
      return [...INITIAL_STATE, ...words];
    case FETCH_WORDS_OFFSET:
      return [...stateWords, ...words];
    default:
      return stateWords;
  }
};
