import React from 'react';
import * as S from './styles';

export const WordsCount = ({ words }) => (
  <S.LearnedWords>{`Words: ${words.length}`}</S.LearnedWords>
);
