import {
  GET_CATEGORIES,
  LINK_CATEGORIES,
  DELETE_CATEGORY,
  CREATE_CATEGORY,
  UNLINK_CATEGORIES,
  REQUEST_CATEGORIES,
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

export const createCategoryAction = name => ({
  type: CREATE_CATEGORY,
  name,
});

export const deleteCategoryAction = id => ({
  type: DELETE_CATEGORY,
  id,
});
