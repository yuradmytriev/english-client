import { jsonFetch } from 'utils/jsonFetch';

const categoriesURL: string = 'http://localhost:3008/categories';
const wordCategoryURL = (categoryId: string): string =>
  `http://localhost:3008/words/category/${categoryId}`;

export class CategoriesSDK {
  static fetch() {
    return jsonFetch(categoriesURL);
  }

  static linkWordToCategory(id: string, categoryId: string) {
    fetch(wordCategoryURL(categoryId), {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ id }),
    });
  }

  static unlinkWordFromCategory(id: string, categoryId: string) {
    fetch(wordCategoryURL(categoryId), {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ id }),
    });
  }
}
