import React from 'react';
import { Suggestion } from 'components/Suggestion';
import { useEditMode } from 'state/editMode/useEditMode';
import * as S from '../styles';

export const Synonym = ({ id, word, synonym }) => {
  const { isEditMode } = useEditMode();

  return (
    synonym && (
      <S.WordProperty>
        <Suggestion
          id={id}
          word={synonym}
          type="synonym"
          originalWord={word}
          isEditMode={isEditMode}
        />
      </S.WordProperty>
    )
  );
};