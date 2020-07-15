import React from 'react';
import { Button } from 'antd';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import * as S from './styles';

export const Navigation = ({ updateWord }) => {
  const { toggleEditMode } = useEditMode();

  return (
    <S.ButtonWrapper type="button" onClick={toggleEditMode}>
      <Button type="primary" onClick={updateWord}>Edit</Button>
    </S.ButtonWrapper>
  );
};
