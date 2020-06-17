import {
  REQUEST_CATEGORIES,
  GET_CATEGORIES,
  UNLINK_CATEGORIES,
  LINK_CATEGORIES,
} from './types';

export const getCategoriesAction = (categories: any) => ({
  type: GET_CATEGORIES,
  categories,
});

export const unlinkCategoriesAction = payload => ({
  type: UNLINK_CATEGORIES,
  payload,
});

export const linkCategoriesAction = payload => ({
  type: LINK_CATEGORIES,
  payload,
});

export const requestCategoriesAction = () => ({
  type: REQUEST_CATEGORIES,
});
