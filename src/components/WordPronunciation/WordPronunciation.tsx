import React, { FC } from 'react';
import { IWord } from 'interfaces/IWord';
import * as S from './styles';

export const WordPronunciation: FC<Pick<IWord, 'word'>> = ({
  word,
}): JSX.Element => {
  const handleClick = (): void => {
    window.responsiveVoice.speak(word);
  };

  return <S.Icon theme="twoTone" type="sound" onClick={handleClick} />;
};
