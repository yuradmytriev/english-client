import { TOGGLE_WORD_INFO } from './types';

export const wordInfoReducer = (state, { type }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case TOGGLE_WORD_INFO:
      return !state;
    default:
      return state;
  }
};
