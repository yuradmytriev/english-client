import uniqBy from 'lodash/uniqBy';
import find from 'lodash/find';
import { FETCH_WORDS_OFFSET } from './types';

export const fetchWordsOffsetReducer = (state, { type, words }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case FETCH_WORDS_OFFSET:
      return uniqBy([...words, ...state], ({ id }) => id).sort(
        (a, b) => b.id - a.id,
      );
    default:
      return state;
  }
};
