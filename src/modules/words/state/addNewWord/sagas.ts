import { takeEvery } from 'redux-saga/effects';
import { ADD_NEW_WORD } from './types';

export function* addNewWord(values: any) {
  yield false;
}

export function* watchAddingNewWords() {
  yield takeEvery(ADD_NEW_WORD, addNewWord);
}
