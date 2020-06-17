import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Icon } from 'antd';
import { IWord } from 'shared/interfaces/IWord';
import { Draggable } from 'shared/components/DnD/Draggable';
import { WordActions } from './WordActions';
import * as S from './styles';

const WordMemoizedMark: FC<{ word: string; learned: boolean | undefined }> = ({
  word,
  learned,
}) => (
  <div>
    {/* eslint react/jsx-one-expression-per-line:0 */}
    {word} {learned && <Icon style={{ color: '#18d218' }} type="check" />}
  </div>
);

export const Word: FC<{ firstWord: IWord; showInfo: boolean }> = ({
  firstWord,
  showInfo,
}) => {
  const { id, word, translate, imageSrc, learned, category }: IWord = firstWord;

  const wordPageURL = `word/${word}`;

  // TODO: resolve issue with frequency requests
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
    </Draggable>
  );
};
