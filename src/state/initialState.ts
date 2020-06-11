export interface IInitialState {
  words: Array<any>;
  word: string;
  wordInfo: boolean;
}

export const initialState: IInitialState = {
  words: [],
  word: '',
  wordInfo: true,
};
