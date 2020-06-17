import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'shared/interfaces/IState';
import {
  unlinkCategoriesAction,
  requestCategoriesAction,
  linkCategoriesAction,
} from './actions';

export const useFetchCategories = () => {
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

  return { categories, fetchCategories, unlinkCategories, linkCategories };
};
