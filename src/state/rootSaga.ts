import { all } from 'redux-saga/effects';

import { watchWordsListFetching } from './fetchWordsList';
import { watchAddingNewWords } from './addNewWord';
import { watchWordFetching } from './fetchWord';

export function* rootSaga() {
  yield all([watchWordsListFetching(), watchAddingNewWords(), watchWordFetching()]);
}
