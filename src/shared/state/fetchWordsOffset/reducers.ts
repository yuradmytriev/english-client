import produce from 'immer';
import { FETCH_WORDS_OFFSET } from './types';

const getWords = produce((state, words) => {
  if (words.data.length) {
    words.data.forEach(list => {
      // eslint-disable-next-line fp/no-mutating-methods
      state.list.push(list);
      // eslint-disable-next-line fp/no-mutating-methods,fp/no-mutation,no-param-reassign
      state.total = words.total;
    });
  }
});

export const fetchWordsOffsetReducer = (state, { type, words }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case FETCH_WORDS_OFFSET:
      return getWords(state, words);
    default:
      return state;
  }
};
