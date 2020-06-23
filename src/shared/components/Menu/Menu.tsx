import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';
import { AddWord } from '../../../modules/words/components/AddWord';
import { CreateCategories } from '../../../modules/categories/components/CreateCategories';
import { ToggleWordsInfo } from '../../../modules/words/components/ToggleWordsInfo';

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
      <AddWord />
      <CreateCategories />
      <ToggleWordsInfo />
    </S.MenuWrapper>
  </S.MenuLayout>
);
