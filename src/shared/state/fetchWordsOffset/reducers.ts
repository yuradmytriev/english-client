import uniqBy from 'lodash/uniqBy';
import {
  FETCH_WORDS_OFFSET,
  DELETE_WORDS_OFFSET,
  APPEND_WORD_TO_LIST,
} from './types';

export const fetchWordsOffsetReducer = (state, { type, words, id, word }) => {
  switch (type) {
    case FETCH_WORDS_OFFSET:
      return uniqBy([...state, ...words], ({ id }) => id);
    case APPEND_WORD_TO_LIST:
      return [word, ...state];
    case DELETE_WORDS_OFFSET:
      return state.filter(item => item.id !== id);
    default:
      return state;
  }
};
