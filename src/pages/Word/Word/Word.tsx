import React from 'react';
import { ifElse } from 'utils/ifElse';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'sdk/WordsSDK';
import * as S from '../styles';

export const Word = ({ id, word, isEditMode }) => {
  const onUpdate = (type: string, value: string, id: number): void => {
    const wordProps: Partial<IWord> = { [type]: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  const onChange = (value: string): void => onUpdate('word', value, id);

  return (
    <>
      <S.MainWordProperty>
        {ifElse(
          isEditMode,
          <S.Text editable={{ onChange }}>{word}</S.Text>,
          <span>{word}</span>,
        )}
      </S.MainWordProperty>
    </>
  );
};
