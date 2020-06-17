import { IWord } from 'shared/interfaces/IWord';

export interface IState {
  words: Array<IWord>;
  wordsInfo: boolean;
  editMode: boolean;
  categories: Array<any>;
}
