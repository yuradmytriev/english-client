import React from 'react';
import * as S from './styles';

export const HighlightedPhrase = ({ phrase, word }) => {
  return (
    <S.HighlightedPhrase
      dangerouslySetInnerHTML={{
        __html: phrase.replace(word, `<span>${word}</span>`),
      }}
    />
  );
};
