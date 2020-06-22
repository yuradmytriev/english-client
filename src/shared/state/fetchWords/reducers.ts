import { FETCH_WORDS } from './types';

const INITIAL_STATE: string[] = [];

export const fetchWordsReducer = (state, { type, words }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case FETCH_WORDS:
      return [...INITIAL_STATE, ...words];
    default:
      return state;
  }
};
