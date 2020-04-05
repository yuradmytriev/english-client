import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const Navigation: FC = ({ enableEditMode }) => (
  <S.NavigationContainer>
    <Link to="/words">
      <strong>View words</strong>
    </Link>
    <strong onClick={() => enableEditMode(prev => !prev)}>Edit</strong>
  </S.NavigationContainer>
);
