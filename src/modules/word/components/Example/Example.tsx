import React from 'react';
import { HighlightedPhrase } from 'shared/components/HighlightedPhrase';
import { ifElse } from 'utils/ifElse';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import { MoreExamples } from './MoreExamples';
import * as S from '../../page/styles';

export const Example = ({ id, word, example }) => {
  const { isEditMode } = useEditMode();

  const onChange = (value: string) => {
    const wordProps: Partial<IWord> = { example: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  return (
    <S.WordProperty>
      <S.WordLabel title="Example">
        {ifElse(
          isEditMode,
          <S.Text editable={{ onChange }}>{example}</S.Text>,
          <HighlightedPhrase phrase={example} word={word} />,
        )}
      </S.WordLabel>
      <S.MoreExamplesWrapper>
        <MoreExamples word={word} />
      </S.MoreExamplesWrapper>
    </S.WordProperty>
  );
};
