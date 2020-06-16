import React from 'react';
import { IWord } from 'interfaces/IWord';
import { ifElse } from 'utils/ifElse';
import { HighlightedPhrase } from 'components/HighlightedPhrase';
import { WordsSDK } from 'sdk/WordsSDK';
import * as S from '../styles';

export const Context = ({ id, context, word, isEditMode }) => {
  if (!context) {
    return null;
  }

  const onUpdate = (type: string, value: string, id: number): void => {
    const wordProps: Partial<IWord> = { [type]: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  const onChange = (value: string): void => onUpdate('context', value, id);

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
