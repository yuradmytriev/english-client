import React from 'react';
import * as S from './styles';

export const Menu = ({ children }) => (
  <S.MenuLayout>
    <S.Content>{children}</S.Content>
    <S.MenuWrapper>
      <S.MenuItem to="/words">Words</S.MenuItem>
      <S.MenuItem to="/training">Training</S.MenuItem>
    </S.MenuWrapper>
  </S.MenuLayout>
);
