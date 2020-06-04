import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import { IWord } from 'interfaces/IWord';
import { WordActions } from './WordActions';
import * as S from './styles';

export const Word: FC<{ words: IWord[]; showInfo: boolean }> = ({
  words,
  showInfo,
}) => {
  const [firstWord]: IWord[] = words;
  const { id, word, translate, imageSrc }: IWord = firstWord;

  const wordPageURL = `word/${word}`;

  // TODO: resolve issue with frequency requests
  // @ts-ignore
  return (
    <Link key={id} to={wordPageURL}>
      <S.WordCard>
        <S.CardBody>
          <div>
            <S.Meta title={word} description={showInfo ? translate : null} />
            <S.IconWrapper>
              <Popover
                placement="bottom"
                content={<WordActions firstWord={firstWord} />}
                trigger="click"
              >
                <div>. . .</div>
              </Popover>
            </S.IconWrapper>
          </div>
          {showInfo && <S.CardImage img={imageSrc} alt={word} />}
        </S.CardBody>
      </S.WordCard>
    </Link>
  );
};
