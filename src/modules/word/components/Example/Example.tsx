import React from 'react';
import { HighlightedPhrase } from 'shared/components/HighlightedPhrase';
import { IWord } from 'shared/interfaces/IWord';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import { MoreExamples } from './MoreExamples';
import * as S from '../../page/styles';

const EditMode = ({ id, example }) => {
  const onChange = (value: string) => {
    const wordProps: Partial<IWord> = { example: value.target.textContent };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  return (
    <S.WordLabel title="Example">
      <S.Text contentEditable onInput={onChange}>
        {example}
      </S.Text>
    </S.WordLabel>
  );
};

const ViewMode = ({ word, example }) =>
  example ? (
    <S.WordLabel title="Example">
      <HighlightedPhrase phrase={example} word={word} />
    </S.WordLabel>
  ) : null;

export const Example = ({ id, word, example }) => {
  const { isEditMode } = useEditMode();

  return (
    <S.WordProperty>
      {isEditMode ? (
        <EditMode id={id} example={example} />
      ) : (
        <ViewMode word={word} example={example} />
      )}
      <S.MoreExamplesWrapper>
        <MoreExamples word={word} />
      </S.MoreExamplesWrapper>
    </S.WordProperty>
  );
};
