import { Modal } from 'antd';
import { IWord } from 'shared/interfaces/IWord';
import { SERVER_URL } from 'shared/constants/url';
import { jsonFetch } from 'shared/utils/jsonFetch';

const { confirm } = Modal;

export const fetchSimilarWords = (word: string): Promise<IWord[]> => {
  const similarWordsURL: string = `${SERVER_URL}/word/similar/${word}`;

  return jsonFetch(similarWordsURL);
};

export const showSimilarWordsModal = async (similarWords, history) => {
  if (similarWords.length) {
    confirm({
      title: `You have similar words - ${similarWords
        .map(({ word }) => word)
        .join(', ')}`,
      onOk() {
        history.push(`word/${similarWord.word}`);
      },
    });

    return;
  }

  const [similarWord] = similarWords;

  confirm({
    title: `You have a similar word - ${similarWord}`,
    onOk() {
      history.push(`word/${similarWord.word}`);
    },
  });
};
