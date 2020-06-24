import React, { memo, FC } from 'react';
import * as S from './styles';

export const WordsCount: FC<{ words: any }> = memo(({ words }) => {
  return <S.LearnedWords>{`Words: ${words}`}</S.LearnedWords>;
});
