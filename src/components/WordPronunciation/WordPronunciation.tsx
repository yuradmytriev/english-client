import React, { FC } from 'react';
import * as S from './styles';

export const WordPronunciation: FC<{ word: string }> = ({ word }) => {
  const handleClick = (word: string): void => {
    responsiveVoice.speak(word);
  };

  return (
    <S.Icon
      style={{ color: '#008dff' }}
      type="sound"
      onClick={() => handleClick(word)}
    />
  );
};
