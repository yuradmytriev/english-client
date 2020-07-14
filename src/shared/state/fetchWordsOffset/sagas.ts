import { call, put, takeEvery } from 'redux-saga/effects';
import { SERVER_URL } from 'shared/constants/url';
import { IWord } from 'shared/interfaces/IWord';
import { fetchWordsOffsetAction, IWordsOffsetAction } from './actions';
import { FETCH_WORDS_OFFSET_REQUEST } from './types';

interface IWordsOffset {
  data: IWord[];
  total: number;
}

export function* fetchWordsOffset({ offset }: IWordsOffsetAction) {
  const offsetWordsURL = `${SERVER_URL}/words/offset/${offset}`;

  const response = yield call(() => fetch(offsetWordsURL));
  const { data, total }: IWordsOffset = yield response.json();

  yield put(fetchWordsOffsetAction(data));
}

export function* watchWordsOffset() {
  yield takeEvery(FETCH_WORDS_OFFSET_REQUEST, fetchWordsOffset);
}
