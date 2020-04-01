import React, { useEffect, FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Suggestion } from 'components/Suggestion';
import { Video } from 'components/Video';
import { HighlightedPhrase } from 'components/HighlightedPhrase';
import * as S from './styles';
import { SERVER_URL } from '../../constants/url';
import { Navigation } from 'components/Navigation';
import { FETCH_WORD_URL } from '../../constants';
import { fetchWordFromRapid } from '../../utils/wordsApiFetch';

const checkFrequency = frequency => {
  const number = Math.ceil(frequency);
  const is = {
    1: {
      color: '#880000',
      title: 'very rare',
    },
    2: {
      color: '#ff0202',
      title: 'rare',
    },
    3: {
      color: '#f97777',
      title: 'seldom',
    },
    4: {
      color: '#abc0f3',
      title: 'sometimes',
    },
    5: {
      color: '#6693ff',
      title: 'regular',
    },
    6: {
      color: '#054eff',
      title: 'often',
    },
    7: {
      color: '#002b94',
      title: 'frequently',
    },
  };

  return is[number];
};

export const Word: FC = () => {
  const { id } = useParams();
  const [fetchedWord, setWord] = useState({});
  const [wordFrequency, setWordFrequency] = useState({});
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

  useEffect(() => {
    (async () => {
      const response = await fetch(`${FETCH_WORD_URL}/${id}`);
      const word = await response.json();
      setWord(word);
      const {
        frequency: { zipf },
      } = await fetchWordFromRapid('frequency', word.word);

      const data = checkFrequency(zipf);
      setWordFrequency(data);
    })();
  }, []);

  return word ? (
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

        <S.WordProperty>
          <S.WordTitle>Definition: </S.WordTitle>
          <span>{definition}</span>
        </S.WordProperty>

        <S.WordProperty>
          <S.WordTitle>Context: </S.WordTitle>
          <HighlightedPhrase phrase={context} word={word} />
        </S.WordProperty>

        <S.WordProperty>
          <S.WordTitle>Example: </S.WordTitle>
          <HighlightedPhrase phrase={example} word={word} />
        </S.WordProperty>

        <S.WordProperty>
          <Suggestion title="synonym" word={synonym} originalWord={word} />
        </S.WordProperty>

        <S.WordProperty>
          <Suggestion title="antonym" word={antonym} originalWord={word} />
        </S.WordProperty>

        <S.WordProperty>
          <S.WordTitle>Frequency: </S.WordTitle>
          <span>{wordFrequency.title}</span>
          <S.Color color={wordFrequency.color} />
        </S.WordProperty>

        <Video word={word} />
      </S.WordWrapper>
      <Navigation />
    </S.WordPage>
  ) : null;
};
