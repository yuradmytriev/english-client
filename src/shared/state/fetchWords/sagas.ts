import { call, put, takeEvery } from 'redux-saga/effects';
import { IWord } from 'shared/interfaces/IWord';
import { FETCH_WORDS_LIST_URL } from 'shared/constants/url';
import { fetchWordsAction, fetchWordsOffsetAction } from './actions';
import { FETCH_WORDS_REQUEST, FETCH_WORDS_OFFSET_REQUEST } from './types';

export function* fetchWords() {
  const response = yield call(() => fetch(FETCH_WORDS_LIST_URL));
  const words: Array<IWord> = yield response.json();

  yield put(fetchWordsAction(words));
}

export function* fetchWordsOffset({ offset }: { offset: number }) {
  const response = yield call(() =>
    fetch(`${FETCH_WORDS_LIST_URL}/offset/${offset}`),
  );
  const offsetWords: Array<IWord> = yield response.json();

  yield put(fetchWordsOffsetAction(offsetWords));
}

export function* watchWords() {
  yield takeEvery(FETCH_WORDS_REQUEST, fetchWords);
  yield takeEvery(FETCH_WORDS_OFFSET_REQUEST, fetchWordsOffset);
}
