import React from 'react';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import { Suggestion } from './Suggestion';
import * as S from '../../page/styles';

export const Synonym = ({ id, word, synonym }) => {
  const { isEditMode } = useEditMode();

  return (
    <S.WordProperty>
      <Suggestion
        id={id}
        word={synonym}
        type="synonym"
        originalWord={word}
        isEditMode={isEditMode}
      />
    </S.WordProperty>
  );
};
