import React from 'react';
import { SERVER_URL } from 'shared/constants/url';
import { useFetchToState } from 'shared/hooks/useFetchToState';
import * as S from './styles';

export const LearnedWordsCount = () => {
  const [words] = useFetchToState(`${SERVER_URL}/words/count/learned`);

  return <S.LearnedWords>{`Learned Words: ${words}`}</S.LearnedWords>;
};
