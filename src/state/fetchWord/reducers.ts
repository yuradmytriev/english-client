import { IFetchWord } from './actions';
import { FETCH_WORD } from './types';

export const fetchWordReducer = (state: any, { type, word }: IFetchWord) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case FETCH_WORD:
      return word;
    default:
      return state;
  }
};
