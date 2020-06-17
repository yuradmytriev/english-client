import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'shared/interfaces/IState';
import {
  deleteCategoryAction,
  createCategoryAction,
  linkCategoriesAction,
  unlinkCategoriesAction,
  requestCategoriesAction,
} from './actions';

export const useCategories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state: IState) => state.categories);

  const fetchCategories = (): void => {
    dispatch(requestCategoriesAction());
  };

  const unlinkCategories = (id, categoryId): void => {
    dispatch(unlinkCategoriesAction({ id, categoryId }));
  };

  const linkCategories = (id, categoryId): void => {
    dispatch(linkCategoriesAction({ id, categoryId }));
  };

  const createCategory = (name: string): void => {
    dispatch(createCategoryAction(name));
  };

  const deleteCategory = (id: number): void => {
    dispatch(deleteCategoryAction(id));
  };

  return {
    categories,
    deleteCategory,
    linkCategories,
    createCategory,
    fetchCategories,
    unlinkCategories,
  };
};
