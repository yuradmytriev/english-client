import React, { FC } from 'react';
import { Tooltip } from 'antd';
import { useFrequency } from './useFrequency';
import * as S from './styles';

export const Frequency: FC<{ word: string; showTitle: boolean }> = ({
  word,
  showTitle,
}) => {
  const [frequency] = useFrequency(word);

  if (!frequency) {
    return null;
  }

  const title = showTitle ? <span>{frequency.title}</span> : null;

  return (
    <Tooltip title={title}>
      <S.Color color={frequency.color} />
    </Tooltip>
  );
};
