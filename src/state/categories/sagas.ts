import { call, put, takeEvery } from 'redux-saga/effects';
import { CategoriesSDK } from 'sdk/CategoriesSDK';
import {
  REQUEST_CATEGORIES,
  UNLINK_CATEGORIES,
  LINK_CATEGORIES,
} from './types';
import { getCategoriesAction } from './actions';

function* fetchCategories() {
  const response = yield call(() => CategoriesSDK.fetch());

  yield put(getCategoriesAction(response));
}

function* unlinkCategories({ payload: { id, categoryId } }) {
  yield call(() => CategoriesSDK.unlinkWordFromCategory(id, categoryId));

  yield fetchCategories();
}

function* linkCategories({ payload: { id, categoryId } }) {
  yield call(() => CategoriesSDK.linkWordToCategory(id, categoryId));

  yield fetchCategories();
}

export function* categories() {
  yield takeEvery(REQUEST_CATEGORIES, fetchCategories);
  yield takeEvery(UNLINK_CATEGORIES, unlinkCategories);
  yield takeEvery(LINK_CATEGORIES, linkCategories);
}
