import { FETCH_CATEGORIES, UNLINK_CATEGORIES } from './types';

export const fetchCategoriesAction = (categories: any) => ({
  type: FETCH_CATEGORIES,
  categories,
});

export const unlinkCategoriesAction = () => ({
  type: UNLINK_CATEGORIES,
});
