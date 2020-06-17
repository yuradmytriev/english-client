import { jsonFetch } from 'shared/utils/jsonFetch';

const categoriesURL: string = 'http://localhost:3008/categories';
const wordCategoryURL = (categoryId: string): string =>
  `http://localhost:3008/words/category/${categoryId}`;
const postConfig: object = {
  method: 'post',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

export class CategoriesSDK {
  static fetch() {
    return jsonFetch(categoriesURL);
  }

  static create(name: string) {
    return fetch(categoriesURL, {
      ...postConfig,
      body: JSON.stringify({ name }),
    });
  }

  static delete(id: number) {
    return fetch(`${categoriesURL}/${id}`, {
      method: 'delete',
    });
  }

  static linkWordToCategory(id: string, categoryId: string) {
    return fetch(wordCategoryURL(categoryId), {
      ...postConfig,
      body: JSON.stringify({ id }),
    });
  }

  static unlinkWordFromCategory(id: string, categoryId: string) {
    return fetch(wordCategoryURL(categoryId), {
      ...postConfig,
      method: 'delete',
      body: JSON.stringify({ id }),
    });
  }
}
