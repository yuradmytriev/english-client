import { IFetchWord } from './actions';
import { FETCH_WORD } from './types';

export const fetchWordReducer = (state: any, { type, word }: IFetchWord) => {
  switch (type) {
    case FETCH_WORD:
      return word;
    default:
      return state;
  }
};
