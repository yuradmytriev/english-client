import React, { useEffect, FC, useState } from 'react';
import { Col, Icon } from 'antd';
import isEmpty from 'lodash/isEmpty';
import { IWord } from 'components/Word/IWord';
import { Word } from 'components/Word';
import { AddWord } from 'components/AddWord';
import { ExportToExelButton } from 'components/ExportToExelButton';
import { useFetchWordsList } from 'state/fetchWordsList/useFetchWordsList';
import * as S from './styles';

export const Words: FC = () => {
  const { words, fetchWordsList } = useFetchWordsList();
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    fetchWordsList();

    // eslint-disable-next-line
  }, []);

  const toggleInfo = () => {
    setShowInfo(prev => !prev);
  };

  const renderWords = (word: IWord) =>
    word.word && (
      <Col key={word.id} xs={24} sm={12} md={8} lg={8} xl={6}>
        <S.WordContainer>
          <Word showInfo={showInfo} {...word} />
        </S.WordContainer>
      </Col>
    );

  return (
    <>
      <S.WordWrapper gutter={12}>
        {!isEmpty(words) && words.map(renderWords)}
        <ExportToExelButton />
        <AddWord />
        <S.ToggleTranslate onClick={toggleInfo}>
          <Icon type="file-unknown" />
        </S.ToggleTranslate>
      </S.WordWrapper>
    </>
  );
};
