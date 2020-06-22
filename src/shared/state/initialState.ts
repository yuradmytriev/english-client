import { IState } from 'shared/interfaces/IState';

export const initialState: IState = {
  words: [],
  categories: [],
  wordsOffset: {
    list: [],
    total: 0,
  },
  editMode: false,
  showWordsInfo: true,
};
