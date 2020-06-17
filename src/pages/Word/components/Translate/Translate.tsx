import React from 'react';
import { ifElse } from 'utils/ifElse';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import { useEditMode } from 'state/editMode/useEditMode';
import * as S from '../../styles';

export const Translate = ({ id, translate }) => {
  const { isEditMode } = useEditMode();

  const onChange = (value: string): void => {
    const wordProps: Partial<IWord> = { translate: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  return (
    <S.TranslateProperty>
      {ifElse(
        isEditMode,
        <S.Text editable={{ onChange }}>{translate}</S.Text>,
        <span>{translate}</span>,
      )}
    </S.TranslateProperty>
  );
};
