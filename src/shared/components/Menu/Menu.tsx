import React from 'react';
import { NavLink } from 'react-router-dom';
import { AddWord } from 'modules/words/components/AddWord';
import { ToggleWordsInfo } from 'modules/words/components/ToggleWordsInfo';
import { CreateCategories } from 'modules/categories/components/CreateCategories';
import * as S from './styles';

const activeStyle: object = {
  backgroundColor: '#1890ff',
};

export const Menu = ({ children }) => (
  <S.MenuLayout>
    <S.Content>{children}</S.Content>
    <S.MenuWrapper>
      <S.Links>
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
      </S.Links>
      <S.Actions>
        <CreateCategories />
        <ToggleWordsInfo />
        <S.AddWordLayout>
          <AddWord />
        </S.AddWordLayout>
      </S.Actions>
    </S.MenuWrapper>
  </S.MenuLayout>
);
