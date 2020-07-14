import React from 'react';
import { HighlightedPhrase } from 'shared/components/HighlightedPhrase';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import { IWord } from 'shared/interfaces/IWord';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import * as S from '../../page/styles';

const EditMode = ({ id, context }) => {
  const onChange = (value: string): void => {
    const wordProps: Partial<IWord> = { context: value.target.textContent };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  return (
    <S.WordProperty>
      <S.WordLabel title="Context">
        <S.Text contentEditable onInput={onChange}>
          {context}
        </S.Text>
      </S.WordLabel>
    </S.WordProperty>
  );
};

const ViewMode = ({ word, context }) =>
  context ? (
    <S.WordProperty>
      <S.WordLabel title="Context">
        <HighlightedPhrase phrase={context} word={word} />
      </S.WordLabel>
    </S.WordProperty>
  ) : null;

export const Context = ({ id, context, word }) => {
  const { isEditMode } = useEditMode();

  return isEditMode ? (
    <EditMode id={id} context={context} />
  ) : (
    <ViewMode word={word} context={context} />
  );
};
