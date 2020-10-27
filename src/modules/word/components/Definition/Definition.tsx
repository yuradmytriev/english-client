import React from 'react';
import { IWord } from 'shared/interfaces/IWord';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import { MoreDefinitions } from './MoreDefinitions';
import * as S from '../../page/styles';

const EditMode = ({ id, definition }) => {
  const onChange = (value: string) => {
    const wordProps: Partial<IWord> = { definition: value.target.textContent };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  return (
    <S.WordLabel title="Definition">
      <S.Text contentEditable onInput={onChange}>
        {definition}
      </S.Text>
    </S.WordLabel>
  );
};

const ViewMode = ({ definition }) =>
  definition ? (
    <S.WordLabel title="Definition">
      <span>{definition}</span>
    </S.WordLabel>
  ) : null;

export const Definition = ({ id, word, definition }) => {
  const { isEditMode } = useEditMode();

  return (
    <S.WordPropertySpacer>
      <S.WordProperty>
        {isEditMode ? (
          <EditMode id={id} definition={definition} />
        ) : (
          <ViewMode definition={definition} />
        )}
      </S.WordProperty>
      <S.MoreExamplesWrapper>
        <MoreDefinitions word={word} />
      </S.MoreExamplesWrapper>
    </S.WordPropertySpacer>
  );
};
