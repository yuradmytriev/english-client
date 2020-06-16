import { IWord } from 'interfaces/IWord';

export interface IState {
  words: Array<IWord>;
  wordsInfo: boolean;
  categories: Array<any>;
}
