import React from 'react';
import { ifElse } from 'utils/ifElse';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'sdk/WordsSDK';
import * as S from '../styles';

export const Translate = ({ id, translate, isEditMode }) => {
  const onUpdate = (type: string, value: string, id: number): void => {
    const wordProps: Partial<IWord> = { [type]: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  const onChange = (value: string): void => onUpdate('translate', value, id);

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
