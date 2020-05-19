import { message } from 'antd';
import { FETCH_WORDS_LIST_URL } from '../constants';

const ERROR: { UPLOAD_IMAGE: string } = {
  UPLOAD_IMAGE: `Can't upload image`,
};

export class WordsSDK {
  static update({ wordId, body }: { wordId: number; body: FormData }): void {
    const updateWordsURL: string = `${FETCH_WORDS_LIST_URL}/${wordId}`;

    fetch(updateWordsURL, {
      body,
      method: 'PUT',
    })
      .then(data => data.json())
      .then(res => {
        if (res.id) {
          message.success('Image updated successfully');
        }

        return res;
      })
      .catch(() => {
        message.error(ERROR.UPLOAD_IMAGE);
      });
  }

  static updateJSON({ wordId, body }: { wordId: number; body: string }): void {
    const updateWordsURL: string = `${FETCH_WORDS_LIST_URL}/${wordId}`;

    fetch(updateWordsURL, {
      body,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => data.json())
      .then(res => {
        if (res.id) {
          message.success('Updated successfully');
        }

        return res;
      })
      .catch(() => {
        message.error(ERROR.UPLOAD_IMAGE);
      });
  }
}
