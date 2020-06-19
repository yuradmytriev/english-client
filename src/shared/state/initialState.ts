import { IState } from 'shared/interfaces/IState';

export const initialState: IState = {
  offsetWords: {
    words: [],
    total: 0,
  },
  showWordsInfo: true,
  editMode: false,
  categories: [],
};
