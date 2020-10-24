import { IState } from 'shared/interfaces/IState';

export const initialState: IState = {
  words: [],
  categories: [],
  wordsOffset: [],
  editMode: false,
  showWordsInfo: true,
  isVoiceReaderAvailable: false,
};
