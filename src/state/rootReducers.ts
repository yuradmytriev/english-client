import { initialState } from 'state/initialState';
import { fetchCategoriesReducer } from 'modules/categories/state/categories';
import { wordsInfoReducer } from './wordsInfo';
import { editModeReducer } from 'modules/word/state/editMode';
import { fetchWordsListReducer } from './fetchWordsList';

export const rootReducer = (state = initialState, action: any) => ({
  words: fetchWordsListReducer(state.words, action),
  wordsInfo: wordsInfoReducer(state.wordsInfo, action),
  categories: fetchCategoriesReducer(state.categories, action),
  editMode: editModeReducer(state.editMode, action),
});
