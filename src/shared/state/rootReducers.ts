import { initialState } from 'shared/state/initialState';
import { editModeReducer } from 'modules/word/state/editMode';
import { fetchCategoriesReducer } from 'modules/categories/state/categories';
import { voiceReaderReducer } from 'modules/voiceReader/state/voiceReader';
import { wordsInfoReducer } from './wordsInfo';
import { fetchWordsReducer } from './fetchWords';
import { fetchWordsOffsetReducer } from './fetchWordsOffset';

export const rootReducer = (
  {
    words,
    wordsOffset,
    editMode,
    categories,
    showWordsInfo,
    isVoiceReaderAvailable,
  } = initialState,
  action: any,
) => ({
  words: fetchWordsReducer(words, action),
  editMode: editModeReducer(editMode, action),
  showWordsInfo: wordsInfoReducer(showWordsInfo, action),
  categories: fetchCategoriesReducer(categories, action),
  wordsOffset: fetchWordsOffsetReducer(wordsOffset, action),
  isVoiceReaderAvailable: voiceReaderReducer(isVoiceReaderAvailable, action),
});
