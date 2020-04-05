import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import * as S from './styles';

export const Navigation: FC = ({ enableEditMode }) => (
  <S.NavigationContainer>
    <Link to="/words">
      <Icon type="left" />
    </Link>
    <span onClick={() => enableEditMode(prev => !prev)}>Edit</span>
  </S.NavigationContainer>
);
