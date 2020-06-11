import { initialState } from 'state/initialState';
import { fetchWordsListReducer } from './fetchWordsList';
import { fetchWordReducer } from './fetchWord';
import { wordsInfoReducer } from './wordsInfo';

export const rootReducer = (state = initialState, action: any) => ({
  words: fetchWordsListReducer(state.words, action),
  word: fetchWordReducer(state.word, action),
  wordsInfo: wordsInfoReducer(state.wordsInfo, action),
});
