import { IWord } from 'shared/interfaces/IWord';

export interface IState {
  words: IWord[];
  editMode: boolean;
  showWordsInfo: boolean;
  categories: Array<any>;
  wordsOffset: IWord[];
}
