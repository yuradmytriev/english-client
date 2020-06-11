import { initialState } from 'state/initialState';
import { fetchWordsListReducer } from './fetchWordsList';
import { fetchWordReducer } from './fetchWord';
import { wordInfoReducer } from './wordInfo';

export const rootReducer = (state = initialState, action: any) => ({
  words: fetchWordsListReducer(state.words, action),
  word: fetchWordReducer(state.word, action),
  wordInfo: wordInfoReducer(state.wordInfo, action),
});
