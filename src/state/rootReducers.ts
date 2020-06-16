import { initialState } from 'state/initialState';
import { fetchWordsListReducer } from './fetchWordsList';
import { wordsInfoReducer } from './wordsInfo';
import { fetchCategoriesReducer } from './categories';

export const rootReducer = (state = initialState, action: any) => ({
  words: fetchWordsListReducer(state.words, action),
  wordsInfo: wordsInfoReducer(state.wordsInfo, action),
  categories: fetchCategoriesReducer(state.categories, action),
});
