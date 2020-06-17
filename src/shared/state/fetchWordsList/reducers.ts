import { IFetchWordsList } from './actions';
import { FETCH_WORDS_LIST } from './types';

const INITIAL_STATE: string[] = [];

export const fetchWordsListReducer = (
  state: string[],
  { type, words }: IFetchWordsList,
) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case FETCH_WORDS_LIST:
      return [...INITIAL_STATE, ...words];
    default:
      return state;
  }
};
