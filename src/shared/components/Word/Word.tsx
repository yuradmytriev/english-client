import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import { IWord } from 'shared/interfaces/IWord';
import { Draggable } from 'shared/components/DnD/Draggable';
import { useWordsInfo } from 'shared/state/wordsInfo/useWordsInfo';
import { WordActions } from './WordActions';
import { WordMemoizedMark } from './WordMemoizedMark';
import * as S from './styles';

export const Word: FC<{ wordInfo: IWord }> = ({ wordInfo }) => {
  const { showWordsInfo } = useWordsInfo();
  const { id, word, translate, imageSrc, learned, category }: IWord = wordInfo;

  const wordPageURL = `word/${word}`;

  return (
    <Draggable key={id} id={String(id)} categoryId={category?.id}>
      <Link to={wordPageURL}>
        <S.WordCard>
          <S.CardBody>
            <div>
              <S.Meta
                title={<WordMemoizedMark word={word} learned={learned} />}
                description={showWordsInfo ? translate : null}
              />
              <S.IconWrapper>
                <Popover
                  trigger="click"
                  placement="bottom"
                  content={<WordActions wordInfo={wordInfo} />}
                >
                  <div>. . .</div>
                </Popover>
              </S.IconWrapper>
            </div>
            {showWordsInfo && <S.CardImage img={imageSrc} alt={word} />}
          </S.CardBody>
        </S.WordCard>
      </Link>
    </Draggable>
  );
};
