import { IWord } from 'interfaces/IWord';

export interface ICategory {
  id: number;
  name: string;
  words: IWord[];
}
