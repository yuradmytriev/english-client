import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import { Tag } from 'antd';
import pluralize from 'pluralize';
import { fetchWordFromRapid } from 'utils/wordsApiFetch';
import * as S from './styles';

const { CheckableTag } = Tag;

const SuggestionsList: React.FC<{ words: Array<string> }> = ({ words }): any =>
  !isEmpty(words) && (
    <div>
      {words.map(word => (
        <CheckableTag checked key={word}>
          {word}
        </CheckableTag>
      ))}
    </div>
  );

export const Suggestion: React.FC<{
  title: string;
  word: string;
  originalWord: string;
}> = ({ title, word, originalWord }) => {
  const [synonyms, setWord] = useState([]);

  const handleClick = async () => {
    const data = await fetchWordFromRapid(
      pluralize(title),
      word || originalWord,
    );

    setWord(data[pluralize(title)]);
  };

  return word ? (
    <div>
      <S.WordTitle>Word: </S.WordTitle>
      <span>{word}</span>
      <S.MoreSynonymsButton type="primary" size="small" onClick={handleClick}>
        See more
      </S.MoreSynonymsButton>
      <SuggestionsList words={synonyms} />
    </div>
  ) : null;
};
