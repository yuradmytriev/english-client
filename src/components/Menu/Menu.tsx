import React from 'react';
import { Link } from 'react-router-dom';
import { Menu as NavBar } from 'antd';
import * as S from './styles';

export const Menu = ({ children }) => (
  <S.MenuLayout>
    <S.StyledNavBar defaultSelectedKeys={['1']} mode="inline" theme="dark">
      <NavBar.Item key="1">
        <Link to="/words">Words</Link>
      </NavBar.Item>
      <NavBar.Item key="2">
        <Link to="/training">Training</Link>
      </NavBar.Item>
    </S.StyledNavBar>
    <S.Content>{children}</S.Content>
  </S.MenuLayout>
);
