import uniqBy from 'lodash/uniqBy';
import { FETCH_WORDS_OFFSET } from './types';

export const fetchWordsOffsetReducer = (state, { type, words }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case FETCH_WORDS_OFFSET:
      return uniqBy([...state, ...words], ({ id }) => id);
    default:
      return state;
  }
};
