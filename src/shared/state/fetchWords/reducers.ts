import { IFetchWords } from './actions';
import { FETCH_WORDS } from './types';

const INITIAL_STATE: string[] = [];

export const fetchWordsReducer = (
  state: string[],
  { type, words }: IFetchWords,
) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case FETCH_WORDS:
      return [...INITIAL_STATE, ...words];
    default:
      return state;
  }
};
