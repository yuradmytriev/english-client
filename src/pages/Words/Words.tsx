import React, { useEffect, FC } from 'react';
import { Col } from 'antd';
import isEmpty from 'lodash/isEmpty';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { IWord } from 'interfaces/IWord';
import { Word } from 'components/Word';
import { AddWord } from 'components/AddWord';
import { ExportToExelButton } from 'components/ExportToExelButton';
import { useFetchWordsList } from 'state/fetchWordsList/useFetchWordsList';
import { useWordInfo } from 'state/wordInfo/useWordInfo';
import { WordsFilter, useWordsFilter, IUseWordsFilter } from './WordsFilter';
import { ToggleWordsInfo } from './ToggleWordsInfo';
import * as S from './styles';

export const Words: FC = () => {
  const { wordInfo } = useWordInfo();
  const { words, fetchWordsList } = useFetchWordsList();

  useEffect(() => {
    fetchWordsList();

    // eslint-disable-next-line
  }, []);

  const relatedWordsGroup: any[] = orderBy(
    Object.entries(groupBy(words, 'word')),
    item => item[1][0]?.updatedDate,
    ['desc'],
  );

  const {
    updatedWords,
    showMemoizedWords,
    showUnlearnedWords,
    showAllWords,
  }: IUseWordsFilter = useWordsFilter(relatedWordsGroup);

  const renderWords = ([_, words]: [string, IWord[]]) => {
    const [mainWord]: IWord[] = words;
    const { id, word } = mainWord;
    const areSeveralWords: boolean = words.length > 1;

    return (
      word && (
        <Col key={id} xs={24} sm={12} md={8} lg={8} xl={6}>
          <S.WordContainer areSeveralWords={areSeveralWords}>
            <Word words={words} showInfo={wordInfo} />
          </S.WordContainer>
        </Col>
      )
    );
  };

  return (
    <>
      <WordsFilter
        showMemoizedWords={showMemoizedWords}
        showUnlearnedWords={showUnlearnedWords}
        showAllWords={showAllWords}
      />
      <S.WordWrapper gutter={12}>
        {!isEmpty(words) && updatedWords.map(renderWords)}
        <ExportToExelButton />
        <AddWord />
        <ToggleWordsInfo />
      </S.WordWrapper>
    </>
  );
};
