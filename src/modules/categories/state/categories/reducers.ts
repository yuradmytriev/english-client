import { GET_CATEGORIES } from './types';

export const fetchCategoriesReducer = (
  stateCategories: Array<any>,
  { type, categories },
) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case GET_CATEGORIES:
      return categories;
    default:
      return stateCategories;
  }
};
