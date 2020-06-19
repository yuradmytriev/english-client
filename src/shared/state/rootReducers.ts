import { initialState } from 'shared/state/initialState';
import { editModeReducer } from 'modules/word/state/editMode';
import { fetchCategoriesReducer } from 'modules/categories/state/categories';
import { wordsInfoReducer } from './wordsInfo';
import { fetchWordsReducer } from './fetchWords';

export const rootReducer = (
  { offsetWords, editMode, categories, showWordsInfo } = initialState,
  action: any,
) => ({
  offsetWords: fetchWordsReducer(offsetWords, action),
  editMode: editModeReducer(editMode, action),
  showWordsInfo: wordsInfoReducer(showWordsInfo, action),
  categories: fetchCategoriesReducer(categories, action),
});
