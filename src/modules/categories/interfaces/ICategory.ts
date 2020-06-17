import { IWord } from 'shared/interfaces/IWord';

export interface ICategory {
  id: number;
  name: string;
  words: IWord[];
}
