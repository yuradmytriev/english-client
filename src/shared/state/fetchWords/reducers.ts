import produce from 'immer';
import { IState, IOffsetWords } from 'shared/interfaces/IState';
import { IFetchWords } from './actions';
import { FETCH_WORDS, FETCH_WORDS_OFFSET } from './types';

const INITIAL_STATE: string[] = [];

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

export const fetchWordsReducer = (state, { type, words }) => {
  switch (type) {
    case FETCH_WORDS:
      return [...INITIAL_STATE, ...words];
    case FETCH_WORDS_OFFSET:
      return getWords(state, words);
    default:
      return state;
  }
};
