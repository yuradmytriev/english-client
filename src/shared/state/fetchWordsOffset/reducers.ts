import uniqBy from 'lodash/uniqBy';
import { FETCH_WORDS_OFFSET, DELETE_WORDS_OFFSET_REQUEST } from './types';

export const fetchWordsOffsetReducer = (state, { type, words, id }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case FETCH_WORDS_OFFSET:
      return uniqBy([...state, ...words], ({ id }) => id);
    case DELETE_WORDS_OFFSET_REQUEST:
      return state.filter(item => item.id !== id);
    default:
      return state;
  }
};
