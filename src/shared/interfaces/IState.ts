import { IWord } from 'shared/interfaces/IWord';

export interface IState {
  words: IWord[];
  editMode: boolean;
  isVoiceReaderAvailable: boolean;
  showWordsInfo: boolean;
  categories: Array<any>;
  wordsOffset: IWord[];
}
