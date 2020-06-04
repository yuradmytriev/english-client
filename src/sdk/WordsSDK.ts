import { message } from 'antd';
import { IWord } from 'interfaces/IWord';
import { FETCH_WORDS_LIST_URL } from '../constants';

const ERROR: { UPLOAD_IMAGE: string } = {
  UPLOAD_IMAGE: `Can't upload image`,
};

const createWordsURL = (id: number) => `${FETCH_WORDS_LIST_URL}/${id}`;

export class WordsSDK {
  static update({ wordId, body }: { wordId: number; body: FormData }): void {
    fetch(createWordsURL(wordId), {
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

  static updateJSON({
    wordId,
    wordProps,
  }: {
    wordId: number;
    wordProps: Partial<IWord>;
  }): void {
    const body: string = JSON.stringify(wordProps);

    fetch(createWordsURL(wordId), {
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

  static async delete(id: number) {
    const response = await fetch(createWordsURL(id), {
      method: 'DELETE',
    });

    return response.json();
  }
}
