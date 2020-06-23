import { message } from 'antd';
import { IWord } from 'shared/interfaces/IWord';
import { SERVER_URL } from 'shared/constants/url';

const ERROR: { UPLOAD_IMAGE: string } = {
  UPLOAD_IMAGE: `Can't upload image`,
};

const createWordsURL = (id: number) => `${SERVER_URL}/words/${id}`;

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
  }): Promise<IWord> {
    const body: string = JSON.stringify(wordProps);

    return fetch(createWordsURL(wordId), {
      body,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => data.json())
      .then(res => res)
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
