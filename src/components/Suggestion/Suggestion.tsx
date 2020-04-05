import React, { useEffect, useState, FC } from 'react';
import isEmpty from 'lodash/isEmpty';
import { Tag } from 'antd';
import pluralize from 'pluralize';
import { firstLetterToUpperCase } from 'utils/firstLetterToUpperCase';
import { fetchWordFromRapid } from 'utils/wordsApiFetch';
import * as S from './styles';
import { useToggle } from '../../hooks';
import { FETCH_WORDS_LIST_URL } from '../../constants';
import { useParams } from 'react-router-dom';

const { CheckableTag } = Tag;

const SuggestionsList: FC<{ words: Array<string> }> = ({ words }): any =>
  !isEmpty(words) && (
    <div>
      {words.map(word => (
        <CheckableTag checked key={word}>
          {word}
        </CheckableTag>
      ))}
    </div>
  );

export const Suggestion: FC<{
  title: string;
  word: string;
  originalWord: string;
  isEditMode: boolean;
}> = ({ title, word, originalWord, isEditMode }) => {
  const { id } = useParams();
  const [synonyms, setWord] = useState([]);
  const { visible, toggleVisible } = useToggle();

  const handleClick = async () => {
    toggleVisible(prev => !prev);
  };

  useEffect(() => {
    (async () => {
      const data = await fetchWordFromRapid(
        pluralize(title),
        word || originalWord,
      );

      setWord(data[pluralize(title)]);
    })();
  }, []);

  const onUpdate = async (type: string, value: string) => {
    await fetch(`${FETCH_WORDS_LIST_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ [type]: value }),
    });
  };

  return word ? (
    <div>
      <S.WordLabel title={firstLetterToUpperCase(title)}>
        {isEditMode ? (
          <S.Text
            editable={{ onChange: (value: string) => onUpdate(title, value) }}
          >
            {word}
          </S.Text>
        ) : (
          <span>{word}</span>
        )}
      </S.WordLabel>
      {synonyms && Boolean(synonyms.length) && (
        <S.MoreSynonymsButton type="primary" onClick={handleClick}>
          See more
        </S.MoreSynonymsButton>
      )}
      {visible && synonyms && Boolean(synonyms.length) && (
        <SuggestionsList words={synonyms} />
      )}
    </div>
  ) : null;
};
