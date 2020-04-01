import { IFetchWordsList } from './actions';
import { FETCH_WORDS_LIST } from './types';

const INITIAL_STATE: any = [];

// TODO: what reducer return
export const fetchWordsListReducer = (
  state: any,
  { type, words }: IFetchWordsList,
) => {
  switch (type) {
    case FETCH_WORDS_LIST:
      return [...INITIAL_STATE, ...words];
    default:
      return state;
  }
};
