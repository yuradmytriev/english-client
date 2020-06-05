import { IFetchWordsList } from './actions';
import { FETCH_WORDS_LIST } from './types';

const INITIAL_STATE: string[] = [];

export const fetchWordsListReducer = (
  state: string[],
  { type, words }: IFetchWordsList,
) => {
  const options = {
    [FETCH_WORDS_LIST]: [...INITIAL_STATE, ...words],
  };

  return options[type] || state;
};
