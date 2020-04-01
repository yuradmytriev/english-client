import { call, put, takeEvery } from 'redux-saga/effects';
import { IWord } from 'components/Word/IWord';

import { FETCH_WORD_URL } from '../../constants';

import { fetchWordAction } from './actions';
import { START_WORD_FETCHING } from './types';

export function* fetchWord(action: any) {
  const { id } = action;
  const response = yield call(() => fetch(`${FETCH_WORD_URL}/${id}`));
  const word: IWord = yield response.json();

  yield put(fetchWordAction(word));
}

export function* watchWordFetching() {
  yield takeEvery(START_WORD_FETCHING, fetchWord);
}
