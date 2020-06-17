import React from 'react';
import { ifElse } from 'shared/utils/ifElse';
import { IWord } from 'shared/interfaces/IWord';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import * as S from '../../page/styles';

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
