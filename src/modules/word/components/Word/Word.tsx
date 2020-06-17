import React from 'react';
import { ifElse } from 'shared/utils/ifElse';
import { IWord } from 'shared/interfaces/IWord';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import * as S from '../../page/styles';

export const Word = ({ id, word }) => {
  const { isEditMode } = useEditMode();

  const onChange = (value: string): void => {
    const wordProps: Partial<IWord> = { word: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  return (
    <S.MainWordProperty>
      {ifElse(
        isEditMode,
        <S.Text editable={{ onChange }}>{word}</S.Text>,
        <span>{word}</span>,
      )}
    </S.MainWordProperty>
  );
};
