import { IFetchWord } from './actions';
import { FETCH_WORD } from './types';

export const fetchWordReducer = (state: any, { type, word }: IFetchWord) => {
  const options = {
    [FETCH_WORD]: word,
  };

  return options[type] || state;
};
