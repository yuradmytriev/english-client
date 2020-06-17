import { all } from 'redux-saga/effects';
import { watchWordsListFetching } from './fetchWordsList';
import { watchAddingNewWords } from 'modules/words/state/addNewWord';
import { categories } from 'modules/categories/state/categories/sagas';

export function* rootSaga() {
  yield all([watchWordsListFetching(), watchAddingNewWords(), categories()]);
}
