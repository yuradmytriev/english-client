import { useEffect, useState } from 'react';
import { ICategory } from 'interfaces/ICategory';
import { CategoriesSDK } from 'sdk/CategoriesSDK';

export const useFetchCategories = (): { categories: ICategory[] } => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    CategoriesSDK.fetch().then(setCategories);
  }, []);

  return { categories };
};
