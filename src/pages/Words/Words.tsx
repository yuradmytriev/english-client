import React, { useEffect, FC } from 'react';
import { Col } from 'antd';
import isEmpty from 'lodash/isEmpty';
import { IWord } from 'components/Word/IWord';
import { Word } from 'components/Word';
import { AddWord } from 'components/AddWord';
import { useFetchWordsList } from 'state/fetchWordsList/useFetchWordsList';
import * as S from './styles';

export const Words: FC = () => {
  const { words, fetchWordsList } = useFetchWordsList();

  useEffect(() => {
    fetchWordsList();

    // eslint-disable-next-line
  }, []);

  const renderWords = (word: IWord) =>
    word.word && (
      <Col key={word.id} xs={24} sm={12} md={8} lg={8} xl={6}>
        <S.WordContainer>
          <Word {...word} />
        </S.WordContainer>
      </Col>
    );

  return (
    <>
      <S.WordWrapper gutter={12}>
        {!isEmpty(words) && words.map(renderWords)}
        <AddWord />
      </S.WordWrapper>
    </>
  );
};
