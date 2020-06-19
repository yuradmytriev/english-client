import { IWord } from 'shared/interfaces/IWord';

export interface IState {
  words: any;
  editMode: boolean;
  showWordsInfo: boolean;
  categories: Array<any>;
}
