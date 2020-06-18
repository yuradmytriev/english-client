import { IWord } from 'shared/interfaces/IWord';

export interface IState {
  words: IWord[];
  editMode: boolean;
  wordsInfo: boolean;
  categories: Array<any>;
}
