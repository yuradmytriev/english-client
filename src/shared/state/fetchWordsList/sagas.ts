import { call, put, takeEvery } from 'redux-saga/effects';
import { IWord } from 'shared/interfaces/IWord';
import { FETCH_WORDS_LIST_URL } from 'shared/constants/url';
import { fetchWordsListAction } from './actions';
import { FIRE_FETCH_WORDS_LIST } from './types';

export function* fetchWordsList() {
  const response = yield call(() => fetch(FETCH_WORDS_LIST_URL));
  const words: Array<IWord> = yield response.json();

  yield put(fetchWordsListAction(words));
}

export function* watchWordsListFetching() {
  yield takeEvery(FIRE_FETCH_WORDS_LIST, fetchWordsList);
}