import { takeEvery } from 'redux-saga/effects';

import { ADD_NEW_WORD } from './types';


export function* addNewWord(values: any) {
	yield console.log('addNewWord')
}

export function* watchAddingNewWords() {
	yield takeEvery(ADD_NEW_WORD, addNewWord);
}
