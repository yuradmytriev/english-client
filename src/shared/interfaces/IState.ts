import { IWord } from 'shared/interfaces/IWord';

export interface IOffsetWords {
  list: IWord[];
  total: number;
}

export interface IState {
  words: IWord[];
  editMode: boolean;
  showWordsInfo: boolean;
  categories: Array<any>;
  wordsOffset: IOffsetWords;
}
