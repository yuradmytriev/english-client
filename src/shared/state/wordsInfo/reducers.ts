import { TOGGLE_WORDS_INFO } from './types';

export const wordsInfoReducer = (state, { type }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case TOGGLE_WORDS_INFO:
      return !state;
    default:
      return state;
  }
};
