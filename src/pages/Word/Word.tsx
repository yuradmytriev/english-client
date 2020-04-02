import React, { useEffect, FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Suggestion } from 'components/Suggestion';
import { Video } from 'components/Video';
import { HighlightedPhrase } from 'components/HighlightedPhrase';
import { Navigation } from 'components/Navigation';
import { Frequency } from 'components/Frequency';
import { FETCH_WORD_URL } from '../../constants';
import { SERVER_URL } from '../../constants/url';
import * as S from './styles';

interface IWord {
  word: string;
  translate: string;
  definition?: string;
  context?: string;
  example?: string;
  synonym?: string;
  antonym?: string;
  imageSrc: string;
}

export const Word: FC = () => {
  const { id } = useParams();
  const [fetchedWord, setWord] = useState<IWord | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${FETCH_WORD_URL}/${id}`);
      const word: IWord = await response.json();

      setWord(word);
    })();
  }, []);

  if (!fetchedWord) {
    return null;
  }

  const {
    word,
    translate,
    definition,
    context,
    example,
    synonym,
    antonym,
    imageSrc,
  } = fetchedWord;

  return (
    <S.WordPage>
      <S.WordWrapper>
        <S.Image src={`${SERVER_URL}/image/${imageSrc}`} alt={word} />

        <S.WordProperty>
          <S.WordTitle>Word: </S.WordTitle>
          <span>{word}</span>
        </S.WordProperty>

        <S.WordProperty>
          <S.WordTitle>Translate: </S.WordTitle>
          <span>{translate}</span>
        </S.WordProperty>

        {definition && (
          <S.WordProperty>
            <S.WordTitle>Definition: </S.WordTitle>
            <span>{definition}</span>
          </S.WordProperty>
        )}

        {context && (
          <S.WordProperty>
            <S.WordTitle>Context: </S.WordTitle>
            <HighlightedPhrase phrase={context} word={word} />
          </S.WordProperty>
        )}

        {example && (
          <S.WordProperty>
            <S.WordTitle>Example: </S.WordTitle>
            <HighlightedPhrase phrase={example} word={word} />
          </S.WordProperty>
        )}

        {synonym && (
          <S.WordProperty>
            <Suggestion title="synonym" word={synonym} originalWord={word} />
          </S.WordProperty>
        )}

        {antonym && (
          <S.WordProperty>
            <Suggestion title="antonym" word={antonym} originalWord={word} />
          </S.WordProperty>
        )}

        <S.WordProperty>
          <S.WordTitle>Frequency: </S.WordTitle>
          <Frequency showTitle word={word} />
        </S.WordProperty>

        <Video word={word} />
      </S.WordWrapper>
      <Navigation />
    </S.WordPage>
  );
};
