export interface IInitialState {
  words: Array<any>;
  word: string;
  wordsInfo: boolean;
}

export const initialState: IInitialState = {
  words: [],
  word: '',
  wordsInfo: true,
};
