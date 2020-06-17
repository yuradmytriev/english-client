import React from 'react';
import * as S from './styles';

export const LearnedWordsCount = ({ words }) => {
  const learnedWordsCount = words.filter(word => word.learned).length;

  return (
    <S.LearnedWords>{`Learned Words: ${learnedWordsCount}`}</S.LearnedWords>
  );
};
