import { call, put, takeEvery } from 'redux-saga/effects';
import { IWord } from 'shared/interfaces/IWord';
import { SERVER_URL } from 'shared/constants/url';
import { fetchWordsAction } from './actions';
import { FETCH_WORDS_REQUEST } from './types';

export function* fetchWords() {
  const response = yield call(() => fetch(`${SERVER_URL}/words`));
  const words: Array<IWord> = yield response.json();

  yield put(fetchWordsAction(words));
}

export function* watchWords() {
  yield takeEvery(FETCH_WORDS_REQUEST, fetchWords);
}
