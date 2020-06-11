import React, { FC } from 'react';
import { Icon } from 'antd';
import { useWordInfo } from 'state/wordInfo/useWordInfo';
import * as S from './styles';

export const ToggleWordsInfo: FC = () => {
  const { toggleWordInfo } = useWordInfo();

  return (
    <S.ToggleTranslate onClick={toggleWordInfo}>
      <Icon theme="twoTone" type="file-unknown" />
    </S.ToggleTranslate>
  );
};
