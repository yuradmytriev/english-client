import { IWord } from 'shared/interfaces/IWord';
import { FETCH_WORDS, FETCH_WORDS_REQUEST } from './types';

interface IFireFetchWords {
  type: typeof FETCH_WORDS_REQUEST;
}

export const fetchWordsAction = (words: Array<IWord>): IFetchWords => ({
  type: FETCH_WORDS,
  words,
});

export interface IFetchWords {
  type: typeof FETCH_WORDS;
  words: Array<IWord>;
}

export const fireFetchWordsAction = (): IFireFetchWords => ({
  type: FETCH_WORDS_REQUEST,
});
