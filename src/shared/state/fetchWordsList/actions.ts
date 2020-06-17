import { IWord } from 'shared/interfaces/IWord';
import { FETCH_WORDS_LIST, FIRE_FETCH_WORDS_LIST } from './types';

interface IFireFetchWordsList {
  type: typeof FIRE_FETCH_WORDS_LIST;
}

export const fetchWordsListAction = (words: Array<IWord>): IFetchWordsList => ({
  type: FETCH_WORDS_LIST,
  words,
});

export const fireFetchWordsListAction = (): IFireFetchWordsList => ({
  type: FIRE_FETCH_WORDS_LIST,
});

export interface IFetchWordsList {
  type: typeof FETCH_WORDS_LIST;
  words: Array<IWord>;
}
