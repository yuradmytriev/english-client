import React from 'react';
import * as S from './styles';

export const WordContainer = ({ children, areSeveralWords }) => (
  <S.WordContainer areSeveralWords={areSeveralWords}>
    {children}
  </S.WordContainer>
);
