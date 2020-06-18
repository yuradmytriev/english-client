import { all } from 'redux-saga/effects';
import { watchWords } from './fetchWords';
import { watchAddingNewWords } from 'modules/words/state/addNewWord';
import { categories } from 'modules/categories/state/categories/sagas';

export function* rootSaga() {
  yield all([watchWords(), watchAddingNewWords(), categories()]);
}
