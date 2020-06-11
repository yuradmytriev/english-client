import React, { FC } from 'react';
import { Button } from 'antd';
import * as S from './styles';

export const Navigation: FC<{
  enableEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ enableEditMode }) => {
  const toggleEditMode = (): void => enableEditMode(prev => !prev);

  return (
    <S.ButtonWrapper type="button" onClick={toggleEditMode}>
      <Button type="primary">Edit</Button>
    </S.ButtonWrapper>
  );
};
