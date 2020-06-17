import React, { FC } from 'react';
import { Tag } from 'antd';
import isEmpty from 'lodash/isEmpty';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import { IWord } from 'shared/interfaces/IWord';
import { useToggleModal } from 'shared/hooks';
import { ifElse } from 'shared/utils/ifElse';
import { firstLetterToUpperCase } from 'shared/utils/firstLetterToUpperCase';
import { ISuggestion } from './ISuggestion';
import { useFetchRapidWord } from './useFetchRapidWord';
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
  const { visible, toggleVisible } = useToggleModal();
  const [synonyms] = useFetchRapidWord({
    type,
    word,
    originalWord,
  });

  if (!word) {
    return null;
  }

  const onUpdate = (value: string): void => {
    const wordProps: Partial<IWord> = { [type]: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
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
