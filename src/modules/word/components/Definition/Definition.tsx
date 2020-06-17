import React from 'react';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import { ifElse } from 'utils/ifElse';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import { MoreDefinitions } from './MoreDefinitions';
import * as S from '../../page/styles';

export const Definition = ({ id, word, definition }) => {
  const { isEditMode } = useEditMode();

  const onChange = (value: string) => {
    const wordProps: Partial<IWord> = { word: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

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
