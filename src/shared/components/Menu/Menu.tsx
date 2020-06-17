import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';

const activeStyle: object = {
  backgroundColor: '#1890ff',
};

export const Menu = ({ children }) => (
  <S.MenuLayout>
    <S.Content>{children}</S.Content>
    <S.MenuWrapper>
      <S.MenuItem>
        <NavLink activeStyle={activeStyle} to="/words">
          Words
        </NavLink>
      </S.MenuItem>
      <S.MenuItem>
        <NavLink activeStyle={activeStyle} to="/training">
          Training
        </NavLink>
      </S.MenuItem>
    </S.MenuWrapper>
  </S.MenuLayout>
);
