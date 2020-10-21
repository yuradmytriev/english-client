import React from 'react';
import { Modal } from 'antd';
import { IWord } from 'shared/interfaces/IWord';
import { SERVER_URL } from 'shared/constants/url';
import { jsonFetch } from 'shared/utils/jsonFetch';
import * as S from './styles';

const { confirm } = Modal;

export const fetchSimilarWords = (word: string): Promise<IWord[]> => {
  const similarWordsURL: string = `${SERVER_URL}/word/similar/${word}`;

  return jsonFetch(similarWordsURL);
};

const SimilarWords = ({ similarWords, history }) => (
  <>
    <p>You have a similar words:</p>
    {similarWords.map(({ word }) => (
      <S.Link key={word} onClick={() => history.push(`/word/${word}`)}>
        {word}
      </S.Link>
    ))}
  </>
);

export const showSimilarWordsModal = async (similarWords, history) => {
  if (similarWords.length) {
    confirm({
      centered: true,
      title: <SimilarWords history={history} similarWords={similarWords} />,
    });
  } else {
    confirm({
      centered: true,
      title: `You have a similar word - ${similarWords[0]}`,
      onOk() {
        history.push(`/word/${similarWord.word}`);
      },
    });
  }
};
