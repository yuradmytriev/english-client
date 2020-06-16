import { initialState } from 'state/initialState';
import { wordsInfoReducer } from './wordsInfo';
import { fetchCategoriesReducer } from './categories';
import { editModeReducer } from './editMode';
import { fetchWordsListReducer } from './fetchWordsList';

export const rootReducer = (state = initialState, action: any) => ({
  words: fetchWordsListReducer(state.words, action),
  wordsInfo: wordsInfoReducer(state.wordsInfo, action),
  categories: fetchCategoriesReducer(state.categories, action),
  editMode: editModeReducer(state.editMode, action),
});
