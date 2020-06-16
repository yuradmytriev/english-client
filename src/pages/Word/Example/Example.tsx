import React from 'react';
import { MoreExamples } from 'components/MoreExamples';
import { HighlightedPhrase } from 'components/HighlightedPhrase';
import { ifElse } from 'utils/ifElse';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'sdk/WordsSDK';
import * as S from '../styles';

export const Example = ({ id, word, example, isEditMode }) => {
  if (!example) {
    return null;
  }

  const onUpdate = (type: string, value: string, id: number): void => {
    const wordProps: Partial<IWord> = { [type]: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  const onChange = (value: string) => onUpdate('example', value, id);

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
