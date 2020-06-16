import { all } from 'redux-saga/effects';
import { watchWordsListFetching } from './fetchWordsList';
import { watchAddingNewWords } from './addNewWord';
import { categories } from './categories/sagas';

export function* rootSaga() {
  yield all([
    watchWordsListFetching(),
    watchAddingNewWords(),
    categories(),
  ]);
}
