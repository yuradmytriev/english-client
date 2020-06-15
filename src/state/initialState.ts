export interface IInitialState {
  words: Array<any>;
  word: string;
  wordsInfo: boolean;
  categories: Array<any>;
}

export const initialState: IInitialState = {
  words: [],
  word: '',
  wordsInfo: true,
  categories: [],
};
