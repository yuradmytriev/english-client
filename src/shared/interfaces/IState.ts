import { IWord } from 'shared/interfaces/IWord';

export interface IOffsetWords {
  list: IWord[];
  total: number;
}

export interface IState {
  words: IOffsetWords;
  editMode: boolean;
  showWordsInfo: boolean;
  categories: Array<any>;
}
