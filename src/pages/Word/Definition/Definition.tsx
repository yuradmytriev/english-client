import React from 'react';
import { MoreDefinitions } from 'components/MoreDefinitions';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'sdk/WordsSDK';
import { ifElse } from 'utils/ifElse';
import * as S from '../styles';

export const Definition = ({ id, word, definition, isEditMode }) => {
  if (!definition) {
    return null;
  }

  const onUpdate = (type: string, value: string, id: number): void => {
    const wordProps: Partial<IWord> = { [type]: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  const onChange = (value: string) => onUpdate('definition', value, id);

  return (
    <S.WordProperty>
      <S.WordLabel title="Definition">
        {ifElse(
          isEditMode,
          <S.Text editable={{ onChange }}>{definition}</S.Text>,
          <span>{definition}</span>,
        )}
      </S.WordLabel>
      <S.MoreExamplesWrapper>
        <MoreDefinitions word={word} />
      </S.MoreExamplesWrapper>
    </S.WordProperty>
  );
};
