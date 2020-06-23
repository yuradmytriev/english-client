import { call, put, takeEvery } from 'redux-saga/effects';
import { SERVER_URL } from 'shared/constants/url';
import { fetchWordsOffsetAction } from './actions';
import { FETCH_WORDS_OFFSET_REQUEST } from './types';

export function* fetchWordsOffset({ offset }: { offset: number }) {
  const response = yield call(() =>
    fetch(`${SERVER_URL}/words/offset/${offset}`),
  );
  const words = yield response.json();
  yield put(fetchWordsOffsetAction(words.data));
}

export function* watchWordsOffset() {
  yield takeEvery(FETCH_WORDS_OFFSET_REQUEST, fetchWordsOffset);
}
