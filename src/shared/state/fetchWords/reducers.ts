import { IWord } from 'shared/interfaces/IWord';
import { IFetchWords } from './actions';
import { FETCH_WORDS, FETCH_WORDS_OFFSET } from './types';
import produce from 'immer';

const INITIAL_STATE: string[] = [];

export const fetchWordsReducer = (stateWords, { type, offsetWords }) => {
  switch (type) {
    case FETCH_WORDS:
      return [...INITIAL_STATE, ...offsetWords.data];
    case FETCH_WORDS_OFFSET:
      return produce((state, offsetWords) => {
        if (offsetWords.data?.length) {
          offsetWords.data.forEach(word => {
            state.words.push(word);
            state.total = offsetWords.total;
          });
        }
      })(stateWords, offsetWords);
    default:
      return stateWords;
  }
};
