import { call, put, takeEvery } from 'redux-saga/effects';
import { CategoriesSDK } from 'modules/categories/sdk/CategoriesSDK';
import {
  DELETE_CATEGORY,
  CREATE_CATEGORY,
  LINK_CATEGORIES,
  UNLINK_CATEGORIES,
  REQUEST_CATEGORIES,
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

function* createCategory({ name }) {
  yield call(() => CategoriesSDK.create(name));

  yield fetchCategories();
}

function* deleteCategory({ id }) {
  yield call(() => CategoriesSDK.delete(id));

  yield fetchCategories();
}

export function* categories() {
  yield takeEvery(LINK_CATEGORIES, linkCategories);
  yield takeEvery(CREATE_CATEGORY, createCategory);
  yield takeEvery(DELETE_CATEGORY, deleteCategory);
  yield takeEvery(REQUEST_CATEGORIES, fetchCategories);
  yield takeEvery(UNLINK_CATEGORIES, unlinkCategories);
}
