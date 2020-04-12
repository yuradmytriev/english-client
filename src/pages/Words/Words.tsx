import React, { useEffect, FC, useState } from 'react';
import { Col, Icon } from 'antd';
import isEmpty from 'lodash/isEmpty';
import groupBy from 'lodash/groupBy';
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

  const renderWords = ([_, words]: [string, IWord[]]) => {
    const [mainWord]: IWord[] = words;
    const { id, word } = mainWord;
    const areSeveralWords: boolean = words.length > 1;

    return (
      word && (
        <Col key={id} xs={24} sm={12} md={8} lg={8} xl={6}>
          <S.WordContainer areSeveralWords={areSeveralWords}>
            <Word words={words} showInfo={showInfo} />
          </S.WordContainer>
        </Col>
      )
    );
  };

  return (
    <>
      <S.WordWrapper gutter={12}>
        {!isEmpty(words) &&
          Object.entries(groupBy(words, 'word')).map(renderWords)}
        <ExportToExelButton />
        <AddWord />
        <S.ToggleTranslate onClick={toggleInfo}>
          <Icon type="file-unknown" />
        </S.ToggleTranslate>
      </S.WordWrapper>
    </>
  );
};
