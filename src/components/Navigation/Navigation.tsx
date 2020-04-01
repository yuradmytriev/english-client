import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const Navigation: FC = () => (
  <S.NavigationContainer>
    <Link to="/words">
      <strong>View words</strong>
    </Link>
  </S.NavigationContainer>
);
