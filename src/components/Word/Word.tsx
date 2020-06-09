import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Icon } from 'antd';
import { IWord } from 'interfaces/IWord';
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

export const Word: FC<{ words: IWord[]; showInfo: boolean }> = ({
  words,
  showInfo,
}) => {
  const [firstWord]: IWord[] = words;
  const { id, word, translate, imageSrc, learned }: IWord = firstWord;

  const wordPageURL = `word/${word}`;

  // TODO: resolve issue with frequency requests
  // @ts-ignore
  return (
    <Link key={id} to={wordPageURL}>
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
  );
};
