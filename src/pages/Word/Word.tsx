import React, { useEffect, FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Video } from 'components/Video';
import { Frequency } from 'components/Frequency';
import { Navigation } from 'components/Navigation';
import { Suggestion } from 'components/Suggestion';
import { MoreExamples } from 'components/MoreExamples';
import { MoreDefinitions } from 'components/MoreDefinitions';
import { WordPronunciation } from 'components/WordPronunciation';
import { HighlightedPhrase } from 'components/HighlightedPhrase';
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
        <S.ImageWithFrequency>
          <S.Image src={`${SERVER_URL}/image/${imageSrc}`} alt={word} />
          <S.FrequencyWrapper>
            <Frequency showTitle word={word} />
          </S.FrequencyWrapper>
        </S.ImageWithFrequency>

        <S.MainWordProperty>
          <span>{word}</span>
          <WordPronunciation word={word} />
        </S.MainWordProperty>

        <S.TranslateProperty>
          <span>{translate}</span>
        </S.TranslateProperty>

        {definition && (
          <S.WordProperty>
            <S.WordTitle>Definition: </S.WordTitle>
            <span>{definition}</span>
            <div>
              <MoreDefinitions definition={definition} />
            </div>
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
            <div>
              <MoreExamples example={example} />
            </div>
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

        <Video word={word} />
      </S.WordWrapper>
      <Navigation />
    </S.WordPage>
  );
};
