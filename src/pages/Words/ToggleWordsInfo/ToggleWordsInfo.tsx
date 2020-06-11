import React, { FC } from 'react';
import { Icon } from 'antd';
import { useWordsInfo } from 'state/wordsInfo/useWordsInfo';
import * as S from './styles';

export const ToggleWordsInfo: FC = () => {
  const { toggleWordsInfo } = useWordsInfo();

  return (
    <S.ToggleTranslate onClick={toggleWordsInfo}>
      <Icon theme="twoTone" type="file-unknown" />
    </S.ToggleTranslate>
  );
};
