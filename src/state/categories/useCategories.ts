import { useDispatch, useSelector } from 'react-redux';
import { CategoriesSDK } from 'sdk/CategoriesSDK';
import { fetchCategoriesAction, unlinkCategoriesAction } from './actions';

export const useFetchCategories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state: any) => state.categories);

  const fetchCategories = (): void => {
    CategoriesSDK.fetch().then(data => {
      dispatch(fetchCategoriesAction(data));
    });
  };

  const unlinkCategories = (id, categoryId) => {
    return CategoriesSDK.unlinkWordFromCategory(id, categoryId).then(() => {
      dispatch(unlinkCategoriesAction());
    });
  };

  return { fetchCategories, categories, unlinkCategories };
};
