import { FETCH_CATEGORIES } from './types';

export const fetchCategoriesReducer = (state: any, action: any) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};
