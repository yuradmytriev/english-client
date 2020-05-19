import React, { FC } from 'react';
import { Tag } from 'antd';
import isEmpty from 'lodash/isEmpty';
import { firstLetterToUpperCase } from 'utils/firstLetterToUpperCase';
import { WordsSDK } from 'sdk/WordsSDK';
import { ISuggestion } from './ISuggestion';
import { useFetchRapidWord } from './useFetchRapidWord';
import { useToggle } from 'hooks/useToggle';
import { ifElse } from 'utils/ifElse';
import * as S from './styles';

const { CheckableTag } = Tag;

const SuggestionsList: FC<{ words: ReadonlyArray<string> }> = ({
  words,
}): JSX.Element | null => {
  if (isEmpty(words)) {
    return null;
  }

  return (
    <div>
      {words.map(word => (
        <CheckableTag checked key={word}>
          {word}
        </CheckableTag>
      ))}
    </div>
  );
};

export const Suggestion: FC<ISuggestion> = ({
  id,
  type,
  word,
  originalWord,
  isEditMode,
}): JSX.Element | null => {
  const { visible, toggleVisible } = useToggle();
  const [synonyms] = useFetchRapidWord({
    type,
    word,
    originalWord,
  });

  if (!word) {
    return null;
  }

  const onUpdate = (value: string): void => {
    const body: string = JSON.stringify({ [type]: value });

    WordsSDK.updateJSON({ wordId: id, body });
  };

  const toggleSuggestions = (): void => toggleVisible(prev => !prev);

  const areSynonymsExist: boolean = Boolean(synonyms?.length);

  return (
    <div>
      <S.WordLabel title={firstLetterToUpperCase(type)}>
        {ifElse(
          isEditMode,
          <S.Text editable={{ onChange: onUpdate }}>{word}</S.Text>,
          <span>{word}</span>,
        )}
      </S.WordLabel>
      {areSynonymsExist && (
        <S.MoreSynonymsButton type="primary" onClick={toggleSuggestions}>
          See more
        </S.MoreSynonymsButton>
      )}
      {visible && areSynonymsExist && <SuggestionsList words={synonyms} />}
    </div>
  );
};
