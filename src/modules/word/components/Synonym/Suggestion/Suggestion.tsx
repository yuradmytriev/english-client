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

const EditMode = ({ id, word, type }) => {
  const onChange = (value: string): void => {
    const wordProps: Partial<IWord> = { synonym: value.target.textContent };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  return (
    <S.WordLabel title={firstLetterToUpperCase(type)}>
      <S.Text contentEditable onInput={onChange}>
        {word}
      </S.Text>
    </S.WordLabel>
  );
};

const ViewMode = ({ word, type }) =>
  word ? (
    <S.WordLabel title={firstLetterToUpperCase(type)}>
      <span>{word}</span>
    </S.WordLabel>
  ) : null;

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

  const toggleSuggestions = (): void => toggleVisible(prev => !prev);

  const areSynonymsExist: boolean = Boolean(synonyms?.length);

  return (
    <div>
      {isEditMode ? (
        <EditMode id={id} word={word} type={type} />
      ) : (
        <ViewMode word={word} type={type} />
      )}
      {areSynonymsExist && (
        <S.MoreSynonymsButton type="primary" onClick={toggleSuggestions}>
          See more
        </S.MoreSynonymsButton>
      )}
      {visible && areSynonymsExist && <SuggestionsList words={synonyms} />}
    </div>
  );
};
