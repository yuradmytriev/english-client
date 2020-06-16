import React from 'react';
import { Suggestion } from 'components/Suggestion';

import * as S from '../styles';

export const Synonym = ({ id, word, synonym, isEditMode }) =>
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
  );
