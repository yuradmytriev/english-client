import { call, put, takeEvery } from 'redux-saga/effects';
import { IWord } from 'components/Word/IWord';

import { FETCH_WORDS_LIST_URL } from '../../constants';

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
