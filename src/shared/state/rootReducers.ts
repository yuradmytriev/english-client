import { initialState } from 'shared/state/initialState';
import { editModeReducer } from 'modules/word/state/editMode';
import { fetchCategoriesReducer } from 'modules/categories/state/categories';
import { wordsInfoReducer } from './wordsInfo';
import { fetchWordsReducer } from './fetchWords';

export const rootReducer = (
  { words, editMode, categories, showWordsInfo } = initialState,
  action: any,
) => ({
  words: fetchWordsReducer(words, action),
  editMode: editModeReducer(editMode, action),
  showWordsInfo: wordsInfoReducer(showWordsInfo, action),
  categories: fetchCategoriesReducer(categories, action),
});
