import React from 'react';
import { ifElse } from 'utils/ifElse';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'sdk/WordsSDK';
import { useEditMode } from 'state/editMode/useEditMode';
import * as S from '../styles';

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
