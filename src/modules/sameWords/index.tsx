import React from 'react';
import { Modal } from 'antd';
import { IWord } from 'shared/interfaces/IWord';
import { SERVER_URL } from 'shared/constants/url';
import * as S from './styles';

const { confirm } = Modal;

export const fetchSameWords = async (value): Promise<IWord[]> => {
  const checkWordURL: string = `${SERVER_URL}/word/find/${value}`;
  const response = await fetch(checkWordURL);

  return response.json();
};

const SameWords = ({ sameWords, history }) => (
  <>
    <p>These words already exist:</p>
    {sameWords.map(({ word }) => (
      <S.Link key={word} onClick={() => history.push(`/word/${word}`)}>
        {word}
      </S.Link>
    ))}
  </>
);

export const showSameWordsModal = async (sameWords, history) => {
  confirm({
    title: <SameWords history={history} sameWords={sameWords} />,
  });
};
