import { FETCH_WORDS_OFFSET, FETCH_WORDS_OFFSET_REQUEST, DELETE_WORDS_OFFSET_REQUEST } from './types';

export const fetchWordsOffsetAction = words => ({
  type: FETCH_WORDS_OFFSET,
  words,
});

export const fetchWordsOffsetRequestAction = (offset: number) => ({
  type: FETCH_WORDS_OFFSET_REQUEST,
  offset,
});

export const deleteWordsOffsetRequestAction = (id: number) => ({
  type: DELETE_WORDS_OFFSET_REQUEST,
  id,
});
