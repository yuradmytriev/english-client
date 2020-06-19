import React from 'react';
import { SERVER_URL } from 'shared/constants/url';
import { useFetchToState } from 'shared/hooks/useFetchToState';
import * as S from './styles';

export const WordsCount = () => {
  const [words] = useFetchToState(`${SERVER_URL}/words/count`);

  return <S.LearnedWords>{`Words: ${words}`}</S.LearnedWords>;
};
