import { IWord } from 'shared/interfaces/IWord';
import {
  FETCH_WORDS_OFFSET,
  DELETE_WORDS_OFFSET,
  FETCH_WORDS_OFFSET_REQUEST,
} from './types';

export interface IWordsOffsetAction {
  type: string;
  offset: number;
}

export const fetchWordsOffsetAction = (words: IWord[]) => ({
  type: FETCH_WORDS_OFFSET,
  words,
});

export const fetchWordsOffsetRequestAction = (
  offset: number,
): IWordsOffsetAction => ({
  type: FETCH_WORDS_OFFSET_REQUEST,
  offset,
});

export const deleteWordsOffsetAction = (id: number) => ({
  type: DELETE_WORDS_OFFSET,
  id,
});
