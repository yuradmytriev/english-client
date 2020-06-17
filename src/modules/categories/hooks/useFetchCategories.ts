import { useEffect, useState } from 'react';
import { ICategory } from 'interfaces/ICategory';
import { CategoriesSDK } from 'modules/categories/sdk/CategoriesSDK';

export const useFetchCategories = (): { categories: ICategory[] } => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    CategoriesSDK.fetch().then(setCategories);
  }, []);

  return { categories };
};
