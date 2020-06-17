import React from 'react';
import { HighlightedPhrase } from 'components/HighlightedPhrase';
import { ifElse } from 'utils/ifElse';
import { WordsSDK } from 'sdk/WordsSDK';
import { IWord } from 'interfaces/IWord';
import { useEditMode } from 'state/editMode/useEditMode';
import * as S from '../styles';

export const Context = ({ id, context, word }) => {
  const { isEditMode } = useEditMode();

  const onChange = (value: string): void => {
    const wordProps: Partial<IWord> = { context: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  return (
    <S.WordProperty>
      <S.WordLabel title="Context">
        {ifElse(
          isEditMode,
          <S.Text editable={{ onChange }}>{context}</S.Text>,
          <HighlightedPhrase phrase={context} word={word} />,
        )}
      </S.WordLabel>
    </S.WordProperty>
  );
};
