import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import * as S from './styles';

export const Navigation: FC<{
  enableEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ enableEditMode }) => {
  const toggleEditMode = (): void => enableEditMode(prev => !prev);

  return (
    <S.NavigationContainer>
      <Link to="/words">
        <Icon type="left" />
      </Link>
      <S.Button type="button" onClick={toggleEditMode}>
        Edit
      </S.Button>
    </S.NavigationContainer>
  );
};
