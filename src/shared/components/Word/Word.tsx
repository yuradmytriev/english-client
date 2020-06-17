import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import { IWord } from 'shared/interfaces/IWord';
import { Draggable } from 'shared/components/DnD/Draggable';
import { WordActions } from './WordActions';
import { WordMemoizedMark } from './WordMemoizedMark';
import * as S from './styles';

export const Word: FC<{ firstWord: IWord; showInfo: boolean }> = ({
  firstWord,
  showInfo,
}) => {
  const { id, word, translate, imageSrc, learned, category }: IWord = firstWord;

  const wordPageURL = `word/${word}`;

  // @ts-ignore
  return (
    <Draggable key={id} id={String(id)} categoryId={category?.id}>
      <Link to={wordPageURL}>
        <S.WordCard>
          <S.CardBody>
            <div>
              <S.Meta
                title={<WordMemoizedMark word={word} learned={learned} />}
                description={showInfo ? translate : null}
              />
              <S.IconWrapper>
                <Popover
                  trigger="click"
                  placement="bottom"
                  content={<WordActions firstWord={firstWord} />}
                >
                  <div>. . .</div>
                </Popover>
              </S.IconWrapper>
            </div>
            {showInfo && <S.CardImage img={imageSrc} alt={word} />}
          </S.CardBody>
        </S.WordCard>
      </Link>
    </Draggable>
  );
};
