import { IState } from 'shared/interfaces/IState';

export const initialState: IState = {
  words: {
    list: [],
    total: 0,
  },
  showWordsInfo: true,
  editMode: false,
  categories: [],
};
