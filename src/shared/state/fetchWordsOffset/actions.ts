import { IWord } from 'shared/interfaces/IWord';
import {
  FETCH_WORDS_OFFSET,
  DELETE_WORDS_OFFSET,
  APPEND_WORD_TO_LIST,
  FETCH_WORDS_OFFSET_REQUEST,
} from './types';

export interface IWordsOffsetAction {
  type: string;
  offset: number;
  order: string;
}

export const fetchWordsOffsetAction = (words: IWord[]) => ({
  type: FETCH_WORDS_OFFSET,
  words,
});

export const fetchWordsOffsetRequestAction = ({
  offset,
  order,
}): IWordsOffsetAction => ({
  type: FETCH_WORDS_OFFSET_REQUEST,
  offset,
  order,
});

export const deleteWordsOffsetAction = (id: number) => ({
  type: DELETE_WORDS_OFFSET,
  id,
});

export const appendWordToListAction = word => ({
  type: APPEND_WORD_TO_LIST,
  word,
});
