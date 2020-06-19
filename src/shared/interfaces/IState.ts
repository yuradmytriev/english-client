import { IWord } from 'shared/interfaces/IWord';

export interface IState {
  offsetWords: any;
  editMode: boolean;
  showWordsInfo: boolean;
  categories: Array<any>;
}
