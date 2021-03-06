import { IState } from 'shared/interfaces/IState';
import { TOGGLE_WORDS_INFO } from './types';

export const wordsInfoReducer = (showWordsInfo: boolean, { type }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case TOGGLE_WORDS_INFO:
      return !showWordsInfo;
    default:
      return showWordsInfo;
  }
};
