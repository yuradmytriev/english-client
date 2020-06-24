import uniqBy from 'lodash/uniqBy';
import { FETCH_WORDS_OFFSET, DELETE_WORDS_OFFSET } from './types';

export const fetchWordsOffsetReducer = (state, { type, words, id }) => {
  switch (type) {
    case FETCH_WORDS_OFFSET:
      return uniqBy([...state, ...words], ({ id }) => id);
    case DELETE_WORDS_OFFSET:
      return state.filter(item => item.id !== id);
    default:
      return state;
  }
};
