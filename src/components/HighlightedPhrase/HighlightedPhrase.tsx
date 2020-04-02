import React, { FC } from 'react';
import * as S from './styles';

interface HighlightedPhraseProps {
  word: string;
  phrase: string;
}

export const HighlightedPhrase: FC<HighlightedPhraseProps> = ({
  word,
  phrase,
}) => (
  <S.HighlightedPhrase
    dangerouslySetInnerHTML={{
      __html: phrase.replace(word, `<span>${word}</span>`),
    }}
  />
);
